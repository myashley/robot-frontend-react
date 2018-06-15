import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

ReactDOM.render(<App/>, document.getElementById('root'))

const form = document.querySelector('form')

// 3. add a submit event listener to form 
form.addEventListener('submit', submitRobot)

// 4. submitBook or submitForm
function submitRobot(e){
    e.preventDefault()
    const form = e.target.elements
    const robotName = form.robotName.value
    const robotType = form.robotType.value
    const bodyColour = form.bodyColour.value
    const faceColour = form.faceColour.value
    const highlightColour = form.highlightColour.value
    const personality = form.personality.value
    const message = form.message.value
    
    const robot = {
        robotName, 
        robotType,
        bodyColour,
        faceColour,
        highlightColour,
        personality,
        message
    }
    const url = 'http://localhost:3000/robots'
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(robot)
    }
    // post robot
    fetch(url, options)
        .then(robot => {
            
            // const newRobot = robot.json()
            // console.log(newRobot)
            // tip: reset form if successfull
            e.target.reset()
        })
        .catch(err => console.error(err))
}



// 5. postRobot function
function postRobot(robot){

    

    // const newRobot = response.json()
    // console.log(newRobot)
    // return newRobot
    
}



