import React from 'react';
import {WingBlank,Button, InputItem} from 'antd-mobile'
import {CustomIcon} from '../component/CustomIcon'

const Login:React.FC=()=>{

    return (
        <WingBlank>
            <InputItem placeholder="uid">
                <CustomIcon type="#icon-user"></CustomIcon>
            </InputItem>
            <InputItem placeholder="pwd">
                <CustomIcon type="#icon-lock"></CustomIcon>
            </InputItem>
            <Button></Button>
        </WingBlank>
    )
}
export default Login