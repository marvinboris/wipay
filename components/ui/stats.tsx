import { ReactNode } from 'react'

import SvgIcon from "./svg-icon";

type StatsProps = {
    title: ReactNode,
    stats: { label: ReactNode, value: ReactNode }[]
}

export default function Stats({ title, stats }: StatsProps) {
    return <div className="rounded-[25px] bg-black/20 pt-[33px] pb-[31px] pl-[17px] pr-[18px]">
        <div className="flex items-center">
            <div><SvgIcon icon='bars' width={26} /></div>
            <h2 className='text-[25px] text-white/90 font-bold ml-2'>{title}</h2>
        </div>

        <div className="mt-8 space-y-2.5">
            {stats.map(({ label, value }, index) => <div key={`stats-${title}-${index}`} className="flex justify-between">
                <div className='text-white/75'>{label}</div>
                <div className='text-white/90 font-bold'>{value}</div>
            </div>)}
        </div>
    </div>
}