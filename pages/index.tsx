import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { ReactElement } from 'react'

import { NextPageWithLayout } from './_app'

import Layout, { Head } from '../components/frontend/navigation/Layout'
import SvgIcon from '../components/ui/svg-icon'

const params = {
  link: '/',
  title: process.env.NEXT_PUBLIC_APP_NAME!,
  description: "Your favorite farming platform."
}

const HomePage: NextPageWithLayout = () => {
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
            </div>
          </div>
        </header>

        <section>
          <div className="mt-3.5">
            <div className="rounded-[25px] bg-black/20 pt-[29px] pb-[40px] pl-[30px] pr-[18px]">
              <div className="flex items-center">
                <div><SvgIcon icon='bnb' width={18} height={18} /></div>
                <div className="ml-2 text-lg">Total BNB staked</div>
                <div className="ml-3"><ExclamationCircleIcon className='text-sky w-6' /></div>
              </div>

              <div className="flex items-end justify-between mt-3.5">
                <div className='flex'>
                  <div className='text-[50px] text-white font-bold'>2.370</div>
                  <div className='text-lg text-white/75 mt-3.5 ml-1'>BNB</div>
                </div>
                <div><SvgIcon icon='coins-1' width={62} height={62} /></div>
              </div>
            </div>
          </div>

          <div className="mt-3.5">
            <div className="rounded-[25px] bg-black/20 pt-[29px] pb-[40px] pl-[30px] pr-[18px]">
              <div className="flex items-center justify-between">
                <div className="flex items-end">
                  <div className="text-lg">Available for harvest</div>
                  <div className="ml-3"><ExclamationCircleIcon className='text-sky w-6' /></div>
                </div>

                <div></div>
              </div>

              <div className="flex items-end justify-between mt-3.5">
                <div>
                  <div className='flex'>
                    <div className='text-[50px] text-white font-bold'>0.829</div>
                    <div className='text-lg text-white/75 mt-3.5 ml-1'>BNB</div>
                  </div>

                  <button className="bg-gradient-to-r from-[#96B835] to-primary-400 flex items-center rounded-[10px] text-secondary-900 h-11 px-[25px]">
                    <span className="text-sm font-medium h-[22px]">Harvest now</span>
                    <div className="ml-2"><SvgIcon icon='2-coins' width={22} height={22} /></div>
                  </button>
                </div>

                <div><SvgIcon icon='harvest' width={62} height={62} /></div>
              </div>
            </div>
          </div>
        </section>

        <section className='mt-12'>
          <h2 className='text-[25px] text-white/90 font-bold'>Stake BNB</h2>

          <div className="rounded-[35px] bg-black/20 shadow bg-gradient-to-r from-[#F3B356] to-[#56BAF3] p-[1px] mt-8">
            <div className="w-full h-full rounded-[35px] bg-secondary-900">
              <div className="w-full h-full rounded-[35px] bg-black/20 p-8">
                <div className="flex items-end justify-between">
                  <div className='text-lg'>Stake BNB (Min 0.2 - Max 200)</div>

                  <div><ExclamationCircleIcon className='text-sky w-6' /></div>
                </div>

                <div className="mt-8 flex">
                  <div className="rounded-xl bg-secondary-100/5 h-[54px] py-[18px] px-[15px] flex items-center space-x-3 flex-shrink">
                    <div><SvgIcon icon='coins-1' width={18} height={18} /></div>
                    <div><div className="h-[18px] w-[1px] bg-white/40" /></div>
                    <div className='flex-shrink'><input className="bg-transparent outline-none placeholder:text-white/20 max-w-[100px]" placeholder='0.453' /></div>
                  </div>

                  <div className="ml-[15px]">
                    <button className="h-[54px] rounded-xl bg-blue-700 pl-[31px] pr-[21px] flex items-center">
                      <span className="font-bold text-white text-sm">Stake</span>
                      <div className="ml-[13px]"><SvgIcon icon='stake' width={18} height={18} /></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='mt-12'>
          <h2 className='text-[25px] text-white/90 font-bold'>BWAX airdrop</h2>

          <div className="rounded-[35px] bg-black/20 pr-[31px] pl-9 pt-[30px] pb-[39px] mt-8">
            <div className="flex items-end">
              <div className='text-lg'>BWAX airdrop balance</div>

              <div className='ml-[15px]'><ExclamationCircleIcon className='text-sky w-6' /></div>
            </div>

            <div className="mt-[29px] flex justify-between">
              <div className='flex'>
                <div className='text-[50px] text-white font-bold'>34.3M</div>
                <div className='text-lg text-white/75 mt-3.5 ml-1'>BWAX</div>
              </div>

              <div><SvgIcon icon='bwac-coin' width={77} height={73} /></div>
            </div>
          </div>
        </section>

        <section className='mt-12'>
          <h2 className='text-[25px] text-white/90 font-bold'>Global Stats</h2>

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
        </section>
      </div>
    </main>
  </>
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout home>{page}</Layout>
}

export default HomePage