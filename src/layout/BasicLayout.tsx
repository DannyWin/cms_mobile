import React from 'react';
import Header from '../component/Header'
import Footer from '../component/Footer'

interface Props extends React.MapHTMLAttributes<HTMLElement>{
  style?: React.CSSProperties,
  className?: string,
  title?:string
}

const BasicLayout:React.FC<Props>=(props)=>{
  return (
    <>
      <Header title={props.title}></Header>
         {props.children}
      <Footer></Footer>
    </>
  )
}
export default BasicLayout