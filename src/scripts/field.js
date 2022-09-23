let plantsToField = []

export const addPlant = (seedObj) => {
    if (Array.isArray(seedObj)) {
        for (const seed of seedObj) {
            plantsToField.push(seed)
        }
    } else {
        plantsToField.push(seedObj)
    }
    return plantsToField
}

// export const usePlants = () => {
//     let copyPlants = [...plantsToField]
//     return copyPlants
// }

export const usePlants = () => {
    return plantsToField.map((seedObj) => ({...seedObj}))
}