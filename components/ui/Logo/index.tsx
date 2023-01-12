type LogoProps = {
    className?: string
}

export default function Logo({ className }: LogoProps) {
    return <img className={`w-auto ${className || 'h-[66px]'}`} src="/images/logo.svg" alt="Logo" />
}