import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  titleText: {
    color: '#000000',
    fontFamily: 'Sintony-Regular, Helvetica',
    fontWeight: '600',
    fontSize: 18,
    letterSpacing: -0.22,
    marginBottom: 34,
  },
  passwordInput: {
    marginTop: 20,
  },
  submitButton: {
    marginTop: 37,
    marginBottom: 13,
  },
});

export default styles;
