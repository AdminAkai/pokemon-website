import PokedexIcon from 'public/pokedex_icon.svg?react'
import PokeBerryIcon from 'public/pokemon_berry.svg?react'
import { FunctionComponent, SVGProps } from 'react'

export type NavbarOptionType = {
  name: string
  NavbarIcon: FunctionComponent<SVGProps<SVGSVGElement>>
  to: string
  style: string
}

export const navbarOptions: NavbarOptionType[] = [
  {
    name: 'Pokédex',
    NavbarIcon: PokedexIcon,
    to: '/',
    style: 'pokedex',
  },
  {
    name: 'Berries',
    NavbarIcon: PokeBerryIcon,
    to: '/berries',
    style: 'berries',
  },
]
