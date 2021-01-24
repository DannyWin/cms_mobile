import { observable, action } from "mobx";
import SurveyMobx from "./survey";
import { IQuestion, IQuestionMobx, ISurvey } from "../interface/interface";

class QuestionMobx implements IQuestionMobx {
    @observable survey: ISurvey | null;
    @observable questions: Array<IQuestion>;
    constructor() {
        this.survey = null;
        this.questions = [];
    }
    @action
    setSurvey = (survey: ISurvey): void => {
        this.survey = survey;
    };
    @action
    setQuestions = (questions: Array<IQuestion>): void => {
        this.questions = questions;
        console.log(questions);
        //SurveyMobx.surveys.filter(survey=>survey.id===this.surveyId)[0].questions=questions;
    };
}
export default new QuestionMobx();
