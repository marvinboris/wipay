import { ChevronDownIcon, DocumentDuplicateIcon, ExclamationCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment, ReactElement, useState } from 'react'

import { NextPageWithLayout } from './_app'

import Layout, { Head } from '../components/frontend/navigation/Layout'
import SvgIcon from '../components/ui/svg-icon'
import { classNames } from '../app/helpers/utils'
import { Popover, Transition } from '@headlessui/react'
import Number from '../components/ui/number'

const params = {
  link: '/',
  title: `Dashboard - ${process.env.NEXT_PUBLIC_APP_NAME!}`,
  description: "Your favorite farming platform."
}

type StatType = {
  type: 'harvested' | 'pending-harvest' | 'airdrop' | 'referrals'
  title: string
  value: string
  unit: string
}

const Stat = ({ type, title, value, unit }: StatType) => <div className='rounded-[25px] bg-black/20 pl-[17px] pr-[18px] pt-[22px] pb-[21px]'>
  <div className="flex">
    <div>
      <SvgIcon icon={{
        harvested: 'leafs',
        'pending-harvest': 'garden-pot',
        airdrop: 'bwac-coin-solid',
        referrals: 'users',
      }[type]} width={22} />
    </div>
    <div className="ml-2.5 text-sm">{title}</div>
  </div>

  <div className="mt-12 font-bold text-white text-xl">{value}</div>

  <div className="mt-2 text-lg text-white/75">{unit}</div>

  <div className="flex justify-end">
    <div>
      <SvgIcon icon={{
        harvested: 'leafs-transparent',
        'pending-harvest': 'garden-pot-transparent',
        airdrop: 'bwac-coin',
        referrals: 'users-transparent',
      }[type]} width={32} />
    </div>
  </div>
</div>

const DashboardPage: NextPageWithLayout = () => {
  const statsContent = ([
    { type: 'harvested', title: 'Total harvested', value: '6382053.68', unit: 'BNB' },
    { type: 'pending-harvest', title: 'Pending harvest', value: '2498.67', unit: 'BNB' },
    { type: 'referrals', title: 'Total referrals', value: '108', unit: 'Referrals' },
    { type: 'airdrop', title: '$BWAX airdrop', value: '2498.67', unit: 'BUSD' },
  ] as StatType[]).map(stat => <Stat key={JSON.stringify(stat)} {...stat} />)

  const [copying, setCopying] = useState(false)
  const [harvesting, setHarvesting] = useState(false)

  const copyLink = () => {
    setCopying(true)
    setTimeout(() => {
      setCopying(false)
    }, 3000);
  }

  return <>
    <Head {...params} />
    <main>
      <div className="container pb-[45px]">
        <header>
          <div className="rounded-[14px] bg-black/20 shadow bg-gradient-to-r from-[#8EAD12] to-[#EDDE50] p-[1px] h-[60px]">
            <div className="w-full h-full rounded-[14px] bg-secondary-900 px-[25px] flex items-center">
              <div><SvgIcon icon='wallet' width={24} height={24} /></div>
              <div className="ml-2.5">
                <span className="text-primary-600 font-bold">Wallet connected :</span> <span className="text-white font-medium">0x2******8a2f</span>
              </div>
              <div className="ml-auto"><SvgIcon icon='check-circle' width={18} /></div>
            </div>
          </div>

          <button onClick={copyLink} className={classNames("relative h-[60px] rounded-[14px] flex items-center justify-center w-full mt-2.5 transition-all duration-200", copying ? "bg-[#8EAD12]" : "bg-blue-700")}>
            <div className={classNames('flex items-center justify-center transition-all duration-200', copying ? "opacity-0" : "opacity-100")}>
              <div><DocumentDuplicateIcon className='w-6 text-white/50' /></div>
              <div className="ml-3 font-medium">Copy referral link</div>
            </div>

            <div className={classNames("flex items-center justify-center absolute inset-0 transition-all duration-200", copying ? "opacity-100" : "opacity-0")}>
              <div><DocumentDuplicateIcon className='w-6 text-white' /></div>
              <div className="ml-3 font-bold">Link copied  !</div>

              <div className="absolute right-[37px] top-[19px]"><SvgIcon icon='check-circle-white' width={22} /></div>
            </div>
          </button>
        </header>

        <section>
          <div className="mt-8">
            <div className="rounded-[25px] bg-black/20 pt-[29px] pb-[29px] pl-[30px] pr-5 mt-8">
              <div className="flex items-start">
                <div className="text-lg flex items-center leading-none">
                  <div><SvgIcon icon='bnb' width={18} /></div>
                  <div className="ml-2">
                    Total BWAX scooped
                  </div>
                </div>
                <div className="ml-auto pr-[5px]"><ExclamationCircleIcon className='text-[#F6AC59] w-6' /></div>
              </div>

              <div className="flex items-end justify-between mt-8">
                <div>
                  <div className='flex leading-none'>
                    <div className='text-[35px] text-white font-bold'>2.370</div>
                    <div className='text-lg text-white/75 ml-1'>BNB</div>
                  </div>

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
                </div>
                <div><SvgIcon icon='coins-1' width={62} /></div>
              </div>
            </div>
          </div>

          <div className="mt-3.5">
            <div className="rounded-[25px] bg-black/20 pt-6 pb-5 pl-[35px] pr-6">
              <div className="flex items-center justify-between">
                <div className="flex items-end">
                  <div className="text-lg relative">
                    <div className={classNames("transition-all duration-200", harvesting ? "opacity-0" : "opacity-100")}>Available for harvest</div>
                    <div className={classNames("absolute top-0 transition-all duration-200", harvesting ? "opacity-100" : "opacity-0")}>Harvest is pending</div>
                  </div>
                  <div className="ml-3"><ExclamationCircleIcon className='text-sky w-6' /></div>
                </div>

                <div className='relative flex justify-center items-center flex-none w-11 h-11 z-0'>
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
                </div>
              </div>

              <div className="flex items-end justify-between mt-[13px]">
                <div>
                  <div className='flex leading-none'>
                    <div className='text-[35px] text-white font-bold'>{harvesting ? <Number from={2.829} to={0} /> : <Number from={0} to={2.829} />}</div>
                    <div className='text-lg text-white/75 ml-1'>BNB</div>
                  </div>

                  <div className='text-sm'>
                    {harvesting ? "Next harvest in" : "Last harvest"} : <span className='font-bold text-primary-400'>{harvesting ? "20:37:45" : "20 min ago"}</span>
                  </div>

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
                </div>

                <div><SvgIcon icon='harvest' width={62} /></div>
              </div>
            </div>
          </div>
        </section>

        <section className='mt-8'>
          <div className="mt-8 grid gap-x-3 gap-y-3.5 grid-cols-2">
            {statsContent}
          </div>
        </section>

        <section className='mt-8'>
          <div className="rounded-[25px] bg-black/20 pt-[33px] pb-[31px] pl-[17px] pr-[18px]">
            <div className="flex items-center">
              <div><SvgIcon icon='bars' width={26} /></div>
              <h2 className='text-[25px] text-white/90 font-bold ml-2'>Global Stats</h2>
            </div>

            <div className="mt-8 space-y-2.5">
              <div className="flex justify-between">
                <div className='text-white/75'>Total amount staked</div>
                <div className='text-white/90 font-bold'>2.4471230  BNB</div>
              </div>

              <div className="flex justify-between">
                <div className='text-white/75'>Total amount harvested</div>
                <div className='text-white/90 font-bold'>1.6901234  BNB</div>
              </div>

              <div className="flex justify-between">
                <div className='text-white/75'>Total bonus</div>
                <div className='text-white/90 font-bold'>6.4562743  BNB</div>
              </div>

              <div className="flex justify-between">
                <div className='text-white/75'>Total stakers</div>
                <div className='text-white/90 font-bold'>1291</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </>
}

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout home>{page}</Layout>
}

export default DashboardPage