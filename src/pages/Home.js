import React, { useEffect, useState } from 'react';
import logo from '../logo.svg';
import { Counter } from '../features/counter/Counter';
import './Home.css';
import useCounter from '../hooks/use-counter';
import Popup from '../features/Popup/Popup';
import { Link, useNavigate } from 'react-router-dom';

const reverse = Comp => props => {
  return (<Comp>{typeof props.children === 'string' ? props.children.split('').reverse().join('') : ''}</Comp>);
};

const RedBorder = (props) => <div style={{ border: '2px solid red' }}>{props.children}</div>

function Home() {
  const navigate = useNavigate();
  const ReverseRedBorder = reverse(RedBorder);
  const count = useCounter();
  
  const [ isPopupOpen, setIsPopupOpen ] = useState(true);

  const innerBind = (num, msg) => {
    console.log(num, msg);
  }

  const outerBind = (msg) => {
    return innerBind.bind(null, msg);
  }

  useEffect(() => {
    const boundFunc = outerBind(123);
    boundFunc('test123');
  }, []);

  const closeModal = () => setIsPopupOpen(false);

  const goToProducts = () => navigate('/products');

  return (
    <div className="App">
      <Popup
        isVisible={isPopupOpen}
        closeFunction={closeModal}
      />
      <Link to="products">Go to products</Link>
      <div>Data from custom hooks: {count}</div>
      <ReverseRedBorder>Test123</ReverseRedBorder>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <button onClick={goToProducts}>Navigate</button>
        </div>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default Home;
