import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { ReactElement, ReactNode } from 'react'

import { NextPageWithLayout } from './_app'

import Layout, { Head } from '../components/frontend/navigation/Layout'
import SvgIcon from '../components/ui/svg-icon'
import Image from 'next/image'

const params = {
    link: '/how-it-works',
    title: `How it works`,
    description: "Everything about your favorite farming platform."
}

const Paragraph = ({ children }: { children: ReactNode }) => <div className="flex">
    <div className='pt-2'><div className='w-2 h-2 rounded-full bg-white/40' /></div>
    <div className="ml-3.5">{children}</div>
</div>

const WhyUs = ({ children }: { children: ReactNode }) => <div className="flex items-center">
    <div><SvgIcon icon='check-circle' width={26} /></div>
    <div className="ml-5">{children}</div>
</div>

const HowItWorksPage: NextPageWithLayout = () => {
    const paragraphContent = [
        'WiPay staking Platform is a unique inovative BNB smartchain staking platform which rewards every player with up to 250% per amount staked.',
        `The Rewards are generated by a sophisticated ecosystem powered by the $BWAX project which is a community propelled meme Token with a unique scooper feature.`,
        `WiPAY offers an instant reward system of up to 15% depending on the amount a player stakes:`,
        <>
            0.2 bnb to 5.00 bnb {'=>'} 5% INSTANT reward<br />
            5.01 bnb to 35.00 bnb {'=>'} 7% INSTANT reward <br />
            35.01 bnb to 100.00 bnb {'=>'} 10% INSTANT reward <br />
            100.01 bnb and above {'=>'} 15% INSTANT reward
        </>,
    ].map((item, index) => <Paragraph key={`paragraph-${index}`}>{item}</Paragraph>)

    const whyUsContent = [
        'Up to 2.5% daily - 912.5% APR',
        'Min: 0.2BNB +15% of Last Amount',
        'Max: 200BNB [Per one Transaction]',
        '5% to 15% Instant Reward!',
        '+0.2% daily HOLD bonus (+5% MAX)!',
        '2% $ BWAX Airdrop Allocation!',
        '100K $BWAX Airdrop per Referrals!',
        'Built-in Anti-Bot Launch System',
        'Earn 5% to 10% from Referral System',
        'Audited by George Stamp',
    ].map(item => <WhyUs key={item}>{item}</WhyUs>)

    return <>
        <Head {...params} />
        <main>
            <div className="container pb-[190px]">
                <section className="pt-[11px]">
                    <h2 className="text-[25px] font-bold text-white/90 pl-3">How it works</h2>

                    <div className="rounded-[35px] h-[194px] relative mt-8">
                        <Image src="/images/desk.png" alt="Candles" layout='fill' />
                    </div>

                    <p className="mt-8 space-y-3.5">
                        {paragraphContent}
                    </p>
                </section>

                <section className="mt-12">
                    <h3 className="text-[25px] font-bold text-white/90">Why us ?</h3>

                    <div className="mt-8 space-y-3.5">
                        {whyUsContent}
                    </div>
                </section>
            </div>
        </main>
    </>
}

HowItWorksPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}

export default HowItWorksPage