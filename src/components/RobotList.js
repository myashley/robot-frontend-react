import React from 'react'
import Robot from './Robot'

function RobotList(props) {
    const robots = props.robots.map(robot => {
        return <Robot
                key={robot._id}
                robotName={robot.robotName}
                />

    })
    return <ul>
        {robots}
    </ul>
}

export default RobotList