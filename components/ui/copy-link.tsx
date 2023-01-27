import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { useState } from 'react'

import { classNames } from "../../app/helpers/utils";

import SvgIcon from "./svg-icon";

export default function CopyLink(props: { scooper?: boolean }) {
    const [copying, setCopying] = useState(false)

    const copyLink = () => {
        setCopying(true)
        setTimeout(() => {
            setCopying(false)
        }, 3000);
    }

    return <button onClick={copyLink} className={classNames("relative h-[60px] rounded-[14px] text-sm flex items-center justify-center w-full mt-2.5 transition-all duration-200", copying ? "bg-[#8EAD12]" : "bg-blue-700")}>
        <div className={classNames('flex items-center justify-center transition-all duration-200', copying ? "opacity-0" : "opacity-100")}>
            <div><DocumentDuplicateIcon className='w-6 text-white/50' /></div>
            <div className="ml-3 font-medium">Copy referral link{props.scooper ? " (scooper)" : ""}</div>
        </div>

        <div className={classNames("flex items-center justify-center absolute inset-0 transition-all duration-200", copying ? "opacity-100" : "opacity-0")}>
            <div><DocumentDuplicateIcon className='w-6 text-white' /></div>
            <div className="ml-3 font-bold">{props.scooper ? "Scooper link" : "Link"} copied !</div>

            <div className="absolute right-[37px] top-[19px]"><SvgIcon icon='check-circle-white' width={22} /></div>
        </div>
    </button>
}