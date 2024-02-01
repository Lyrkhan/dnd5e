import CharacterDataFQ from "./character-fq.mjs";
import GroupData from "./group.mjs";
import NPCDataFQ from "./npc-fq.mjs";
import VehicleData from "./vehicle.mjs";

export {
  CharacterDataFQ,
  GroupData,
  NPCDataFQ,
  VehicleData
};
export {default as GroupSystemFlags} from "./group-system-flags.mjs";
export {default as AttributesFields} from "./templates/attributes.mjs";
export {default as CommonTemplate} from "./templates/common.mjs";
export {default as CreatureTemplate} from "./templates/creature.mjs";
export {default as DetailsFields} from "./templates/details.mjs";
export {default as TraitsFields} from "./templates/traits.mjs";

export const config = {
  character: CharacterDataFQ,
  group: GroupData,
  npc: NPCDataFQ,
  vehicle: VehicleData
};
