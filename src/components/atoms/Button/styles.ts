import palette from '@utils/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    minWidth: 252,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.primary,
  },
  label: {
    lineHeight: 24,
    color: 'white',
    fontSize: 16,
  },
  labelWrapper: {
    borderRadius: 20,
    flex: 1,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
