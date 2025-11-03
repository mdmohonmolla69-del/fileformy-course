import { write } from "fs"
import fs from "fs/promises"

let a = await fs.readFile("mohon.txt")

// let b = await fs.writeFile("mohon.txt", "")
let b = await fs.appendFile("mohon.txt", "\n\n\n\n mohon is a good bauy")
console.log(a.toString())