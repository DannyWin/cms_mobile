import React,{useState,useEffect} from 'react';
import {WhiteSpace,WingBlank,Button,Radio, List, Toast, Flex} from 'antd-mobile'
import {withRouter} from 'react-router';
import {observer,inject} from 'mobx-react'
import {ISurveyProps,ISurvey,IQuestion} from '../interface/interface'
import StepLayout from '../layout/StepLayout'
import {apiGetSurvey,apiGetQuestion} from '../api/api'
import { formatDate } from '../util/dateHelper';

const Survey:React.FC<ISurveyProps>=(props)=>{
    let [checkedId,checkChange]=useState(0);
    useEffect(()=>{
        (async function GetSurvey(){
            const result=await apiGetSurvey();
            if(result.status===200){
                
                props.SurveyMobx!.setSurveys(result.data.data.surveys as ISurvey[]);
                console.log(props.SurveyMobx!.surveys);
            }
        })();
    },[]);

    async function selectSurvey(){
        if(checkedId>0){
            const result=await apiGetQuestion(checkedId);
            if(result.status===200){
                const selectedSurvey=props.SurveyMobx!.surveys.find(s=>s.id===checkedId);
                if(selectedSurvey){
                    props.SurveyMobx!.setSelectedSurvey(selectedSurvey);
                    props.QuestionMobx!.setSurvey(selectedSurvey);
                }
                props.QuestionMobx!.setQuestions(result.data.data.questions as IQuestion[]);
                console.log(props.QuestionMobx!.questions);
                props.history.push(`/survey/${checkedId}/question`);
            }
        }else{
            Toast.success('Please select a survey!',1.5);
        }
        // if(props.SurveyMobx && checkedId>0){
        //     const surveySelected=props.SurveyMobx.surveys.find(s=>s.id===checkedId);
        //     if(surveySelected){
        //         props.SurveyMobx!.setSelectedSurvey(surveySelected);
        //         props.QuestionMobx!.setQuestions(surveySelected.questions);
        //         props.QuestionMobx!.setSurveyId(surveySelected.id);
        //     }
        //     if(surveySelected && surveySelected.questions.length){
        //         props.history.push(`/survey/${checkedId}/question/${surveySelected.questions[0].id}`);
        //     }else{
        //         props.history.push(`/notFound`);
        //     }
        // }
    }

    return (
        <StepLayout title="Survey" current={1}>
            <WingBlank style={{flex:1}}>
                <List>
                     { props.SurveyMobx!.surveys.map(survey=>(
                     <Radio.RadioItem key={survey.id} checked={checkedId===survey.id} onChange={() => checkChange(survey.id)}>
                         {survey.name}
                         <div  onClick={() => checkChange(survey.id)}>
                         <List.Item.Brief>{'提交时限:'+formatDate(survey.startDate!)+' - '+formatDate(survey.endDate!)}</List.Item.Brief>
                         <List.Item.Brief>{'提交次数:'+survey.submitCount}</List.Item.Brief>
                         </div>
                    </Radio.RadioItem>))}
                </List>
                <WhiteSpace size="lg" />
                <Flex justify="center">
                    <Button inline type="primary" disabled={checkedId<=0} onClick={()=>selectSurvey()}>Confirm</Button>
                </Flex>
            </WingBlank>
        </StepLayout>
    )
}
export default inject('SurveyMobx','QuestionMobx')(withRouter(observer(Survey)))