import React from 'react';
import {WhiteSpace,WingBlank,Card} from 'antd-mobile'
import {observer,inject} from 'mobx-react'
import {IQuestionListProps} from '../interface/interface'
import {questionLayout} from '../util/const';
import PlainLayout from '../layout/question/PlainLayout';
import ListLayout from '../layout/question/ListLayout';
import CardLayout from '../layout/question/CardLayout';

const QuestionList:React.FC<IQuestionListProps>=(props)=>{
    return (
        // <StepLayout title="Question" current={1}>
        //     <WingBlank style={{flex:1}}>
        //     <Card>
        //         <Card.Header title={props.surveyName}/>
        //         <Card.Body>
        //             {props.QuestionMobx!.questions.map((question,index)=>{
        //               return (question.sort.id===questionSort.singleSelect && <SingleSelect {...{...question,index:index+1}} ></SingleSelect>)
        //                   || (question.sort.id===questionSort.multiSelect && <MultiSelect {...{...question,index:index+1}} ></MultiSelect>)
        //                   || (question.sort.id===questionSort.shortAnswer && <ShortAnswer {...{...question,index:index+1}} ></ShortAnswer>)
        //                   || (question.sort.id===questionSort.essay && <Essay {...{...question,index:index+1}} ></Essay>)
                      
        //             })}
        //         </Card.Body>
        //         {/* <Card.Footer content={<Button type="ghost" onClick={()=>goBack()}>Back</Button>} extra={<Button type="primary" onClick={()=>goNext()}>Next</Button>} /> */}
        //     </Card>
        //     <WhiteSpace size="lg" />
        //         {/* <QuestionFooter></QuestionFooter> */}
        //     </WingBlank>
        // </StepLayout>
        <>
            {props.QuestionMobx!.questions.map((question,index)=>{
                const newProps={...question,index:index+1};
                return (question.layout===questionLayout.plain && <PlainLayout {...newProps} />)
                    || (question.layout===questionLayout.list && <ListLayout {...newProps} />)
                    || (question.layout===questionLayout.card && <CardLayout {...newProps} />)
                
            })}
        </>
    )
}
export default inject('QuestionMobx')(observer(QuestionList))