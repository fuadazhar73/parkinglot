import {addVehicle, createParkingLot, printParkingLot, removeVehicle} from "./data";

export const populateData = (size: number) => {
    return createParkingLot(size)
}

export const parkVehicle = (vehicleNumber: string) => {
    return addVehicle(vehicleNumber)
}

export const leaveVehicle = (vehicleNumber: string, hours: number) => {
    return removeVehicle(vehicleNumber, hours)
}

export const status = () => {
    return printParkingLot()
}

