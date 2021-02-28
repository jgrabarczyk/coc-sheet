import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { AttributeService } from 'src/app/share/services/attribute.service';

import { Attribute } from '../classes/attribute';
import { Profession, ProfessionDTO } from '../classes/profession';
import { ATTRIBUTE_NAME } from '../enums/attribute-name.enum';
import { Points } from '../interfaces/points';
import { ProfessionRestService } from './rest/profession-rest.service';
import { ServiceFactory } from './service-factory';

@Injectable({
  providedIn: 'root'
})

export class ProfessionService extends ServiceFactory<ProfessionDTO, Profession>{
  private currentProfessionSource_ = new Subject<Profession>();
  public currentProfession$ = this.currentProfessionSource_.asObservable();

  private points_!: Points;
  private pointsSource = new Subject<Points>();
  public points$ = this.pointsSource.asObservable();

  private professionListSource = new BehaviorSubject<Profession[]>([]);
  public professionList$ = this.professionListSource.asObservable();

  constructor(
    private professionRestService_: ProfessionRestService,
    private attributeService_: AttributeService
  ) {
    super(professionRestService_, Profession);
  }

  public nextPoints(newPoints: Points): void {
    this.pointsSource.next(newPoints);
  }

  private nextCurrentProfession(newCurrentProfession: Profession): void {
    this.currentProfessionSource_.next(newCurrentProfession);

  }

  public calcPointsForAll(): void {
    const attributes: Attribute[] = this.attributeService_.current();
    const int: Attribute = this.attributeService_.get(ATTRIBUTE_NAME.INTELLIGENCE);
    const list: Profession[] = this.currentStreamValue();

    this.resolveDataPending();

    list.forEach(el => {
      el.calcPoints(int, attributes);
    });

    this.passNextValueToSubject(list);
  }

  private resolveDataPending(): void {
    // if not pending then skip
    if (!this.isPending_.getValue()) {
      return;
    }

    // make sure to calc after new set of data arrive
    this.pending$.pipe(take(2)).subscribe(res => {
      if (res) { return; }
      this.calcPointsForAll();
    });
  }

  public updateCurrentProfession(newProfession: Profession): void {
    const attributes: Attribute[] = this.attributeService_.current();
    const int: Attribute = this.attributeService_.get(ATTRIBUTE_NAME.INTELLIGENCE);
    newProfession.calcPoints(int, attributes);
    this.points_ = {
      profession: newProfession.pointsProfession,
      hobby: newProfession.pointsHobby
    };
    this.nextPoints(this.points_);
    this.nextCurrentProfession(newProfession);
  }

}
