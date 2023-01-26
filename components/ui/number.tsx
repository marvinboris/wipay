import { animated, useSpring } from "react-spring";

type NumberProps = {
    from: number
    to: number
}

export default function Number({ from, to }: NumberProps) {
    const { number } = useSpring({
        from: { number: from },
        number: to,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10 },
    })

    return <animated.div>{number.to((n) => n.toFixed(3))}</animated.div>
}