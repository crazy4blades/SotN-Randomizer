// This is a generated file. Do not edit it directly.
// Make your changes to presets/lycanthrope.json then rebuild
// this file with `npm run build-presets -- lycanthrope`.
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
  const builder = PresetBuilder.fromJSON({"metadata":{"id":"lycanthrope","name":"Lycanthrope","description":"Start with all wolf relics. MP consumption is greatly reduced when in wolf form. Death skip is intended with a long wolf run.","author":["3snow_p7im"],"weight":2600,"knowledgeCheck":"None","metaExtension":"Guarded","metaComplexity":"8","itemStats":"Normal","timeFrame":"Fast","moddedLevel":"Slightly","castleType":"Normal","transformEarly":"Yes","transformFocus":"Wolf","winCondition":"Normal"},"stats":false,"startingEquipment":[{"slot":"Right hand","item":"Shield rod"},{"slot":"Left hand","item":"Shaman shield"},{"slot":"Head","item":"Silver crown"},{"slot":"Body","item":"Brilliant mail"},{"slot":"Cloak","item":"Blood cloak"},{"slot":"Other","item":"Mystic pendant"}],"lockLocation":[{"location":"Soul of Bat","comment":"Requires Mist + at least Leap Stone","locks":["Form of Mist + Leap Stone","Form of Mist + Gravity Boots","Form of Mist + Soul of Bat","Form of Mist + Power of Mist"]},{"location":"Fire of Bat","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"]},{"location":"Echo of Bat","comment":"Requires flight + a transformation","locks":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"]},{"location":"Force of Echo","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Power of Wolf","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"]},{"location":"Skill of Wolf","comment":"Requires at least Gravity Boots","locks":["Gravity Boots","Soul of Bat","Form of Mist + Power of Mist"]},{"location":"Form of Mist","comment":"Requires at least Leap Stone","locks":["Leap Stone","Gravity Boots","Soul of Bat","Form of Mist + Power of Mist"]},{"location":"Power of Mist","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"]},{"location":"Gas Cloud","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Gravity Boots","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"]},{"location":"Leap Stone","comment":"Requires Jewel of Open or at least Leap Stone","locks":["Jewel of Open","Leap Stone","Gravity Boots","Soul of Bat","Form of Mist + Power of Mist"]},{"location":"Holy Symbol","locks":["Jewel of Open + Merman Statue"]},{"location":"Merman Statue","comment":"Requires Jewel of Open","locks":["Jewel of Open"]},{"location":"Bat Card","comment":"Requires at least Gravity Boots","locks":["Gravity Boots","Soul of Bat","Form of Mist + Power of Mist"]},{"location":"Ghost Card","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"]},{"location":"Faerie Card","comment":"Requires at least Gravity Boots","locks":["Gravity Boots","Soul of Bat","Form of Mist + Power of Mist"]},{"location":"Demon Card","comment":"Access must also give at least Leap Stone","locks":["Jewel of Open"],"escapeRequires":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Sword Card","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"]},{"location":"Heart of Vlad","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Tooth of Vlad","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Rib of Vlad","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Ring of Vlad","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Eye of Vlad","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Spike Breaker","locks":["Jewel of Open + Soul of Bat + Echo of Bat"]},{"location":"Gold ring","comment":"Requires Jewel of Open + flight","locks":["Jewel of Open + Soul of Bat","Jewel of Open + Gravity Boots + Leap Stone","Jewel of Open + Form of Mist + Power of Mist"]},{"location":"Silver ring","locks":["Jewel of Open + Spike Breaker + Form of Mist"]},{"location":"Holy glasses","locks":["Silver ring + Gold ring"],"comment":"Access must also give flight","escapeRequires":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"]},{"location":"Crystal cloak","locks":["Jewel of Open"]},{"location":"Mormegil","comment":"Access must also give at least Leap Stone","locks":["Jewel of Open"],"escapeRequires":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Dark Blade","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Ring of Arcana","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Trio","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Holy mail","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"]},{"location":"Jewel sword","comment":"Requires Wolf + Bat","locks":["Soul of Bat"]},{"location":"Mystic pendant","comment":"Requires at least Leap Stone","locks":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Ankh of Life","comment":"Requires at least Leap Stone","locks":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Morningstar","comment":"Requires at least Leap Stone","locks":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Goggles","comment":"Requires Jewel of Open or at least Leap Stone","locks":["Jewel of Open","Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Silver plate","comment":"Requires Jewel of Open or at least Leap Stone","locks":["Jewel of Open","Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Cutlass","comment":"Requires Jewel of Open or at least Leap Stone","locks":["Jewel of Open","Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Platinum mail","comment":"Requires at least Gravity Boots","locks":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"]},{"location":"Falchion","comment":"Requires at least Leap Stone","locks":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Gold plate","comment":"Requires at least Leap Stone","locks":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Bekatowa","comment":"Requires at least Gravity Boots","locks":["Soul of Bat","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Holy rod","comment":"Requires at least Leap Stone","locks":["Leap Stone","Soul of Bat","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Library Onyx","comment":"Requires at least Leap Stone","locks":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Alucart sword","comment":"Requires at least Cube of Zoe + at least Leap Stone","locks":["Cube of Zoe + Soul of Bat","Cube of Zoe + Leap Stone","Cube of Zoe + Gravity Boots","Cube of Zoe + Form of Mist + Power of Mist"]},{"location":"Broadsword","comment":"Requires at least Leap Stone","locks":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Estoc","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"]},{"location":"Olrox Garnet","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"]},{"location":"Blood cloak","comment":"Requires at least Leap Stone","locks":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Shield rod","comment":"Requires at least Leap Stone","locks":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Knight shield","comment":"Requires at least Leap Stone","locks":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Holy sword","comment":"Requires at least Gravity Boots","locks":["Soul of Bat","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Bandanna","comment":"Requires Jewel of Open","locks":["Jewel of Open"]},{"location":"Secret boots","comment":"Requires Jewel of Open + flight","locks":["Jewel of Open + Soul of Bat","Jewel of Open + Leap Stone","Jewel of Open + Form of Mist + Power of Mist"]},{"location":"Nunchaku","comment":"Requires Jewel of Open + Holy Symbol","locks":["Jewel of Open + Holy Symbol"]},{"location":"Knuckle duster","comment":"Requires Jewel of Open","locks":["Jewel of Open"]},{"location":"Caverns Onyx","comment":"Requires Jewel of Open + at least Leap Stone","locks":["Jewel of Open + Merman Statue","Jewel of Open + Soul of Bat","Jewel of Open + Holy Symbol + Leap Stone","Jewel of Open + Form of Mist + Power of Mist"]},{"location":"Combat knife","comment":"Requires Jewel of Open + at least Leap Stone","locks":["Jewel of Open"],"comments":"Access must also give at least Leap Stone","escapeRequires":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Ring of Ares","comment":"Access must also give at least Leap Stone","locks":["Jewel of Open + Demon Card","Jewel of Open + Nosedevil Card"],"escapeRequires":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Bloodstone","comment":"Access must also give at least Leap Stone","locks":["Jewel of Open"],"escapeRequires":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Icebrand","comment":"Access must also give at least Leap Stone","locks":["Jewel of Open + Soul of Bat","Jewel of Open + Leap Stone","Jewel of Open + Form of Mist + Power of Mist"],"escapeRequires":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Walk armor","comment":"Access must also give at least Leap Stone","locks":["Jewel of Open"],"escapeRequires":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Beryl circlet","comment":"Requires Holy glasses + Bat + Wolf","locks":["Holy glasses + Soul of Bat"]},{"location":"Talisman","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Katana","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Goddess shield","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Twilight cloak","comment":"Requires Holy glasses + Mist + flight","locks":["Holy glasses + Form of Mist + Soul of Bat","Holy glasses + Form of Mist + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Talwar","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Sword of Dawn","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Bastard sword","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Royal cloak","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Lightning mail","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Moon rod","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Sunstone","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Luminus","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Dragon helm","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Shotel","comment":"Requires Holy glasses + Mist + flight","locks":["Holy glasses + Form of Mist + Soul of Bat","Holy glasses + Form of Mist + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Staurolite","comment":"Requires Holy glasses + Mist + flight","locks":["Holy glasses + Form of Mist + Soul of Bat","Holy glasses + Form of Mist + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Badelaire","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Forbidden Library Opal","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Reverse Caverns Diamond","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Reverse Caverns Opal","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Reverse Caverns Garnet","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Osafune katana","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone"]},{"location":"Alucard shield","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Alucard sword","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Necklace of J","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Floating Catacombs Diamond","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Sword of Hador","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Alucard mail","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Gram","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Fury plate","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Confessional","comment":"Requires Jewel of Open or at least Leap Stone","locks":[]},{"location":"Colosseum Green tea","comment":"Requires at least Leap Stone","locks":["Leap Stone","Gravity Boots","Soul of Bat","Form of Mist + Power of Mist"]},{"location":"Clock Tower Cloaked knight","comment":"Requires at least Leap Stone","locks":[]},{"location":"Waterfall Cave","comment":"Requires Jewel of Open","locks":["Jewel of Open"]},{"location":"Floating Catacombs Elixir","comment":"Requires Holy glasses + flight + Possibly Spike Breaker","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone + Spike Breaker","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Reverse Entrance Antivenom","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Reverse Forbidden Route","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Cave Life apple","comment":"Requires Holy glasses + flight + Demon Card","locks":["Holy glasses + Soul of Bat + Demon Card","Holy glasses + Gravity Boots + Leap Stone + Demon Card","Holy glasses + Form of Mist + Power of Mist + Demon Card","Holy glasses + Soul of Bat + Nosedevil Card","Holy glasses + Gravity Boots + Leap Stone + Nosedevil Card","Holy glasses + Form of Mist + Power of Mist + Nosedevil Card"]},{"location":"Reverse Colosseum Zircon","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Reverse Alucart Sword","comment":"Requires Holy glasses + flight + Cube of Zoe","locks":["Holy glasses + Soul of Bat + Cube of Zoe","Holy glasses + Gravity Boots + Leap Stone + Cube of Zoe","Holy glasses + Form of Mist + Power of Mist + Cube of Zoe"]},{"location":"Black Marble Meal Ticket","comment":"Requires Holy glasses + flight + Jewel of Open","locks":["Holy glasses + Soul of Bat + Jewel of Open","Holy glasses + Gravity Boots + Leap Stone + Jewel of Open","Holy glasses + Form of Mist + Power of Mist + Jewel of Open"]},{"location":"Reverse Keep High Potion","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]}],"complexityGoal":{"min":8,"goals":["Holy glasses + Heart of Vlad + Tooth of Vlad + Rib of Vlad + Ring of Vlad + Eye of Vlad"]},"writes":[{"comment":"Jump to injected code","address":"0x000fa97c","type":"word","value":"0x0c04db00"},{"address":"0x00158c98","type":"word","value":"0x34020003","comment":"ori v0, 0x0003"},{"type":"word","value":"0x3c038009","comment":"lui v1, 0x8009"},{"comment":"sb v0, 0x7968 (v1)","type":"word","value":"0xa0627968"},{"comment":"sb v0, 0x7969 (v1)","type":"word","value":"0xa0627969"},{"comment":"sb v0, 0x796a (v1)","type":"word","value":"0xa062796a"},{"comment":"j 0x800e493c","type":"word","value":"0x0803924f"},{"type":"word","value":"0x00000000","comment":"nop"},{"comment":"Don't consume mana in wolf form","type":"short","address":"0x00118cc8","value":"0x0000"},{"comment":"Reduce mana consumption during wolf dash","type":"char","address":"0x000b53b0","value":"0x01"}]})

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
