import React, { memo } from 'react'

const Button = ({ label="Enviar" }) => (
    <button 
        className="btn btn-block btn-success"
        type="submit"
    >
        { label }
    </button>
)

export default memo(Button)