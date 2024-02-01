import CharacterData from "./character.mjs";
import CreatureFQTemplate from "./templates/creature-fq.mjs";

const {SchemaField, NumberField} = foundry.data.fields;


/**
 * System data definition for Characters FQ.
 *
 * @property {object} fq.cards
 * @property {number} fq.cards.hand                 Start Hand.
 * @property {number} fq.cards.pick                 Pick card score.
 * @property {number} fq.cards.currentDrop          Current discard card score.
 */
export default class CharacterDataFQ extends CharacterData {
  /* -------------------------------------------- */

  /** @inheritdoc */
  static defineSchema() {
    return this.mergeSchema(super.defineSchema(), {
      fq: new foundry.data.fields.SchemaField({
        ...CreatureFQTemplate.common,
        cards: new SchemaField({
          hand: new NumberField({
            nullable: false, integer: true, min: 0, initial: 1, label: "FQ8.Hand"
          }),
          pick: new NumberField({
            nullable: false, integer: true, min: 0, initial: 1, label: "FQ8.Pick"
          }),
          currentDrop: new NumberField({
            nullable: false, integer: true, min: 0, initial: 0, label: "FQ8.CurrentDrop"
          }),
        }, {label: "FQ8.Cards"}),
      })
    });
  }

  /* -------------------------------------------- */
  /*  Data Migration                              */

  /* -------------------------------------------- */

  /** @inheritdoc */
  static _migrateData(source) {
    super._migrateData(source);
  }
}
