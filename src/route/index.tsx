import React from 'react';
import {Route} from 'react-router-dom';
import Login from '../view/Login'
import Home from '../component/Home'
import Main from '../view/Main'
import Survey from '../component/Survey'
import QuestionList from '../view/QuestionList'
import Question from '../view/Question'
import NotFound from '../view/NotFound'

export interface IRoute{
    path:string,
    component:any,
    exact?:boolean,
    routes?:Array<any>
}



export const routes=[
    {path:'/',exact:true,component:Login},
    {path:'/login',component:Login},
    {path:'/home', component:Home},
    {path:'/main', component:Main},
    {path:'/survey',exact:true,component:Survey,
   
        // routes:[
        //     {path:'/survey/:sid/question',exact:true,component:QuestionList},
        //     {path:'/survey/:sid/question/:qid',exact:true,component:Question}
        // ]
    },
    {path:'/survey/:sid/question',exact:true,component:QuestionList},
    {path:'/survey/:sid/question/:qid',exact:true,component:Question},
    {path:'*',component:NotFound},

];

 
const RouteWithSubRoutes=(route:IRoute)=>{
    return (
        <Route path={route.path} exact={route.exact} render={props=>(
            <route.component {...props} routes={route.routes} />
        )} />
    )
}



export default RouteWithSubRoutes