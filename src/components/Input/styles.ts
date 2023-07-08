import palette from '@utils/theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  line: {
    height: 2,
    width: '100%',
    marginTop: 8,
  },
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    color: 'black',
    width: '100%',
    fontSize: 16,
  },
  errorInput: {
    color: palette.red,
  },
  errorText: {
    marginBottom: 5,
    fontSize: 14,
    color: palette.statusRed,
  },
  inputError: {
    marginTop: 5,
    marginBottom: 0,
  },
});

export default styles;
