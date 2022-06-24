import styles from './Filtros.module.scss'
import filtros from './filtros.json';
import classNames from 'classnames';

type Ifiltro = typeof filtros[0];

interface FiltrosProps{
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

function Filtros({ filtro, setFiltro }: FiltrosProps) {

  function selecionarFiltros(opcao: Ifiltro) {
    if(filtro === opcao.id) return setFiltro(null);
    return setFiltro(opcao.id);
  }

  return (
    <div className={styles.filtros}>
      {filtros.map((opcao) => (
        <button 
          className={classNames({
            [styles.filtros__filtro]: true,
            [styles['filtros__filtro--ativo']]: filtro === opcao.id
          })} 
          key={opcao.id} onClick={() => selecionarFiltros(opcao)}>
          {opcao.label}
        </button>
      ))}
    </div>
  )
}

export default Filtros 