import SvgIcon from "./svg-icon"

export type StatProps = {
    type: 'purchased' | 'earnings' | 'dsp-volume' | 'team-volume' | 'referrals' | 'pending-scoop' | 'harvested' | 'pending-harvest' | 'airdrop'
    title: string
    value: string
    unit: string
}

export default function Stat({ type, title, value, unit }: StatProps) {
    return <div className='rounded-[25px] bg-black/20 pl-[17px] pr-[18px] pt-[22px] pb-[21px]'>
        <div className="flex">
            <div>
                <SvgIcon icon={{
                    purchased: 'chart-pie',
                    'pending-scoop': 'activity',
                    'dsp-volume': 'doc',
                    'team-volume': 'asc-chart-2',
                    referrals: 'users',
                    earnings: 'wallet-sky',
                    harvested: 'leafs',
                    'pending-harvest': 'garden-pot',
                    airdrop: 'bwac-coin-solid',
                }[type]} width={22} />
            </div>
            <div className="ml-2.5 text-sm flex-1 truncate">{title}</div>
        </div>

        <div className="mt-12 font-bold text-white text-xl">{value}</div>

        <div className="mt-2 text-white/75 truncate">{unit}</div>

        <div className="flex justify-end">
            <div>
                <SvgIcon icon={{
                    purchased: 'chart-pie-transparent',
                    'pending-scoop': 'people',
                    'dsp-volume': 'doc-transparent',
                    'team-volume': 'asc-chart-transparent',
                    referrals: 'users-transparent',
                    earnings: 'wallet-transparent',
                    harvested: 'leafs-transparent',
                    'pending-harvest': 'garden-pot-transparent',
                    airdrop: 'bwac-coin',
                }[type]} width={32} />
            </div>
        </div>
    </div>
}