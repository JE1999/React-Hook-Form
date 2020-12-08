import React, { memo } from 'react'
import InputMask from "react-input-mask";

const InputMaskForm = ({ label, mask, name, type="text", register, messageError }) => (
    <div className="form-group col-md-6">
        <label>{label}</label>
        <InputMask 
            mask={mask}
            maskChar=""
            className="form-control"
            name={name}
            type={type}
        >
            {(inputProps) =>
                <input 
                    ref={register()}
                    {...inputProps} 
                />
            }
        </InputMask>
        <p className="text-danger">{messageError}</p>
    </div>
)

export default memo(InputMaskForm)