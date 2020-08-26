import React from 'react';
import {Route} from 'react-router-dom';
import Login from '../component/Login'

export interface IRoute{
    path:string,
    component:any,
    exact?:boolean,
    routes?:Array<any>
}



export const routes=[
    {path:'/login',component:Login}
];

 
const RouteWithSubRoutes=(route:IRoute)=>{
    return (
        <Route path={route.path} exact={route.exact} render={props=>(
            <route.component {...props} routes={route.routes} />
        )} />
    )
}



export default RouteWithSubRoutes