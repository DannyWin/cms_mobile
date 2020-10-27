import { RouteComponentProps } from "react-router";

//view
export interface ILoginProps extends RouteComponentProps {
    MyMobx?: IMobx;
}
export interface ISurveyProps extends RouteComponentProps {
    id: number;
    SurveyMobx?: ISurveyMobx;
    QuestionMobx: IQuestionMobx;
}
export interface IQuestionListProps extends RouteComponentProps {
    surveyId: number;
    surveyName: string;
    questions: Array<IQuestion>;
}
export interface IQuestionProps extends RouteComponentProps<ParamsInfo> {
    id: number;
    QuestionMobx: IQuestionMobx;
    question: IQuestion;
}
export interface ParamsInfo {
    sid: string;
    qid: string;
}

export interface IMainProps extends RouteComponentProps, ISurveyProps {}

//component
export interface ISingleSelectProps extends IQuestion, RouteComponentProps {
    OptionMobx?: IOptionMobx;
}
export interface IMultiSelectProps extends IQuestion, RouteComponentProps {
    OptionMobx?: IOptionMobx;
}

export interface IQuestionFooterProps extends RouteComponentProps {
    OptionMobx?: IOptionMobx;
    prev: number;
    next: number;
}

export interface ISurvey {
    id: number;
    order: number;
    name: string;
    questions: Array<IQuestion>;
}

export interface IQuestion {
    id: number;
    order: number;
    content: string;
    options: Array<IOption>;
    type: number;
    prev: number;
    next: number;
}
export interface IOption {
    id: number;
    order: number;
    content: string;
}

//mobx

export interface IMobx {
    number: number;
    addNumber(number: number): void;
}
export interface ISurveyMobx {
    surveys: Array<ISurvey>;
    selectedSurvey: ISurvey;
    setSurveys(surveys: Array<ISurvey>): void;
    setSelectedSurvey(survey: ISurvey): void;
}
export interface IQuestionMobx {
    surveyId: number;
    questions: Array<IQuestion>;
    setSurveyId(id: number): void;
    setQuestions(questions: Array<IQuestion>): void;
}
export interface ISingleSelectMobx {}
export interface IOptionMobx {
    selectedId: number | Array<number>;
    //selectedIds:Array<number>;
    ids: Array<number | Array<number>>;
    setSelectedId(id: number | Array<number>): void;
    //setSelectedIds(ids:Array<number>):void;
    addIds(): void;
}
