import React, { memo } from 'react'

const Form = ({ children, handleSubmit, onSubmit }) => (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">

            { children }
        
        </div>
    </form>
)

export default memo(Form)