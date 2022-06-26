import HeaderPage from 'components/HeaderPage';
import { Outlet } from 'react-router-dom';
import stylesTema from 'styles/Tema.module.scss';

function PaginaPadrao() {
    return (
        <>
            <HeaderPage />
            <div className={stylesTema.container}>
                <Outlet />
            </div>
        </>
    );
}

export default PaginaPadrao;