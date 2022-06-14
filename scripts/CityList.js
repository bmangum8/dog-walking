import { getWalkers } from "./database.js"

const walkers = getWalkers()


/*
Book 4 # 7
Update the CityList module to invoke getCities() now and store its return value in cities.
Update the for..of loop to iterate the array value of cities.
Make sure you interpolate the name property of the city between the <li> tags.
*/

import { getCities } from "./database.js"
const cities = getCities()


export const CityList = () => {
    let citiesHTML = "<ol>"
// changed to "walkers"
    // for (const walker of walkers) {
    //     citiesHTML += `<li>${walker.city}</li>`
    // }
for (const city of cities) {
    citiesHTML += `<li>${city.name}</li>`
}
    citiesHTML += "</ol>"

    return citiesHTML
}



