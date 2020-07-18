import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
    paddingHorizontal: 24
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logo: {
    color: '#e02041',
    fontWeight: 'bold',
    fontSize: 24
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginTop: 48,
    marginBottom: 16,
  },

  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold'
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380'
  },

  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
  },

  heroTitle: {
    fontSize: 20,
    fontWeight: 30,
    fontWeight: 'bold',
    color: '#13131a'
  },

  heroDescription: {
    fontSize: 16,
    color: '#737380',
    marginTop: 16
  },

  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  action: {
    alignItems: 'center',
    backgroundColor: '#e02041',
    width: '48%',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },

  actionText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold'
  }


})

export default styles