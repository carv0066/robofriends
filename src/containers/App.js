import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';


// Syntax I need to get used to
export default function App() {

    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchField] = useState('');
    //Right here I'm delcaring two states that my app will have.

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(users => setRobots(users));
    },[])//a shorcut to use componentDidMount is using [] here.

    const onSearchChange = (event) => {
        setSearchField(event.target.value)
    };

    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    // in this function I'm first creating a variable called filteredRobots, where I take the robots state,
    // and I use a filter on the robots, so the function goes trough every single one of the robots and,
    // it return the specific robot that has the name that i type on the searchfield on lowercase.
    
    return !robots.length ?
        <h1>Loading!!</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        ) 
    }