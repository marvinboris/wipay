import { ChevronDownIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { ReactElement } from 'react'

import { NextPageWithLayout } from './_app'

import Layout, { Head } from '../components/frontend/navigation/Layout'
import SvgIcon from '../components/ui/svg-icon'

const params = {
  link: '/dashboard',
  title: `Dashboard - ${process.env.NEXT_PUBLIC_APP_NAME!}`,
  description: "Your favorite farming platform."
}

type StatType = {
  type: 'purchased' | 'earnings' | 'dsp-volume' | 'team-volume' | 'referrals'
  title: string
  value: string
  unit: string
}

const Stat = ({ type, title, value, unit }: StatType) => <div className='rounded-[25px] bg-black/20 pl-[17px] pr-[18px] pt-[22px] pb-[21px]'>
  <div className="flex">
    <div>
      <SvgIcon icon={{
        purchased: 'chart-pie',
        earnings: 'asc-chart',
        'dsp-volume': 'doc',
        'team-volume': 'asc-chart-2',
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
        purchased: 'chart-pie-transparent',
        earnings: 'people',
        'dsp-volume': 'doc-transparent',
        'team-volume': 'asc-chart-transparent',
        referrals: 'users-transparent',
      }[type]} width={32} />
    </div>
  </div>
</div>

const DashboardPage: NextPageWithLayout = () => {
  const statsContent = ([
    { type: 'purchased', title: 'Total purchased', value: '6382053.68', unit: '$BWAX' },
    { type: 'earnings', title: 'Total earnings', value: '2498.67', unit: 'BUSD' },
    { type: 'dsp-volume', title: 'DS+P volume', value: '6382053.68', unit: '$BWAX' },
    { type: 'team-volume', title: 'Team volume', value: '2498.67', unit: 'BUSD' },
    { type: 'referrals', title: 'Total referrals', value: '108', unit: 'Referrals' },
  ] as StatType[]).map(stat => <Stat key={JSON.stringify(stat)} {...stat} />)

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
              <div className="ml-auto"><ChevronDownIcon className='w-6 text-primary-600' /></div>
            </div>
          </div>
        </header>

        <section>
          <div className="mt-[38px]">
            <h2 className='text-[25px] text-white/90 font-bold'>BWAX Scooping</h2>

            <div className="rounded-[25px] bg-black/20 pt-[29px] pb-[29px] pl-[30px] pr-5 mt-8">
              <div className="flex items-end">
                <div className="text-lg">Total BWAX scooped</div>
                <div className="ml-auto pr-[5px]"><ExclamationCircleIcon className='text-sky w-6' /></div>
              </div>

              <div className="flex justify-between mt-[50px]">
                <div className='flex'>
                  <div className='text-[35px] text-white font-bold'>25013.92</div>
                  <div className='text-lg text-white/75 ml-1'>(0.25)</div>
                </div>
                <div><SvgIcon icon='bwac-coin-solid' width={62} height={62} /></div>
              </div>
            </div>
          </div>

          <div className="mt-3.5">
            <div className="rounded-[25px] bg-black/20 pt-[29px] pb-[40px] pl-[30px] pr-[18px]">
              <div className="flex items-center justify-between">
                <div className="flex items-end">
                  <div className="text-lg">BWAX to scoop</div>
                  <div className="ml-3"><ExclamationCircleIcon className='text-sky w-6' /></div>
                </div>

                <div></div>
              </div>

              <div className="flex items-end justify-between mt-10">
                <div>
                  <div>
                    <div className='text-[35px] text-white font-bold'>3193910.32</div>
                    <div className='text-sm text-white/75'>Next scoop in 23:13:54</div>
                  </div>

                  <button className="mt-[18px] bg-gradient-to-r from-[#3A3E97] to-[#DE51EA] flex items-center rounded-[10px] text-white h-11 px-[25px]">
                    <span className="text-sm font-medium h-[22px]">Scoop BWAX</span>
                    <div className="ml-2"><SvgIcon icon='2-coins-white' width={22} height={22} /></div>
                  </button>
                </div>

                <div><SvgIcon icon='harvest' width={62} height={62} /></div>
              </div>
            </div>
          </div>
        </section>

        <section className='mt-12'>
          <h2 className='text-[25px] text-white/90 font-bold'>Account stats (BWAX)</h2>

          <div className="mt-8 grid gap-x-3 gap-y-3.5 grid-cols-2">
            {statsContent}
          </div>
        </section>
      </div>
    </main>
  </>
}

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default DashboardPage