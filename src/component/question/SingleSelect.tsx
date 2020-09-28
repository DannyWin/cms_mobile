import React, { useState } from 'react';
import {withRouter,RouteComponentProps} from 'react-router';
import {Card,Button,WhiteSpace} from 'antd-mobile'
import {ButtonProps} from 'antd-mobile/lib/button/index'
import { CardHeaderProps } from 'antd-mobile/lib/card/CardHeader';
interface Props extends RouteComponentProps{
    back:string,
    next:string,
    question:Question,
    options:Array<Option>
}
interface Question extends CardHeaderProps
{
    id:number;
}
interface Option extends ButtonProps
{
    id:number,
    content:string,
}

const SingleSelect:React.FC<Props>=(props)=>{
    const [selectedId,changeSelectedId]=useState(0);
    function goBack(){
        props.history.goBack();
    }
    function goNext(){
        //save result
        props.history.push(props.next);
    }
    return (
        <Card>
            <Card.Header {...props.question}/>
            <Card.Body>
                {/* <div>This is content of `Card`</div> */}
                {props.options.map(option=> (<><Button key={option.id} {...option} onClick={()=>changeSelectedId(option.id)}>{option.content}</Button><WhiteSpace size="lg" /></>))}
            </Card.Body>
            <Card.Footer content={<Button type="ghost" onClick={()=>goBack()}>Back</Button>} extra={<Button type="primary" onClick={()=>goNext()}>Next</Button>} />
        </Card>
       
  )
}
export default withRouter(SingleSelect)