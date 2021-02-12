import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Profession, ProfessionDTO } from '../classes/profession';
import { Points } from '../interfaces/points';
import { ProfessionRestService } from './rest/profession-rest.service';

@Injectable({
  providedIn: 'root'
})


export class ProfessionService {
  private currentProfession_!: Profession;
  private currentProfessionSource_ = new Subject<Profession>();
  public currentProfession$ = this.currentProfessionSource_.asObservable();

  private points_!: Points;
  private pointsSource = new Subject<Points>();
  public points$ = this.pointsSource.asObservable();

  private professionListSource = new BehaviorSubject<Profession[]>([]);
  public professionList$ = this.professionListSource.asObservable();

  constructor(
    private professionRestService_: ProfessionRestService
  ) { }


  public fetchProfessions(): void {
    this.professionRestService_.getAll().pipe(
      map((response: ProfessionDTO[]) =>
        response.map((el: ProfessionDTO) => {
          return new Profession(el);
        })
      )
    ).subscribe(
      res => this.nextProfessions(res),
      (error) => console.error(`error: ${error}`)

    );
  }


  public current(): Profession[] {
    return this.professionListSource.getValue();
  }

  nextProfessions(newList: Profession[]): void {
    this.professionListSource.next(newList);
  }

  nextPoints(newPoints: Points): void {
    this.pointsSource.next(newPoints);
  }

  nextCurrentProfession(newCurrentProfession: Profession): void {
    this.currentProfessionSource_.next(newCurrentProfession);
  }

  update(): void {
    // this.current().forEach(el => el.calcPoints());
    // this.nextProfessions(this.current());
  }

  updateCurrentProfession(newProfession: Profession): void {
    this.currentProfession_ = newProfession;
    this.points_ = {
      profession: this.currentProfession_.pointsProfession,
      hobby: this.currentProfession_.pointsHobby
    };

    this.nextPoints(this.points_);
    this.nextCurrentProfession(this.currentProfession_);
  }

}
