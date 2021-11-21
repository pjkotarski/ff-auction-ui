import React from "react";
import { IPlayer } from "../../shared/types/IPlayer"
import { playerImageHelper } from "../../shared/utils/player-image-helper"
import { ImageComponent } from '../shared/ImageComponent/ImageComponent';
import styles from './PlayerSlide.module.scss';

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
        <div className={`container-fluid row ${styles.slide}`} key={player._id}>

            <div className="col">
                <ImageComponent src={playerImageHelper(player._id)}/>
            </div>

            <div className="col pt-2">
                <div className="row">
                    <p className="mb-0" >{player.firstName} {player.lastName}</p>
                </div>
                <div className="row">
                    <p className="col">{player.teamAbbr}   <strong>WR</strong></p>
                </div>
            </div>

            { addButton && (
                <div className={`col ${styles.bidButtonContainer}`}> 
                    <button type="button" className={`btn btn-success ${styles.addButton}`} onClick={(e) => onBidClick(e)}>
                        <i className="bi bi-plus"></i>
                    </button>
                </div>
            )}

        </div>
    )
}


