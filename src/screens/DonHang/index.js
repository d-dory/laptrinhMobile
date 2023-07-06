import React, { useState, } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  Alert,

  //   TouchableOpacity,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Ionicons';

import DataProduct from '../../Data/DataProduct';

import { convertToNumberCommas } from '../../utilities';


import { EvilIcons,Entypo,FontAwesome,Octicons } from '@expo/vector-icons';
import datadonhang from '../../Data/datadonhang';
const { width, height } = Dimensions.get('window');
const DataProducts = DataProduct;

const DonHang = ({ navigation, route }) => {
  const [numberProduct, setNumberProduct] = useState(1);
  const [dataShopping, setDataShopping] = useState(datadonhang);
  const [dataItemAll, setDataItemAll] = useState([]);
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  
  const handledel = (id) => {
    datagiohang.forEach(element => {
    
      if(element.menuId==id){
        datagiohang.splice(datagiohang.indexOf(element),1);
        
      }
      
    });
    setDataShopping(()=>[...datagiohang]);
   
    
  };
  const handleDetail = (id) => {
   
    if (DataProducts.length != 0) {
      for (let i = 0; i < DataProducts.length; i++) {
        if (DataProducts[i].menuId == id) {
          navigation.navigate('Detail', {
            dataItem: DataProducts[i],
          });
        }
      }
    }
  };
  function onHandleShopping(amount, id) {
    dataShopping.forEach(e => {

      if (e.menuId == id) {
        if(e.amount>=0)
        e.amount=e.amount+amount;
      }
      else
      return;
    })
    setDataShopping(()=>[...dataShopping]);
    
  }

  const converTotalPrice = totalArr => {
    let CountTotal = 0;
    for (let i = 0; i < totalArr.length; i++) {
      CountTotal = CountTotal + totalArr[i].amount * totalArr[i].priceProduct;
    }
    setTotalPrice(CountTotal);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View
        style={{
          height: 50,
          flex:1,
          // width: width,
          flexDirection: 'row',
          justifyContent: 'center',
          paddingHorizontal: 20,
          backgroundColor: '#000000',
          alignItems: 'center',
         
        }}>
       
        <Text style={{ fontSize: 20, color: 'white',}}>Đơn hàng</Text>
        
      </View>
      <View style={{flex:10}}>

      <ScrollView 
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        {datadonhang.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                marginTop: 16,
                height: 120,
                marginHorizontal: 6,
                backgroundColor: 'white',
                borderRadius: 20,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  position: 'absolute',
                  right: -5,
                  top: -10,
                }}>
               
              </View>
              <Image
                source={item.avatarImage}
                style={{
                  height: 120,
                  width: 120,
                  borderBottomLeftRadius: 20,
                  borderTopLeftRadius: 20,
                }}
              />
              <View
                style={{
                  marginHorizontal: 12,
                  width: width - 100 - 32,
                  paddingVertical: 6,
                }}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 16,
                    color: 'green',
                    fontWeight: '500',
                    lineHeight: 24,
                  }}>

                  {item.nameProducts}
                </Text>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 16,
                    color: 'black',
                    fontWeight: '500',
                    lineHeight: 24,
                  }}>
                  {' '}
                  Giá tiền: {convertToNumberCommas(item.price)} Đ
                </Text>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 16,
                    color: 'black',
                    fontWeight: '500',
                    lineHeight: 24,
                  }}>
                  {' '}
                  Tổng tiền :{' '}
                  {/* {convertToNumberCommas(
                    Number(item.amount) * Number(item.priceProduct),
                  )}{' '} */}
                  {convertToNumberCommas(item.price * item.amount)}
                  Đ
                </Text>
                <View
                  style={{
                    height: 36,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 10,
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      handleDetail(item.menuId);
                    }}>
                    <Text
                      style={{
                        color: '#00a46c',
                        // fontWeight: 'bold',
                        fontSize: 14,
                        // textDecorationLine: 0.2,
                      }}>
                      Xem chi tiêt
                    </Text>
                  </TouchableOpacity>
                  <View style={styles.ViewNumProduct}>
                   
                    <Text
                      style={{
                        color: '#62636a',
                        fontWeight: 'bold',
                        fontSize: 20,
                      }}>
                        Số lượng:{' '}
                      {item.amount}
                    </Text>
                  
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      
      </ScrollView>
      </View>
      <View style={styles.ViewFooter}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View style={{}}>
            <Entypo name="home" size={30} color="white" style={{textAlign:'center'}} />
              <Text style={{ color:'white',}}>Trang chủ </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('DonHang') }>
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
     
    </SafeAreaView>
  );
};
export default DonHang;
