import React, { useState } from 'react';
import {withRouter} from 'react-router';
import {observer,inject} from 'mobx-react'
import {Card,List,Toast,WhiteSpace} from 'antd-mobile'
import {ISingleSelectProps} from '../../interface/interface'
import { createForm } from 'rc-form';
import RadioGroup from '../../customizedComponent/RadioGroup';
import Radio from '../../customizedComponent/Radio';

const SingleSelect:React.FC<ISingleSelectProps>=(props)=>{
    const { getFieldProps, getFieldError,getFieldValue } = props.form;
    const [selectedId,changeSelectedId]=useState(0);
    function handleSelectedId(id:number){
        changeSelectedId(id);
        if(props.OptionMobx){
            props.OptionMobx!.setSelectedOption({qid:props.id,oids:[id]})
        }
        // props.form.setFieldsValue({
        //     type:id
        // })
    }

    // {props.options.map(option => (
    //     <Radio.RadioItem key={option.id} checked={selectedId===option.id} onChange={() => handleSelectedId(option.id)}>
    //                         {option.content}
    //                         <List.Item.Brief>{option.note}</List.Item.Brief>
    //                     </Radio.RadioItem>
    // ))
    //     } 

    //https://segmentfault.com/a/1190000020380029
    //https://www.cnblogs.com/moran1992/p/9390646.html
    //https://www.cnblogs.com/moran1992/p/9390646.html
    //https://blog.csdn.net/weixin_41077029/article/details/88243134
    return (
        <>
            <List renderHeader={() => props.index+"."+props.content}>
               
                <RadioGroup onChange={changeSelectedId} active={selectedId}>
                     <Radio value={1}>使用余额支付</Radio>
                     <Radio value={2}>使用微信支付</Radio>
                </RadioGroup>
                       
               
            </List>
            <WhiteSpace size="lg"/>
         </>
       
  )
}
export default inject('OptionMobx')(withRouter(observer(createForm<ISingleSelectProps>()(SingleSelect))))