const {SchemaField, NumberField} = foundry.data.fields;

/**
 *
 * System data definition for Characters and NPC FQ.
 *
 * @property {object} fq.hp
 * @property {number} fq.hp.value                 Current action points.
 * @property {number} fq.hp.max                   Maximum action points.
 * @property {object} fq.mana
 * @property {number} fq.mana.value                 Current mana points.
 * @property {number} fq.mana.max                   Maximum mana points.
 * @property {object} fq.zeal
 * @property {number} fq.zeal.value                 Current zeal points.
 * @property {number} fq.zeal.max                   Maximum zeal points.
 * @property {number} fq.zeal.init                  Init zeal points.
 * @property {object} fq.attributes
 * @property {number} fq.attributes.critical        Critical Score.
 * @property {number} fq.attributes.evasion         Evasion Score.
 * @property {object} fq.bonus
 * @property {number} fq.bonus.range                Bonus of range.
 * @property {number} fq.bonus.hpot                 DOT or HOT.
 */
export default class CreatureFQTemplate {

  static get common() {
    return {
      action: new SchemaField({
        value: new NumberField({
          nullable: false, integer: true, min: 0, initial: 10, label: "FQ8.ActionPointsCurrent"
        }),
        max: new NumberField({
          nullable: true, integer: true, min: 0, initial: 10, label: "FQ8.ActionPointsMax"
        }),
      }, {label: "FQ8.ActionPoints"}),
      mana: new SchemaField({
        value: new NumberField({
          nullable: false, integer: true, min: 0, initial: 5, label: "FQ8.ManaPointsCurrent"
        }),
        max: new NumberField({
          nullable: true, integer: true, min: 0, initial: 5, label: "FQ8.ManaPointsMax"
        }),
      }, {label: "FQ8.ManaPoints"}),
      zeal: new SchemaField({
        value: new NumberField({
          nullable: false, integer: true, min: 0, initial: 0, label: "FQ8.ZealPointsCurrent"
        }),
        max: new NumberField({
          nullable: true, integer: true, min: 0, initial: 8, label: "FQ8.ZealPointsMax"
        }),
        init: new NumberField({
          nullable: true, integer: true, min: 0, initial: 0, label: "FQ8.ZealPointsInit"
        }),
      }, {label: "FQ8.ZealPoints"}),
      attributes: new SchemaField({
        critical: new NumberField({
          nullable: false, integer: true, min: 0, initial: 1, label: "FQ8.CriticalScore"
        }),
        evasion: new NumberField({
          nullable: false, integer: true, min: 0, initial: 1, label: "FQ8.EvasionScore"
        }),
      }, {label: "FQ8.Attributes"}),
      bonus: new SchemaField({
        range: new NumberField({
          nullable: false, integer: true, initial: 0, label: "FQ8.RangeBonus"
        }),
        hpot: new NumberField({
          nullable: false, integer: true, initial: 0, label: "FQ8.HitPointsOnTime"
        }),
      }, {label: "FQ8.Bonuses"}),
    }
  }
}
