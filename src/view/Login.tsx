import React,{useState} from 'react';
import {Flex,WhiteSpace,WingBlank,Button, InputItem} from 'antd-mobile'
import {CustomIcon} from '../component/CustomIcon'
import {observer,inject} from 'mobx-react'
import {apiLogin} from '../api/api'
// @inject([MyMobx])
// @observer
const Login:React.FC=()=>{
    //let account={uid:'',pwd:''};
    let [uid,uidChange]=useState('');
    let [pwd,pwdChange]=useState('');
    function login(){
        //const {uid,pwd}=account;
        if(uid==='' || uid===undefined){

        }
        if(pwd==='' || pwd===undefined){

        }
        apiLogin({uid,pwd})
    }
    return (
        <>
           <div style={{display:'flex',alignItems:'center',height:'100%'}}>
            <WingBlank style={{flex:1}}>
                
                <div>Checkin Sysytem</div>
                <InputItem placeholder="uid" value={uid} onChange={(val)=>uidChange(val)}>
                    <CustomIcon type="#icon-user"></CustomIcon>
                </InputItem>

                <InputItem placeholder="pwd"  value={pwd} onChange={(val)=>pwdChange(val)} type='password' extra={<CustomIcon type="#icon-eye"></CustomIcon>}>
                    <CustomIcon type="#icon-lock"></CustomIcon>
                </InputItem>

                <WhiteSpace size="lg" />
                <Flex>
                    <Flex.Item><Button type="primary" size='large' onClick={login}>Login</Button></Flex.Item>
                    <Flex.Item><Button size='large'>Cancel</Button></Flex.Item>
                </Flex>
               
            </WingBlank>
            </div>
        </>
    )
}
export default inject('MyMobx')(observer(Login));
