import React, { Component } from 'react'


class App extends Component {

    constructor() {
        super()
        this.state = {
            robot: null,
            isLoading: true
        }
    }

    componentDidMount() {
        fetch('htpp://localhost:3000/robots')
        .then(res => res.json())
        .then(robots => this.setState({robots, isLoading: false}))
        .catch(err => console.error(err))
    }



    render() {
        if (this.state.isLoading) {
            return <div>Loading robots...</div>
        }
        return <RobotList robots={this.state.robots} />
    }


}

export default App