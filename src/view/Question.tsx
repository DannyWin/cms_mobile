import React,{useState,useEffect} from 'react';
import {Flex,WhiteSpace,WingBlank,Button, InputItem,Card} from 'antd-mobile'
import {withRouter,RouteComponentProps} from 'react-router';
import {CustomIcon} from '../component/CustomIcon'
import {observer,inject} from 'mobx-react'
import {IQuestionProps,IQuestionMobx,IQuestion} from '../interface/interface'
import StepLayout from '../layout/StepLayout'
import QuestionFooter from '../component/QuestionFooter';
import SingleSelect from '../component/question/SingleSelect';
import MultiSelect from '../component/question/MultiSelect';


const Question:React.FC<IQuestionProps>=(props)=>{
    const [question,changeQuestion]=useState<IQuestion>({id:0,order:0,content:'',options:[],type:0,prev:0, next:0});

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
                          (question.type===0 && <SingleSelect {...question} ></SingleSelect>)
                       || (question.type===1 && <MultiSelect {...question} ></MultiSelect>)
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