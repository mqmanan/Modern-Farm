import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"


export const plantSeeds = (yearlyPlan) => {
    for (const row of yearlyPlan) {
        for (const plant of row) {
            let seedPlant;
            switch (plant) {
                case "Asparagus":
                    seedPlant = createAsparagus()
                    break;
                case "Potato":
                    seedPlant = createPotato()
                    break;
                case "Corn":
                    seedPlant = createCorn()
                    break;
                case "Soybean":
                    seedPlant = createSoybean()
                    break;
                case "Sunflower":
                    seedPlant = createSunflower()
                    break;
                case "Wheat":
                    seedPlant = createWheat()
                    break;
            }
            addPlant(seedPlant);
        }
    }
}