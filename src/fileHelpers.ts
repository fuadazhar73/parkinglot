import * as path from 'path';
import * as fs from 'fs';
import readline from 'readline'
import * as parkingHelpers from './parkingHelpers'

const generateCommandsFromInputLines = (line: string) => {
    const command = line.split(' ')
    switch (command[0]) {
        case 'create_parking_lot':
            parkingHelpers.populateData(Number(command[1]))
            break
        case 'park':
            parkingHelpers.parkVehicle(command[1])
            break
        case 'leave':
            parkingHelpers.leaveVehicle(command[1], Number(command[2]))
            break
        case 'status':
            parkingHelpers.status()
            break
        default :
            console.log(`command not found: ${command[0]}`)

    }
}


export async function processLineByLine(filePath: string) {
    try {
        const fileStream = fs.createReadStream(filePath);
        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });

        rl.on('line', function (line) {
            generateCommandsFromInputLines(line)
        });

    } catch (e) {
        throw new Error(e)
    }
}


