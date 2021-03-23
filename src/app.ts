import {processLineByLine} from './fileHelpers'

const fileInput = process.argv.slice(2)
if (!fileInput.length) {
    throw new Error(`Missing param file_inputs.txt`)
}
processLineByLine(`${fileInput}`).catch((e) => {
    console.log(e)
})
