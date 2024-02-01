import {FormulaField, LocalDocumentField} from "../fields.mjs";
import CreatureTypeField from "../shared/creature-type-field.mjs";
import AttributesFields from "./templates/attributes.mjs";
import DetailsFields from "./templates/details.mjs";
import TraitsFields from "./templates/traits.mjs";
import NPCData from "./npc.mjs";
import CreatureFQTemplate from "./templates/creature-fq.mjs";

const {SchemaField, NumberField, StringField, BooleanField, ArrayField, IntegerSortField} = foundry.data.fields;


/**
 * System data definition for NPC FQ.
 *
 */
export default class NPCDataFQ extends NPCData {
  /* -------------------------------------------- */

  /** @inheritdoc */
  static defineSchema() {
    return this.mergeSchema(super.defineSchema(), {
      fq: new foundry.data.fields.SchemaField({
        ...CreatureFQTemplate.common,
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
