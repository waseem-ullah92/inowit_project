import React from 'react'

import { ICommonChildrenProp } from '@/types/common-components'


// =====================================================================================================

const CardWrapper: React.FC<ICommonChildrenProp> = ({ children }) => {
    return (
        <div>{children}</div>
    )
}

export default CardWrapper