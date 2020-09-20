import React from 'react';
import './App.less';
import {Switch} from 'react-router-dom'
import RouteWithSubRoutes,{IRoute,routes} from './route'
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <svg className="icon" aria-hidden="true" fontSize="20">
//         <use xlinkHref="#icon-eye-close"></use>
//       </svg>
//       <Button type="primary"  size="large">
//       <CustomIcon type="#icon-eye-close" ></CustomIcon>
//         aaa</Button>
//     </div>
//   );
// }

const App:React.FC=()=>{
  return(

    <Switch>
      {routes.map((route:IRoute,index:number)=>(
        <RouteWithSubRoutes key={index} {...route}/>
      ))}
    </Switch>
  )
}


export default App;
