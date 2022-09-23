/*
1. Create a scripts/harvester.js module.
2. In this module, define and export a harvestPlants function.
3. The harvestPlants function must accept the plants array as input.
4. The function will return an array of seed objects.
5. Iterate the array of growing plants. On each plant, get the value of the output property.
*/



export const harvestPlants = (growingPlants) => {
    let seedArray = []

    for (const seedOfPlant of growingPlants) {
        if (seedOfPlant.type === "Corn") {
            for (let i = 0; i < seedOfPlant.output / 2; i++) {
            seedArray.push(seedOfPlant) 
            }
        } else {
            for (let i = 0; i < seedOfPlant.output; i++) {
                seedArray.push(seedOfPlant)
            }
        }
}
        return seedArray
}