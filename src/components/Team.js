import React, { Component } from 'react'
import { connect } from 'react-redux'
import {deleteTeam} from '../actions/TeamActions'

class Team extends Component {
    handleClick = () => {
        this.props.deleteTeam(this.props.team.id)
        this.props.history.push('/')
    }

    render() {
        let team = this.props.team ? (
            <div className="center">
                <h4>{this.props.team.title}</h4>
                <p>{this.props.team.rankings}</p>
                <div className="center">
                    <button className="btn red" onClick={this.handleClick}>Delete Team</button>
                </div>
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
        team: state.teams.find(team => team.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTeam: (id) => dispatch(deleteTeam(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Team);