import React, { Component } from 'react'
import axios from 'axios'

class Team extends Component {
    state = {
        team: null
    }

    render() {
        let team = this.state.team ? (
            <div className="center">
                <h4>{this.state.team.title}</h4>
                <p>{this.state.team.body}</p>
            </div>
        ) :
            (
                <div className="center">
                    <h4>Loading team...</h4>
                </div >
            )
        return (
            <div className="container">
                {team}
            </div>
        )
    }

    componentDidMount() {
        let id = this.props.match.params.team_id
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(response => {
                this.setState({
                    team: response.data
                })
            })
    }

}

export default Team;