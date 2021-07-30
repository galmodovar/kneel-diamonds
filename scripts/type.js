import { getType, setType, getOrderBuilder } from "./database.js"


document.addEventListener(
    "change",
    (event) => { if (event.target.name === "type") {
        setType(parseInt(event.target.value))
        document.dispatchEvent(new CustomEvent("stateChanged"))
        
    }
}
)

export const Type = () => {
    const type = getType()
    const orderBuilder = getOrderBuilder()
    let html = "<div>"

    // Use .map() for converting objects to <li> elements

    //The .map() method iterates the array, just like for..of does. 
    //Unlike a for..of loop, it invokes the function that you define
    // const listItemsArray = type.map(item => {
    //     return `<input type="radio" name="type" value="${item.id}" /> ${item.type}`
    // })

    const listItemsArray = type.map(item => {
        if (item.id === orderBuilder.typeId) {
                return `
                <input type="radio" name="type" value="${item.id}" checked /> ${item.type}
            ` 
        } else {
            return `
            <input type="radio" name="type" value="${item.id}" /> ${item.type}
        ` 
        }})


    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</div>"
    return html
}