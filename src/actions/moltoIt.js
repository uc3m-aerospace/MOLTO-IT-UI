import {FORM_DATA} from '../constants'

const FormData = (data) => ({
    type: FORM_DATA,
    payload: {...data}
});

export const sendFormData = (data) => (dispatch) => {
    return dispatch(FormData(...data));
 };
