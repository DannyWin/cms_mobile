import React,{useState,useEffect} from 'react';
import {WhiteSpace,WingBlank,Button,Radio, List} from 'antd-mobile'
import {withRouter} from 'react-router';
import {observer,inject} from 'mobx-react'
import {ISurveyProps,ISurvey} from '../interface/interface'
import StepLayout from '../layout/StepLayout'
import {apiGetSurvey} from '../api/api'


const Survey:React.FC<ISurveyProps>=(props)=>{
    let [checkedId,checkChange]=useState(0);
    useEffect(()=>{
        (async function GetSurvey(){
            const result=await apiGetSurvey();
            if(result.status===200){
                
                props.SurveyMobx!.setSurveys(result.data.data.survey as ISurvey[]);
            }
        })();
    },[props.SurveyMobx]);

    function selectSurvey(){
        if(props.SurveyMobx && checkedId>0){
            const surveySelected=props.SurveyMobx.surveys.find(s=>s.id===checkedId);
            if(surveySelected){
                props.SurveyMobx!.setSelectedSurvey(surveySelected);
                props.QuestionMobx!.setQuestions(surveySelected.questions);
                props.QuestionMobx!.setSurveyId(surveySelected.id);
            }
            if(surveySelected && surveySelected.questions.length){
                props.history.push(`/survey/${checkedId}/question/${surveySelected.questions[0].id}`);
            }else{
                props.history.push(`/notFound`);
            }
        }
    }

    return (
        <StepLayout title="Survey" current={1}>
            <WingBlank style={{flex:1}}>
                <List>
                     { props.SurveyMobx!.surveys.map(survey=><Radio.RadioItem key={survey.id} checked={checkedId===survey.id} onChange={() => checkChange(survey.id)}>{survey.name}</Radio.RadioItem>)}
                </List>

                <Button type="primary" onClick={()=>selectSurvey()}>确定</Button>
                <WhiteSpace size="lg" />
            </WingBlank>
        </StepLayout>
    )
}
export default inject('SurveyMobx','QuestionMobx')(observer(withRouter(Survey)))