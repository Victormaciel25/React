import Titulo from "./Titulo"
import Titul from "./Titulo"

function App(){
  return (
    <div>
      <Titulo cor="red" nome="Dimitri" paragrafo={true}/>
      <Titulo cor="blue"/>
      <Titulo cor="purple"/>
      <Titulo cor="orangered"/>
    </div>
  )
}

export default App