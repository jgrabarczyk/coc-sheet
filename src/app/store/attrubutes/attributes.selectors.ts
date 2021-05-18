import { Selector, createSelector } from '@ngxs/store';
import { Attribute } from 'src/app/share/classes/attribute';
import { ATTRIBUTE_NAME } from 'src/app/share/enums/attribute-name.enum';
import { AttributeState, AttributeStateModel } from './attributes.state';

export class AttributeSelectors {

  @Selector([AttributeState])
  static attributes(state: AttributeStateModel): Attribute[] {
    return state.attributes;
  }

  static attribute(name: ATTRIBUTE_NAME): (attributes: Attribute[]) => Attribute {
    return createSelector(
      [AttributeSelectors.attributes],
      (attributes: Attribute[]) => attributes.find(el => el.name === name) as Attribute
    );
  }

  static attributeValue(name: ATTRIBUTE_NAME): (attribute: Attribute) => number {
    return createSelector(
      [AttributeSelectors.attribute(name)],
      (attribute: Attribute) => attribute?.value
    );
  }

  @Selector([AttributeState])
  static currentAttribute(state: AttributeStateModel): Attribute {
    return state.current as Attribute;
  }

}
