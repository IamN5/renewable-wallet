import palette from '@utils/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  fundCard: {
    flexDirection: 'column',
    width: 140,
    height: 145,
    marginLeft: 20,
    padding: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: palette.subtitleGrey,
    backgroundColor: 'white',
  },
  fundLabel: {
    fontFamily: 'Sintony-Refular, Heveltica',
    fontSize: 12,
    fontWeight: '600',
    color: 'black',
    marginTop: 5,
    marginBottom: 5,
  },
  fundGraphWrapper: {
    width: 110,
    height: 60,
    marginLeft: -50,
  },
  fundStats: {
    marginTop: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fundStatsLabel: {
    fontFamily: 'Sintony-Refular, Heveltica',
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
    lineHeight: 17,
    letterSpacing: -0.2,
  },
});

export default styles;
