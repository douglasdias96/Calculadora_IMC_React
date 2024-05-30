import { useState } from "react"
import TabelaIMC from "./components/Tabela"
import Peso from './components/Peso'
import Altura from './components/Altura'
import CalcularImc from './components/Calc'
import Resultado from './components/Resultado'

function App() {

  const [peso,setPeso] = useState(0)
  const [altura,setAltura] = useState(0)
  const [resultado,setResultado] = useState(0)

  return(
    <>
      <Peso p={peso} sp={setPeso} />
      <Altura a={altura} sa={setAltura} />
      <CalcularImc p={peso} a={altura} sr={setResultado}/>
      <Resultado r={resultado}/>
      <TabelaIMC />
    </>
  )
}

export default App
