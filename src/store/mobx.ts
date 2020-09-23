import { observable, action } from 'mobx'

export interface IMobx{
  number: number;
  addNumber(number: number):void;
}

class Mobx implements IMobx{
  @observable number:number;

  constructor() {
    this.number = 0
  }

  @action
  addNumber = (number:number):void => {
    this.number = number
  }

}
export default new Mobx();


// import { observable, computed, action, decorate } from 'mobx';

// class appStore {
//  // state
//   appName = 'app1';
//   appBaseData = {};

// // getter
//   get skinWindow() {
//       return {
//         width: this.appName,
//         height: this.appBaseData 
//       };
//   }

// // action
//   setAppAuto(payload) {
//     this.appIsAuto = payload;
//   }
// }

// decorate(appStore, {
//   mainWindowHandle: observable,
//   contentWindowHandle: observable,
//   skinWindow: computed,
//   setAppAuto: action
// });

// export default appStore;