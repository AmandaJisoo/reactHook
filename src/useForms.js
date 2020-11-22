import {useState} from 'react';

export const useForm = (initalValues) => {
    const [values, setValues] = useState(initalValues);

    //return object
    return[values, 
        e => {
        setValues({
            //kepp all the values
            ...values,
            //on change fuction
            [e.target.name]: e.target.value
            });
        }
    ];
}