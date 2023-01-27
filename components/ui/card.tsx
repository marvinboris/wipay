import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { ReactNode } from 'react'

import SvgIcon from "./svg-icon";

type CardProps = {
    title: ReactNode
    bnb?: boolean
    loader?: ReactNode
    value: ReactNode
    unit?: ReactNode
    countdown?: ReactNode
    icon?: string
    children: ReactNode
}

export default function Card({ title, bnb, loader, value, unit, countdown, icon, children }: CardProps) {
    return <div className="rounded-[25px] bg-black/20 pt-6 pb-5 pl-[30px] pr-6 aspect-[366/196] flex flex-col items-stretch leading-none">
        <div className="flex items-center">
            {bnb ? <div className="mr-2"><SvgIcon icon='bnb' width={18} /></div> : null}
            <div className="text-lg">{title}</div>
            <div className={loader ? "ml-3" : "ml-auto pr-[5px]"}><ExclamationCircleIcon className='text-[#F6AC59] w-6' /></div>
            {loader ? <div className="ml-auto">{loader}</div> : null}
        </div>

        <div className={loader ? "mt-3.5" : "mt-8"}>
            <div className='flex'>
                <div className='text-[35px] text-white font-bold'>{value}</div>
                {unit ? <div className='text-lg text-white/75 ml-1'>{unit}</div> : null}
            </div>
            {countdown ? <div className='text-sm'>{countdown}</div> : null}

            <div className="flex items-end justify-between">
                {children}

                {icon ? <div><SvgIcon icon={icon} width={62} /></div> : null}
            </div>
        </div>
    </div>
}