import {Titulo as TituloEstilo} from './styles'

// é possivel exportar os props para o styles.ts.
export type Props = {
  children: string;
  fontSize?: number;
}

const Titulo = (props: Props) => {
  return (
      <TituloEstilo fontSize={props.fontSize}>
        {props.children}
      </TituloEstilo>
  )
}

export default Titulo;