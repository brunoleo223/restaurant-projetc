import styles from './HeaderPage.module.scss';

function HeaderPage() {
    return (
        <header className={styles.header}>
            <div className={styles.header__text}>
                <h1>Restaurante</h1>
            </div>
        </header>
    );
}

export default HeaderPage;