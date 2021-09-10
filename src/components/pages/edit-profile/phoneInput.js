import React from 'react'
import PhoneInput from 'react-phone-input-2'
import {useField} from "formik";
import 'react-phone-input-2/lib/style.css'

const InputPhone = () => {

    const [field, meta, {setValue, setTouched}] = useField({name: 'phone'});
    return (
        <>
            <PhoneInput
                enableAreaCodes={true}
                inputClass="text-black w-full bg-none"
                dropdownClass="bg-black"
                placeholder="Введите ваш номер телефона"
                value={field.value}
                onChange={phone => setValue(phone)}
                onBlur={() => setTouched(true)}
            />
            {meta.touched && meta.error && <div className="text-white">{meta.error}</div>}
        </>
    )
}
export default InputPhone;