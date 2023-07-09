import palette from '@utils/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputView: {
    width: '90%',
    flexDirection: 'column',
  },
  inputLabel: {
    color: '#a09f9f',
    fontFamily: 'Sintony-Regular, Helvetica',
    fontSize: 11,
    fontWeight: '500',
    letterSpacing: -0.22,
    marginBottom: 5,
  },
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: palette.grey,
    borderRadius: 5,
    height: 48,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  input: {
    color: 'black',
    flex: 1,
    fontSize: 14,
  },
  activeInput: {
    borderColor: palette.subtitleGrey,
    borderWidth: 1,
  },
  errorInput: {
    color: palette.red,
  },
  errorText: {
    marginTop: 5,
    fontSize: 14,
    color: palette.statusRed,
  },
});

export default styles;
