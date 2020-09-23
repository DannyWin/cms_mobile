import React from 'react';
import {Flex,WhiteSpace,WingBlank,Button, InputItem} from 'antd-mobile'
import {CustomIcon} from '../component/CustomIcon'
import StepLayout from '../layout/StepLayout'

const Home:React.FC=()=>{

    return (
        <>
            <StepLayout title="Home" current={1}>
            <div style={{display:'flex',alignItems:'center',height:'100%'}}>
                <WingBlank style={{flex:1}}>
                    
                    <div>Checkin Sysytem</div>
                    <InputItem placeholder="uid">
                        <CustomIcon type="#icon-user"></CustomIcon>
                    </InputItem>

                    <InputItem placeholder="pwd" type='password' extra={<CustomIcon type="#icon-eye"></CustomIcon>}>
                        <CustomIcon type="#icon-lock"></CustomIcon>
                    </InputItem>

                    <WhiteSpace size="lg" />
                    <Flex>
                        <Flex.Item><Button type="primary" size='large'>Login</Button></Flex.Item>
                        <Flex.Item><Button size='large'>Cancel</Button></Flex.Item>
                    </Flex>
                
                </WingBlank>
                </div>
            </StepLayout>
        </>
    )
}
export default Home