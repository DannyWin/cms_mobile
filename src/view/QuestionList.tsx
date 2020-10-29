import React from 'react';
import {WhiteSpace,WingBlank,Card} from 'antd-mobile'
import {observer,inject} from 'mobx-react'
import {IQuestionListProps} from '../interface/interface'
import StepLayout from '../layout/StepLayout'
import SingleSelect from '../component/question/SingleSelect';
import MultiSelect from '../component/question/MultiSelect';


const QuestionList:React.FC<IQuestionListProps>=(props)=>{
  
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