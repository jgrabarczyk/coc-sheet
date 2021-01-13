import { ATTRIBUTE_NAME } from '../enums/attribute-name.enum';
import { DiceRoll } from '../../sheet/classes/DiceRoll';
import { Attribute } from '../../sheet/classes/attribute';

export const ATTRIBUTE_LIST: Attribute[] = [
    new Attribute(
        ATTRIBUTE_NAME.STRENGTH,
        50,
        new DiceRoll(3, 6, 0)
    ),
    new Attribute(
        ATTRIBUTE_NAME.CONDITION,
        50,
        new DiceRoll(3, 6, 0)
    ),
    new Attribute(
        ATTRIBUTE_NAME.BODY_STRUCTURE,
        50,
        new DiceRoll(2, 6, 6)
    ),
    new Attribute(
        ATTRIBUTE_NAME.AGILITY,
        50,
        new DiceRoll(3, 6, 0)
    ),
    new Attribute(
        ATTRIBUTE_NAME.APPEARANCE,
        50,
        new DiceRoll(3, 6, 0)
    )
    ,
    new Attribute(
        ATTRIBUTE_NAME.INTELLIGENCE,
        50,
        new DiceRoll(2, 6, 6)
    )
    ,
    new Attribute(
        ATTRIBUTE_NAME.MIGHT,
        50,
        new DiceRoll(3, 6, 0)
    ),
    new Attribute(
        ATTRIBUTE_NAME.EDUCATION,
        50,
        new DiceRoll(2, 6, 6)
    ),
    new Attribute(
        ATTRIBUTE_NAME.LUCK,
        50,
        new DiceRoll(3, 6, 0)
    )
];
