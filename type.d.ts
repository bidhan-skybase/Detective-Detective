import {ImageSourcePropType} from 'react-native';


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
