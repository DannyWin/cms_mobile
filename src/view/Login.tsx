import React,{useState} from 'react';
import {withRouter,RouteComponentProps} from 'react-router';
import {Flex,WhiteSpace,WingBlank,Button, InputItem,Toast} from 'antd-mobile'
import {CustomIcon} from '../component/CustomIcon'
import {observer,inject} from 'mobx-react'
import {apiLogin} from '../api/api'
import {InputItemPropsType} from 'antd-mobile/lib/input-item/PropsType'
import {ILoginProps} from '../interface/interface'


// @inject([MyMobx])
// @observer
const Login:React.FC<ILoginProps>=(props)=>{
    let [uid,uidChange]=useState('');
    let [pwd,pwdChange]=useState('');
    let [inputType,inputTypeChange]=useState<InputItemPropsType['type']>('password');
    // console.log(props.MyMobx?.number)
    // console.log(new Date().getTime())
    // props.MyMobx?.addNumber(1);
    // console.log(props.MyMobx?.number)
    async function login(){
        if(uid==='' || uid===undefined ||pwd==='' || pwd===undefined){
            return  Toast.fail('Uid or Pwd must not be empty!',2);
        }
        const result=await apiLogin({uid,pwd});
        if(result.status===200){
            console.log(result)
            window.localStorage.setItem("token", result.data.data.token);
            Toast.success('Login successully!',2);
            props.history.push('/home');
        }else{
            Toast.fail('Uid or Pwd is wrong!',2);
        }
    }
    return (
        <>
           <div style={{display:'flex',alignItems:'center',height:'100%'}}>
            <WingBlank style={{flex:1}}>
                
                <div>Checkin Sysytem</div>
                <InputItem placeholder="uid" clear={true} value={uid} onChange={(val)=>uidChange(val)}>
                    <CustomIcon type="#icon-user"></CustomIcon>
                </InputItem>

                <InputItem placeholder="pwd" clear={true} value={pwd} onChange={(val)=>pwdChange(val)} type={inputType} extra={<CustomIcon type="#icon-eye"></CustomIcon>} onExtraClick={()=>inputTypeChange(inputType==='password'?'text':'password')}>
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
export default inject('MyMobx')(observer(withRouter(Login)));
