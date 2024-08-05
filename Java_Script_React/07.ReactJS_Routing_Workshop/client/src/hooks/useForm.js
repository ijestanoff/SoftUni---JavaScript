import { useEffect, useState } from 'react';

export function useForm(initialValues, submitCallback) {
    //, options = { reinitializeForm: false }
    const [values, setValues] = useState(initialValues);

    useEffect(() => {
        //if (options.reinitializeForm) {
        setValues(initialValues);
        //}
    }, [initialValues]);
    //, options

    //TODO: add support for checkbox
    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        await submitCallback(values);

        setValues(initialValues); //clear form after use it!!
    };

    return {
        values,
        changeHandler,
        submitHandler,
    };
}