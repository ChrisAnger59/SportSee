import Label from '../../atoms/Label'
import Input from '../../atoms/Input'
import './FormField.css'


function FormField({ label, id, name, className='', ...inputProps }) {
    const inputId = id ?? name

    return (
        <div className={`form-field ${className}`.trim() }>
            <Label htmlFor={inputId}>{label}</Label>
            <Input id={inputId} name={name} {...inputProps} />
        </div>
    )
}

export default FormField