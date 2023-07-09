import palette from '@utils/theme';
import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: palette.grey,
  },
  titleContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: '#000000',
    fontFamily: 'Sintony-Regular, Helvetica',
    fontWeight: '600',
    fontSize: 17,
    letterSpacing: -0.2,
  },
  subtitleText: {
    color: palette.subtitleGrey,
    fontFamily: 'Rambla-Regular, Helvetica',
    fontWeight: '400',
    fontSize: 12,
    letterSpacing: -0.22,
  },
  backIcon: {
    position: 'absolute',
    left: Dimensions.get('window').width * 0.1,
    bottom: 0,
  },
});

export default styles;
