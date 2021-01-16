import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { PROFESSION_LIST } from '../data/professions';
import { Profession } from '../classes/profession';
import { Points } from '../interfaces/points';
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

  private professionList_: Profession[] = PROFESSION_LIST;
  private professionListSource = new BehaviorSubject<Profession[]>(this.professionList_);
  public professionList$ = this.professionListSource.asObservable();

  constructor() { }

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
    this.professionList_.forEach(el => el.calcPoints());
    this.nextProfessions(this.professionList_);
  }

  updateCurrentProfession(newProfession: Profession): void {
    this.currentProfession_ = newProfession;
    console.log('hm?', this.currentProfession_);
    this.points_ = {
      profession: this.currentProfession_.pointsProfession,
      hobby: this.currentProfession_.pointsHobby
    };
    this.nextPoints(this.points_);
    this.nextCurrentProfession(this.currentProfession_);
  }

}
