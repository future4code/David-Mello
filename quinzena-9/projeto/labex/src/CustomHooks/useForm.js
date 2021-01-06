import {useState} from 'react'

export default function useForm(initialState) {
    const [form, setForm] = useState(initialState);

   const onChange = (value, name) => {
        setForm({...form, [name]: value});
    };
    

    return {form, onChange};
}
