import 'App.css';
import {useState} from 'react';


const Title = function(props) {
  // console.log("Rendering Title");
  return <>
    {props.children}
  </>;
};

function App(props) {
  const [counter, setCounter] = useState(0);
  const [list, setList] = useState([1,2,3]);
  console.log("Rendering App", counter);

  const increment = function() {
    setCounter(counter + 1);
  };

  return (
    <div className="App">

      <Title>
        <span>
          <div>
            <h2>React State</h2>
          </div>
        </span>
      </Title>

      {counter}
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
