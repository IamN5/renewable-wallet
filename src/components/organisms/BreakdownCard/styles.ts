import palette from '@utils/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    width: 220,
    height: 280,
    marginLeft: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: palette.grey,
    backgroundColor: 'white',
  },
  content: {
    flexDirection: 'column',
  },
  cardHeaderImage: {
    width: '100%',
    height: 106,
    borderRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  body: {
    padding: 10,
  },
  logo: {
    marginBottom: 10,
  },
  text: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Sintony-Refular, Heveltica',
  },
  readMore: {
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});

export default styles;
