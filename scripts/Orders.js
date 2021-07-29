import { getOrders, getMetals, getStyles, getSizes, getType } from "./database.js"

const buildOrderListItem = (order) => {
    
    const metals = getMetals()
    const sizes = getSizes()
    const styles = getStyles()
    const type = getType()
    
    // Remember that the function you pass to find() must return true/false
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
        )
    const foundSize = sizes.find(
            (size) => {
                return size.id === order.sizeId
            }
            )
    const foundStyle = styles.find(
                (style) => {
                    return style.id === order.styleId
                }
                )
    const foundType = type.find(
        (item) => {
            return item.id === order.typeId
        }
        )
    const totalCost = () => {

        let defaultCost = foundStyle.price + foundMetal.price + foundSize.price 

        if(foundType === undefined) {
            return defaultCost
        } else if (foundType.id === 2) {
            return defaultCost * 2
        } else if (foundType.id === 3) {
            return defaultCost * 4
        } else {
            return defaultCost
        }
    }
                
                const costString = totalCost().toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD"
                })
                
                return `<li>
                    Order #${order.id} was placed on ${order.timestamp}
                    and it costs ${costString}
                </li>`
                // `<li>
                // Order #${order.id} cost ${costString}
                // </li>`
                
            }
    



export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}



