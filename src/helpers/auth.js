import axios from 'axios';
import setAuthToken from './setAuthToken'
import jwtDecode from 'jwt-decode';


export const signUpUser = (data, history) => dispatch => {
    axios.post("/api/users/signup", data)
            .then(res => history.push('/login'))
            .catch(err => dispatch({
                type: "GET_ERRORS",
                payload: err.response.data
            }))
};

export const loginUser = userData => dispatch => {
    axios.post("/api/users/login", data)
        .then(res => {
            const {token} = res.data;
            localStorage.setItem("jwtToken", token)

            setAuthToken(token);

            const decoded = jwtDecode(token);
            
            dispatch(setCurrentUser(decoded));
        })
        .catch(err => dispatch({
            type = "GET_ERRORS",
            payload: err.response.data
        }))
};


export const logoutUser = () => dispatch => {

    localStorage.removeItem("jwtToken");

    setAuthToken(false);

    dispatch(setCurrentUser({}));

};


