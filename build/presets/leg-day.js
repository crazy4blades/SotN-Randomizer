// This is a generated file. Do not edit it directly.
// Make your changes to presets/leg-day.json then rebuild
// this file with `npm run build-presets -- leg-day`.
(function(self) {

  // Boilerplate.
  let util
  if (self) {
    util = self.sotnRando.util
  } else {
    util = require('../../src/util')
  }
  const PresetBuilder = util.PresetBuilder

  // Create PresetBuilder.
  const builder = PresetBuilder.fromJSON({"metadata":{"id":"leg-day","name":"Leg Day","description":"A technical preset where you start with Leap Stone with infinite air jumps. Back dash lasts longer and grants invincibility. Many transformation and movement relics are removed to emphasize new techniques.","author":["MT_Fun","MottZilla"],"weight":500,"knowledgeCheck":"None","metaExtension":"Guarded","metaComplexity":7,"itemStats":"Normal","timeFrame":"Normal","moddedLevel":"Moderately","castleType":"Normal","transformEarly":"No","transformFocus":"None","winCondition":"Normal"},"stats":false,"replaceRelic":[{"relic":"Soul of Bat","item":"Str. potion"},{"relic":"Fire of Bat","item":"Str. potion"},{"relic":"Echo of Bat","item":"Str. potion"},{"relic":"Force of Echo","item":"Fury plate"},{"relic":"Power of Mist","item":"King's stone"},{"relic":"Skill of Wolf","item":"Covenant stone"},{"relic":"Power of Wolf","item":"Ring of Ares"},{"relic":"Gravity Boots","item":"Str. potion"}],"relicLocationsExtension":"guarded","lockLocation":[{"location":"Soul of Bat","locks":["Form of Mist"]},{"location":"Echo of Bat","locks":["Soul of Wolf","Form of Mist"]},{"location":"Force of Echo","locks":["Holy glasses + Spike Breaker"]},{"location":"Gas Cloud","locks":["Holy glasses + Spike Breaker"]},{"location":"Holy Symbol","locks":["Jewel of Open + Merman Statue"]},{"location":"Merman Statue","locks":["Jewel of Open"]},{"location":"Demon Card","locks":["Jewel of Open"]},{"location":"Heart of Vlad","locks":["Holy glasses + Spike Breaker"]},{"location":"Tooth of Vlad","locks":["Holy glasses + Spike Breaker"]},{"location":"Rib of Vlad","locks":["Holy glasses + Spike Breaker + Form of Mist","Holy glasses + Spike Breaker + Soul of Wolf"]},{"location":"Ring of Vlad","locks":["Holy glasses + Spike Breaker"]},{"location":"Eye of Vlad","locks":["Holy glasses + Spike Breaker"]},{"location":"Spike Breaker","locks":["Jewel of Open + Spike Breaker"]},{"location":"Gold ring","locks":["Jewel of Open"]},{"location":"Silver ring","locks":["Jewel of Open + Spike Breaker + Form of Mist"]},{"location":"Holy glasses","locks":["Silver ring + Gold ring"]},{"location":"Crystal cloak","locks":["Jewel of Open"]},{"location":"Mormegil","locks":["Jewel of Open"]},{"location":"Dark Blade","locks":["Holy glasses + Spike Breaker"]},{"location":"Ring of Arcana","locks":["Holy glasses + Spike Breaker"]},{"location":"Trio","locks":["Holy glasses + Spike Breaker"]},{"location":"Jewel sword","locks":["Soul of Wolf + Soul of Bat"]},{"location":"Alucart sword","locks":["Cube of Zoe"]},{"location":"Bandanna","locks":["Jewel of Open"]},{"location":"Secret boots","locks":["Jewel of Open"]},{"location":"Nunchaku","locks":["Jewel of Open + Holy Symbol"]},{"location":"Knuckle duster","locks":["Jewel of Open"]},{"location":"Caverns Onyx","locks":["Jewel of Open + Merman Statue"]},{"location":"Combat knife","locks":["Jewel of Open"]},{"location":"Ring of Ares","locks":["Jewel of Open + Demon Card","Jewel of Open + Nosedevil Card"]},{"location":"Bloodstone","locks":["Jewel of Open"]},{"location":"Icebrand","locks":["Jewel of Open"]},{"location":"Walk armor","locks":["Jewel of Open"]},{"location":"Beryl circlet","locks":["Holy glasses + Soul of Bat + Soul of Wolf"]},{"location":"Talisman","locks":["Holy glasses + Spike Breaker"]},{"location":"Katana","locks":["Holy glasses + Spike Breaker"]},{"location":"Goddess shield","locks":["Holy glasses + Spike Breaker"]},{"location":"Twilight cloak","locks":["Holy glasses + Spike Breaker"]},{"location":"Talwar","locks":["Holy glasses + Spike Breaker"]},{"location":"Sword of Dawn","locks":["Holy glasses + Spike Breaker"]},{"location":"Bastard sword","locks":["Holy glasses + Spike Breaker"]},{"location":"Royal cloak","locks":["Holy glasses + Spike Breaker"]},{"location":"Lightning mail","locks":["Holy glasses + Spike Breaker"]},{"location":"Moon rod","locks":["Holy glasses + Spike Breaker"]},{"location":"Sunstone","locks":["Holy glasses + Spike Breaker"]},{"location":"Luminus","locks":["Holy glasses + Spike Breaker"]},{"location":"Dragon helm","locks":["Holy glasses + Spike Breaker"]},{"location":"Shotel","locks":["Holy glasses + Form of Mist"]},{"location":"Staurolite","locks":["Holy glasses + Form of Mist"]},{"location":"Badelaire","locks":["Holy glasses + Spike Breaker"]},{"location":"Forbidden Library Opal","locks":["Holy glasses + Spike Breaker"]},{"location":"Reverse Caverns Diamond","locks":["Holy glasses + Spike Breaker"]},{"location":"Reverse Caverns Opal","locks":["Holy glasses + Spike Breaker"]},{"location":"Reverse Caverns Garnet","locks":["Holy glasses + Spike Breaker"]},{"location":"Osafune katana","locks":["Holy glasses + Spike Breaker"]},{"location":"Alucard shield","locks":["Holy glasses + Spike Breaker"]},{"location":"Alucard sword","locks":["Holy glasses + Spike Breaker"]},{"location":"Necklace of J","locks":["Holy glasses + Spike Breaker"]},{"location":"Floating Catacombs Diamond","locks":["Holy glasses + Spike Breaker"]},{"location":"Sword of Hador","locks":["Holy glasses + Spike Breaker"]},{"location":"Alucard mail","locks":["Holy glasses + Spike Breaker"]},{"location":"Gram","locks":["Holy glasses + Spike Breaker"]},{"location":"Fury plate","locks":["Holy glasses + Spike Breaker"]}],"complexityGoal":{"min":7,"goals":["Holy glasses + Heart of Vlad + Tooth of Vlad + Rib of Vlad + Ring of Vlad + Eye of Vlad"]},"lockLocationAllowed":[{"location":"Soul of Bat","locks":["Form of Mist"]},{"location":"Fire of Bat","locks":["Leap Stone"]},{"location":"Echo of Bat","locks":["Leap Stone"]},{"location":"Force of Echo","locks":["Holy Glasses"]},{"location":"Power of Wolf","locks":["Leap Stone"]},{"location":"Skill of Wolf","locks":["Leap Stone"]},{"location":"Form of Mist","locks":["Leap Stone"]},{"location":"Power of Mist","locks":["Leap Stone"]},{"location":"Gas Cloud","locks":["Holy Glasses"]},{"location":"Gravity Boots","locks":["Leap Stone"]},{"location":"Leap Stone","locks":["Leap Stone"]},{"location":"Holy Symbol","locks":["Jewel of Open + Merman Statue"]},{"location":"Merman Statue","locks":["Jewel of Open"]},{"location":"Bat Card","locks":["Leap Stone"]},{"location":"Ghost Card","locks":["Leap Stone"]},{"location":"Faerie Card","locks":["Leap Stone"]},{"location":"Demon Card","locks":["Jewel of Open"]},{"location":"Sword Card","locks":["Leap Stone"]},{"location":"Heart of Vlad","locks":["Holy Glasses"]},{"location":"Tooth of Vlad","locks":["Holy Glasses"]},{"location":"Rib of Vlad","locks":["Holy Glasses"]},{"location":"Ring of Vlad","locks":["Holy Glasses"]},{"location":"Eye of Vlad","locks":["Holy Glasses"]},{"location":"Spike Breaker","locks":["Jewel of Open + Spike Breaker"]},{"location":"Gold ring","locks":["Jewel of Open"]},{"location":"Silver ring","locks":["Jewel of Open + Spike Breaker + Form of Mist"]},{"location":"Holy glasses","locks":["Silver ring + Gold ring"]},{"location":"Crystal cloak","locks":["Jewel of Open"]},{"location":"Mormegil","locks":["Jewel of Open"]},{"location":"Dark Blade","locks":["Holy Glasses"]},{"location":"Ring of Arcana","locks":["Holy Glasses"]},{"location":"Trio","locks":["Holy Glasses"]},{"location":"Holy mail","locks":["Leap Stone"]},{"location":"Jewel sword","locks":["Soul of Wolf + Soul of Bat"]},{"location":"Mystic pendant","locks":["Leap Stone"]},{"location":"Ankh of Life","locks":["Leap Stone"]},{"location":"Morningstar","locks":["Leap Stone"]},{"location":"Goggles","locks":["Leap Stone"]},{"location":"Silver plate","locks":["Leap Stone"]},{"location":"Cutlass","locks":["Leap Stone"]},{"location":"Platinum mail","locks":["Leap Stone"]},{"location":"Falchion","locks":["Leap Stone"]},{"location":"Gold plate","locks":["Leap Stone"]},{"location":"Bekatowa","locks":["Leap Stone"]},{"location":"Holy rod","locks":["Leap Stone"]},{"location":"Library Onyx","locks":["Leap Stone"]},{"location":"Alucart sword","locks":["Cube of Zoe"]},{"location":"Broadsword","locks":["Leap Stone"]},{"location":"Estoc","locks":["Leap Stone"]},{"location":"Olrox Garnet","locks":["Leap Stone"]},{"location":"Blood cloak","locks":["Leap Stone"]},{"location":"Shield rod","locks":["Leap Stone"]},{"location":"Knight shield","locks":["Leap Stone"]},{"location":"Holy sword","locks":["Leap Stone"]},{"location":"Bandanna","locks":["Jewel of Open"]},{"location":"Secret boots","locks":["Jewel of Open"]},{"location":"Nunchaku","locks":["Jewel of Open + Holy Symbol"]},{"location":"Knuckle duster","locks":["Jewel of Open"]},{"location":"Caverns Onyx","locks":["Jewel of Open + Merman Statue"]},{"location":"Combat knife","locks":["Jewel of Open"]},{"location":"Ring of Ares","locks":["Jewel of Open + Demon Card","Jewel of Open + Nosedevil Card"]},{"location":"Bloodstone","locks":["Jewel of Open"]},{"location":"Icebrand","locks":["Jewel of Open"]},{"location":"Walk armor","locks":["Jewel of Open"]},{"location":"Beryl circlet","locks":["Holy glasses + Soul of Bat + Soul of Wolf"]},{"location":"Talisman","locks":["Holy Glasses"]},{"location":"Katana","locks":["Holy Glasses"]},{"location":"Goddess shield","locks":["Holy Glasses"]},{"location":"Twilight cloak","locks":["Holy glasses + Spike Breaker + Form of Mist"]},{"location":"Talwar","locks":["Holy Glasses"]},{"location":"Sword of Dawn","locks":["Holy Glasses"]},{"location":"Bastard sword","locks":["Holy Glasses"]},{"location":"Royal cloak","locks":["Holy Glasses"]},{"location":"Lightning mail","locks":["Holy Glasses"]},{"location":"Moon rod","locks":["Holy Glasses"]},{"location":"Sunstone","locks":["Holy Glasses"]},{"location":"Luminus","locks":["Holy Glasses"]},{"location":"Dragon helm","locks":["Holy Glasses"]},{"location":"Shotel","locks":["Holy glasses + Leap Stone + Form of Mist"]},{"location":"Staurolite","locks":["Holy glasses + Leap Stone + Form of Mist"]},{"location":"Badelaire","locks":["Holy Glasses"]},{"location":"Forbidden Library Opal","locks":["Holy Glasses"]},{"location":"Reverse Caverns Diamond","locks":["Holy Glasses"]},{"location":"Reverse Caverns Opal","locks":["Holy Glasses"]},{"location":"Reverse Caverns Garnet","locks":["Holy Glasses"]},{"location":"Osafune katana","locks":["Holy Glasses"]},{"location":"Alucard shield","locks":["Holy Glasses"]},{"location":"Alucard sword","locks":["Holy Glasses"]},{"location":"Necklace of J","locks":["Holy Glasses"]},{"location":"Floating Catacombs Diamond","locks":["Holy Glasses"]},{"location":"Sword of Hador","locks":["Holy Glasses"]},{"location":"Alucard mail","locks":["Holy Glasses"]},{"location":"Gram","locks":["Holy Glasses"]},{"location":"Fury plate","locks":["Holy Glasses"]}],"writes":[{"comment":"Jump to injected code","address":"0x000fa97c","type":"word","value":"0x0c04db00"},{"address":"0x00158c98","type":"word","value":"0x34020003","comment":"ori v0, 0x0003"},{"type":"word","value":"0x3c038009","comment":"lui v1, 0x8009"},{"comment":"sb v0, 0x7971 (v1)","type":"word","value":"0xa0627971"},{"comment":"j 0x800e493c","type":"word","value":"0x0803924f"},{"type":"word","value":"0x00000000","comment":"nop"},{"type":"char","address":"0x0012EB25","value":"0x19","comment":"Backdash deceleration from 32 to 31 subpixels per frame, preventing an infinite loop in the backdash code"},{"type":"char","address":"0x00139380","value":"0x07","comment":"Increasing Divekick Hitbox Width"},{"type":"char","address":"0x00139378","value":"0x18","comment":"Lowering Divekick Hitbox vertical position relative to Alucard"},{"type":"char","address":"0x000be25f","value":"0x12","comment":"Slightly shrinking Alucard's generic standing hitbox size to prevent trades on neutral bounces off of enemies out of divekick"},{"type":"word","address":"0x044cf8c4","value":"0x3c028003","comment":"Start of Turning on Spike Room Lights code block"},{"type":"word","value":"0x3442be2e"},{"type":"word","value":"0xa4490000","comment":"end of Turning on Spike Room Lights code block"},{"type":"word","address":"0x0010b138","value":"0x0c03a07f","comment":"Hook for Leg Day function code block"},{"type":"word","value":"0x00000000","comment":"Hook for Leg Day function code block"},{"type":"word","address":"0x000fe824","value":"0x3c028007","comment":"Start of Leg Day code block"},{"type":"word","value":"0x34422F64"},{"type":"word","value":"0x3C038009"},{"type":"word","value":"0x34637491"},{"type":"word","value":"0x90660000"},{"type":"word","value":"0x90450000"},{"type":"word","value":"0x30C60040"},{"type":"word","value":"0x10C00004"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x34A50001"},{"type":"word","value":"0x0803A08C"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x30A500FE"},{"type":"word","value":"0xA0450000"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x3C028007"},{"type":"word","value":"0x3C03800E"},{"type":"word","value":"0x346383CC"},{"type":"word","value":"0x8C443404"},{"type":"word","value":"0x3C050003"},{"type":"word","value":"0x1485000F"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x8C4433E0"},{"type":"word","value":"0x3C05FFFC"},{"type":"word","value":"0x34A58000"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x10850006"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x00052823"},{"type":"word","value":"0x10850003"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x0803A0A3"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x3404003C"},{"type":"word","value":"0xAC640000"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x8C640000"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x10800049"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x2484FFFF"},{"type":"word","value":"0x3C070003"},{"type":"word","value":"0xAC640000"},{"type":"word","value":"0x8C463404"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x14C70026"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x90443428"},{"type":"word","value":"0x34050004"},{"type":"word","value":"0x14850010"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x9044342A"},{"type":"word","value":"0x34050003"},{"type":"word","value":"0x1485000C"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x9044342E"},{"type":"word","value":"0x34050047"},{"type":"word","value":"0x14850008"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x34040045"},{"type":"word","value":"0x34050002"},{"type":"word","value":"0x34060004"},{"type":"word","value":"0xA044342E"},{"type":"word","value":"0xA0453428"},{"type":"word","value":"0xA046342A"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x8C640000"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x2484FFC9"},{"type":"word","value":"0x04810004"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x34040002"},{"type":"word","value":"0xA4442F1C"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x8C4433E0"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x04800005"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x3C040004"},{"type":"word","value":"0xAC4433E0"},{"type":"word","value":"0x0803A0D3"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x3C04FFFC"},{"type":"word","value":"0xAC4433E0"},{"type":"word","value":"0x34070004"},{"type":"word","value":"0x8C463404"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x14C7000D"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x904433EC"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x10800006"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x3C050004"},{"type":"word","value":"0xAC4533E0"},{"type":"word","value":"0xAC600000"},{"type":"word","value":"0x0803A0E4"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x3C05FFFC"},{"type":"word","value":"0xAC4533E0"},{"type":"word","value":"0xAC600000"},{"type":"word","value":"0x3C070003"},{"type":"word","value":"0x8C463404"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x10C70007"},{"type":"word","value":"0x8C640000"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x2484FFFA"},{"type":"word","value":"0x18800003"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x34040006"},{"type":"word","value":"0xAC640000"},{"type":"word","value":"0x3C028004"},{"type":"word","value":"0x8C42C9A0"},{"type":"word","value":"0x03E00008"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x3C108007"},{"type":"word","value":"0x961033EC"},{"type":"word","value":"0x3C048007"},{"type":"word","value":"0x8C843404"},{"type":"word","value":"0x3C050003"},{"type":"word","value":"0x14850002"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x3A100001"},{"type":"word","value":"0x03E00008"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x3C038007"},{"type":"word","value":"0x94633404"},{"type":"word","value":"0x3C048007"},{"type":"word","value":"0x8C843404"},{"type":"word","value":"0x3C050003"},{"type":"word","value":"0x14850002"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x34030001"},{"type":"word","value":"0x03E00008"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x902430B4"},{"type":"word","value":"0x3402000F"},{"type":"word","value":"0x1482000B"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x3C048009"},{"type":"word","value":"0x908473F5"},{"type":"word","value":"0x34020002"},{"type":"word","value":"0x14820006"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x3404005C"},{"type":"word","value":"0xA02433FC"},{"type":"word","value":"0x34020001"},{"type":"word","value":"0x3C018009"},{"type":"word","value":"0xAC227418"},{"type":"word","value":"0x03E00008"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x902430B4"},{"type":"word","value":"0x34020028"},{"type":"word","value":"0x1482000B"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x3C048009"},{"type":"word","value":"0x908473F5"},{"type":"word","value":"0x34020006"},{"type":"word","value":"0x14820006"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x3404005C"},{"type":"word","value":"0xA02433FC"},{"type":"word","value":"0x34020001"},{"type":"word","value":"0x3C018009"},{"type":"word","value":"0xAC227418"},{"type":"word","value":"0x03E00008"},{"type":"word","value":"0x00000000","comment":"End of Leg Day Code Block"},{"type":"word","address":"0x4bb4b54","value":"0x0c03a100","comment":"Start of marking doors to accept backdash opening them."},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x54390b4","value":"0x0c03a100"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x494a3a0","value":"0x0c03a100"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x4a0e9a4","value":"0x0c03a100"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x4ae05ac","value":"0x0c03a100"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x4c89058","value":"0x0c03a100"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x54f5b7c","value":"0x0c03a100"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x55a86fc","value":"0x0c03a100"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x4405eac","value":"0x0c03a100"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x44d6ebc","value":"0x0c03a100"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x460e22c","value":"0x0c03a100"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x46c9660","value":"0x0c03a100"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x47ed348","value":"0x0c03a100"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x5645b88","value":"0x0c03a100"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x588fa80","value":"0x0c03a100"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x51eb318","value":"0x0c03a100"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x4fc717c","value":"0x0c03a100"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x507e548","value":"0x0c03a100"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x5135d08","value":"0x0c03a100"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x52c2b9c","value":"0x0c03a100"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x59389bc","value":"0x0c03a100"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x59f1be8","value":"0x0c03a100"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x5780228","value":"0x0c03a100"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x4d38d18","value":"0x0c03a100"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x4dc65dc","value":"0x0c03a100"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x4e708c4","value":"0x0c03a100"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x4f0d0f8","value":"0x0c03a100"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x580a20c","value":"0x0c03a100"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x5139a68","value":"0x0c03a100"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x4ae430c","value":"0x0c03a100"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x4964e94","value":"0x0c03a100"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x5503944","value":"0x0c03a100"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x46da788","value":"0x0c03a100"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x4fe3b80","value":"0x0c03a100"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x594b634","value":"0x0c03a100"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x5a7ce10","value":"0x0c03a100"},{"type":"word","value":"0x00000000","comment":"End of marking doors to accept backdash opening them."},{"type":"word","address":"0x4BB4B3C","value":"0x0c03a0f4","comment":"Start of marking doors to accept backdash direction"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x543909C","value":"0x0c03a0f4"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x494A388","value":"0x0c03a0f4"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x4A0E98C","value":"0x0c03a0f4"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x4AE0594","value":"0x0c03a0f4"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x4C89040","value":"0x0c03a0f4"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x54F5B64","value":"0x0c03a0f4"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x55A86E4","value":"0x0c03a0f4"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x4405E94","value":"0x0c03a0f4"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x44D6EA4","value":"0x0c03a0f4"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x460E214","value":"0x0c03a0f4"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x46C9648","value":"0x0c03a0f4"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x47ED330","value":"0x0c03a0f4"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x5645B70","value":"0x0c03a0f4"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x588FA68","value":"0x0c03a0f4"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x51EB300","value":"0x0c03a0f4"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x4FC7164","value":"0x0c03a0f4"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x5135CF0","value":"0x0c03a0f4"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x52C2B84","value":"0x0c03a0f4"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x59389A4","value":"0x0c03a0f4"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x59F1BD0","value":"0x0c03a0f4"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x5780210","value":"0x0c03a0f4"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x4D38D00","value":"0x0c03a0f4"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x4DC65C4","value":"0x0c03a0f4"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x4E708AC","value":"0x0c03a0f4"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x4F0D0E0","value":"0x0c03a0f4"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x580A1F4","value":"0x0c03a0f4"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x5139A50","value":"0x0c03a0f4"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x4AE42F4","value":"0x0c03a0f4"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x4964E7C","value":"0x0c03a0f4"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x550392C","value":"0x0c03a0f4"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x46DA770","value":"0x0c03a0f4"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x4FE3B68","value":"0x0c03a0f4"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x594B61C","value":"0x0c03a0f4"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x5A7CDF8","value":"0x0c03a0f4"},{"type":"word","value":"0x00000000"},{"type":"word","address":"0x507E578","value":"0x0c03a0f4"},{"type":"word","value":"0x00000000","comment":"End of marking doors to accept backdash direction"},{"type":"char","address":"0xF9F20","value":"0x00","comment":"CD Room Input"},{"type":"char","address":"0x4952410","value":"0x02","comment":"Clock Room Softlock Fix"},{"type":"word","address":"0x4A0EBF4","value":"0x0C03A10C","comment":"Outer Wall Door Fix"},{"type":"word","address":"0x507E8E0","value":"0x0C03A11C","comment":"Rev Outer Wall Door Fix"}]})

  // Export.
  const preset = builder.build()

  if (self) {
    const presets = (self.sotnRando || {}).presets || []
    presets.push(preset)
    self.sotnRando = Object.assign(self.sotnRando || {}, {
      presets: presets,
    })
  } else if (!module.parent) {
    console.log(preset.toString())
  } else {
    module.exports = preset
  }
})(typeof(self) !== 'undefined' ? self : null)
