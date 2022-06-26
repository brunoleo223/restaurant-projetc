import HeaderPage from 'components/HeaderPage';
import { Outlet } from 'react-router-dom';

function PaginaPadrao() {
    return (
        <>
            <HeaderPage />
            <div>
                <Outlet />
            </div>
        </>
    );
}

export default PaginaPadrao;