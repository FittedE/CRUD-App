import './AddPlayer.css';
import React, {useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";
import {navLink} from 'react-router-dom';

function AddPlayer() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [stats, setStats] = useState('');
    const [position, setPosition] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
            const newElement = {
                name,
                stats,
                position,
                image
            };
            axios
                .post('http://localhost:3001/api/items', newElement)
                .then((res) => {
                setName('');
                setStats('');
                setPosition('');
                setImage('');
                
                navigate('/');
            })
            .catch((err) =>  {
                console.log('Failed to add player: ', err);
            });
    };

    return(
        <div>
        <h2 className='add-header'>Add Player</h2>
    <form className='form'>
        <label className='name'>
            Name: 
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
        </label>
        <label className='position'>
            Position: 
            <input type='text' value={position} onChange={(e) => setPosition(e.target.value)}/>
        </label>
        <label className='stats'>
            Stats: 
            <input type='text' value={stats} onChange={(e) => setStats(e.target.value)}/>
        </label>
        <label className='image'>
            Image: 
            <input type='text' value={image} onChange = {(e) => setImage(e.target.value)}/>
        </label>
        <button onClick={handleSubmit} class='submit' type='submit'>Submit</button>
        <Link to='/'>
        <button class='back'>Back</button>
        </Link>
    </form>
    </div>
    )
}

export default AddPlayer;