import {
    addVehicle,
    calculateParkingCharges, createParkingLot, removeVehicle, printParkingLot
} from './data'


describe('Create parking lot.', () => {
    test('Should return an array representing queue in parking lot', () => {
        expect(createParkingLot(4)).toEqual(expect.arrayContaining([1, 2, 3, 4]))
    })
})

describe('Park a vehicle.', () => {
    test('Should park a vehicle to the first spot and return 1.', () => {
        expect(addVehicle('KA-01-HH-7777')).toEqual(1)
    })
    test('Should park a vehicle to the second spot and return 2.', () => {
        expect(addVehicle('KA-02-HH-5577')).toEqual(2)
    })
    test('Should park a vehicle to the third spot and return 3.', () => {
        expect(addVehicle('DL-02-HH-0987')).toEqual(3)
    })
    test('Should park a vehicle to the fourth spot and return 4.', () => {
        expect(addVehicle('UP-02-HH-3124')).toEqual(4)
    })
    test('Should refuse to park as parking lot if full.', () => {
        expect(addVehicle('MH-02-HH-5577')).toEqual(undefined)
    })
})

describe('Leave a vehicle.', () => {
    test('Should leave the vehicle at position 4 and return updated free slots.', () => {
        expect(removeVehicle('UP-02-HH-3124')).toEqual(expect.arrayContaining([4]))
    })

    test('Should leave the vehicle at position 1 and return updated free slots.', () => {
        expect(removeVehicle('KA-01-HH-7777')).toEqual(expect.arrayContaining([1, 4]))
    })
})

describe('Park a vehicle after parking lot have slots free.', () => {
    test('Should park the vehicle returning allotted parking slot.', () => {
        expect(addVehicle('NL-02-HH-4122')).toEqual(4)
    })

    test('Should park the vehicle returning allotted parking slot.', () => {
        expect(addVehicle('AS-05-RT-8767')).toEqual(1)
    })

    test('Should refuse to park as parking lot is full.', () => {
        expect(addVehicle('ML-09-CD-9981')).toEqual(undefined)
    })

})

describe('Show parking lot status.', () => {
    const occupiedSlots = new Map([
        ['AS-05-RT-8767', 1],
        ['KA-02-HH-5577', 2],
        ['DL-02-HH-0987', 3],
        ['NL-02-HH-4122', 4]])
    test('Should match with status of both occupied and empty slots.', () => {
        expect(printParkingLot().freeSlots).toEqual(expect.arrayContaining([]))
        expect(printParkingLot().occupiedSlots).toEqual(occupiedSlots)
    })
})

describe('Calculate parking charges.', () => {
    test('Should return charges $30 for 4 hours.', () => {
        expect(calculateParkingCharges('KA-01-HH-7777', 4)).toBe(30)
    })
    test('Should return charges $10 for 2 hours.', () => {
        expect(calculateParkingCharges('KA-01-HH-7777', 2)).toBe(10)
    })
    test('Should return charges $10 for 0.5 hours.', () => {
        expect(calculateParkingCharges('KA-01-HH-7777', 0.5)).toBe(10)
    })
    test('Should return charges $3990 for 400 hours.', () => {
        expect(calculateParkingCharges('KA-01-HH-7777', 400)).toBe(3990)
    })
})


