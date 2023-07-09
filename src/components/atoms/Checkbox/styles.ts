import palette from '@utils/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    textDecorationLine: 'none',
    color: palette.subtitleGrey,
    fontFamily: 'Sintony-Regular, Helvetica',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 15,
    letterSpacing: -0.2,
  },
  icon: {
    borderRadius: 2,
    borderWidth: 2,
    borderColor: palette.subtitleGrey,
    backgroundColor: 'white',
  },
  innerIcon: {
    borderRadius: 2,
    borderWidth: 0,
  },
});

export default styles;
