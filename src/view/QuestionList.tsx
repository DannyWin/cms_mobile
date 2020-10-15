import React from 'react';
import {Flex,WhiteSpace,WingBlank,Button, InputItem,Card} from 'antd-mobile'
import {withRouter,RouteComponentProps} from 'react-router';
import {CustomIcon} from '../component/CustomIcon'
import {observer,inject} from 'mobx-react'
import {IQuestionListProps,IQuestionMobx,IQuestion} from '../interface/interface'
import StepLayout from '../layout/StepLayout'
import QuestionFooter from '../component/QuestionFooter';
import SingleSelect from '../component/question/SingleSelect';
import MultiSelect from '../component/question/MultiSelect';


const QuestionList:React.FC<IQuestionListProps>=(props)=>{
    function goBack(){}
    function goNext(){}
  
    return (
        <StepLayout title="Question" current={1}>
            <WingBlank style={{flex:1}}>
            <Card>
                <Card.Header title={props.surveyName}/>
                <Card.Body>
                    {props.questions.map(question=>{
                      return (question.type===0 && <SingleSelect {...question} ></SingleSelect>)
                          || (question.type===1 && <MultiSelect {...question} ></MultiSelect>)
                      
                    })}
                </Card.Body>
                {/* <Card.Footer content={<Button type="ghost" onClick={()=>goBack()}>Back</Button>} extra={<Button type="primary" onClick={()=>goNext()}>Next</Button>} /> */}
            </Card>
                <WhiteSpace size="lg" />
                {/* <QuestionFooter></QuestionFooter> */}
            </WingBlank>
        </StepLayout>
    )
}
export default inject('QuestionMobx')(observer(QuestionList))