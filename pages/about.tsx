import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { ReactElement } from 'react'

import { NextPageWithLayout } from './_app'

import Layout, { Head } from '../components/frontend/navigation/Layout'
import SvgIcon from '../components/ui/svg-icon'
import Image from 'next/image'

const params = {
    link: '/about',
    title: `About ${process.env.NEXT_PUBLIC_APP_NAME!}`,
    description: "Everything about your favorite farming platform."
}

const AboutPage: NextPageWithLayout = () => {
    return <>
        <Head {...params} />
        <main>
            <div className="container pb-[190px]">
                <section className="pt-[11px]">
                    <h2 className="text-[25px] font-bold text-white/90">What is Wipay ?</h2>

                    <div className="rounded-[35px] h-[194px] relative mt-8">
                        <Image src="/images/candles.png" alt="Candles" layout='fill' />
                    </div>

                    <p className="mt-8">
                        BWAX  BEP20 Token is an innovative contract algorithm that creates a rug-pull Proof Token and provides people with sustainable daily passive income.<br /><br />
                        BWAX smart-mint uses the token Total supply and moderates its circulation to its community via a protocol. Smart-Minting is a protocol that does not involve actual minting. Members who participate in smart-mint programs are eligible for a reward system that includes a 50% to 300% bonus on token purchases.
                    </p>

                    <div className="mt-8">
                        <button className="h-[61px] bg-blue-700 rounded-[14px] flex items-center justify-center w-full">
                            <div><SvgIcon icon='paper' width={22} /></div>
                            <div className="ml-3 font-medium">Check Smart Contract</div>
                        </button>
                    </div>

                    <div className="mt-4">
                        <button className="h-[61px] bg-black/30 border border-white/20 rounded-[14px] flex items-center justify-center w-full">
                            <div><SvgIcon icon='paper' width={22} /></div>
                            <div className="ml-3 font-medium">Contract audit report</div>
                        </button>
                    </div>
                </section>

                <section className="mt-[42px]">
                    <div className="rounded-[35px] bg-black/20 pt-[53px] px-8 pb-[35px]">
                        <h3 className="text-[25px] font-bold text-white/90">Have questions ?</h3>

                        <p className="mt-8">
                            Feel free to contact us with any problems. We will get back to you as soon as possible.
                        </p>

                        <div className="mt-[100px]">
                            <button className="h-[61px] pl-[35px] pr-[19.5px] bg-[#8EAD12] rounded-[14px] inline-flex items-center justify-center">
                                <div className="font-medium">Contact us</div>
                                <div className='ml-3'><SvgIcon icon='paper-plane' width={24} /></div>
                            </button>
                        </div>
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