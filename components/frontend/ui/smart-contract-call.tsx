import { Popover, Transition } from "@headlessui/react";
import { ArrowLeftIcon, ExclamationTriangleIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { Fragment, ReactNode } from "react";

import SvgIcon from "../../ui/svg-icon";

type InfoType = {
    label: ReactNode
    value: ReactNode
}

const InfoTop = ({ label, value }: InfoType) => <div className='h-[60px] flex items-center justify-between pl-[30px] pr-[23px]'>
    <div className='font-bold text-lg'>{label}</div>
    <div className='text-sm'>{value}</div>
</div>

export default function SmartContractCall(props: { children: ReactNode }) {
    return <Popover>
        {props.children}

        <Popover.Overlay className="md:hidden fixed top-0 inset-x-0 h-screen z-40 bg-black/30 backdrop-filter backdrop-blur-2xl" />
        <Transition as={Fragment} enter="duration-200 ease-out" enterFrom="opacity-0" enterTo="opacity-100" leave="duration-200 ease-in" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Popover.Panel focus className="fixed inset-0 top-0 z-50 flex md:hidden bg-secondary-900 overflow-auto">
                <div className="container">
                    <div className="pt-[42px] flex items-start">
                        <Popover.Button className="flex items-center justify-center focus:outline-none">
                            <div className="w-11 h-11 rounded-full bg-black/20 flex items-center justify-center">
                                <ArrowLeftIcon className="w-5" />
                            </div>
                        </Popover.Button>

                        <div className='pt-2 ml-6'>
                            <h2 className="font-bold text-[25px] text-white/90 leading-none">Smart contract call</h2>
                            <div className="mt-2 rounded-md bg-[#3982F0]/30 h-[25px] inline-flex items-center pl-[11px] pr-3.5">
                                <ShieldCheckIcon className='w-3 text-sky' />
                                <div className="ml-1 text-xs">Trust Wallet</div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center leading-none mt-[53px]">
                        <div className="font-bold text-[35px] text-white/90">0 BNB</div>
                        <div className='text-xl mt-1'>= $0.000</div>
                    </div>

                    <div className="mt-[46px] rounded-[25px] bg-black/20 divide-y divide-[#4A55684D] overflow-hidden">
                        {[
                            { label: 'Assets', value: 'Binance Smart Chain (BNB)', },
                            { label: 'From', value: 'Pope’s Wallet (0x83...6kl2)', },
                            { label: 'DApp', value: 'staking.wipay.io', },
                        ].map(info => <InfoTop key={info.label} {...info} />)}
                    </div>

                    <div className="mt-4 rounded-[25px] bg-black/20 divide-y divide-[#4A55684D] overflow-hidden">
                        {[
                            { label: 'Network fee', value: '+25%', },
                            { label: 'Max total', value: '1.52%', },
                        ].map(info => <InfoTop key={info.label} {...info} />)}
                    </div>

                    <div className="mt-20 rounded-[14px] bg-[#B8635D]/30 pt-[15px] pb-3.5 pr-3 pl-[23px] flex items-center text-[#FEA644]">
                        <ExclamationTriangleIcon className='w-8' />
                        <div className='flex-1 font-bold text-sm ml-[21px]'>
                            Make sure you trust this site. By interacting with it, you allow this site to access your funds.
                        </div>
                    </div>

                    <div className="mt-7 pb-[71px]">
                        <button className="h-[60px] rounded-[10px] bg-[#61AD32] shadow-lg shadow-[#214F9426] text-white flex w-full items-center justify-center">
                            <div className='font-medium'>Approve transaction</div>
                            <div className='ml-4'><SvgIcon icon='check-circle-white' width={18} /></div>
                        </button>
                    </div>
                </div>
            </Popover.Panel>
        </Transition>
    </Popover>
}