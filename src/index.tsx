import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './outdoors.css'
import App from './App';
import { OutDoors } from './Component/OutDoors/OutDoors';
import { AboutUs } from './Component/AboutUs/AboutUs';
import { Kitchen } from './Component/Kitchen/Kitchen';
import { Contact } from './Component/Contact/Contact';
import { LivingRoom } from './Component/LivingRoom/LivingRoom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    {/* <AboutUs /> */}
    {/* <LivingRoom />
    <Kitchen />
    <Contact />
    <OutDoors /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
