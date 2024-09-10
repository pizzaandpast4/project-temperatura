import React, { useState } from 'react';
import './App.css';

function App() {
    const [temperature, setTemperature] = useState(20); 

    const increaseTemperature = () => {
        if (temperature < 50) {
            setTemperature(prevTemp => prevTemp + 1);
        }
    };

    const decreaseTemperature = () => {
        if (temperature > -10) {
            setTemperature(prevTemp => prevTemp - 1);
        }
    };

    const resetTemperature = () => {
        setTemperature(20);
    };

    const getTemperatureColor = () => {
        if (temperature < 10) {
            return '#00f'; 
        } else if (temperature >= 10 && temperature <= 25) {
            return '#20f50d'; 
        } else {
            return '#f00'; 
        }
    };

    return (
      <main>
        <div className="container">
            <div 
                className="temperature-display" 
                style={{ backgroundColor: getTemperatureColor() }}
            >
                Temperature: {temperature}°C
            </div>
        </div>
        <div className="button-container">
            <button className="increase-button" onClick={increaseTemperature} aria-label="Increase temperature">+</button>
            <button className="reset-button" onClick={resetTemperature} aria-label="Reset temperature">Reset</button>
            <button className="decrease-button" onClick={decreaseTemperature} aria-label="Decrease temperature">-</button>
        </div>
      </main>
    );
}

export default App;