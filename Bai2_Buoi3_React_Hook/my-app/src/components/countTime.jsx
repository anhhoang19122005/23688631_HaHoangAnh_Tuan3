import { useState, useEffect } from "react"

export default function CountTime() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000)
        console.log('Time:', time.toLocaleTimeString())
        return () => clearInterval(intervalId)
    }, [time])
    return <div>
        <h2>Digital Clock</h2>
        <h3>{time.toLocaleTimeString()}</h3>
    </div>
}