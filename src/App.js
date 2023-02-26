import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
    const [list, setList] = useState([]);

    // * doesn't have to be an arrow function, old school way will work here too, easier for me to read
    useEffect(function() {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        // * weird axios thing, need to include .data for some reason, or else none of the data will show
        .then(response => setList(response.data.results))
        .catch(err => console.log(err));
    }, []);

    return (
        <div className="w-50 m-auto mt-4 mb-4 card p-3">
            <h1>All the Pokemon</h1>
            <ul>
        {
            list.map((single, idx) => (
                <li key={idx}>{single.name}</li>
            ))
        }    
            </ul>
        </div>
    );
}

export default App;
