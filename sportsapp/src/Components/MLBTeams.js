import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function MLBTeams(props) {
    // const [mlbTeams, setMlbTeams] = useState(false)
    // useEffect(() => {
    //     const url = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=MLB"
    //     const makeApiCall = async () => {
    //         const res = await fetch(url)
    //         const json = await res.json()
    //         console.log('mlb teams page', json.teams)
    //         setMlbTeams(json.teams)
    //     }
    //     makeApiCall()
    // }, [])

    if (!props.mlbTeams) {
       return <></>
    };

    const teams = props.mlbTeams.map((team, index) => {
        return (
            <Link key={index} to={`/MLBTeams/${team.strTeam}`}>
                <img src={team.strTeamBadge} alt={team.strTeamShort} />
                <h4>{team.strTeam}</h4>
            </Link>
        )
    })

    return (
        <div className='teamsContainer'>
            {teams}
        </div>
    )
}
export default MLBTeams