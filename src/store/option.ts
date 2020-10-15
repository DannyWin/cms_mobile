import { observable, action } from 'mobx'
import { IOptionMobx } from '../interface/interface'


class OptionMobx implements IOptionMobx {
  @observable selectedId: number |Array<number>;
 // @observable selectedIds: Array<number>;
  @observable ids: Array<number|Array<number>>;

  constructor() {
    this.selectedId = 0;
    //this.selectedIds = [];
    this.ids = [];
  }
  @action
  setSelectedId = (id: number|Array<number>): void => {
    this.selectedId = id;
  }
  // @action
  // setSelectedIds = (ids: Array<number>): void => {
  //   this.selectedIds = ids;
  // }
  @action
  addIds = (): void => {
    this.ids.push(this.selectedId);
  }
}
export default new OptionMobx();