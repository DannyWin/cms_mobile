import { observable, action } from "mobx";
import SurveyMobx from "./survey";
import { IQuestion, IQuestionMobx } from "../interface/interface";

class QuestionMobx implements IQuestionMobx {
    @observable surveyId: number;
    @observable questions: Array<IQuestion>;

    constructor() {
        this.surveyId = 0;
        this.questions = [];
    }
    @action
    setSurveyId = (id: number): void => {
        this.surveyId = id;
    };
    @action
    setQuestions = (questions: Array<IQuestion>): void => {
        this.questions = questions;
        console.log(questions);
        //SurveyMobx.surveys.filter(survey=>survey.id===this.surveyId)[0].questions=questions;
    };
}
export default new QuestionMobx();
