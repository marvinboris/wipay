import Image from "next/image";

type SvgIconProps = {
    icon: string
    width?: number
    height?: number
}

export default function SvgIcon({ icon, width, height }: SvgIconProps) {
    return <Image src={'/images/svg/' + icon + '.svg'} alt={icon + " icon"} width={width || height} height={height || width} />
}