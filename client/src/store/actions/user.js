import axios from 'axios';
import * as actionType from './actionTypes';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/auth/current_user');
    dispatch ({ type:actionType.FETCH_USER,  payload: res.data  });
}

export const handleToken = token => async dispatch =>{
    const res = await axios.post('/api/stripe', token);
    dispatch ({ type:actionType.FETCH_USER,  payload: res.data  });
}