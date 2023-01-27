import SvgIcon from "./svg-icon";

export default function WalletConnected() {
    return <div className="rounded-[14px] bg-black/20 shadow bg-gradient-to-r from-[#8EAD12] to-[#EDDE50] p-[1px] h-[60px]">
        <div className="w-full h-full rounded-[14px] bg-secondary-900 px-[25px] flex items-center">
            <div><SvgIcon icon='wallet' width={24} height={24} /></div>
            <div className="ml-2.5 flex-1 truncate text-sm">
                <span className="text-primary-600 font-bold">Wallet connected :</span> <span className="text-white font-medium">0x2******8a2f</span>
            </div>
            <div className="ml-auto"><SvgIcon icon='check-circle' width={18} /></div>
        </div>
    </div>
}