import React, { memo } from 'react'

const Input = ({ label, name, type="text", register, messageError }) => (
    <div className="form-group col-md-6">
        <label>{label}</label>
        <input 
            className="form-control"
            name={name}
            type={type}
            ref={register()}
        />
        <p className="text-danger">{messageError}</p>
    </div>
)

export default memo(Input)