import React,{useEffect} from 'react';
import {Flex,WhiteSpace,WingBlank,Button, InputItem} from 'antd-mobile'
import {withRouter,RouteComponentProps} from 'react-router';
import {CustomIcon} from '../component/CustomIcon'
import {observer,inject} from 'mobx-react'
import {ISurvey,ISurveyMobx} from '../store/survey'
import StepLayout from '../layout/StepLayout'
import QuestionFooter from '../component/QuestionFooter';
import {apiGetSurvey} from '../api/api'

interface IProps extends RouteComponentProps{
    id:number;
    SurveyMobx?:ISurveyMobx
}
const Survey:React.FC<IProps>=(props)=>{
    useEffect(()=>{
        (async function GetSurvey(){
            const result=await apiGetSurvey(123);
            if(result.status===200){
                props.SurveyMobx?.setSurvey(result.data as Array<ISurvey>);
            }
        })();
    },[]);

    return (
        <StepLayout title="Survey" current={1}>
            <WingBlank style={{flex:1}}>
                
                
                <WhiteSpace size="lg" />
                <QuestionFooter></QuestionFooter>
            </WingBlank>
        </StepLayout>
    )
}
export default inject('SurveyMobx')(observer(Survey))