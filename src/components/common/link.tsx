import React from 'react'


import Link from 'next/link';

import { IAppLinkProps } from '@/types/common-components';

// =====================================================================================================


const AppLink: React.FC<IAppLinkProps> = ({ path, title, children }) => {
    return (
        <Link
            href={path}
            className='text-base flex items-center gap-2'
        >
            {title}
            <span className='text-sm'>
                {children}
            </span>
        </Link>
    )
}

export default AppLink