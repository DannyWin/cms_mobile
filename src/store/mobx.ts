import { observable, action } from 'mobx'
class Mobx {
  @observable number:number;

  constructor() {
    this.number = 0
  }

  @action
  addNumber = (number:number) => {
    this.number = number
  }

}
const MyMobx = new Mobx();
export { MyMobx };


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