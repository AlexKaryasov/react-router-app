import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Teams extends Component {
    render() {
        const { teams } = this.props
        const teamList = teams.length ? (
            teams.map(team => {
                return (
                    <div className="team card" key={team.id}>
                        <div className="card-content">
                            <Link to={'/' + team.id}><span className="card-title">{team.title}</span></Link>
                            <p>{team.rankings}</p>
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
}

const mapStateToProps = (state) => {
    return {
        teams: state.teams
    }
}

export default connect(mapStateToProps)(Teams)