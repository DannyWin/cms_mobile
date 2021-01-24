import { observable, action } from "mobx";
import { IOptionMobx, ISelectedOption } from "../interface/interface";

class OptionMobx implements IOptionMobx {
    @observable selectedId: number | Array<number>;
    // @observable selectedIds: Array<number>;
    @observable ids: Array<number | Array<number>>;
    @observable selectedOptions: Array<ISelectedOption>;

    constructor() {
        this.selectedId = 0;
        //this.selectedIds = [];
        this.ids = [];
        this.selectedOptions = [];
    }
    @action
    setSelectedId = (id: number | Array<number>): void => {
        this.selectedId = id;
    };
    @action
    setSelectedOption = (selectedOption: ISelectedOption): void => {
        const idx = this.selectedOptions.findIndex(
            (o) => o.qid === selectedOption.qid
        );
        if (idx === -1) {
            this.selectedOptions.push(selectedOption);
        } else {
            this.selectedOptions[idx].oids = selectedOption.oids;
        }
    };
    // @action
    // setSelectedIds = (ids: Array<number>): void => {
    //   this.selectedIds = ids;
    // }
    @action
    addIds = (): void => {
        this.ids.push(this.selectedId);
    };
}
export default new OptionMobx();
