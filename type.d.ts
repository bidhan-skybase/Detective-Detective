import {ImageSourcePropType} from 'react-native';

interface GameCategory {
  id:number,
  category:string,
  icon:Tsx.element,
  color:string
}

type RootStackParamList = {
  Home:  undefined,
  CategoryPage: undefined,
  GamePage:  {categoryTile:string,playersCount:number}|undefined,
  RestartPage:  undefined,
}

type CategoryItem={
  id:number,
  name:string,
  image:ImageSourcePropType,
}
