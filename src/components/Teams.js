import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Teams extends Component {
    state = {
        teams: []
    }
    render() {
        const { teams } = this.state
        const teamList = teams.length ? (
            teams.map(team => {
                return (
                    <div className="team card" key={team.id}>
                        <div className="card-content">
                            <Link to={'/' + team.id}><span className="card-title">{team.title}</span></Link>
                            <p>{team.body}</p>
                        </div>
                    </div>
                )
            }
            )
        ) : (
                <div className="center">No teams yet</div>
            )
        return (
            <div className="container">
                <h4 className="center">Teams</h4>
                {teamList}
            </div>
        )
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response.data)
                this.setState({
                    teams: response.data.slice(0, 10)
                })
            })
    }

}

export default Teams