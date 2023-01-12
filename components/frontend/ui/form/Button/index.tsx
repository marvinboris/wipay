import React, { type ReactNode } from 'react'

import { classNames } from '../../../../../app/helpers/utils'

type ButtonProps = React.ComponentProps<'button'> & {
    color?: string
    size?: '' | 'sm' | 'lg' | 'xl'
    icon?: (props: React.ComponentProps<'svg'>) => JSX.Element
    children: ReactNode,
    onClick?: () => void
}

export default function Button({ color = 'primary', size = '', icon, children, onClick, ...props }: ButtonProps) {
    const Icon = icon

    return <button onClick={onClick} className={classNames(`btn btn-${color} group`, icon ? 'btn-icon' : '', size === 'sm' ? 'btn-sm' : '', props.className || '')}>
        <span className={size === 'sm' ? '' : 'font-bold'}>{children}</span>

        {Icon && <span className='inline-flex items-center'>
            {size !== 'sm' && <div>
                <div className={classNames(color === 'white' ? "bg-primary/40" : "bg-white/40", "w-1 h-1 rounded-full mr-[5px]")} />
            </div>}

            <div>
                <Icon className={classNames(color === 'white' ? "text-primary/40 group-hover:text-primary" : "text-white/40 group-hover:text-white", 'w-6 transition-all duration-200')} />
            </div>
        </span>}
    </button>
}