import Card from './Card';
import './PlayerItem.css';
import EditButton from './EditButton';
import RemoveButton from './RemoveButton';
import {Link} from "react-router-dom";
import React, { useState } from 'react';


function PlayerItem(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  if (!props.edit) {

  return (
    <Card className={`playerItem ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className='player-item-front'>
        <h2 className='player-item-name'>{props.name}</h2>
        <br></br>
        <img src={props.image} alt={props.name} className='player-item-image' />
        <h3 className='player-item-pos'>{props.position}</h3>
        <h3 className='player-item-stats'>{props.stats}</h3>
        <h3>{props.id}</h3>
      </div>
      <div className='player-item-back'>
        <h2>{isFlipped ? 'Test' : ''}</h2>
      </div>
    </Card>
  );
  } else {
    return (
        <Card className={`playerItem ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className='player-item-front'>
        <h2 className='player-item-name'>{props.name}</h2>
        <br></br>
        <img src={props.image} alt={props.name} className='player-item-image' />
        <h3 className='player-item-pos'>{props.position}</h3>
        <h3 className='player-item-stats'>{props.stats}</h3>
        <h3>{props.id}</h3>
        <EditButton _id={props._id}/>
        <RemoveButton _id={props._id}/>
      </div>
      <div className='player-item-back'>
        <h2>{isFlipped ? 'Test' : ''}</h2>
      </div>
    </Card>
    )
  }
}

export default PlayerItem;








//function PlayerItem(props) {
 /*   if (!props.edit) {
        return(
        <Card className = 'playerItem'>
            <h2 className='player-item-name'>{props.name}</h2>
            <img src={props.image} alt={props.name} className='player-item-image'/>
            <h3 className='player-item-pos'>{props.position}</h3>
            <h3 className='player-item-stats'>{props.stats}</h3>
        </Card>
    )
        } else {
            return (
            <Card className = 'playerItem'>
            <h2 className='player-item-name'>{props.name}</h2>
            <img src={props.image} alt={props.name} className='player-item-image'/>
            <h3 className='player-item-pos'>{props.position}</h3>
            <h3 className='player-item-stats'>{props.stats}</h3>
            <EditButton id={props.id}/>
            <Link to="/remove-item">
                <button className='remove-button'>-Remove Player</button>
            </Link>
        </Card>
            )
        } */
    //}