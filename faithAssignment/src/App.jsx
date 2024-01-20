import React from 'react';
import './App.css';

function App() {
  const s = {
    background: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url("https://cdn.wionews.com/sites/default/files/inline-images/Nityanand%20Charan%20Das.jpg")`,
    backgroundSize: '100% 160%',
    height: '35vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  };



  return (
    <div className='bg-cover h-5 '
      style={{
        backgroundImage: `url(https://cdn.wionews.com/sites/default/files/inline-images/Nityanand%20Charan%20Das.jpg)`
      }}>
      Hello
    </div>

  );
}

export default App;
