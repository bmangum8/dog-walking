import { getWalkers } from "./database.js"
import { getWalkerCities } from "./database.js"
import { getCities } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [, walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    window.alert(`${walker.name} services ${filterWalkerCitiesByWalker(walker)}`)
                    //added filterWalkerCitiesByWalker() to envoke so that multiple cities would show if applicable
                }
            }
        }
    }
)


const walkers = getWalkers()


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        // made walker.name
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }
    walkerHTML += "</ul>"
    // added return statement
    return walkerHTML
}

/*
Finding cities per walker:
First, define a function that will get all objects in the walkerCities array that are for the walker that was clicked on.
Create a for of loop-- for walkerCity of walkerCities, if walkerCity.walkerId equals personObject.id
which is the parameter. 
 // Check if the primary key of the walker equals the foreign key on the assignment 
    (walkerOrCity.walkerId equals personObject.id)
If it does, add the current object to the array of assignments---me: Then push walkerOrCity object into empty array 
// assignedCities.push()
// After the loop is done, return the assignments array--me : array of cities?
It should return an array of all matching objects. --me: why would they be matching objects?
*/
let walkerCities = getWalkerCities() 
let cities = getCities()
// The function need the walker information, so define a parameter--me: parameter is a personObject
export const filterWalkerCitiesByWalker = (personObject) => {
    // Define an empty array to store all of the assignment objects
    let assignedCities = ""
    
    // Iterate the array value of walkerCities
    for (const walkerCity of walkerCities) {
        if (walkerCity.walkerId === personObject.id) {
            // assignedCities.push(walkerCity)
            //now loop through cities (from getCities) to find the ones we want
            for (const city of cities) {
                if (walkerCity.cityId === city.id) {
                    assignedCities += `${city.name}, `
                }
            }
        }
    }
    let cityString = assignedCities.slice(0, assignedCities.length-2) //removes last 2 indexes from array (strings are arrays)
    return cityString     //and array of cities in which the walker works
}
// let currentWalker = getWalkers()
// let assignedCitiesArray = filterWalkerCitiesByWalker(currentWalker)
// console.log(assignedCitiesArray)


/*
//I included the string in the first function
Then, define a function that builds a string of city names.
and use the cityId property on each one to find the matching city name. 
It should return a string containing all the city names.

Needs a paramter for assignments array.
takes in the array of matching objects,
me: parameter is return of filterWalkerCitiesByWalker saved as a variable.

me: Function needs access to assignedCities array created by filterWalkerCitiesByWalker function. 
It will locate cityId in assignedCities array. 
Function also needs access to city names. (maybe with getCities(), makes a copy of list of cities)???
or do I just put the city names as a string using string interpolation?
*/

const assignedCityNames = (returnOffilterWalkerCitiesByWalkerFunction) => {
    // Define an empty string that will get appended with matching cities
let cityNames = []
    // Iterate the array of assignment objects---with is the argument

    // For each assignment, iterate the cities array to find the match

    // Add the name of the matching city to the array of city names

    // After the loop is done, return the string
}

