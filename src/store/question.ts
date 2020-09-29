import { observable, action } from 'mobx'
import SurveyMobx from './survey'
export interface IQuestion{
  id:number;
  content:string;
  prev:number;
  next:number;
}

export interface IQuestionMobx{
  surveyId:number;
  questions:Array<IQuestion>;
  setSurveyId(id:number):void;
  setQuestion(questions:Array<IQuestion>):void;
}

class QuestionMobx {
  @observable surveyId:number;
  @observable questions:Array<IQuestion>;

  constructor() {
    this.surveyId = 0;
    this.questions=[];
  }

  @action
  setSurveyId = (id:number):void => {
    this.surveyId = id;
  }
  @action
  setQuestion = (questions:Array<IQuestion>):void => {
    this.questions = questions;
    SurveyMobx.survey.filter(sur=>sur.id===this.surveyId)[0].questions=questions;
  }
}
export default new QuestionMobx();