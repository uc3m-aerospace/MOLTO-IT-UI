import {FORM_DATA} from '../constants'

const FormData = (data) => ({
    type: FORM_DATA,
    payload: {...data}
});

export const sendFormData = (data) => (dispatch) => {
<<<<<<< HEAD
=======
    console.log(data)
>>>>>>> 2c84f0c9035324148407ba22b65462fb7eb25e69
    return dispatch(FormData(...data));
 };
