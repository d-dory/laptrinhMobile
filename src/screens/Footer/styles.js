import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    ViewFooter: {
        flex: 1,
        backgroundColor: 'black',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        height: 60,
      
      },

});