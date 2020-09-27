import React from 'react';
import Header from '../component/Header'
import Footer from '../component/Footer'

interface Props extends React.MapHTMLAttributes<HTMLElement>{
  style?: React.CSSProperties,
  className?: string,
  title?:string,
  current:number
}

const StepLayout:React.FC<Props>=(props)=>{
  return (
    <div style={{display:"flex",flexDirection:'column',height:"100%"}}>
     
      <div style={{flex:1}}>
      <Header {...props}></Header>
         {props.children}
         </div>
         <div style={{height:"50px"}}>
      <Footer ></Footer>
      </div>
    </div>
  )
}
export default StepLayout