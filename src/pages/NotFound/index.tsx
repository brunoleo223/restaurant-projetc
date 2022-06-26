import styles from './NotFound.module.scss';
import { ReactComponent as NotFoundImage } from 'assets/not_found.svg';
import classNames from 'classnames';
import stylesTema from 'styles/Tema.module.scss';

function NotFound() {
    return (
        <NotFoundImage className={classNames({
            [styles.container]: true,
            [stylesTema.container]: true,
        })} />
    );
}

export default NotFound;