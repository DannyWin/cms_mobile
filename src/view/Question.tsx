import React,{useState,useEffect} from 'react';
import {WhiteSpace,WingBlank,Card} from 'antd-mobile'
import {withRouter} from 'react-router';
import {observer,inject} from 'mobx-react'
import {IQuestionProps,IQuestion} from '../interface/interface'
import StepLayout from '../layout/StepLayout'
import QuestionFooter from '../component/QuestionFooter';
import SingleSelect from '../component/question/SingleSelect';
import MultiSelect from '../component/question/MultiSelect';
import {questionSort} from '../util/const';

const Question:React.FC<IQuestionProps>=(props)=>{
    const [question,changeQuestion]=useState<IQuestion>({id:0,layout:0,index:0,order:0,content:'',options:[],sort:{id:0},prev:0, next:0,form:null});

    useEffect(()=>{
        const qu=props.QuestionMobx.questions.find(q=>q.id=== parseInt(props.match.params.qid))
        if(qu){
            changeQuestion(qu);       
        }
    },[]);
    return (
        <StepLayout title="Question" current={1}>
            <WingBlank style={{flex:1}}>
            <Card>
                <Card.Header {...props.question}/>
                <Card.Body>
                    {
                          (question.sort.id===questionSort.singleSelect && <SingleSelect {...question} ></SingleSelect>)
                       || (question.sort.id===questionSort.multiSelect && <MultiSelect {...question} ></MultiSelect>)
                    }
                </Card.Body>
                {/* <Card.Footer content={<Button type="ghost" onClick={()=>goBack()}>Back</Button>} extra={<Button type="primary" onClick={()=>goNext()}>Next</Button>} /> */}
            </Card>
                <WhiteSpace size="lg" />
                <QuestionFooter prev={question.prev} next={question.next}></QuestionFooter>
            </WingBlank>
        </StepLayout>
    )
}
export default inject('QuestionMobx')(observer(withRouter(Question)))