import {ReactNode, useState} from "react";
import {DataContext} from "./dataContext";

type Props = {
    children: ReactNode
}

export const BookingContextProvider = ({children}: Props) => {
    const [adultsCounter, setAdultsCounter] = useState(0);
    const [childrenCounter, setChildrenCounter] = useState(0);
    const [roomsCounter, setRoomsCounter] = useState(0);

    return <DataContext.Provider
        value={{adultsCounter, setAdultsCounter, childrenCounter, setChildrenCounter, roomsCounter, setRoomsCounter}}>
        {children}
    </DataContext.Provider>
}