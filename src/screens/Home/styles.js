import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

    backgroundColor: '#F5F5F5',


  },
  ViewHeader: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft:10,
    paddingRight:10
  },
  ViewBody: {
    flex: 10,
    backgroundColor: 'white',
    
  },
  ViewFooter: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    height: 60,
  
  },
  ImageHeader: {
    height: 486,
    width: 486,
    zIndex: -2,
    marginLeft: -45,
    marginTop: -274,
  },
  Search: {
    backgroundColor: 'white',
    
    width: 150,
    flex: 1/2,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    paddingLeft: 10

  },
  TxtTextInput: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#5abd8c',
    alignSelf: 'center',
  },

  ViewTitileProducts: {
    marginTop:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 1,
    backgroundColor:'#2596be',
    width:'50%',
    paddingLeft:20
  },

  ViewLine: {
    marginTop: 20,
    height: 130,
    width: 160,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#000000',
  },

  ViewProducts: {
    marginLeft: -160,
    marginRight: 1,
    flexDirection: 'row',
    marginBottom: 12,
    flex: 1,
  },
  ButtomDetail: {
    width: 130,
    marginLeft: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  ViewImageProducts: {
    width: 129,
    height: 170,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignSelf: 'center',
  },
  ViewTitilePro: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
    marginHorizontal: 3,
  },
  TxtAuthor: {
    fontSize: 12,
    opacity: 0.5,
    marginTop: 3,
    marginHorizontal: 6,
    marginBottom: 3,
  },
  TxtPrice: {
    fontSize: 12,
    opacity: 0.5,
    marginHorizontal: 6,
    marginBottom: 3,
  },
});
