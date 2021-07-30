/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.
    
    */
const database = {
    //empty array to store our order objects from orderBuilder
    customOrders: [],

    //empty object to store user choices
    orderBuilder: {},

    styles: [
        { id: 1, style: "Classic", price: 500 },
        { id: 2, style: "Modern", price: 710 },
        { id: 3, style: "Vintage", price: 965 }
    ],
    sizes: [
        { id: 1, carets: 0.5, price: 405 },
        { id: 2, carets: 0.75, price: 782 },
        { id: 3, carets: 1, price: 1470 },
        { id: 4, carets: 1.5, price: 1997 },
        { id: 5, carets: 2, price: 3638 }
    ],
    metals: [
        { id: 1, metal: "Sterling Silver", price: 12.42 },
        { id: 2, metal: "14K Gold", price: 736.4 },
        { id: 3, metal: "24K Gold", price: 1258.9 },
        { id: 4, metal: "Platinum", price: 795.45 },
        { id: 5, metal: "Palladium", price: 1241.0 }
    ],

    type: [
        { id: 1, type: "Ring" },
        { id: 2, type: "Earring" },
        { id: 3, type: "Necklace" }
    ]
}

// Functions make a copy of our data to be used in other modules

export const getMetals = () => {
    return database.metals.map(metal => ({...metal}))
}

export const getSizes = () => {
    return database.sizes.map(size => ({...size}))
}
export const getStyles = () => {
    return database.styles.map(style => ({...style}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

export const getType = () => {
    return database.type.map(item => ({...item}) )
}

export const getOrderBuilder = () => {
    return database.orderBuilder
}

//Functions responsible for setting State when a click event takes place

export const setMetal = (id) => {
    database.orderBuilder.metalId = id
}

export const setSize = (id) => {
    database.orderBuilder.sizeId = id
}

export const setStyle = (id) => {
    database.orderBuilder.styleId = id
}
export const setType = (id) => {
    database.orderBuilder.typeId = id
}


/*function will take the temporary choices being stored in 
the orderBuilder state object and make them permanent.*/

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    /*Add a new primary key to the object
    added if else to assign id if database is blank*/
    
    let lastIndex = null
    if (database.customOrders.length === 0) {
        lastIndex = 0;
        newOrder.id = lastIndex + 1
    } else {
        const lastIndex = database.customOrders.length - 1
        newOrder.id = database.customOrders[lastIndex].id + 1

    }

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

