/* This example requires Tailwind CSS v2.0+ */
import { Popover, Transition } from '@headlessui/react'
import { XMarkIcon, HomeIcon, QuestionMarkCircleIcon, ChevronLeftIcon, IdentificationIcon, ComputerDesktopIcon, CircleStackIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment, ComponentProps } from 'react'

import Logo from '../../../ui/Logo'
import SvgIcon from '../../../ui/svg-icon'

const mobileNavItems = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Dashboard', href: '/dashboard', icon: ComputerDesktopIcon },
    { name: 'About Wipay', href: '/about', icon: IdentificationIcon },
    { name: 'Scooper Packs', href: '/packs', icon: CircleStackIcon },
    { name: 'How it works', href: '/how-it-works', icon: QuestionMarkCircleIcon },
]

const renderMobileNavItem = (item: { name: string, href: string, icon: (props: ComponentProps<'svg'>) => JSX.Element }, close: () => void) => <Link key={item.name} href={item.href} onClick={close} className="-m-3 flex items-center rounded-md p-3 dark:hover:bg-secondary-900">
    <item.icon className="w-5 flex-shrink-0 text-primary-600" aria-hidden="true" />
    <span className="ml-2.5 text-sm font-medium text-white">{item.name}</span>
</Link>

type ToolbarProps = {
    home?: boolean
}

export default function Toolbar({ home }: ToolbarProps) {
    const { back } = useRouter()

    return (
        <Popover className="sticky w-full top-0 z-40 bg-secondary-900">
            {({ close }) => <>
                <div className="container">
                    <div className="flex pt-[31px] h-[135px]">
                        {home ? null : <button onClick={back} className='rounded-full h-11 w-11 flex items-center justify-center bg-black/40 text-white mr-[29px]'>
                            <ChevronLeftIcon className='flex-none w-[18px]' />
                        </button>}

                        <div>
                            <Link href="/">
                                <span className="sr-only">{process.env.NEXT_PUBLIC_APP_NAME}</span>
                                <Logo className={home ? undefined : 'h-[55.89px]'} />
                            </Link>
                        </div>

                        <div className="ml-auto pt-4">
                            <Popover.Button className="-m-2 focus:outline-none">
                                <span className="sr-only">Ouvrir le menu</span>
                                <SvgIcon icon='category' width={32} height={32} />
                            </Popover.Button>
                        </div>
                    </div>
                </div>

                <Popover.Overlay className="fixed top-0 w-full h-screen z-40 bg-black/20 backdrop-filter backdrop-blur-sm" />
                <Transition as={Fragment} enter="duration-200 ease-out" enterFrom="opacity-0" enterTo="opacity-100" leave="duration-200 ease-in" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <Popover.Panel focus className="fixed inset-x-0 top-0 z-50">
                        <div className="absolute top-0 left-0 w-full h-[110px] flex items-center">
                            <div className="container flex justify-end">
                                <Popover.Button className="flex h-10 items-center justify-center rounded-md p-2 -mr-2 focus:outline-none">
                                    <span className="sr-only">Fermer le menu</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                        </div>

                        <div className="mt-[110px] container">
                            <div className="divide-y-2 divide-secondary-200/10 rounded-lg bg-secondary-900 shadow-lg ring-1 ring-white/5">
                                <div className="px-5 pt-5 pb-6">
                                    <div className="my-6">
                                        <nav className="grid gap-y-8">
                                            {mobileNavItems.map(item => renderMobileNavItem(item, close))}
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </>}
        </Popover>
    )
}
