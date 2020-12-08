import React, { memo } from 'react'

const Container = ({children, classContainer=""}) => (
    <div className={classContainer}>
        { children }
    </div>
)

export default memo(Container)