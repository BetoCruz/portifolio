import {P} from './styles'

// é possivel exportar os props para o styles.ts.
export type Props = {
  children: string;
  tipo?: 'principal' | 'secundario';
  fontSize?: number;

}

const Paragrafo = ({ children, tipo = 'principal', fontSize}: Props) => {
  return (
      <P fontSize={fontSize} tipo = {tipo} >
        {children}
      </P>
  )
}

export default Paragrafo;