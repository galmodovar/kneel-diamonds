import { KneelDiamonds } from "./KneelDiamonds.js"



// Assigns are main section with the class of container to mainContainer variable
const mainContainer = document.querySelector("#container")


// This function uses the KneelDiamonds function to render the  
// HTML to our mainContainer section in html
const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

//function invoked
renderAllHTML()

//custom event listener waiting for state to change on our page
document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})