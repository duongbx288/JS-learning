import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {
  const APP_ID = '5273c170';
  const APP_KEY = '61050cfbf9c61e65925fa23bd7186ca8';
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);

  useEffect(() =>{
    console.log('Running');
  }, []);


  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button  className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default App;
