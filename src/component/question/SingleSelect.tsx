import React, { useState } from 'react';
import {withRouter} from 'react-router';
import {observer,inject} from 'mobx-react'
import {Card,List,Radio,WhiteSpace} from 'antd-mobile'
import {ISingleSelectProps} from '../../interface/interface'

const SingleSelect:React.FC<ISingleSelectProps>=(props)=>{
    const [selectedId,changeSelectedId]=useState(0);
    function handleSelectedId(id:number){
        changeSelectedId(id);
        if(props.OptionMobx){
            props.OptionMobx!.setSelectedOption({qid:props.id,oids:[id]})
        }
    }
    return (
        <>
            <List renderHeader={() => props.index+"."+props.content}>
                {props.options.map(option => (
                    <Radio.RadioItem key={option.id} checked={selectedId === option.id} onChange={() => handleSelectedId(option.id)}>
                        {option.content}
                        <List.Item.Brief>{option.note}</List.Item.Brief>
                    </Radio.RadioItem>
                ))}
            </List>
            <WhiteSpace size="lg"/>
         </>
       
  )
}
export default inject('OptionMobx')(withRouter(observer(SingleSelect)))