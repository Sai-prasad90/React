import logo from './logo.svg';
import './App.css';
import Functionbase from './components/functionbase';
import Classbase from './components/classbase';
import Arrow from './components/arrowfunction';
import Classrev from './components/classrev';
import ComponentJSX from './components/ComponentJSX';
import Greet from './components/greet';
import Name from './components/jsxrevise';
import Prop from './components/propR';
import Message from './components/message';
import Counter from './components/counting';
import Count2 from './components/decrese';
import Greet2 from './components/great2';
import Counting2 from './Counting2';
import Bind from './components/bind';
import Parent from './components/Parent';
function App() {
  return (
    <div className="App">      
    <Parent></Parent>
    
    <Bind></Bind> 

      

      <Counting2>Lets count</Counting2>

      <Greet2 name="Taylor" lastName=" Swift  ☺️"></Greet2>

      <Message></Message>
      <Counter></Counter>
      <Count2></Count2>


      <Functionbase />
      <Classbase />
      <Arrow />
      <Classrev />
      <ComponentJSX />
      <Greet />
      <Greet wish="  inna"></Greet>
      <Greet wish=" mina"></Greet>
      <Greet wish=" dika"></Greet>
      <Prop />
      <Prop location=" india" name="sai"></Prop>
      <Prop location="  maharashra" name="shreya"></Prop>
      <Prop location="  mumbai" name="priya"></Prop>
      <Name />




      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
