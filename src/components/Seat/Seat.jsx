import { useState } from "react"
import { SeatStyle } from "./SeatStyles"

const Seat = ({seat, selectedSeats ,setSelectedSeats}) => {
    const [isSelected, setIsSelected] = useState(false)

    const handleSeat = (seat) => {
        if(!seat.isAvailable === false && isSelected === false) {
            setIsSelected(true)
            if(!selectedSeats.includes(seat.id)) {
                setSelectedSeats([...selectedSeats, seat.id])
            }
        } else if (!seat.isAvailable === false && isSelected === true) {
            setIsSelected(false)
            if(selectedSeats.includes(seat.id)) {
                const filteredIds = selectedSeats.filter(ids => ids !== seat.id)
                setSelectedSeats(filteredIds)
            }
        } else {
            alert("Esse assento não está disponível")
        }
    }

    return (
        <SeatStyle data-test="seat" isAvailable={seat.isAvailable} isSelected={isSelected} onClick={() => handleSeat(seat)}>{seat.name}</SeatStyle>
    )
}

export default Seat