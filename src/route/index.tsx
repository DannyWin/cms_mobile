import React from 'react';
import {Route} from 'react-router-dom';
import Login from '../view/Login'
import Home from '../view/Home'
import Survey from '../view/Survey'
import Question from '../view/Question'
import { NOTFOUND } from 'dns';

export interface IRoute{
    path:string,
    component:any,
    exact?:boolean,
    routes?:Array<any>
}



export const routes=[
    {path:'/login',component:Login},
    {path:'/',component:Home},
    {path:'/Survey',component:Survey,
        routes:[
            {path:'/Question',component:Question}
        ]
    },
    {path:'*',component:NOTFOUND},

];

 
const RouteWithSubRoutes=(route:IRoute)=>{
    return (
        <Route path={route.path} exact={route.exact} render={props=>(
            <route.component {...props} routes={route.routes} />
        )} />
    )
}



export default RouteWithSubRoutes