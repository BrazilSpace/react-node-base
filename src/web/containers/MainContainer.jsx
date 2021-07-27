import React from 'react';
import ReactImage from '../images/react.png';
import '../sass/app.css';

const MainContainer = () => (
  <React.Fragment>
    <h1>Hello World</h1>
    <img src={ReactImage} alt="react" />
  </React.Fragment>
);

export default MainContainer;
