import { observable, action } from 'mobx'
import {IQuestion} from './question'
export interface ISurvey{
  id:number;
  name:string;
  questions:Array<IQuestion>
}

export interface ISurveyMobx{
  survey:ISurvey;
  setSurvey(survey:Array<ISurvey>):void;
}

class SurveyMobx {
  @observable survey:Array<ISurvey>;

  constructor() {
    this.survey=[];
  }

  @action
  setSurvey = (survey:Array<ISurvey>):void => {
    this.survey = survey;
  }
}
export default new SurveyMobx();