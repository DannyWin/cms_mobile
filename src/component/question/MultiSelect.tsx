import React, { useState } from 'react';
import {withRouter,RouteComponentProps} from 'react-router';
import {Card,Button,WhiteSpace,List,Checkbox} from 'antd-mobile'
import {observer,inject} from 'mobx-react'
import {ButtonProps} from 'antd-mobile/lib/button/index'
import { CardHeaderProps } from 'antd-mobile/lib/card/CardHeader';
import {IMultiSelectProps,IQuestionMobx,IQuestion,IOption} from '../../interface/interface'


const MultiSelect:React.FC<IMultiSelectProps>=(props)=>{
    //const [selectedIds,changeSelectedId]=useState<Array<number>>([]);
    let selectedIds:Array<number>=[];
    function changeSelectedId(id:number){
        const index=selectedIds.indexOf(id);
        if(index===-1){
            selectedIds.push(id);
        }else{
            selectedIds.splice(index,1);
        }
        if(props.OptionMobx){
            props.OptionMobx.setSelectedId(selectedIds);
        }
    }

    return (
        <Card>
            <Card.Header/>
            <Card.Body>
            <List renderHeader={() => props.content}>
                {props.options.map(option => (
                    <Checkbox.CheckboxItem key={option.id} checked={selectedIds.includes(option.id)} onChange={() => changeSelectedId(option.id)}>
                        {option.content}
                    </Checkbox.CheckboxItem>
                ))}
            </List>
            </Card.Body>
            {/* <Card.Footer content={<Button type="ghost" onClick={()=>goBack()}>Back</Button>} extra={<Button type="primary" onClick={()=>goNext()}>Next</Button>} /> */}
        </Card>
       
  )
}
export default inject('OptionMobx')(observer(withRouter(MultiSelect)))