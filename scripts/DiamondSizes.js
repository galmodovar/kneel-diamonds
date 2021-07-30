import { getSizes, setSize,getOrderBuilder } from "./database.js"


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
            
        }
    }
    )
    
    export const DiamondSizes = () => {
        const sizes = getSizes()
        const orderBuilder = getOrderBuilder()
        let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    

        const listItemsArray = sizes.map(size => {
            /* If/else statement checks to see if size.id is equal to the id selected by user from
               orderBuilder object.  If it is it returns a checked list item displaying the selection */ 
            if (size.id === orderBuilder.sizeId) {
                return `<li>
                <input type="radio" name="size" value="${size.id}" checked /> ${size.carets}
                </li>` 
            } else {
                return `<li>
                <input type="radio" name="size" value="${size.id}" /> ${size.carets}
                </li>` 
            }})

        html += listItemsArray.join("")
        html += "</ul>"

        return html
    }

