import styles from './Itens.module.scss'
import cardapio from './itens.json'
import Item from './Item'

function Itens() {
  return (
    <div className={styles.item}>
        {cardapio.map((item) => (
            <Item key={item.id} {...item} />
        ))}
    </div>
  )
}

export default Itens