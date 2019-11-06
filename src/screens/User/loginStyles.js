import {colors} from '../../styles';

export default {
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 96,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#DDDDDD',
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 16,
  },
  nextButton: {
    wrapper: {flexGrow: 1, flexDirection: 'column'},
    default: {
      alignSelf: 'flex-end',
      position: 'absolute',
      bottom: 45,
    },
    disabled: {
      icon: {
        color: colors.grayDisabled,
      },
      wrapper: {
        color: '#fff',
      },
    },
    enabled: {
      icon: {
        color: '#fff',
      },
      wrapper: {
        color: colors.primary,
      },
    },
  },
  welcome: {
    fontSize: 34,
    marginTop: 32,
    marginBottom: 32,
    fontWeight: '600',
    color: colors.gray85,
  },
  header: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.gray65,
  },
  error: {
    backgroundColor: '#db505a',
    position: 'absolute',
    alignSelf: 'stretch',
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  errorText: {padding: 20, color: '#fff'},
  closeIcon: {marginRight: 10},
};
