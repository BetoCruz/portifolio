import Paragrafo from "../Paragrafo";
import Titulo from "../Titulo";
import {Card} from "./styles"; //styled é importado com {}
import {LinkBotao} from "./styles"; //styled é importado com {}





const Projetos = () => (
  <Card>
    <Titulo fontSize={16}>Projeto lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">
       Listade tarefas feita com VueJS
    </Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projetos;