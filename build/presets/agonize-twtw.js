// This is a generated file. Do not edit it directly.
// Make your changes to presets/agonize-twtw.json then rebuild
// this file with `npm run build-presets -- agonize-twtw`.
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
  const builder = PresetBuilder.fromJSON({"metadata":{"id":"agonize-twtw","name":"Agonize 2020","description":"Emulates Agonize Preset from 2020. Fixed locations for various relics to 'Maximize backtracking'.  Soul of Wolf, Soul of Bat, Form of Mist and Jewel of Open are guaranteed to be in first castle.","author":["3snow_p7im","eldri7ch","Crazy4blades"],"weight":-2950,"knowledgeCheck":"None","metaExtension":"Guarded","metaComplexity":"1","itemStats":"Normal","timeFrame":"Slow","moddedLevel":"None","castleType":"Normal","transformEarly":"No","transformFocus":"None","winCondition":"Normal"},"preventLeaks":false,"stats":false,"music":false,"colorrandoMode":true,"complexityGoal":{"min":1,"goals":["Holy glasses + Heart of Vlad + Tooth of Vlad + Rib of Vlad + Ring of Vlad + Eye of Vlad"]},"placeRelic":[{"location":"Silver ring","relic":"Silver ring"},{"location":"Gold ring","relic":"Gold ring"},{"location":"Holy glasses","relic":"Holy glasses"},{"location":"Spike Breaker","relic":"Spike Breaker"},{"location":"Spirit Orb","relic":"Power of Wolf"},{"location":"Jewel of Open","relic":"Jewel of Open"},{"location":"Merman Statue","relic":"Soul of Wolf"},{"location":"Mormegil","relic":"Leap Stone"},{"location":"Leap Stone","relic":"Form of Mist"},{"location":"Soul of Bat","relic":"Power of Mist"},{"location":"Power of Wolf","relic":"Soul of Bat"},{"location":"Power of Mist","relic":"Echo of Bat"},{"location":"Eye of Vlad","relic":"Gravity Boots"},{"location":"Gas Cloud","relic":"Merman Statue"},{"location":"Force of Echo","relic":"Cube of Zoe"},{"location":"Fire of Bat","relic":["Ring of Vlad","Rib of Vlad","Eye of Vlad","Tooth of Vlad","Heart of Vlad"]},{"location":"Tooth of Vlad","relic":["Ring of Vlad","Rib of Vlad","Eye of Vlad","Tooth of Vlad","Heart of Vlad"]},{"location":"Ring of Arcana","relic":["Ring of Vlad","Rib of Vlad","Eye of Vlad","Tooth of Vlad","Heart of Vlad"]},{"location":"Force of Echo","relic":["Ring of Vlad","Rib of Vlad","Eye of Vlad","Tooth of Vlad","Heart of Vlad"]},{"location":"Holy Symbol","relic":["Ring of Vlad","Rib of Vlad","Eye of Vlad","Tooth of Vlad","Heart of Vlad"]}],"replaceRelic":[{"relic":"Sprite Card","item":"Turkey"},{"relic":"Nosedevil Card","item":"Harper"}],"lockLocation":[{"location":"Trio","locks":["Holy glasses"]}]})

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
