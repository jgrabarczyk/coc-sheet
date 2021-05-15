import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Attribute, AttributeDTO } from 'src/app/share/classes/attribute';
import { AttributeRestService } from 'src/app/share/services/rest/attribute-rest.service';
import { AttributeActions } from './attributes.actions';

export class AttributeStateModel {
  attributes!: Attribute[];
  current?: Attribute;
}

@State<AttributeStateModel>({
  name: 'Attributes',
  defaults: {
    attributes: [],
  }
})

@Injectable()
export class AttributeState {

  constructor(
    private attributeRestService_: AttributeRestService
  ) { }

  @Action(AttributeActions.FetchAttributes)
  fetchAttributes(
    { patchState }: StateContext<AttributeStateModel>,
  ): Observable<AttributeDTO[]> {

    return this.attributeRestService_.getAll().pipe(tap(
      (response: AttributeDTO[]) =>
        patchState({
          attributes: response.map(attribute => new Attribute(attribute))
        })

    ));
  }

  @Action(AttributeActions.RandomizeAttributes)
  randomizeAttributes(
    { patchState, getState }: StateContext<AttributeStateModel>,
  ): void {
    patchState({
      attributes: getState().attributes.map(
        (attribute: Attribute) => ({
          ...attribute,
          value: attribute.diceRoll.roll() * 5
        }))
    });
  }


}
