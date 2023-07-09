import palette from '@utils/theme';
import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  scrollView: {
    maxWidth: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 20,
  },
  contentWrapper: {
    width: '90%',
    flexDirection: 'column',
  },
  contentRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionText: {
    color: '#000000',
    fontFamily: 'Sintony-Regular, Helvetica',
    fontWeight: '600',
    fontSize: 24,
    letterSpacing: -0.02,
  },
  infoText: {
    color: '#000000',
    fontFamily: 'Sintony-Regular, Helvetica',
    fontWeight: '600',
    fontSize: 17,
    letterSpacing: -0.2,
  },
  spacing: {
    marginBottom: 20,
  },
  fundGraphWrapper: {
    marginLeft: -(Dimensions.get('window').width + 45),
  },
  textGridContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  textGridLeft: {
    width: '50%',
    flexDirection: 'column',
  },
  textGridRight: {
    flexDirection: 'column',
  },
  statContainer: {
    marginBottom: 18,
  },
  stat: {
    fontSize: 14,
  },
  statText: {
    color: 'black',
  },
  breakdownContainer: {
    position: 'relative',
    left: '-2%',
    width: '100%',
    marginBottom: 60,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actions: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  sellButton: {
    minWidth: 0,
    borderWidth: 1,
    borderColor: palette.subtitleGrey,
    borderRadius: 4,
  },
  retireButton: {
    minWidth: 0,
    borderRadius: 4,
  },
  warningBox: {
    backgroundColor: palette.grey,
    borderRadius: 4,
    padding: 10,
    gap: 10,
  },
  buyButton: {
    width: '100%',
    marginTop: 30,
  },
});

export default styles;
