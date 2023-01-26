import { ArrowTopRightOnSquareIcon, ExclamationCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment, ReactElement, ReactNode } from 'react'

import { NextPageWithLayout } from './_app'

import Layout, { Head } from '../components/frontend/navigation/Layout'
import SvgIcon from '../components/ui/svg-icon'
import Image from 'next/image'
import { Popover, Transition } from '@headlessui/react'

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

const Link = (props: { icon: string, social?: boolean, label: ReactNode }) => <div className='h-[60px] rounded-full bg-[#4A55681A] p-2 flex items-center'>
    <SvgIcon icon={props.icon} width={44} />
    <div className="ml-4 text-sm leading-none">{props.social ? <><span className='font-bold'>{props.label}</span> - WiPayOfficial</> : props.label}</div>
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
                        <Image src="/images/desk.png" alt="Candles" fill />
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

                <section className="mt-12">
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

                <Popover>
                    {({ open }) => (
                        <>
                            {open ? <Popover.Button className="absolute z-50 top-6 right-8 flex items-center justify-center focus:outline-none">
                                <div>Close</div>
                                <div className="w-[60px] h-[60px] rounded-full bg-black/20 ml-3 flex items-center justify-center">
                                    <XMarkIcon className="w-5" />
                                </div>
                            </Popover.Button> :
                                <Popover.Button className='fixed z-40 top-6 right-8 flex items-center h-[61px] rounded-full px-6 bg-gradient-to-r from-[#2E6ECE] to-[#3792AF] text-white/90'>
                                    <div className="text-sm font-bold">Useful links</div>
                                    <div className="ml-3"><ArrowTopRightOnSquareIcon className='w-6' /></div>
                                </Popover.Button>}

                            <Transition as={Fragment} enter="duration-200 ease-out" enterFrom="opacity-0" enterTo="opacity-100" leave="duration-200 ease-in" leaveFrom="opacity-100" leaveTo="opacity-0">
                                <Popover.Panel focus className="absolute inset-0 top-0 z-30 flex md:hidden bg-secondary-900 overflow-auto">
                                    <div className="container pt-36">
                                        <h2 className="text-[25px] font-bold leading-none">Useful links</h2>

                                        <section className="rounded-[35px] bg-black/20 pt-7 pb-10 px-8 mt-8">
                                            <div className='flex items-center'>
                                                <div><SvgIcon icon='link' width={40} /></div>
                                                <h3 className="ml-3 text-white/90 text-[25px] font-bold">Social links</h3>
                                                <div className="ml-5"><div className='rounded-full h-1 w-[22px] bg-white' /></div>
                                            </div>

                                            <div className="mt-8 space-y-2">
                                                {[
                                                    { icon: 'facebook-circle', label: 'Facebook', },
                                                    { icon: 'telegram-circle', label: 'Telegram', },
                                                    { icon: 'instagram-circle', label: 'Instagram', },
                                                    { icon: 'twitter-circle', label: 'Twitter', },
                                                    { icon: 'discord-circle', label: 'Discord', },
                                                    { icon: 'snapchat-circle', label: 'Snapchat', },
                                                    { icon: 'whatsapp-circle', label: 'WhatsApp', },
                                                ].map(link => <Link key={link.label} social={true} {...link} />)}
                                            </div>
                                        </section>

                                        <section className="rounded-[35px] bg-black/20 pt-7 pb-10 px-8 mt-8">
                                            <div className='flex items-center'>
                                                <div><SvgIcon icon='link' width={40} /></div>
                                                <h3 className="ml-3 text-white/90 text-[25px] font-bold">Project links</h3>
                                                <div className="ml-5"><div className='rounded-full h-1 w-[22px] bg-white' /></div>
                                            </div>

                                            <div className="mt-8 space-y-2">
                                                {[
                                                    { icon: 'shield-check-circle-green', label: 'BSCSCAN  [Verified Contract]', },
                                                    { icon: 'document-check-circle-green', label: 'Contract audit report', },
                                                ].map(link => <Link key={link.label} {...link} />)}
                                            </div>
                                        </section>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
            </div>
        </main>
    </>
}

HowItWorksPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}

export default HowItWorksPage