import { observable, action } from 'mobx'
class Base {
  @observable token:string|null;

  constructor() {
    this.token = window.localStorage.getItem('token');
  }

  @action
  saveToken = (token:string) => {
    this.token = token;
    window.localStorage.setItem('token',token);
  }
  getToken=()=>this.token;
}
const BaseMobx = new Base();
export { BaseMobx };


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