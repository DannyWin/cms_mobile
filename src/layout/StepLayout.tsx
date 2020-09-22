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
    <>
      <Header {...props}></Header>
         {props.children}
      <Footer></Footer>
    </>
  )
}
export default StepLayout