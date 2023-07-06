import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 12,
  },
  ViewCharacteristics: {
    backgroundColor: '#FFF',
    height: 50,
    width: 50,
    borderRadius: 5,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  ViewNameProduct: {
    flexDirection: 'row',
    // marginTop: -80,
    marginHorizontal: 20,
    alignItems: 'center',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
  },
  TxtName: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#62636a',
  },
  TxtPrice: {
    fontWeight: 'bold',
    color: '#00a46c',
    paddingLeft: 170,
    fontSize: 20,
  },
  TxtIntroduce: {
    paddingHorizontal: 16,
    fontWeight: '500',
    color: '#00a46c',
    fontSize: 20,
  },
  ViewBottomContainer: {
    flexDirection: 'row',
    width: width,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    borderTopWidth: 0.25,
    borderColor: 'gray',
  },
  ViewButtom: {
    width: width * 0.9,
    backgroundColor: '#000000',
    height: 45,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ViewNumProduct: {
    width: width * 0.35,
    alignItems: 'center',
    justifyContent: 'space-around',
    // backgroundColor: 'red',
    height: 50,
    paddingHorizontal: 12,
    flexDirection: 'row',
  },
  ButtomPlus: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 0.5,
  },
  TopPlus: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',

    borderColor: 'white',
    borderRadius: 40,
    borderWidth: 0.5,
  },
  ViewFooter: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    height: 60,
  
  },
});
