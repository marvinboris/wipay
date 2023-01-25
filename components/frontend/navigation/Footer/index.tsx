import type { ReactNode } from 'react'

import SvgIcon from '../../../ui/svg-icon'

interface FooterProps {
    action?: ReactNode
}

export default function Footer({ action }: FooterProps) {
    return <footer className="bg-black/30">
        <div>
            <div className="container pt-[29px] pb-[27px]">
                <h2 className="text-[25px] text-white/90 font-bold">Join us on social media</h2>

                <div className="mt-[38px] flex items-center space-x-[24.8px]">
                    <div><SvgIcon icon='facebook' width={36.8} /></div>
                    <div><SvgIcon icon='telegram' width={25.6} height={22.4} /></div>
                    <div><SvgIcon icon='twitter' width={28.8} height={22.4} /></div>
                    <div><SvgIcon icon='discord' width={25.6} height={22.19} /></div>
                    <div>
                        <div className="rounded-full w-10 h-10 bg-gradient-to-tr from-[#97D857] to-[#61AD32] flex items-center justify-center shadow-md shadow-[#61AD3221]">
                            <div>
                                <SvgIcon icon='whatsapp' width={16.47} height={16.55} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-black/40 pb-[140px] rounded-t-[20px]">
            <div className="container flex items-center h-[66px]">
                <div><SvgIcon icon='copyright' width={13.33} height={13.33} /></div>
                <div className='ml-1.5'><div className="text-sm">Copyrights 2023 Wipay  | BWAX project</div></div>

                <div className="ml-auto"><SvgIcon icon='bwac' width={57} height={12} /></div>
            </div>
        </div>
    </footer>
}