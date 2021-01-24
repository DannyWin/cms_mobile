import React from 'react';
import {WhiteSpace,WingBlank,Card,Button, Flex,Toast} from 'antd-mobile'
import {observer,inject} from 'mobx-react'
import {IQuestionListProps} from '../interface/interface'
import {questionLayout, questionSort} from '../util/const';
import PlainLayout from '../layout/question/PlainLayout';
import ListLayout from '../layout/question/ListLayout';
import CardLayout from '../layout/question/CardLayout';
import StepLayout from '../layout/StepLayout';
import SingleSelect from '../component/question/SingleSelect';
import Essay from '../component/question/Essay';
import MultiSelect from '../component/question/MultiSelect';
import ShortAnswer from '../component/question/ShortAnswer';
import { apiSaveAnswer } from '../api/api';


const QuestionList:React.FC<IQuestionListProps>=(props)=>{
    async function submit(){
        const params={surveyId:props.QuestionMobx!.survey!.id,selectedOptions:props.OptionMobx!.selectedOptions};
        const result=await apiSaveAnswer(params);
        if(result.status===200){
            Toast.success('Save Answer successully!',2);
            // props.history.push('/main');
        }else{
            Toast.fail('Fail to save Answer!',2);
        }
    }



    return (
        <StepLayout title="Question" current={1}>
            <WingBlank style={{flex:1}}>
            <Card>
                <Card.Header title={props.QuestionMobx!.survey?.name}/>
                <Card.Body>
                    {props.QuestionMobx!.questions.map((question,index)=>{
                      return (question.sort.id===questionSort.singleSelect && <SingleSelect key={question.id} {...{...question,index:index+1}} ></SingleSelect>)
                          || (question.sort.id===questionSort.multiSelect && <MultiSelect  key={question.id} {...{...question,index:index+1}} ></MultiSelect>)
                          || (question.sort.id===questionSort.shortAnswer && <ShortAnswer  key={question.id} {...{...question,index:index+1}} ></ShortAnswer>)
                          || (question.sort.id===questionSort.essay && <Essay  key={question.id} {...{...question,index:index+1}} ></Essay>)
                      
                    })}
                </Card.Body>
                {/* <Card.Footer content={<Button type="ghost" onClick={()=>goBack()}>Back</Button>} extra={<Button type="primary" onClick={()=>goNext()}>Next</Button>} /> */}
            </Card>
            <WhiteSpace size="lg" />
                {/* <QuestionFooter></QuestionFooter> */}
                
                <Flex justify="center">
                    <Button inline type="primary" onClick={()=>submit()}>Submit</Button>
                </Flex>
            </WingBlank>
        </StepLayout>
        // <>
        //     {props.QuestionMobx!.questions.map((question,index)=>{
        //         const newProps={...question,index:index+1};
        //         return (question.layout===questionLayout.plain && <PlainLayout  key={question.id} {...newProps} />)
        //             || (question.layout===questionLayout.list && <ListLayout  key={question.id} {...newProps} />)
        //             || (question.layout===questionLayout.card && <CardLayout  key={question.id} {...newProps} />)
                
        //     })}
        // </>
    )
}
export default inject('QuestionMobx','OptionMobx')(observer(QuestionList))