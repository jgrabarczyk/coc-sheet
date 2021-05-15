import { Component, Input, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ProffesionsSelectors } from 'src/app/store/proffessions/professions.selectors';
import { ProfessionsActions } from 'src/app/store/proffessions/proffesions.actions';
import { SkillActions } from 'src/app/store/skills/skill.actions';
import { SkillSelectors } from 'src/app/store/skills/skill.selectors';

import { Profession } from '../../../classes/profession';
import { Skill } from '../../../classes/skill';
import { POINT_TYPE } from '../../../enums/point-type.enum';
import { SKILL_NAME } from '../../../enums/skill-name-enum';
import { Points } from '../../../interfaces/points';

@Component({
  selector: 'coc-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss']
})

/**
 * enable passing skills
 * if skills not passed generate fresh component
 */
@UntilDestroy()
export class SkillsSectionComponent implements OnInit {
  @Select(SkillSelectors.skills)
  skills$!: Observable<Skill[]>;

  @Select(ProffesionsSelectors.points)
  points$!: Observable<Points>;

  @Select(ProffesionsSelectors.currentProfession)
  currentProfession$!: Observable<Profession>;

  @Input('show-points') showPoints!: boolean;
  @Input('point-type') pointType!: POINT_TYPE;
  public pointsToSpend!: number;
  private skillList_!: Skill[];
  public skillListToShow!: Skill[];
  private points_!: Points;
  private currentProfession_!: Profession;
  private maxRange_!: number;
  private savedProfession_ = false;
  private savedHobby_ = false;
  constructor(
    private store: Store,
  ) { }

  get maxRange(): number {
    return this.maxRange_;
  }

  ngOnInit(): void {
    this.subSkills();
    this.subPoints();
    this.subCurrentProffesion();
  }

  private subSkills(): void {
    this.store.dispatch(new SkillActions.FetchAll());

    this.skills$.pipe(untilDestroyed(this)).subscribe(
      (list: Skill[]) => {
        if (this.pointType !== POINT_TYPE.PROFESSION && this.pointType !== POINT_TYPE.HOBBY) {
          this.skillListToShow = list;
        }
        this.skillList_ = list;

      },
      (error) => console.error(`error: ${error}`)
    );
  }

  private subPoints(): void {

    this.points$.pipe(untilDestroyed(this)).subscribe(
      points => {
        this.points_ = points;
        this.resolvePointType();
      },
      (error) => console.error(`error: ${error}`)

    );
  }

  private resolvePointType(): void {
    switch (this.pointType) {
      case POINT_TYPE.PROFESSION:
        if (this.savedProfession_) { return; }
        this.pointsToSpend = this.points_.profession;
        break;
      case POINT_TYPE.HOBBY:
        if (this.savedHobby_) { return; }
        this.pointsToSpend = this.points_.hobby;
        break;
    }
  }

  private subCurrentProffesion(): void {
    this.currentProfession$.subscribe(profession => {
      this.currentProfession_ = profession;
      this.enableProfessionSkills(profession);
    },
      (error) => console.error(`error: ${error}`)

    );
  }

  private enableProfessionSkills(profession: Profession): void {
    if (this.pointType === POINT_TYPE.PROFESSION) {

      this.skillList_.forEach((el: Skill) => {
        if (profession.skills.indexOf(el.name as SKILL_NAME) === -1) { return; }
        el.disabled = false;
      });
    }
    if (this.pointType === POINT_TYPE.HOBBY) {
      this.skillList_.forEach((el: Skill) => {
        el.disabled = false;
      });
    }

    this.skillListToShow = this.skillList_.filter(el => !el.disabled);
  }

  public check(): void {
    // get max Points
    this.points_ = {
      profession: this.currentProfession_.pointsProfession,
      hobby: this.currentProfession_.pointsHobby
    };

    this.skillListToShow.forEach(el => {

      // check by how much the value has changed
      const singleSkillSpent = el.value - el.baseValue;

      // update points due to pointType
      if (this.pointType === POINT_TYPE.PROFESSION && !this.savedProfession_) {
        this.points_.profession -= singleSkillSpent;
      }
      if (this.pointType === POINT_TYPE.HOBBY && !this.savedHobby_) {
        this.points_.hobby -= singleSkillSpent;
      }
    });
    this.store.dispatch(new ProfessionsActions.UpdatePoints(this.points_));
  }

  public save(): void {
    this.skillList_.forEach(skill => {
      const skillToShow = this.skillListToShow.filter(el => el.name === skill.name)[0];

      if (!skillToShow) { return; }

      skill.baseValue = skillToShow.value;
      skill.value = skillToShow.value;

      if (this.pointType === POINT_TYPE.PROFESSION) {
        this.savedProfession_ = true;
      }
      if (this.pointType === POINT_TYPE.HOBBY) {
        this.savedHobby_ = true;
      }
    });

    this.store.dispatch(new SkillActions.UpdateSkills(this.skillList_));
    this.skillListToShow = JSON.parse(JSON.stringify(this.skillListToShow));
    this.skillListToShow.forEach(skill => skill.disabled = true);

    if (this.savedHobby_) {
      this.skillList_.forEach(el => el.disabled = true);
      this.store.dispatch(new SkillActions.UpdateSkills(this.skillList_));
    }
  }

  public edit(): void {
    if ((this.pointType === POINT_TYPE.PROFESSION && this.savedProfession_)
      || (this.pointType === POINT_TYPE.HOBBY && this.savedHobby_)
      && this.pointsToSpend > 0
    ) {
      this.skillListToShow.forEach(skill => skill.disabled = false);

      if (this.pointType === POINT_TYPE.PROFESSION) {
        this.savedProfession_ = false;
      }
      if (this.pointType === POINT_TYPE.HOBBY) {
        this.savedHobby_ = false;
      }
    }

  }
}
