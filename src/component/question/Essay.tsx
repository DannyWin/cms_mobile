import React, { useState } from 'react';
import {withRouter} from 'react-router';
import {observer,inject} from 'mobx-react'
import {Card,TextareaItem,List,Radio,WhiteSpace} from 'antd-mobile'
import {IEssayProps} from '../../interface/interface'

const Essay:React.FC<IEssayProps>=(props)=>{
    const [selectedId,changeSelectedId]=useState(0);
    function handleSelectedId(id:number){
        changeSelectedId(id);
        if(props.OptionMobx){
            props.OptionMobx?.setSelectedId(id);
        }
    }
    return (
        <>
        {/* <Card>
            <Card.Header/>
            <Card.Body> */}
            <List renderHeader={() => props.index+"."+props.content}>
                {/* {props.options.map(option => (
                    <Radio.RadioItem key={option.id} checked={selectedId === option.id} onChange={() => handleSelectedId(option.id)}>
                        {option.content}
                    </Radio.RadioItem>
                ))} */}
                <TextareaItem placeholder="Please input your points" rows={5} count={200}></TextareaItem>
            </List>
            {/* </Card.Body> */}
            {/* <Card.Footer content={<Button type="ghost" onClick={()=>goBack()}>Back</Button>} extra={<Button type="primary" onClick={()=>goNext()}>Next</Button>} /> */}
        {/* </Card> */}
         </>
       
  )
}
export default inject('OptionMobx')(withRouter(observer(Essay)))