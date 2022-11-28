import React, { useEffect, useState } from "react";
import './fixtures_results.component.scss';

const FixturesResultsComponent = ({ data, team }) => {
    const [matchdate, setDate] = useState("")

    useEffect(() => {
        var date = new Date(data.fixture.date);
        setDate(date.toString().substring(4, 21))
    }, [data.fixture.date])

    return (<tr className="fixture-row">
        <td className="player-team">
            <div className="img-txt">
                <div><img className="team-image" src={data.teams.home.logo} alt="#" /></div>
                <div>{data.teams.home.name}</div>
            </div>
        </td>
        {<td className="score">{data.goals.home}-{data.goals.away}</td>}
        <td className="player-away-team">
            <div className="img-txt">
                <div>{data.teams.away.name}</div>
                <div><img className="team-image" src={data.teams.away.logo} alt="#" /></div>
            </div>
        </td>
        <td className="time">{matchdate}</td>
    </tr>)
}

export default FixturesResultsComponent;