import { Popover } from '@headlessui/react'
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'
import { ReactElement, useState } from 'react'

import { NextPageWithLayout } from './_app'

import { classNames } from '../app/helpers/utils'

import Layout, { Head } from '../components/frontend/navigation/Layout'
import SmartContractCall from '../components/frontend/ui/smart-contract-call'
import Card from '../components/ui/card'
import CopyLink from '../components/ui/copy-link'
import Number from '../components/ui/number'
import Stat, { StatProps } from '../components/ui/stat'
import Stats from '../components/ui/stats'
import SvgIcon from '../components/ui/svg-icon'
import WalletConnected from '../components/ui/wallet-connected'

const params = {
  link: '/dashboard',
  title: 'Scooping Dashboard' + process.env.NEXT_PUBLIC_APP_NAME!,
  description: "Your favorite farming platform."
}

const HomePage: NextPageWithLayout = () => {
  const statsContent = ([
    { type: 'purchased', title: 'Total purchased', value: '6382053.68', unit: '$BWAX' },
    { type: 'pending-scoop', title: 'Pending scoop', value: '$289.67', unit: '$BWAX' },
    { type: 'dsp-volume', title: 'DS+P volume', value: '6382053.68', unit: 'BUSD' },
    { type: 'team-volume', title: 'Team volume', value: '$248.67', unit: 'BUSD' },
    { type: 'referrals', title: 'Total referrals', value: '108', unit: 'BWAX Referrals' },
    { type: 'earnings', title: 'Total earnings', value: '$48.67', unit: 'BUSD' },
  ] as StatProps[]).map(stat => <Stat key={JSON.stringify(stat)} {...stat} />)

  const [scooping, setScooping] = useState(false)

  return <>
    <Head {...params} />
    <main>
      <div className="container pb-[45px]">
        <header>
          <WalletConnected />

          <CopyLink scooper />
        </header>

        <section>
          <div className="mt-8">
            <Card title="Total BWAX Scooped" value="2.37 M">
              <SmartContractCall>
                <Popover.Button className="bg-gradient-to-r from-[#8250ED] to-[#452ECE] mt-[26px] flex items-center rounded-[10px] text-white h-11 px-[25px]">
                  <span className="text-sm font-medium h-[22px] truncate">Activate scooper pack</span>
                  <div className="ml-4"><SvgIcon icon='activate-scooper-pack' width={20} /></div>
                </Popover.Button>
              </SmartContractCall>
            </Card>
          </div>

          <div className="mt-4">
            <Card icon='harvest'
              title={scooping ? "BWAX Scooping is pending" : "BWAX to scoop"}
              value={scooping ? <Number from={2892872400.82} to={0} /> : <Number from={0} to={2892872400.82} />}
              loader={<div className='relative flex justify-center items-center flex-none w-11 h-11 z-0'>
                <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg" className='absolute inset-0 -z-10 -rotate-[85deg]'>
                  <defs>
                    <linearGradient id="circular-progress-bar-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#96B835" />
                      <stop offset="100%" stopColor="#E6F356" />
                    </linearGradient>
                  </defs>
                  <circle cx={70} cy={70} r={70} stroke="url(#circular-progress-bar-gradient)" className="w-full h-full fill-none stroke-[10] scale-90 origin-center transition-all duration-200" strokeLinecap='round' strokeDasharray={440} strokeDashoffset={440 * (1 - (scooping ? 1 : 97) / 100)} />
                </svg>
                <div className="text-xs">{scooping ? 1 : 97}%</div>
              </div>}
              countdown={<>{scooping ? "Next scooping in" : "Last scooping"} : <span className='font-bold text-primary-400'>{scooping ? "23:27:32" : "2 days ago"}</span></>}>
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
            </Card>
          </div>

          <div className="mt-4">
            <div className="rounded-[25px] bg-gradient-to-r from-[#8EAD12] to-[#EDDE50] p-[1px] shadow-lg shadow-[#90AE140D]">
              <div className="rounded-[25px] bg-secondary-900">
                <Card bnb title="Available earnings" value="$2.37" unit="BUSD" icon='bnb-transparent'>
                  <button className="bg-gradient-to-r from-[#8EAD12] to-[#61AD32] mt-[26px] flex items-center rounded-[10px] text-white h-11 px-[25px]">
                    <span className="text-sm font-medium h-[22px]">Withdraw earnings</span>
                    <div className="ml-2"><ArrowRightOnRectangleIcon className='w-5' /></div>
                  </button>
                </Card>
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
          <Stats title="BWAX Global Stats" stats={[
            { label: '$BWAX price', value: '2.4471230  BNB' },
            { label: 'BUSD volume', value: '1.6901234  BNB' },
            { label: 'Est. MarketCap', value: '6.4562743  BNB' },
            { label: 'Token sold', value: 1291 },
            { label: 'Token scooped', value: 1291 },
            { label: 'Commission earned', value: 1291 },
          ]} />
        </section>
      </div>
    </main>
  </>
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default HomePage