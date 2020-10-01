const initState = {
    teams: [
        {id: '59580', title: 'И остались голодными', rankings: 59},
        {id: '185', title: 'Гимназисты', rankings: 53},
        {id: '670', title: 'Ксеп', rankings: 33},
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === "DELETE_TEAM") {
        let newTeams = state.teams.filter((team) => {
            return team.id !== action.id
        })

        return {
            ...state,
            teams: newTeams
        }
    }
    return state;
}

export default rootReducer;