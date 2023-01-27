import { Popover, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment, ReactElement, useState } from 'react'

import { NextPageWithLayout } from './_app'

import { classNames } from '../app/helpers/utils'

import Layout, { Head } from '../components/frontend/navigation/Layout'
import Card from '../components/ui/card'
import CopyLink from '../components/ui/copy-link'
import Number from '../components/ui/number'
import Stat, { StatProps } from '../components/ui/stat'
import Stats from '../components/ui/stats'
import SvgIcon from '../components/ui/svg-icon'
import WalletConnected from '../components/ui/wallet-connected'

const params = {
  link: '/',
  title: `Dashboard - ${process.env.NEXT_PUBLIC_APP_NAME!}`,
  description: "Your favorite farming platform."
}

const DashboardPage: NextPageWithLayout = () => {
  const statsContent = ([
    { type: 'harvested', title: 'Total harvested', value: '6382053.68', unit: 'BNB' },
    { type: 'pending-harvest', title: 'Pending harvest', value: '2498.67', unit: 'BNB' },
    { type: 'referrals', title: 'Total referrals', value: '108', unit: 'Referrals' },
    { type: 'airdrop', title: '$BWAX airdrop', value: '2498.67', unit: 'BUSD' },
  ] as StatProps[]).map(stat => <Stat key={JSON.stringify(stat)} {...stat} />)

  const [harvesting, setHarvesting] = useState(false)

  return <>
    <Head {...params} />
    <main>
      <div className="container pb-[45px]">
        <header>
          <WalletConnected />

          <CopyLink />
        </header>

        <section>
          <div className="mt-8">
            <Card bnb title="Total BWAX scooped" value="2.370" unit="BNB" icon='coins-1'>
              <Popover>
                <Popover.Button className="bg-gradient-to-r from-[#CA9D30] to-[#F8B618] mt-[26px] flex items-center rounded-[10px] text-secondary-900 h-11 pl-[35px] pr-[23px]">
                  <span className="text-sm font-medium h-[22px]">Stake BNB</span>
                  <div className="ml-6"><SvgIcon icon='coins-bag' width={22} /></div>
                </Popover.Button>

                <Popover.Overlay className="md:hidden fixed top-0 inset-x-0 h-screen z-40 bg-black/30 backdrop-filter backdrop-blur-2xl" />
                <Transition as={Fragment} enter="duration-200 ease-out" enterFrom="opacity-0" enterTo="opacity-100" leave="duration-200 ease-in" leaveFrom="opacity-100" leaveTo="opacity-0">
                  <Popover.Panel focus className="fixed inset-0 top-0 z-50 flex md:hidden">
                    <div className="absolute top-0 left-0 w-full pt-8">
                      <div className="container flex justify-end">
                        <Popover.Button className="flex items-center justify-center focus:outline-none">
                          <div className='text-sm font-medium'>Close</div>
                          <div className="w-[60px] h-[60px] rounded-full bg-black/20 ml-3 flex items-center justify-center">
                            <XMarkIcon className="w-5" />
                          </div>
                        </Popover.Button>
                      </div>
                    </div>

                    <div className="mt-[50%] container">
                      <div className="rounded-[35px] bg-black/20 p-8">
                        <header>
                          <div className="text-2xl text-white font-bold leading-none">Stake BNB</div>
                          <div className="mt-1.5">BNB Balance : <span className='font-bold'>3.58</span></div>
                        </header>

                        <div className="mt-8">
                          <div className="rounded-xl h-[60px] bg-[#4A556833] flex items-center px-[18px]">
                            <div><SvgIcon icon='coins-1' width={18} /></div>
                            <div className='ml-3.5'><div className="w-0.5 h-[18px] bg-white/40 rounded-full" /></div>
                            <div className="ml-3.5">
                              <input type="text" className="p-0 outline-none bg-transparent placeholder:text-white/20 font-bold" placeholder='0.2' />
                            </div>
                          </div>
                          <div className="mt-1 text-white/80 text-sm">Minimum staking  amount is 0.2 BNB</div>
                        </div>

                        <div className="mt-8">
                          <button className="h-[60px] rounded-[10px] bg-gradient-to-r from-[#CA9D30] to-[#FEA644] shadow-lg shadow-[#CD91011A] text-secondary-900 flex w-full items-center justify-center">
                            <div className='font-medium'>Stake BNB</div>
                            <div className='ml-5'><SvgIcon icon='coins-bag' width={18} /></div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            </Card>
          </div>

          <div className="mt-3.5">
            <Card
              title={<div className="text-lg relative">
                <div className={classNames("transition-all duration-200", harvesting ? "opacity-0" : "opacity-100")}>Available for harvest</div>
                <div className={classNames("absolute top-0 transition-all duration-200", harvesting ? "opacity-100" : "opacity-0")}>Harvest is pending</div>
              </div>}
              value={harvesting ? <Number from={2.829} to={0} /> : <Number from={0} to={2.829} />}
              unit="BNB"
              countdown={<>{harvesting ? "Next harvest in" : "Last harvest"} : <span className='font-bold text-primary-400'>{harvesting ? "20:37:45" : "20 min ago"}</span></>}
              icon='harvest'
              loader={<div className='relative flex justify-center items-center flex-none w-11 h-11 z-0'>
                <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg" className='absolute inset-0 -z-10 -rotate-[85deg]'>
                  <defs>
                    <linearGradient id="circular-progress-bar-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#96B835" />
                      <stop offset="100%" stopColor="#E6F356" />
                    </linearGradient>
                  </defs>
                  <circle cx={70} cy={70} r={70} stroke="url(#circular-progress-bar-gradient)" className="w-full h-full fill-none stroke-[10] scale-90 origin-center transition-all duration-200" strokeLinecap='round' strokeDasharray={440} strokeDashoffset={440 * (1 - (harvesting ? 1 : 81) / 100)} />
                </svg>
                <div className="text-xs">{harvesting ? 1 : 81}%</div>
              </div>}>
              <button onClick={() => setHarvesting(harvesting => !harvesting)} className={classNames("relative bg-gradient-to-r flex items-center mt-3 rounded-[10px] text-secondary-900 h-11 px-[25px] transition-all duration-200", harvesting ? "from-[#214F94] to-[#0764BF]" : "from-[#96B835] to-primary-400")}>
                <div className={classNames('flex items-center justify-center transition-all duration-200', harvesting ? "opacity-0" : "opacity-100")}>
                  <span className="text-sm font-medium h-[22px]">Harvest now</span>
                  <div className="ml-2"><SvgIcon icon='2-coins' width={22} /></div>
                </div>

                <div className={classNames('absolute inset-0 flex items-center justify-center transition-all duration-200', harvesting ? "opacity-100" : "opacity-0")}>
                  <span className="text-sm font-medium h-[22px] text-white">Pending harvest</span>
                  <div className="ml-2"><div className="animate-spin"><SvgIcon icon='spinner' width={22} /></div></div>
                </div>
              </button>
            </Card>
          </div>
        </section>

        <section className='mt-8'>
          <div className="mt-8 grid gap-x-3 gap-y-3.5 grid-cols-2">
            {statsContent}
          </div>
        </section>

        <section className='mt-8'>
          <Stats title="Global Stats" stats={[
            { label: 'Total amount staked', value: '2.4471230  BNB' },
            { label: 'Total amount harvested', value: '1.6901234  BNB' },
            { label: 'Total bonus', value: '6.4562743  BNB' },
            { label: 'Total stakers', value: 1291 },
          ]} />
        </section>
      </div>
    </main>
  </>
}

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout home>{page}</Layout>
}

export default DashboardPage