import styles from './Prato.module.scss';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames';
import cardapio from 'data/cardapio.json';
import NotFound from 'pages/NotFound';
import PaginaPadrao from 'components/PaginaPadrao';

function Prato() {
    const { id } = useParams();
    const navigate = useNavigate();
    const prato = cardapio.find(item => item.id === Number(id));

    if(!prato){
        return <NotFound />;
    }

    return (
        <Routes>
            <Route path='*' element={<PaginaPadrao />}>
                <Route index element={
                    <>
                        <button onClick={() => navigate(-1)} className={styles.voltar}>{'< Voltar'}</button>
                        <section className={styles.container}>
                            <h1 className={styles.titulo}>
                                {prato.title}
                            </h1>
                            <div>
                                <img src={prato.photo} alt="" />
                            </div>
                            <div className={styles.conteudo}>
                                <p className={styles.conteudo__descricao}>
                                    {prato.description}
                                </p>
                                <div className={styles.tags}>
                                    <div className={classNames({
                                        [styles.tags__tipo]: true,
                                        [styles[`tags__tipo__${prato.category.label.toLowerCase()}`]]: true,
                                    })}>
                                        {prato.category.label}
                                    </div>
                                    <div className={styles.tags__porcao}>
                                        {prato.size}g
                                    </div>
                                    <div className={styles.tags__qtdpessoas}>
                            Serve {prato.serving} pessoas
                                    </div>
                                    <div className={styles.tags__valor}>
                            R${prato.price.toFixed(2)}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                } />
            </Route>
        </Routes>
    );
}

export default Prato;