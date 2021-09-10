import {useField} from "formik";


const TextArea = ({placeholder, className, ...props}) => {
    const [field, meta, actions] = useField(props);
    return (
        <textarea
            placeholder={placeholder}
            className={className}
            {...field}
            {...props}
        ></textarea>
    )
}


export default TextArea;