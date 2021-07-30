import { getStyles, setStyle, getOrderBuilder } from "./database.js"
//import { addCustomOrder } from "./database.js"





document.addEventListener(
    "change",
    (event) => { if (event.target.name === "style") {
        setStyle(parseInt(event.target.value))
        document.dispatchEvent(new CustomEvent("stateChanged"))
        
    }
}
)

export const JewelryStyles = () => {
    const styles = getStyles()
    const orderBuilder = getOrderBuilder()
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements

    //The .map() method iterates the array, just like for..of does. 
    //Unlike a for..of loop, it invokes the function that you define
    //     return `<li>
    //     <input type="radio" name="style" value="${style.id}" /> ${style.style}
    // </li>`
    // })
    
    const listItemsArray = styles.map(style => {
    if (style.id === orderBuilder.styleId) {
            return `<li>
            <input type="radio" name="style" value="${style.id}" checked /> ${style.style}
        </li>` 
    } else {
        return `<li>
        <input type="radio" name="style" value="${style.id}" /> ${style.style}
    </li>` 
    }})


    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}

