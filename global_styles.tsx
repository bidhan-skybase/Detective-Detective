import { StyleSheet } from 'react-native';
import {AppColors} from './constants/colors.ts';
const globalStyles = StyleSheet.create({
  main: {
    flex: 1,
    marginHorizontal: 16,
    backgroundColor: AppColors.backgroundColor,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowWithSpaceBetween: {
    justifyContent: 'space-between',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.09,
    shadowRadius: 10,
  },

});

export default globalStyles;
