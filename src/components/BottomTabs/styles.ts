import palette from '@utils/theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 120,
    borderTopWidth: 1,
    borderTopColor: palette.tabBarBorder,
    shadowColor: palette.tabBarShadow,
    shadowRadius: 8,
    shadowOpacity: 0.5,
    backgroundColor: 'white',
    elevation: 4,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '600',
  },
});

export default styles;
