import React from 'react';
import {Flex,WhiteSpace,WingBlank,Button, InputItem} from 'antd-mobile'
import {withRouter,RouteComponentProps} from 'react-router';
import {CustomIcon} from '../component/CustomIcon'
import {observer,inject} from 'mobx-react'
import {IQuestionMobx} from '../store/question'
import StepLayout from '../layout/StepLayout'
import QuestionFooter from '../component/QuestionFooter';


interface IProps extends RouteComponentProps{
    id:number;
    QuestionMobx?:IQuestionMobx
}
const Question:React.FC<IProps>=(props)=>{

    return (
        <StepLayout title="Question" current={1}>
            <WingBlank style={{flex:1}}>
                
                
                <WhiteSpace size="lg" />
                <QuestionFooter></QuestionFooter>
            </WingBlank>
        </StepLayout>
    )
}
export default inject('QuestionMobx')(observer(Question))