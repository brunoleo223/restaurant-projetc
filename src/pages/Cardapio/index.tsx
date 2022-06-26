import styles from './Cardapio.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import Buscador from 'components/Cardapio/Buscador';
import { useState } from 'react';
import Filtros from 'components/Cardapio/Filtros';
import Ordenador from 'components/Ordenador';
import Itens from 'components/Itens';


export default function Cardapio() {
    const [busca, setBusca] = useState('');
    const [filtro, setFiltro] = useState<number | null>(null);
    const [ordenador, setOrdenador] = useState('');
    return (
        <section className={styles.cardapio}>
            <h3 className={stylesTema.titulo}>Cardápio</h3>
            <Buscador busca={busca} setBusca={setBusca} />
            <div className={styles.cardapio__filtros}>
                <Filtros filtro={filtro} setFiltro={setFiltro} />
                <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
            </div>
            <Itens filtro={filtro} busca={busca} ordenador={ordenador} />
        </section>
    );
}