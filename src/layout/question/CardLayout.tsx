import React from 'react';
import Header from '../component/Header'
import Footer from '../component/Footer'
import '../asset/style/stepLayout.less'

interface Props extends React.MapHTMLAttributes<HTMLElement>{
  style?: React.CSSProperties,
  className?: string,
  title?:string,
  current:number
}

const CardLayout:React.FC<Props>=(props)=>{
    return (
        <div className="stepLayout">
            <div style={{flex:1}}>
                <Header {...props}></Header>
                {props.children}
            </div>
            <Footer></Footer>
        </div>
    )
}
export default CardLayout