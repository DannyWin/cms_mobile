import React, { useState } from 'react';
import {withRouter,RouteComponentProps} from 'react-router';
import {observer,inject} from 'mobx-react'
import {Card,Button,WhiteSpace,List,Radio} from 'antd-mobile'
import {ButtonProps} from 'antd-mobile/lib/button/index'
import { CardHeaderProps } from 'antd-mobile/lib/card/CardHeader';
import {ISingleSelectProps,IQuestionMobx,IQuestion,IOption} from '../../interface/interface'

const SingleSelect:React.FC<ISingleSelectProps>=(props)=>{
    const [selectedId,changeSelectedId]=useState(0);
    function handleSelectedId(id:number){
        changeSelectedId(id);
        if(props.OptionMobx){
            props.OptionMobx?.setSelectedId(id);
        }
    }
    return (
        <Card>
            <Card.Header/>
            <Card.Body>
            <List renderHeader={() => props.content}>
                {props.options.map(option => (
                    <Radio.RadioItem key={option.id} checked={selectedId === option.id} onChange={() => handleSelectedId(option.id)}>
                        {option.content}
                    </Radio.RadioItem>
                ))}
            </List>
            </Card.Body>
            {/* <Card.Footer content={<Button type="ghost" onClick={()=>goBack()}>Back</Button>} extra={<Button type="primary" onClick={()=>goNext()}>Next</Button>} /> */}
        </Card>
       
  )
}
export default inject('OptionMobx')(observer(withRouter(SingleSelect)))