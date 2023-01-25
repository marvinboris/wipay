import { Popover } from '@headlessui/react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { ReactElement } from 'react'

import { NextPageWithLayout } from './_app'

import { classNames } from '../app/helpers/utils'

import Layout, { Head } from '../components/frontend/navigation/Layout'
import SmartContractCall from '../components/frontend/ui/smart-contract-call'
import SvgIcon from '../components/ui/svg-icon'

const params = {
    link: '/about',
    title: `Scooper Packs`,
    description: "Everything about your favorite farming platform."
}

type PackProps = {
    type: 'saphire' | 'onyx' | 'rubby' | 'gold' | 'diamond' | 'jasper'
    amount: string
    bonus: number
}

const Pack = ({ type, amount, bonus }: PackProps) => <div className='rounded-[35px] bg-black/20 pt-[31px] pl-[30px] pr-7 pb-8'>
    <div className="flex">
        <div className="flex-1">
            <div className={classNames('bg-gradient-to-r p-0.5 rounded-[14px] h-[60px]',
                type === 'saphire' ? "from-[#66ED50] to-[#EDDE50]" :
                    type === 'onyx' ? "from-[#7950ED] to-[#ED5089]" :
                        type === 'rubby' ? "from-[#BA1D1F] to-[#FC1822]" :
                            type === 'gold' ? "from-[#D19330] to-[#EAC24E]" :
                                type === 'diamond' ? "from-[#8DA8C2] to-[#2EA8CE]" :
                                    type === 'jasper' ? "from-[#AE8D6A] to-[#9C7230]" :
                                        ""
            )}>
                <div className="w-full h-full bg-secondary-900 rounded-[14px]">
                    <div className="w-full h-full bg-black/10 flex items-center px-[18px]">
                        <div className='flex-none w-7 h-full relative flex items-center justify-center overflow-hidden'>
                            <div className={classNames('absolute', type === 'diamond' ? 'w-[58px] pt-5' : 'w-7')}><SvgIcon icon={type} width={type === 'diamond' ? 58 : 28} /></div>
                        </div>
                        <div className={classNames("ml-[13px] font-bold", type === 'gold' ? "text-[#EAC24E]" : "text-white")}><span className="capitalize">{type}</span> pack</div>
                    </div>
                </div>
            </div>
        </div>

        <div className='ml-[21px]'>
            <div className="bg-black/20 rounded-[14px] w-[104px] h-[60px] flex items-center pl-[27px]">
                <div>
                    <div className="text-lg text-white font-bold">{amount}</div>
                    <div className="text-sm">BUSD</div>
                </div>
            </div>
        </div>
    </div>

    <div className="mt-12 space-y-[13px] text-lg">
        <div className='flex justify-between'>
            <div className='font-medium'>Purchase bonus</div>
            <div className='font-bold text-white'>+{bonus}%</div>
        </div>

        <div className='flex justify-between'>
            <div className='font-medium'>Daily minting rate</div>
            <div className='font-bold text-white'>1.52%</div>
        </div>

        <div className='flex justify-between'>
            <div className='font-medium'>Multiple Activation</div>
            <div className='flex items-end'>
                <div><SvgIcon icon='check-circle' width={18} /></div>
                <div className='font-medium text-white'>Yes</div>
            </div>
        </div>
    </div>

    <div className="mt-11">
        <SmartContractCall>
            <Popover.Button className="h-[61px] bg-blue-700 text-white rounded-[14px] flex items-center justify-center w-full">
                <div className="font-medium">Activate pack</div>
                <div className='ml-3'><ArrowRightIcon className='w-6' /></div>
            </Popover.Button>
        </SmartContractCall>
    </div>
</div>

const AboutPage: NextPageWithLayout = () => {
    const packsContent = ([
        { type: 'saphire', amount: 100, bonus: 25 },
        { type: 'onyx', amount: 1000, bonus: 50 },
        { type: 'rubby', amount: 5000, bonus: 100 },
        { type: 'gold', amount: 12500, bonus: 150 },
        { type: 'diamond', amount: 25000, bonus: 200 },
        { type: 'jasper', amount: 50000, bonus: 200 },
    ] as unknown as PackProps[]).map(pack => <Pack key={JSON.stringify(pack)} {...pack} />)

    return <>
        <Head {...params} />
        <main>
            <div className="container pb-[190px]">
                <section>
                    <h2 className="text-[25px] font-bold text-white/90">Scooper packs</h2>

                    <div className="mt-11 space-y-3.5">
                        {packsContent}
                    </div>
                </section>
            </div>
        </main>
    </>
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}

export default AboutPage