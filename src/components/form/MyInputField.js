import React from 'react'
import { useField } from 'formik'

export const MyInputField = ({label=false, labelValue='', ...props}) => {

    const [field, meta] = useField(props)

    return (
        <div error={meta.touched && !!meta.error}>
            {label && <label className='label'>{labelValue}</label>}
            <input
                className='input-field'
                {...field}
                {...props}
            />
            {meta.touched && meta.error ? (
                <label className='error-label' basic color='red'>{meta.error}</label>
            ) : <div className='empty-label'></div>}
        </div>
    )
}