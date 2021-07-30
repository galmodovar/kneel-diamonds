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


    const listItemsArray = type.map(item => {
        if (item.id === orderBuilder.typeId) {
                return `<input type="radio" name="type" value="${item.id}" checked /> ${item.type}` 
        } else {
            return `<input type="radio" name="type" value="${item.id}" /> ${item.type}` 
        }
    })


    html += listItemsArray.join("")

    html += "</div>"
    return html
}