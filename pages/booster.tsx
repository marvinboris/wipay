import { FaceSmileIcon } from '@heroicons/react/24/outline'
import { ReactElement } from 'react'

import { NextPageWithLayout } from './_app'

import Layout, { Head } from '../components/frontend/navigation/Layout'

const params = {
    link: '/booster',
    title: `Boosters - ${process.env.NEXT_PUBLIC_APP_NAME!}`,
    description: "Everything about your favorite farming platform."
}

const AboutPage: NextPageWithLayout = () => {
    return <>
        <Head {...params} />
        <main>
            <div className="container pb-[190px]">
                <section>
                    <h2 className="text-[25px] font-bold text-white/90">Boosters</h2>

                    <div className='mt-8 bg-black/20 rounded-[35px] flex flex-col items-center justify-center h-[50vh]'>
                        <FaceSmileIcon className='w-[100px] text-primary-400' />
                        <div className="mt-16 text-center text-[28px] text-white font-medium">
                            Content<br />
                            coming soon !
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