import AnimalIcon from '../assets/icons/animalIcon.tsx';
import GamesIcon from '../assets/icons/gamesIcon.tsx';
import MoviesIcon from '../assets/icons/moviesIcon.tsx';
import VechicleIcon from '../assets/icons/vechicleIcon.tsx';
import VegetableIcon from '../assets/icons/vegetableIcon.tsx';
import WorldIcon from '../assets/icons/worldIcon.tsx';
import {AppColors} from './colors.ts';

const GameCategories: GameCategory[] = [
  {
    id:1,
    category:'Animals',
    icon:AnimalIcon,
    color:AppColors.yellowAccentColor
  },
  {
    id:2,
    category:'Games',
    icon:GamesIcon,
    color:AppColors.tealAccentColor
  },
  {
    id:3,
    category:'Movies',
    icon:MoviesIcon,
    color:AppColors.purpleAccentColor
  },
  {
    id:4,
    category:'Vehicles',
    icon:VechicleIcon,
    color:AppColors.tealAccentColor

  },

  {
    id:5,
    category:'Vegetables',
    icon:VegetableIcon,
    color:AppColors.purpleAccentColor

  },
  {
    id:6,
    category:'Countries',
    icon:WorldIcon,
    color:AppColors.yellowAccentColor

  },
];

export {GameCategories};
