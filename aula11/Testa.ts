import { Ciclista } from "./Ciclista"
import {Nadador} from "./Nadador"

export function main () {
    
    const nadador: Nadador = new Nadador("Thompson")
    const ciclista: Ciclista = new Ciclista ("Israel")

    nadador.aquecer()
    nadador.nadar()
    nadador.visualizar()
    console.log(" ")
    ciclista.aquecer()
    ciclista.pedalar()
    ciclista.visualizar()
}

main ()