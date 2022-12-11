import { useState } from "react"
import { SeatStyle } from "./SeatStyles"

const Seat = ({seat}) => {
    const [isSelected, setIsSelected] = useState(false)

    const handleSeat = (seat) => {
        if(!seat.isAvailable === false && isSelected === false) {
            setIsSelected(true)
        } else if (!seat.isAvailable === false && isSelected === true) {
            setIsSelected(false)
        } else {
            alert("Esse assento não está disponível")
        }
    }

    return (
        <SeatStyle data-test="seat" isAvailable={seat.isAvailable} isSelected={isSelected} onClick={() => handleSeat(seat)}>{seat.name}</SeatStyle>
    )
}

export default Seat