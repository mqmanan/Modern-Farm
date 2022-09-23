import { createPlan } from "./plan.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { catalog } from "./catalog.js"


// ----- SEED DATA -----
// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)

// const cornSeed = createCorn()
// console.log(cornSeed)

// const potatoSeed = createPotato()
// console.log(potatoSeed)

// const soybeanSeed = createSoybean()
// console.log(soybeanSeed)

// const sunflowerSeed = createSunflower()
// console.log(sunflowerSeed)

// const wheatSeed = createWheat()
// console.log(wheatSeed)


//  ----- RESULTS OF ADD PLANT -----
// const asparagusPlant = addPlant(asparagusSeed)
// console.log(plantingPlantOne)

// const cornPlant = addPlant(cornSeed)
// console.log(plantingPlantTwo)

// const potatoPlant = addPlant(potatoSeed)
// console.log(plantingPlantThree)

// const soybeanPlant = addPlant(soybeanSeed)
// console.log(plantingPlantFour)

// const sunflowerPlant = addPlant(sunflowerSeed)
// console.log(plantingPlantFive)

// const wheatPlant = addPlant(wheatSeed)
// console.log(plantingPlantSix)

// ----- RESULTS OF USE PLANTS -----
// const plantOne = usePlants(asparagusPlant)
// console.log(plantOne)

// const plantTwo = usePlants(cornPlant)
// console.log(plantTwo)

// const plantThree = usePlants(potatoPlant)
// console.log(plantThree)

// const plantFour = usePlants(soybeanPlant)
// console.log(plantFour)

// const plantFive = usePlants(sunflowerPlant)
// console.log(plantFive)

// const plantSix = usePlants(wheatPlant)
// console.log(plantSix)

const yearlyPlan = createPlan()
console.log(yearlyPlan)

const seedPlanter = plantSeeds(yearlyPlan)

const growingPlants = usePlants()
console.log(growingPlants)

const harvestMode = harvestPlants(growingPlants)
console.log(harvestMode)

// const finalProduct = catalog(harvestMode)

const parentHTMLElement = document.querySelector(".container")
// console.log(parentHTMLElement)
parentHTMLElement.innerHTML = catalog(harvestMode)