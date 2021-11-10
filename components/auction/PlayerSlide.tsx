import React from "react";
import { IPlayer } from "../../types/IPlayer"
import { playerImageHelper } from "../../utils/player-image-helper"

export interface PlayerSlideProps {
    player: IPlayer;
    addButton: boolean;
};


export const PlayerSlide = (props: PlayerSlideProps) => {

    const { player, addButton } = props;

    const onBidClick = (e: React.MouseEvent) => {
        console.log('BUTTON CLICKED', e)
    }

    return (
        <ul className="container-fluid d-flex list-group-item justify-content-between align-items-center" key={player.id}>
            <div className="col-3">
                <img src={playerImageHelper(player.id)} className="rounded-circle"/>
            </div>  
            <div className="col-3">
                <div className="row">
                    <p className="col-6 ">{player.firstName} {player.lastName}</p>
                    <p className="col-6">{player.team}/{player.position}</p>
                </div>
            </div>

            { addButton && (
                <div className="col-3"> 
                    <button type="button" className="btn btn-primary" onClick={(e) => onBidClick(e)}>Bid on Player</button>
                </div>
            )}

        </ul>
    )
}


