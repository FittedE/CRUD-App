import './EditPlayer.css'
import {Link, useNavigate, useParams} from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from 'axios'

function EditPlayer() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [name, setName] = useState('');
    const [stats, setStats] = useState('');
    const [position, setPosition] = useState('');
    const [image, setImage] = useState('');

        useEffect(() => {
            axios
                .get(`http://localhost:3001/api/items/${id}`)
                .then((res) => {
                        setName(res.data.name);
                        setStats(res.data.stats);
                        setPosition(res.data.position);
                        setImage(res.data.image);
                })
                .catch((err) => {
                    console.log('Error from EditPlayer' , err);
                })
        }, [id])

    const onSubmit = (e) => {
        e.preventDefault();

        const data = {
            name,
            stats,
            position,
            image,
        }
        axios  
            .put(`http://localhost:3001/api/items/${id}`, data)
            .then((res) => {
                navigate('/');
            })
            .catch((err) => {
                console.log('Error in EditPlayer', err);
            })
    }
    return(
        <div>
            <h2 className='add-header2'>Edit Player</h2>
        <form className='form2'>
            <label className='name2'>
                Name: 
                <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
            </label>
            <label className='position2'>
                Position: 
                <input type='text' value={position} onChange={(e)=>setPosition(e.target.value)}/>
            </label>
            <label className='stats2'>
                Stats: 
                <input type='text' value={stats} onChange={(e)=>setStats(e.target.value)}/>
            </label>
            <label className='image2'>
                Image: 
                <input type='text' value={image} onChange={(e)=>setImage(e.target.value)}/>
            </label>
            <button onClick={onSubmit} className='submit2' type='submit'>Submit</button>
        </form>
        </div>
        )
}

export default EditPlayer;