'use client'
import { useSideBarToggle } from '@/hooks/use-sidebar-toggle';
import classNames from 'classnames';
import { ReactNode } from 'react';

export default function PageWrapper({ children }: { children: ReactNode }) {
    
    const { toggleCollapse } = useSideBarToggle();
    const bodyStyle = classNames(" flex flex-col mt-16 py-4 p-4 h-full overflow-y-auto",
        {
            ["sm:pl-[10rem]"]: !toggleCollapse,
            ["sm:pl-[3.4rem]"]: toggleCollapse,
        });

    return (
        <div className={bodyStyle}>
            {children}
        </div>
    );
}