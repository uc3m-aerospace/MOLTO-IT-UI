import {FORM_DATA, RESET_DATA} from '../constants'

const FormData = (data) => ({
    type: FORM_DATA,
    payload: {...data}
});

export const sendFormData = (data) => (dispatch) => {
    console.log(data)
    return dispatch(FormData(...data));
 };
