import React from 'react'
import ReactDOM from 'react-dom'
import App from './component/App'

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

    // post robot
    postRobot(robot)
        .then(robot => {
            
            const newRobot = robot.json()
            console.log(newRobot)
            // tip: reset form if successfull
            e.target.reset()
            // console.log(newRobot)
            // return createRobotItem(robot)
        })
        // .then(newRobot => {     
        //     console.log(newRobot)
            
        // })
        // .then(el => addRobotToList(el))
        .catch(err => console.error(err))
    

}



// 5. postRobot async function
function postRobot(robot){
    const url = 'http://localhost:3000/robots'
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(robot)
    }
    const response = fetch(url, options)
    return response
    
    // const newRobot = response.json()
    // console.log(newRobot)
    // return newRobot
    
}

ReactDOM.render(<App/>, document.getElementById('root'))

