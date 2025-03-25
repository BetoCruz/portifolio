import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import {GithubSecao} from "./styles"; //Imortação de constante styled



type Props = {

}

const Sobre = () => {
  return(
    <section>
      <Titulo fontSize={16} >Sobre</Titulo>
      <Paragrafo tipo="secundario">
        Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Rem, doloremque
        nostrum deserunt illum maxime natus
        officiis libero facere corporis
        explicabo totam quas nobis earum eum
        consectetur placeat voluptates,
        magnam esse!
      </Paragrafo>
      <GithubSecao>
        <img src="https://github-readme-stats.vercel.app/api?username=BetoCruz&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=BetoCruz&layout=compact&langs_count=7&theme=dracula"/>
      </GithubSecao>
    </section>

  )
}

export default Sobre;