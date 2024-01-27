import React from 'react';


import { ICommonChildrenProp } from '@/types/common-components';

// =====================================================================================================

const ContainerWrapper: React.FC<ICommonChildrenProp> = ({ children }) => {
    return (
        <div>{children}</div>
    )
}

export default ContainerWrapper