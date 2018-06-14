// const form = document.getElementsByClassName('.robotForm')[0]
// const data = document.getFormDataAsJSON(form)


const form = document.querySelector('form')
const robotList = document.querySelector('ul')

// // function createBookItem(book){
function createRobotItem({id, robotName, type, bodyColour, faceColour, highlightColour, personality, message}){
    // create an li
    const li = document.createElement('li')
    const nameElement = document.createElement('p')
    const typeElement = document.createElement('p')
    const bodyElement = document.createElement('p')
    const faceElement = document.createElement('p')
    const highlightElement = document.createElement('p')
    const personalityElement = document.createElement('p')
    const messageElement = document.createElement('p')
    // const isbnElement = document.createElement('p')
    // const buttonElement = document.createElement('button')

    // add a 'collection-item' class to the li
    li.classList.add('collection-item')
    li.dataset.id = id // book.id

    // create  title and append to li
    nameElement.textContent = robotName //book.title
    
    // create description and append it to li
    typeElement.textContent = type // book.description
    bodyElement.textContent = bodyColour
    faceElement.textContent = faceColour
    highlightElement.textContent = highlightColour
    personalityElement.textContent = personality
    messageElement.textContent = message

    // buttonElement.textContent = 'Remove Robot'
    // buttonElement.classList.add('waves-effect', 'waves-light', 'btn')
    // buttonElement.id = id

    li.appendChild(nameElement)
    li.appendChild(typeElement)
    li.appendChild(bodyElement)
    li.appendChild(faceElement)
    li.appendChild(highlightElement)
    li.appendChild(personalityElement)
    li.appendChild(messageElement)

    // return li
    return li
}



// 1. fetchRobots async function
async function fetchRobots(){
    const response = await fetch('http://localhost:3000/robots')
    const robots = await response.json()
    return robots.concat().reverse()
}

fetchRobots() 
    .then(addRobotsToList)
    .catch(err => console.log(err.message))


// 2. addRobotsToList(books) function
function addRobotsToList(robots){
    robot.forEach(robot => {
        robotList.appendChild(createRobotItem(robot))
    })
}


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
            // tip: reset form if successfull
            e.target.reset()
            // return createRobotItem(robot)
        })
        // .then(el => addRobotToList(el))
        .catch(err => console.error(err))
    

}



// 5. postRobot async function
async function postRobot(robot){
    const url = 'http://localhost:3000/robots'
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(robot)
    }
    const response = await fetch(url, options)
    const newRobot = await response.json()
    console.log(newRobot)
    // return newRobot
    
}


// 6. prepend new robot to robtList
// function addRobotToList(robotElement){
//     robotList.prepend(robotElement)
// }

