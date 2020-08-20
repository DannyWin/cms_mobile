import React from 'react';
import logo from './logo.svg';
import './App.less';
import {Button} from 'antd-mobile'

const CustomIcon = ({ type="", className = '',  ...restProps }) => (
  <svg className={`${className}`} {...restProps}>
    <use xlinkHref={type} /> 
  </svg>
);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <svg className="icon" aria-hidden="true" fontSize="20">
        <use xlinkHref="#icon-eye-close"></use>
      </svg>
      <Button type="primary"  size="large">
      <CustomIcon type="#icon-eye-close" className="icon"></CustomIcon>
        aaa</Button>
    </div>
  );
}


export default App;
