import { FC } from 'react'
import Searchbar from 'src/components/SearchBar'
import styles from './pokemonStyles.module.css'

const Pokemon: FC = () => {
  return (
    <div className={styles.pokemon}>
      <Searchbar />
    </div>
  )
}

export default Pokemon
