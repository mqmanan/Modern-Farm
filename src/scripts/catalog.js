/*
1. Create a <main> element in your index.html file. Make sure the element has a class of container.
2. Create a scripts/catalog.js module.
3. Define and export a Catalog function.
4. The Catalog function should accept the harvested food array as input.
5. The Catalog function should iterate the array of food objects.
6. As you iterate the array, the <main> element should have its inner HTML appended with an HTML representation of a food item. Use the following example for each food item. The example has Corn hard-coded. Yours should not. It should output the name property of the current food object.
*/

export const catalog = (harvestMode) => {
    let htmlString = ``
    for (const food of harvestMode) {
        htmlString += `<section class="plant">${food.type}</section>`
    }
    return htmlString
}