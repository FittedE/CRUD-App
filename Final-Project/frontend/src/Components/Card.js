import './Card.css';

// Create Card elememts that will hold the player image, stats, name, etc.


function Card(props) {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
}


export default Card;