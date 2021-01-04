import React from 'react';
import '../asset/style/stepLayout.less'

interface Props extends React.MapHTMLAttributes<HTMLElement>{
  style?: React.CSSProperties,
  className?: string,
  title?:string,
  current:number
}

const ListLayout:React.FC<Props>=(props)=>{
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
export default ListLayout