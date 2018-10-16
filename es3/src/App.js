//** CASO CSS STYLESHEET **


import React from 'react';
import './App.css';

const App = () => (
  <div className="one">
    <p className="one_content">Get started with CSS stylesheet</p>
  </div>
);

export default App;



//** CASO INLINE STYLING **

/* 
import React from 'react';


const divStyle = {
  margin: '40px',
  border: '10px double orange'
};
const pStyle = {
  fontSize: '30px',
  textAlign: 'right',
  fontFamily:'courier'
};

const App = () => (
  <div style={divStyle}>
    <p style={pStyle}>Get started with inline style</p>
  </div>
);

export default App;

 */
 
 
 
//** CASO CSS MODULES **

/* 
import React from 'react';
import styles from './App.css';

const App = () => (
  <div className={styles.container}>
    <p className={styles.content}>Get started with CSS Modules style</p>
  </div>
);

export default App;

 */
