import palette from '@utils/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  contentWrapper: {
    width: '100%',
    marginLeft: '10%',
    flexDirection: 'column',
  },
  fundsContainer: {
    position: 'relative',
    top: -10,
    left: '-5%',
    width: '100%',
  },
  carbonCredits: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    height: 105,
    marginTop: 20,
    backgroundColor: palette.primary,
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 10,
  },
  carbonText: {
    width: '50%',
  },
  carbonTitle: {
    fontFamily: 'Sintony-Regular, Helvetica',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
});

export default styles;
