import { observable, action } from 'mobx'
import {ISurvey,ISurveyMobx} from '../interface/interface'

class SurveyMobx implements ISurveyMobx{
  @observable surveys:Array<ISurvey>;
  @observable selectedSurvey:ISurvey;

  constructor() {
    this.surveys=[];
    this.selectedSurvey={id:0,name:'',order:0,questions:[]};
  }

  @action
  setSurveys = (surveys:Array<ISurvey>):void => {
    this.surveys = surveys;
  }
  @action
  setSelectedSurvey = (survey:ISurvey):void => {
    this.selectedSurvey = survey;
  }
}
export default new SurveyMobx();