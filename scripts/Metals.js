import { getMetals, setMetal, getOrderBuilder } from "./database.js"


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
            
        }
    }
    )
    
export const Metals = () => {
    const metals = getMetals()
    const orderBuilder = getOrderBuilder()
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    // const listItemsArray = metals.map(metal => {
    //     return `<li>
    //     <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
    // </li>`
    // }) 

    const listItemsArray = metals.map(metal => {
        if (metal.id === orderBuilder.metalId) {
                return `<li>
                <input type="radio" name="metal" value="${metal.id}" checked /> ${metal.metal}
            </li>` 
        } else {
            return `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>` 
        }})


    html += listItemsArray.join("")
    

    html += "</ul>"
    return html
}

