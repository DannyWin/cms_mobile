import axios from "axios";
import { ISelectedOption } from "../interface/interface";

axios.defaults.baseURL = "http://127.0.0.1:7001";
axios.defaults.timeout = 20000;

axios.interceptors.request.use(
    (config) => {
        // var curTime = new Date();
        // var expiretime = new Date(Date.parse(store.state.tokenExpire))

        // if (store.state.token && (curTime < expiretime && store.state.tokenExpire)) {
        //     // 判断是否存在token，如果存在的话，则每个http header都加上token

        // }
        config.headers.Authorization =
            "Bearer " + window.localStorage.getItem("token"); //store.state.token;
        //saveRefreshTime();
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);
axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // 超时请求处理
        var originalRequest = error.config;
        if (
            error.code === "ECONNABORTED" &&
            error.message.indexOf("timeout") !== -1 &&
            !originalRequest._retry
        ) {
            // Vue.prototype.$message({
            //     message: '请求超时！',
            //     type: 'error'
            // });

            originalRequest._retry = true;
            return null;
        }
        if (error.response) {
            if (error.response.status === 401) {
                //var currentTime = new Date()
                //var refreshTime = new Date(Date.parse(window.localStorage.refreshTime))
                // 在用户操作的活跃期内
                // if (window.localStorage.refreshTime && (currentTime <= refreshTime)) {
                //     return  refreshToken({token: window.localStorage.token}).then((res) => {
                //         if (res.success) {
                //             // Vue.prototype.$message({
                //             //     message: 'refreshToken success! loading data...',
                //             //     type: 'success'
                //             // });
                //             var token = res.response.token;
                //             store.commit("saveToken", token);
                //             var curTime = new Date();
                //             var expiresTimeStamp=JSON.parse(decodeURIComponent(escape(window.atob(token.split('.')[1])))).aud.exp;
                //             //var expireDate = new Date(curTime.setSeconds(curTime.getSeconds() + res.expiresIn));
                //             var expireDate = new Date(parseInt(expiresTimeStamp));
                //             store.commit("saveTokenExpire", expireDate);
                //             window.localStorage.refreshTime = new Date(parseInt(expiresTimeStamp+60000));//expireDate.setMinutes(expireDate.getMinutes() + 1);
                //             error.config.__isRetryRequest = true;
                //             error.config.headers.Authorization = 'Bearer ' + token;
                //             return axios(error.config);
                //         } else {
                //             // 刷新token失败 清除token信息并跳转到登录页面
                //             ToLogin()
                //         }
                //     });
                // } else {
                //     // 返回 401，并且不知用户操作活跃期内 清除token信息并跳转到登录页面
                //     ToLogin()
                // }
            }
            // 403 无权限
            if (error.response.status === 403) {
                // Vue.prototype.$message({
                //     message: '失败！该操作无权限',
                //     type: 'error'
                // });
                return null;
            }
            if (error.response.status >= 300 && error.response.status < 500) {
                return error.response;
            } else {
                return Promise.reject(error);
            }
        }
        return ""; // 返回接口返回的错误信息
    }
);

// const ToLogin = params => {
//     store.commit("saveToken", "");
//     store.commit("saveTokenExpire", "");
//     store.commit("saveTags", "");
//     //window.localStorage.removeItem('user');
//     //window.localStorage.removeItem('NavigationBar');
//     window.localStorage.clear();
//     router.replace({
//         path: "/login",
//         query: {redirect: router.currentRoute.fullPath}
//     });

//      window.location.reload()

// };

export const saveRefreshTime = (params: any) => {
    let nowTime = new Date();
    let lastRefreshTime = window.localStorage.refreshTime
        ? new Date(window.localStorage.refreshTime)
        : new Date(-1);
    let expireTime = new Date(Date.parse(window.localStorage.tokenExpire));

    let refreshCount = 1; //滑动系数
    if (lastRefreshTime >= nowTime) {
        //token在活跃期内
        lastRefreshTime = nowTime > expireTime ? nowTime : expireTime;
        lastRefreshTime.setMinutes(lastRefreshTime.getMinutes() + refreshCount);
        window.localStorage.refreshTime = lastRefreshTime;
    } else {
        window.localStorage.refreshTime = new Date(-1);
    }
};

interface ILoginParams {
    uid: string;
    pwd: string;
}
interface IAnswerParams {
    surveyId: number;
    selectedOptions: ISelectedOption[];
}

export const apiLogin = async (params: ILoginParams) =>
    await axios.post("/login", params).then((res) => res);
export const apiGetSurvey = async () =>
    await axios.get(`/survey`, {}).then((res) => res); //获取该用户的survey列表
export const apiGetQuestion = async (surveyId: number) =>
    await axios.get(`/survey/${surveyId}/question`, {}).then((res) => res); //获取该用户的question列表
export const apiSaveAnswer = async (params: IAnswerParams) =>
    await axios
        .post(`/survey/${params.surveyId}/answer`, params.selectedOptions)
        .then((res) => res);
