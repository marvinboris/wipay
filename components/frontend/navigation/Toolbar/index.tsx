/* This example requires Tailwind CSS v2.0+ */
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ComponentProps, ReactNode } from 'react'

import { classNames } from '../../../../app/helpers/utils'

import Logo from '../../../ui/Logo'

const navItems = [
    {
        name: 'Scooper', href: '/dashboard', icon: () => <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_309_439)">
                <path d="M20.8 14.4H19.2V6.40005C19.2 5.52005 18.48 4.80005 17.6 4.80005H14.4C13.52 4.80005 12.8 5.52005 12.8 6.40005V14.4H11.2C8.544 14.4 6.4 16.544 6.4 19.2V27.2C16.816 27.2 25.6 27.2 25.6 27.2V19.2C25.6 16.544 23.456 14.4 20.8 14.4ZM14.4 6.40005H17.6V14.4H14.4V6.40005ZM24 25.6H20.8V23.2C20.8 22.752 20.448 22.4 20 22.4C19.552 22.4 19.2 22.752 19.2 23.2V25.6H16.8V23.2C16.8 22.752 16.448 22.4 16 22.4C15.552 22.4 15.2 22.752 15.2 23.2V25.6H12.8V23.2C12.8 22.752 12.448 22.4 12 22.4C11.552 22.4 11.2 22.752 11.2 23.2V25.6H8V19.2C8 17.44 9.44 16 11.2 16H20.8C22.56 16 24 17.44 24 19.2V25.6Z" fill="currentColor" />
            </g>
            <defs>
                <clipPath id="clip0_309_439">
                    <rect width="32" height="32" fill="white" />
                </clipPath>
            </defs>
        </svg>, activeIcon: () => <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_312_671)">
                <path d="M24.7 17.1H22.8V7.59995C22.8 6.55495 21.945 5.69995 20.9 5.69995H17.1C16.055 5.69995 15.2 6.55495 15.2 7.59995V17.1H13.3C10.146 17.1 7.60001 19.646 7.60001 22.8V32.3C19.969 32.3 30.4 32.3 30.4 32.3V22.8C30.4 19.646 27.854 17.1 24.7 17.1ZM17.1 7.59995H20.9V17.1H17.1V7.59995ZM28.5 30.4H24.7V27.55C24.7 27.018 24.282 26.6 23.75 26.6C23.218 26.6 22.8 27.018 22.8 27.55V30.4H19.95V27.55C19.95 27.018 19.532 26.6 19 26.6C18.468 26.6 18.05 27.018 18.05 27.55V30.4H15.2V27.55C15.2 27.018 14.782 26.6 14.25 26.6C13.718 26.6 13.3 27.018 13.3 27.55V30.4H9.50001V22.8C9.50001 20.71 11.21 19 13.3 19H24.7C26.79 19 28.5 20.71 28.5 22.8V30.4Z" fill="url(#paint0_linear_312_671)" />
            </g>
            <defs>
                <linearGradient id="paint0_linear_312_671" x1="5.93751" y1="30.2811" x2="36.2188" y2="16.6249" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#3982F0" />
                    <stop offset="1" stop-color="#9747FF" />
                </linearGradient>
                <clipPath id="clip0_312_671">
                    <rect width="38" height="38" fill="white" />
                </clipPath>
            </defs>
        </svg>
    },
    {
        name: 'Scooper packs', href: '/packs', icon: () => <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className='my-0.5'>
            <path d="M24.5 18.6666V9.3333C24.4996 8.92412 24.3916 8.52225 24.1868 8.16799C23.982 7.81373 23.6877 7.51956 23.3333 7.31497L15.1667 2.6483C14.812 2.44351 14.4096 2.33569 14 2.33569C13.5904 2.33569 13.188 2.44351 12.8333 2.6483L4.66667 7.31497C4.31231 7.51956 4.01798 7.81373 3.81321 8.16799C3.60843 8.52225 3.50042 8.92412 3.5 9.3333V18.6666C3.50042 19.0758 3.60843 19.4777 3.81321 19.8319C4.01798 20.1862 4.31231 20.4804 4.66667 20.685L12.8333 25.3516C13.188 25.5564 13.5904 25.6642 14 25.6642C14.4096 25.6642 14.812 25.5564 15.1667 25.3516L23.3333 20.685C23.6877 20.4804 23.982 20.1862 24.1868 19.8319C24.3916 19.4777 24.4996 19.0758 24.5 18.6666Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.815 8.12L14 14.0117L24.185 8.12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 25.76V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>, activeIcon: () => <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28 21.3334V10.6667C27.9995 10.1991 27.8761 9.73978 27.6421 9.33492C27.408 8.93005 27.0717 8.59385 26.6667 8.36003L17.3333 3.0267C16.9279 2.79265 16.4681 2.66943 16 2.66943C15.5319 2.66943 15.0721 2.79265 14.6667 3.0267L5.33333 8.36003C4.92835 8.59385 4.59197 8.93005 4.35795 9.33492C4.12392 9.73978 4.00048 10.1991 4 10.6667V21.3334C4.00048 21.801 4.12392 22.2603 4.35795 22.6651C4.59197 23.07 4.92835 23.4062 5.33333 23.64L14.6667 28.9734C15.0721 29.2074 15.5319 29.3306 16 29.3306C16.4681 29.3306 16.9279 29.2074 17.3333 28.9734L26.6667 23.64C27.0717 23.4062 27.408 23.07 27.6421 22.6651C27.8761 22.2603 27.9995 21.801 28 21.3334Z" stroke="url(#paint0_linear_317_754)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4.35999 9.28003L16 16.0134L27.64 9.28003" stroke="url(#paint1_linear_317_754)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16 29.44V16" stroke="url(#paint2_linear_317_754)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <defs>
                <linearGradient id="paint0_linear_317_754" x1="16" y1="2.66943" x2="16" y2="29.3306" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#3982F0" />
                    <stop offset="1" stop-color="#9747FF" />
                </linearGradient>
                <linearGradient id="paint1_linear_317_754" x1="16" y1="9.28003" x2="16" y2="16.0134" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#3982F0" />
                    <stop offset="1" stop-color="#9747FF" />
                </linearGradient>
                <linearGradient id="paint2_linear_317_754" x1="16.5" y1="16" x2="16.5" y2="29.44" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#3982F0" />
                    <stop offset="1" stop-color="#9747FF" />
                </linearGradient>
            </defs>
        </svg>
    },
    { name: <>WiPay<br />farm</>, href: '/', icon: () => <svg></svg>, activeIcon: () => <svg></svg>, center: true },
    {
        name: 'Booster', href: '/booster', icon: () => <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_309_454)">
                <path d="M5 16.25C7.22887 16.5149 9.30381 17.5219 10.8909 19.1091C12.4781 20.6962 13.4851 22.7711 13.75 25C14.8549 24.363 15.7791 23.4548 16.4353 22.3612C17.0915 21.2676 17.4579 20.0247 17.5 18.75C19.5989 18.0116 21.4317 16.6675 22.7667 14.8875C24.1017 13.1075 24.8789 10.9717 25 8.75C25 7.75544 24.6049 6.80161 23.9017 6.09835C23.1984 5.39509 22.2446 5 21.25 5C19.0283 5.12113 16.8925 5.89833 15.1125 7.23331C13.3325 8.5683 11.9884 10.4011 11.25 12.5C9.97533 12.5421 8.73245 12.9085 7.63883 13.5647C6.54521 14.2209 5.63699 15.1451 5 16.25Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.75 17.5C7.44904 18.2345 6.39707 19.3407 5.72894 20.677C5.06082 22.0132 4.80699 23.5186 5 25C6.48145 25.193 7.98678 24.9392 9.32303 24.2711C10.6593 23.6029 11.7655 22.551 12.5 21.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.75 12.5C19.4404 12.5 20 11.9404 20 11.25C20 10.5596 19.4404 10 18.75 10C18.0596 10 17.5 10.5596 17.5 11.25C17.5 11.9404 18.0596 12.5 18.75 12.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_309_454">
                    <rect width="30" height="30" fill="white" />
                </clipPath>
            </defs>
        </svg>, activeIcon: () => <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_318_1106)">
                <path d="M5.33325 17.3333C7.71071 17.6159 9.92398 18.69 11.6169 20.383C13.3099 22.0759 14.384 24.2892 14.6666 26.6666C15.8451 25.9872 16.831 25.0184 17.5309 23.8519C18.2308 22.6854 18.6217 21.3596 18.6666 20C20.9054 19.2124 22.8604 17.7786 24.2844 15.88C25.7084 13.9814 26.5374 11.7031 26.6666 9.33331C26.6666 8.27245 26.2452 7.25503 25.495 6.50489C24.7449 5.75474 23.7275 5.33331 22.6666 5.33331C20.2968 5.46252 18.0185 6.29153 16.1199 7.71551C14.2213 9.1395 12.7875 11.0945 11.9999 13.3333C10.6403 13.3782 9.31453 13.7691 8.148 14.469C6.98148 15.1689 6.01271 16.1548 5.33325 17.3333Z" stroke="url(#paint0_linear_318_1106)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.3334 18.6667C7.94571 19.4501 6.82361 20.6301 6.11095 22.0555C5.39828 23.4808 5.12753 25.0865 5.3334 26.6667C6.91362 26.8726 8.51931 26.6018 9.94463 25.8891C11.37 25.1765 12.55 24.0544 13.3334 22.6667" stroke="url(#paint1_linear_318_1106)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M20.0001 13.3334C20.7365 13.3334 21.3334 12.7364 21.3334 12C21.3334 11.2636 20.7365 10.6667 20.0001 10.6667C19.2637 10.6667 18.6667 11.2636 18.6667 12C18.6667 12.7364 19.2637 13.3334 20.0001 13.3334Z" stroke="url(#paint2_linear_318_1106)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <linearGradient id="paint0_linear_318_1106" x1="15.9999" y1="5.33331" x2="15.9999" y2="26.6666" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#3982F0" />
                    <stop offset="1" stop-color="#9747FF" />
                </linearGradient>
                <linearGradient id="paint1_linear_318_1106" x1="9.29988" y1="18.6667" x2="9.29988" y2="26.7337" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#3982F0" />
                    <stop offset="1" stop-color="#9747FF" />
                </linearGradient>
                <linearGradient id="paint2_linear_318_1106" x1="20.0001" y1="10.6667" x2="20.0001" y2="13.3334" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#3982F0" />
                    <stop offset="1" stop-color="#9747FF" />
                </linearGradient>
                <clipPath id="clip0_318_1106">
                    <rect width="32" height="32" fill="white" />
                </clipPath>
            </defs>
        </svg>
    },
    {
        name: 'How it works', href: '/how-it-works', icon: () => <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.33333 8.33337C5.33333 6.67652 6.67647 5.33337 8.33333 5.33337H19.6667C21.3235 5.33337 22.6667 6.67652 22.6667 8.33337V18.6667H27.3333V23C27.3333 25.3932 25.3932 27.3334 23 27.3334H9.66666C7.27342 27.3334 5.33333 25.3932 5.33333 23V8.33337ZM22.6667 20.6667V25.3334H23C24.2887 25.3334 25.3333 24.2887 25.3333 23V20.6667H22.6667ZM20.6667 25.3334V8.33337C20.6667 7.78109 20.2189 7.33337 19.6667 7.33337H8.33333C7.78105 7.33337 7.33333 7.78109 7.33333 8.33337V23C7.33333 24.2887 8.378 25.3334 9.66666 25.3334H20.6667ZM9.33334 11.6667C9.33334 11.1144 9.78106 10.6667 10.3333 10.6667H17.6667C18.2189 10.6667 18.6667 11.1144 18.6667 11.6667C18.6667 12.219 18.2189 12.6667 17.6667 12.6667H10.3333C9.78106 12.6667 9.33334 12.219 9.33334 11.6667ZM9.33334 16.3334C9.33334 15.7811 9.78106 15.3334 10.3333 15.3334H17.6667C18.2189 15.3334 18.6667 15.7811 18.6667 16.3334C18.6667 16.8856 18.2189 17.3334 17.6667 17.3334H10.3333C9.78106 17.3334 9.33334 16.8856 9.33334 16.3334ZM9.33334 21C9.33334 20.4478 9.78106 20 10.3333 20H13.6667C14.2189 20 14.6667 20.4478 14.6667 21C14.6667 21.5523 14.2189 22 13.6667 22H10.3333C9.78106 22 9.33334 21.5523 9.33334 21Z" fill="currentColor" />
        </svg>, activeIcon: () => <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9.375C6 7.51104 7.51104 6 9.375 6H22.125C23.9889 6 25.5 7.51104 25.5 9.375V21H30.75V25.875C30.75 28.5674 28.5674 30.75 25.875 30.75H10.875C8.18261 30.75 6 28.5674 6 25.875V9.375ZM25.5 23.25V28.5H25.875C27.3248 28.5 28.5 27.3248 28.5 25.875V23.25H25.5ZM23.25 28.5V9.375C23.25 8.75368 22.7463 8.25 22.125 8.25H9.375C8.75368 8.25 8.25 8.75368 8.25 9.375V25.875C8.25 27.3248 9.42525 28.5 10.875 28.5H23.25ZM10.5 13.125C10.5 12.5037 11.0037 12 11.625 12H19.875C20.4963 12 21 12.5037 21 13.125C21 13.7463 20.4963 14.25 19.875 14.25H11.625C11.0037 14.25 10.5 13.7463 10.5 13.125ZM10.5 18.375C10.5 17.7537 11.0037 17.25 11.625 17.25H19.875C20.4963 17.25 21 17.7537 21 18.375C21 18.9963 20.4963 19.5 19.875 19.5H11.625C11.0037 19.5 10.5 18.9963 10.5 18.375ZM10.5 23.625C10.5 23.0037 11.0037 22.5 11.625 22.5H15.375C15.9963 22.5 16.5 23.0037 16.5 23.625C16.5 24.2463 15.9963 24.75 15.375 24.75H11.625C11.0037 24.75 10.5 24.2463 10.5 23.625Z" fill="url(#paint0_linear_317_841)" />
            <defs>
                <linearGradient id="paint0_linear_317_841" x1="18.375" y1="6" x2="18.375" y2="30.75" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#3982F0" />
                    <stop offset="1" stop-color="#9747FF" />
                </linearGradient>
            </defs>
        </svg>
    },
]

const NavItem = (item: { name: ReactNode, href: string, icon: (props: ComponentProps<'svg'>) => JSX.Element, activeIcon: (props: ComponentProps<'svg'>) => JSX.Element, center?: boolean }) => {
    const { asPath } = useRouter()
    const active = asPath === item.href

    const blueCircle = <div>
        <div className="w-1.5 h-1.5 rounded-full bg-blue-700" />
    </div>

    return <Link href={item.href} className={classNames("text-secondary-900 flex flex-col items-center space-y-2 relative", item.center ? "self-start -top-[41px]" : "")}>
        {item.center ? <div>
            <div className="w-[82px] flex items-center justify-center h-[82px] rounded-full bg-[#D9D9D9]">
                <div className={classNames("flex items-center justify-center bg-gradient-to-tr w-[70px] h-[70px] rounded-full shadow-lg shadow-[#1445A14D] backdrop-blur-2xl transition-all duration-200", active ? "from-[#9747FF] to-[#3982F0]" : "from-[#113F9A33] to-[#3982F033]")}>
                    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_312_660)">
                            <path d="M15.3723 23.5834L26.4278 26.7499L25.1611 31.1721C24.9932 31.7585 24.5991 32.2542 24.0657 32.5501C23.5323 32.846 22.9031 32.9179 22.3167 32.7499L15.6835 30.85C15.097 30.682 14.6014 30.2879 14.3055 29.7545C14.0096 29.2211 13.9377 28.592 14.1057 28.0056L15.3723 23.5834Z" className={classNames(active ? "stroke-white" : "stroke-[#4A5568]")} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22.8 18.5334C23.3039 16.7741 23.0882 14.8867 22.2006 13.2864C21.3129 11.6862 19.8259 10.504 18.0666 10.0001L14.75 9.05017L14.1167 11.2613C13.6128 13.0205 13.8284 14.9079 14.7161 16.5082C15.6037 18.1085 17.0908 19.2906 18.85 19.7945L22.1666 20.7444" className={classNames(active ? "stroke-white" : "stroke-[#4A5568]")} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22.1666 20.7444C22.6705 18.9851 23.8527 17.4981 25.4529 16.6104C27.0532 15.7227 28.9406 15.5071 30.6999 16.011L34.0165 16.961L33.6998 18.0665C33.1959 19.8258 32.0138 21.3128 30.4135 22.2005C28.8132 23.0882 26.9259 23.3038 25.1666 22.7999L21.85 21.8499" className={classNames(active ? "stroke-white" : "stroke-[#4A5568]")} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20.9 25.1666L22.7999 18.5333" className={classNames(active ? "stroke-white" : "stroke-[#4A5568]")} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <g filter="url(#filter0_d_312_660)">
                                <circle cx="41" cy="6" r="4" className={classNames(active ? "fill-white" : "fill-[#4A5568]")} />
                            </g>
                            <circle cx="33" cy="2" r="2" className={classNames(active ? "fill-white" : "fill-[#4A5568]")} />
                            <circle cx="44" cy="15" r="2" className={classNames(active ? "fill-white" : "fill-[#4A5568]")} fillOpacity="0.2" />
                        </g>
                        <defs>
                            <filter id="filter0_d_312_660" x="29" y="-2" width="24" height="24" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="4" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_312_660" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_312_660" result="shape" />
                            </filter>
                            <clipPath id="clip0_312_660">
                                <rect width="46" height="46" rx="8" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                </div>
            </div>
        </div> : active ? <item.activeIcon /> : <item.icon />}
        {active && item.center ? blueCircle : null}
        <span className={classNames("text-xs text-center transition-all duration-200", item.center ? 'font-bold' : '', active ? 'font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3982F0] to-[#9747FF]' : '')}>{item.name}</span>
        {active ? item.center ? null : blueCircle : null}
    </Link>
}

type ToolbarProps = {
    home?: boolean
}

export default function Toolbar({ home }: ToolbarProps) {
    return <>
        <header className="w-full top-0 z-40 bg-secondary-900">
            <div className="container">
                <div className="flex pt-[31px] h-[135px]">
                    <div>
                        <Link href="/">
                            <span className="sr-only">{process.env.NEXT_PUBLIC_APP_NAME}</span>
                            <Logo className={home ? undefined : 'h-[55.89px]'} />
                        </Link>
                    </div>
                </div>
            </div>
        </header>

        <footer className="fixed w-full bottom-0 z-50 bg-white rounded-t-[20px] rounded-b-[1px] border border-[#61616166]">
            <div className='h-[112px] container flex items-center justify-between'>
                {navItems.map(item => <NavItem key={item.href} {...item} />)}
            </div>
        </footer>
    </>
}
