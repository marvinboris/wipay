import { Popover } from '@headlessui/react'
import { ArrowRightOnRectangleIcon, DocumentDuplicateIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { ReactElement, useState } from 'react'

import { NextPageWithLayout } from './_app'

import { classNames } from '../app/helpers/utils'

import Layout, { Head } from '../components/frontend/navigation/Layout'
import SmartContractCall from '../components/frontend/ui/smart-contract-call'
import Number from '../components/ui/number'
import SvgIcon from '../components/ui/svg-icon'

const params = {
  link: '/dashboard',
  title: 'Scooping Dashboard' + process.env.NEXT_PUBLIC_APP_NAME!,
  description: "Your favorite farming platform."
}

type StatType = {
  type: 'purchased' | 'earnings' | 'dsp-volume' | 'team-volume' | 'referrals' | 'pending-scoop'
  title: string
  value: string
  unit: string
}

const Stat = ({ type, title, value, unit }: StatType) => <div className='rounded-[25px] bg-black/20 pl-[17px] pr-[18px] pt-[22px] pb-[21px]'>
  <div className="flex">
    <div>
      <SvgIcon icon={{
        purchased: 'chart-pie',
        'pending-scoop': 'activity',
        'dsp-volume': 'doc',
        'team-volume': 'asc-chart-2',
        referrals: 'users',
        earnings: 'wallet-sky',
      }[type]} width={22} />
    </div>
    <div className="ml-2.5 text-sm">{title}</div>
  </div>

  <div className="mt-12 font-bold text-white text-xl">{value}</div>

  <div className="mt-2 text-lg text-white/75">{unit}</div>

  <div className="flex justify-end">
    <div>
      <SvgIcon icon={{
        purchased: 'chart-pie-transparent',
        'pending-scoop': 'people',
        'dsp-volume': 'doc-transparent',
        'team-volume': 'asc-chart-transparent',
        referrals: 'users-transparent',
        earnings: 'wallet-transparent',
      }[type]} width={32} />
    </div>
  </div>
</div>

const HomePage: NextPageWithLayout = () => {
  const statsContent = ([
    { type: 'purchased', title: 'Total purchased', value: '6382053.68', unit: '$BWAX' },
    { type: 'pending-scoop', title: 'Pending scoop', value: '$289.67', unit: '$BWAX' },
    { type: 'dsp-volume', title: 'DS+P volume', value: '6382053.68', unit: 'BUSD' },
    { type: 'team-volume', title: 'Team volume', value: '$248.67', unit: 'BUSD' },
    { type: 'referrals', title: 'Total referrals', value: '108', unit: 'BWAX Referrals' },
    { type: 'earnings', title: 'Total earnings', value: '$48.67', unit: 'BUSD' },
  ] as StatType[]).map(stat => <Stat key={JSON.stringify(stat)} {...stat} />)

  const [copying, setCopying] = useState(false)
  const [scooping, setScooping] = useState(false)

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
              <div className="ml-3 font-medium">Copy referral link (scooper)</div>
            </div>

            <div className={classNames("flex items-center justify-center absolute inset-0 transition-all duration-200", copying ? "opacity-100" : "opacity-0")}>
              <div><DocumentDuplicateIcon className='w-6 text-white' /></div>
              <div className="ml-3 font-bold">Scooper link copied  !</div>

              <div className="absolute right-[37px] top-[19px]"><SvgIcon icon='check-circle-white' width={22} /></div>
            </div>
          </button>
        </header>

        <section>
          <div className="mt-8">
            <div className="rounded-[25px] bg-black/20 pt-[29px] pb-[40px] pl-[30px] pr-[18px]">
              <div className="flex items-center leading-none">
                <div className="text-lg">Total BWAX Scooped</div>
                <div className="ml-auto"><ExclamationCircleIcon className='text-[#F6AC59] w-6' /></div>
              </div>

              <div className="flex items-end justify-between mt-8">
                <div>
                  <div className='text-[35px] text-white font-bold leading-none'>2.37 M</div>

                  <SmartContractCall>
                    <Popover.Button className="bg-gradient-to-r from-[#8250ED] to-[#452ECE] mt-[26px] flex items-center rounded-[10px] text-white h-11 px-[25px]">
                      <span className="text-sm font-medium h-[22px]">Activate scooper pack</span>
                      <div className="ml-4"><SvgIcon icon='activate-scooper-pack' width={20} /></div>
                    </Popover.Button>
                  </SmartContractCall>
                </div>

                <div><SvgIcon icon='bwac-coin' width={62} /></div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="rounded-[25px] bg-black/20 pt-[29px] pb-[40px] pl-[30px] pr-[18px]">
              <div className="flex items-center justify-between">
                <div className="flex items-end">
                  <div className="text-lg">{scooping ? "BWAX Scooping is pending" : "BWAX to scoop"}</div>
                  <div className="ml-3"><ExclamationCircleIcon className='text-[#F6AC59] w-6' /></div>
                </div>

                <div className='relative flex justify-center items-center flex-none w-11 h-11 z-0'>
                  <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg" className='absolute inset-0 -z-10 -rotate-[85deg]'>
                    <defs>
                      <linearGradient id="circular-progress-bar-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#96B835" />
                        <stop offset="100%" stop-color="#E6F356" />
                      </linearGradient>
                    </defs>
                    <circle cx={70} cy={70} r={70} stroke="url(#circular-progress-bar-gradient)" className="w-full h-full fill-none stroke-[10] scale-90 origin-center transition-all duration-200" strokeLinecap='round' strokeDasharray={440} strokeDashoffset={440 * (1 - (scooping ? 1 : 97) / 100)} />
                  </svg>
                  <div className="text-xs">{scooping ? 1 : 97}%</div>
                </div>
              </div>

              <div className="flex items-end justify-between mt-3.5">
                <div>
                  <div className="relative leading-none">
                    <div className='flex items-start'>
                      <div className='text-[35px] text-white font-bold'>{scooping ? <Number from={2892872400.82} to={0} /> : <Number from={0} to={2892872400.82} />}</div>
                      <div className='ml-1 text-white/75'>BWAX</div>
                    </div>
                  </div>

                  <div className='text-sm'>
                    {scooping ? "Next scooping in" : "Last scooping"} : <span className='font-bold text-primary-400'>{scooping ? "23:27:32" : "2 days ago"}</span>
                  </div>

                  <button onClick={() => setScooping(scooping => !scooping)} className={classNames("relative bg-gradient-to-r flex items-center mt-3 rounded-[10px] text-secondary-900 h-11 px-[25px] transition-all duration-200", scooping ? "from-[#F65959] to-[#F6AC59]" : "from-[#3A3E97] to-[#DE51EA]")}>
                    <div className={classNames('flex items-center justify-center transition-all duration-200', scooping ? "opacity-0" : "opacity-100")}>
                      <span className="text-sm font-medium h-[22px] text-white">Scoop BWAX</span>
                      <div className="ml-2"><SvgIcon icon='2-coins-white' width={22} /></div>
                    </div>

                    <div className={classNames('absolute inset-0 flex items-center justify-center transition-all duration-200', scooping ? "opacity-100" : "opacity-0")}>
                      <span className="text-sm font-medium h-[22px] text-white">Pending scooping</span>
                      <div className="ml-2"><div className="animate-spin"><SvgIcon icon='spinner' width={22} /></div></div>
                    </div>
                  </button>
                </div>

                <div><SvgIcon icon='harvest' width={62} /></div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="rounded-[25px] bg-gradient-to-r from-[#8EAD12] to-[#EDDE50] p-[1px] shadow-lg shadow-[#90AE140D]">
              <div className="rounded-[25px] bg-secondary-900">
                <div className="rounded-[25px] bg-black/20 pt-[29px] pb-[40px] pl-[30px] pr-[18px]">
                  <div className="flex items-start">
                    <div className="text-lg flex items-center">
                      <div><SvgIcon icon='bnb' width={18} /></div>
                      <div className="ml-2">
                        Available earnings
                      </div>
                    </div>
                    <div className="ml-auto pr-[5px]"><ExclamationCircleIcon className='text-[#F6AC59] w-6' /></div>
                  </div>

                  <div className="flex items-end justify-between mt-9">
                    <div>
                      <div className='flex'>
                        <div className='text-[35px] text-white font-bold leading-none'>$2.37</div>
                        <div className='text-lg text-white/75 ml-1'>BUSD</div>
                      </div>

                      <button className="bg-gradient-to-r from-[#8EAD12] to-[#61AD32] mt-[26px] flex items-center rounded-[10px] text-white h-11 px-[25px]">
                        <span className="text-sm font-medium h-[22px]">Withdraw earnings</span>
                        <div className="ml-2"><ArrowRightOnRectangleIcon className='w-5' /></div>
                      </button>
                    </div>
                    <div><SvgIcon icon='bnb-transparent' width={62} height={62} /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='mt-8'>
          <h2 className='text-[25px] font-bold text-white/90'>Account stats (BWAX)</h2>

          <div className="mt-6 grid gap-x-3 gap-y-3.5 grid-cols-2">
            {statsContent}
          </div>
        </section>

        <section className='mt-8'>
          <div className="rounded-[25px] bg-black/20 pt-[33px] pb-[31px] pl-[17px] pr-[18px]">
            <div className="flex items-center">
              <div><SvgIcon icon='bars' width={26} /></div>
              <h2 className='text-[25px] text-white/90 font-bold ml-2'>BWAX Global Stats</h2>
            </div>

            <div className="mt-8 space-y-2.5">
              <div className="flex justify-between">
                <div className='text-white/75'>$BWAX price</div>
                <div className='text-white/90 font-bold'>2.4471230  BNB</div>
              </div>

              <div className="flex justify-between">
                <div className='text-white/75'>BUSD volume</div>
                <div className='text-white/90 font-bold'>1.6901234  BNB</div>
              </div>

              <div className="flex justify-between">
                <div className='text-white/75'>Est. MarketCap</div>
                <div className='text-white/90 font-bold'>6.4562743  BNB</div>
              </div>

              <div className="flex justify-between">
                <div className='text-white/75'>Token sold</div>
                <div className='text-white/90 font-bold'>1291</div>
              </div>

              <div className="flex justify-between">
                <div className='text-white/75'>Token scooped</div>
                <div className='text-white/90 font-bold'>1291</div>
              </div>

              <div className="flex justify-between">
                <div className='text-white/75'>Commission earned</div>
                <div className='text-white/90 font-bold'>1291</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </>
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default HomePage