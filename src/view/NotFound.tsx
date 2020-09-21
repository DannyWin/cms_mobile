import React from 'react';
import {WingBlank,} from 'antd-mobile'
import BasicLayout from '../layout/BasicLayout'

const NotFound:React.FC=()=>{

    return (
        <BasicLayout title="Home">
        <div style={{display:'flex',alignItems:'center',height:'100%'}}>
            <WingBlank style={{flex:1}}>
                
                <div>404</div>
            
            </WingBlank>
            </div>
        </BasicLayout>
    )
}
export default NotFound