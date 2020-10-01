import React, { Component } from 'react'
import { connect } from 'react-redux'

class Team extends Component {
    render() {
        let team = this.props.team ? (
            <div className="center">
                <h4>{this.props.team.title}</h4>
                <p>{this.props.team.rankings}</p>
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
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.team_id
    return {
        team: state.teams.find(team => team.id == id)
    }
}

export default connect(mapStateToProps)(Team);