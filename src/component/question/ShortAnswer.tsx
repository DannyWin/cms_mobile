import React, { useState } from 'react';
import {withRouter} from 'react-router';
import {observer,inject} from 'mobx-react'
import {Card,TextareaItem,List,Radio,WhiteSpace} from 'antd-mobile'
import {IShortAnswerProps} from '../../interface/interface'

const ShortAnswer:React.FC<IShortAnswerProps>=(props)=>{
    const [selectedId,changeSelectedId]=useState(0);
    function handleSelectedId(id:number){
        // changeSelectedId(id);
        // if(props.OptionMobx){
        //     props.OptionMobx?.setSelectedId(id);
        // }
    }
    return (
        <>
            <List renderHeader={() => props.index+"."+props.content}>
                <TextareaItem placeholder="Please input your points" rows={5} count={100}></TextareaItem>
            </List>
            <WhiteSpace size="lg"/>
         </>
       
  )
}
export default inject('OptionMobx')(withRouter(observer(ShortAnswer)))