export const getLogin = (state, data) => {
    state.loginResult.msg = data.msg;
    state.loginResult.success = data.success;
}
export const regisResult = (state, data) => {
    state.regisResult.code = data.code;
    state.regisResult.success = data.success;
}