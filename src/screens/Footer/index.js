import styles from "./styles";
import React from "react";
import { EvilIcons,Entypo,FontAwesome,Octicons } from '@expo/vector-icons';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    
    Alert, ScrollView
  } from 'react-native';
class ViewFooter extends React.Component {
    navigation;
      constructor(navigation)
      {
        return (
            <View style={styles.ViewFooter}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <View style={{}}>
                <Entypo name="home" size={30} color="white" style={{textAlign:'center'}} />
                  <Text style={{ color:'white',}}>Trang chủ </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Home') }>
                <View style={{}}>
                <Octicons name="package" size={24} color="white"  style={{textAlign:'center'}}/>
                  <Text style={{ color:'white' }}>Đơn hàng </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <View style={{}}>
                <FontAwesome name="user-circle" size={24} color="white" style={{textAlign:'center'}} />
                  <Text style={{ color:'white' }}>Người dùng </Text>
                </View>
              </TouchableOpacity>
              
            </View>
           
          );
        
       
      }
}
export default {ViewFooter};

