import React from 'react';
import {WhiteSpace,WingBlank,Card} from 'antd-mobile'
import {observer,inject} from 'mobx-react'
import {IQuestionListProps} from '../interface/interface'
import StepLayout from '../layout/StepLayout'
import SingleSelect from '../component/question/SingleSelect';
import MultiSelect from '../component/question/MultiSelect';
import {questionSort} from '../util/const';

const QuestionList:React.FC<IQuestionListProps>=(props)=>{
    return (
        <StepLayout title="Question" current={1}>
            <WingBlank style={{flex:1}}>
            <Card>
                <Card.Header title={props.surveyName}/>
                <Card.Body>
                    {props.QuestionMobx!.questions.map(question=>{
                      return (question.sort.id===questionSort.singleSelect && <SingleSelect {...question} ></SingleSelect>)
                          || (question.sort.id===questionSort.multiSelect && <MultiSelect {...question} ></MultiSelect>)
                      
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