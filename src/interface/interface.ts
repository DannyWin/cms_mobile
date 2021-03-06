import { RouteComponentProps } from "react-router";

//view
export interface ILoginProps extends RouteComponentProps {
    MyMobx?: IMobx;
}
export interface ISurveyProps extends RouteComponentProps {
    SurveyMobx?: ISurveyMobx;
    QuestionMobx?: IQuestionMobx;
}
export interface IQuestionListProps extends IQuestion, RouteComponentProps {
    surveyId: number;
    surveyName: string;
    QuestionMobx?: IQuestionMobx;
    OptionMobx?: IOptionMobx;
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
export interface IShortAnswerProps extends IQuestion, RouteComponentProps {
    OptionMobx?: IOptionMobx;
}
export interface IEssayProps extends IQuestion, RouteComponentProps {
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
    startDate?: Date;
    endDate?: Date;
    submitCount: number;
    questions: Array<IQuestion>;
}

export interface IQuestion {
    id: number;
    index: number;
    order: number;
    content: string;
    options: Array<IOption>;
    sort: { id: number };
    prev: number;
    next: number;
    layout: number;
    form: any;
}
export interface IOption {
    id: number;
    order: number;
    content: string;
    note: string;
}

export interface ISelectedOption {
    qid: number;
    oids: number[] | string[];
    startDate?: Date;
    endDate?: Date;
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
    survey: ISurvey | null;
    questions: Array<IQuestion>;
    setSurvey(survey: ISurvey): void;
    setQuestions(questions: Array<IQuestion>): void;
}
export interface ISingleSelectMobx {}
export interface IOptionMobx {
    selectedId: number | Array<number>;
    selectedOptions: Array<ISelectedOption>;
    //selectedIds:Array<number>;
    ids: Array<number | Array<number>>;
    setSelectedId(id: number | Array<number>): void;
    //setSelectedIds(ids:Array<number>):void;
    addIds(): void;
    setSelectedOption(selectedOption: ISelectedOption): void;
}
