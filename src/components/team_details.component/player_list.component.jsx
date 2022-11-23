import React from "react";
import { useNavigate } from "react-router-dom";
import './player_list.component.scss';

const PlayerListComponent = ({ datas }) => {
    let navigate = useNavigate()

    return (<div className="player-detail-container">
        {
            datas.map((data) => (
                <div key = {data.player.id} className = "player-image" onClick={() => { navigate('/playerDetails', { state: { id: data.player.id } }) }}>
                    <div><img src={data.player.photo} alt="#" height='200px' width='200px' /></div>
                    <div><p>{data.player.firstname}{" "}{data.player.lastname}</p></div>
                </div>
            ))
        }
    </div>)
}

export default PlayerListComponent;