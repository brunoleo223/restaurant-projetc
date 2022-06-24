import styles from './Buscador.module.scss';
import { CgSearch } from 'react-icons/cg';


interface BuscaProps {
    busca: string;
    setBusca: React.Dispatch<React.SetStateAction<string>>;
}

function Buscador({ busca, setBusca }: BuscaProps) {
    return (
        <div className={styles.buscador}>
        <input 
            type="text" 
            value={busca} 
            onChange={(e) => setBusca(e.target.value)} 
        />
        <CgSearch className={styles.buscador__icone} />
    </div>
    )
}

export default Buscador;