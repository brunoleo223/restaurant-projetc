import cardapio from 'data/cardapio.json';
import styles from './Inicio.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import { useNavigate } from 'react-router-dom';

function Inicio() {
    let pratosRecomentados = [...cardapio];
    pratosRecomentados = pratosRecomentados.sort(() => 0.5 - Math.random()).splice(0,3);
    
    const navigate = useNavigate();
    function redirectTo(prato: typeof cardapio[0]) {
        navigate(`/prato/${prato.id}`, { state: {prato}, replace: true });
    }

    return (
        <section>
            <h3 className={stylesTema.titulo}>
                Recomendações da cozinha
            </h3>
            <div className={styles.recomendados}>
                {pratosRecomentados.map(item => (
                    <div key={item.id} className={styles.recomendado}>
                        <div className={styles.recomendado__imagem}>
                            <img src={item.photo} alt={item.title} />
                        </div>
                        <button 
                            onClick={() => redirectTo(item)} 
                            className={styles.recomendado__botao}
                        >
                            Ver mais
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Inicio;