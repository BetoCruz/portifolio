import Titulo from "../../components/Titulo";
import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo";
import {Descricao, BotaoTema,SidebarContainer} from "./styles";



const Sidebar = () => {
  return(
    <aside>
      <SidebarContainer>
        <Avatar/>
        <Titulo fontSize={24}>Humberto</Titulo>
        <Paragrafo tipo="secundario" fontSize={16} >
          BetoCruz
        </Paragrafo>
        <Descricao tipo="principal" fontSize={12}>
          Desenvolvedor Front-End
        </Descricao>
        <BotaoTema>Trocar tema</BotaoTema>
      </SidebarContainer>

    </aside>
  )
}

export default Sidebar;