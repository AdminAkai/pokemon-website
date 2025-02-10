import { FC } from 'react'
import styles from './searchBarStyles.module.css'
import PokeballIcon from 'src/assets/pokeball_icon.svg?react'

const Searchbar: FC = () => {
  return (
    <div className={styles.searchbar}>
      <input
        className={styles['searchbar-input']}
        placeholder='Search Pokémon!'
      />
      <div className={styles['searchbar-button-container']}>
        <PokeballIcon
          className={styles['searchbar-button']}
          width={25}
          height={25}
        />
      </div>
    </div>
  )
}

export default Searchbar
