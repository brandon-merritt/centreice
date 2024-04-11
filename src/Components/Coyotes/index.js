import React, { useState, useEffect } from 'react';
import './stylesheet.css';
function MyComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch the JSON file
        fetch('coyotes.json')
            .then(response => response.json())
            .then(jsonData => {
                // Concatenate firstName and lastName into fullName
                const modifiedData = jsonData.skaters.map(skater => ({
                    ...skater,
                    fullName: `${skater.firstName.default} ${skater.lastName.default}`
                }));
                setData(modifiedData);
            })
            .catch(error => console.error('Error fetching data:', error));
    },
        []); // Empty dependency array to run effect only once on component mount

    return (
        <div>
            <div className='lineup'>
              {data.map(item => (
                <div className='card' key={item.playerId}>
                    <h2 className='fullNames'><em>{item.fullName}</em> - {item.positionCode}</h2>
                    <img src={item.headshot}></img>
                    <p>Position: {item.positionCode}</p>
                    <td>
                        <tbody>
                            Games {item.gamesPlayed}
                            Goals {item.goals}
                            Assists {item.assists}
                            Points {item.points}
                            +- {item.plusMinus}
                            Shots {item.shots}
                        </tbody>
                    </td>
                </div>
            ))}  
            </div>
            
        </div>
    );
}

export default MyComponent;

// src\Components\Coyotessrc\Components\Coyotes\index.js
// ../public/coytoes.json