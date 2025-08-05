
import axios from "../../Utils/Axios";

import  { setUsers } from '../Reducer/UserReducer'

export const fetchUsers =  () =>  async (dispatch) => {
        try {
            const response = await axios.get('/users');
            dispatch(setUsers(response.data));
        } catch (error) {
            dispatch({
                type: 'FETCH_USERS_FAILURE',
                payload: error.message
            });
        }
    }
