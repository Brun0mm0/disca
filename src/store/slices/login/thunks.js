import { apiLogin } from "../../../api";
import { loginRequest, loginSuccess, loginFailure, logout } from "./loginSlice";

export const loginUser = (credential) => async (dispatch) => {
    dispatch(loginRequest());
    const {data} = await apiLogin.post('',credential)
        .catch( err => console.error(err.response.data))
    console.log(data)
}
