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
import datagiohang from '../../Data/datagiohang';
import datadonhang from '../../Data/datadonhang';

const { width, height } = Dimensions.get('window');
const DataProducts = DataProduct;

const ShoppingCart = ({ navigation, route }) => {
  const [numberProduct, setNumberProduct] = useState(1);
  const [dataShopping, setDataShopping] = useState(datagiohang);
  const [dataItemAll, setDataItemAll] = useState([]);
  const [count, setCount] = useState(1);
  let tong=0;

  const [dataDH,setdatatDH]= useState(datadonhang);

  const handledel = (id) => {
    datagiohang.forEach(element => {
    
      if(element.menuId==id){
        datagiohang.splice(datagiohang.indexOf(element),1);
        
      }
      
    });
    setDataShopping(()=>[...datagiohang]);
   
    
  };
  const handleDetail = (id) => {
    // console.log(dataItemAll);
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
        if(e.amount>1)
        e.amount=e.amount+amount;
        else if(e.amount==1)
        {
          if(amount>0)
          e.amount=e.amount+amount;
          else
          e.amount=e.amount;
        }
      }
      else
      return;
    })
    setDataShopping(()=>[...dataShopping]);
    
  }
  function total(item)
  {
    tong+=(item.amount*item.price);
    
  }


  const converTotalPrice = totalArr => {
    let CountTotal = 0;
    for (let i = 0; i < totalArr.length; i++) {
      CountTotal = CountTotal + totalArr[i].amount * totalArr[i].priceProduct;
    }
    setTotalPrice(CountTotal);
  };
  const handlePay = () => {
   
    Alert.alert('Thông báo', 'Thanh toán thành công', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
    datagiohang.forEach(element => {
      datadonhang.push(element);
      
    });
    setDataShopping([]);
    datagiohang.splice(0,datagiohang.length);
   
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View
        style={{
          height: 50,
          // width: width,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          backgroundColor: '#000000',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon1 name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, color: 'white' }}>Giỏ Hàng</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.TopPlus}>
          <Icon name="plus" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        {dataShopping.map((item, index) => {
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
                <TouchableOpacity
                  hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
                  onPress={() => {
                    handledel(item.menuId);
                    console.log("x");
                  }}
                  style={{
                    height: 27,
                    width: 27,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon name="closecircle" size={27} color="gray" />
                </TouchableOpacity>
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
                
                  {convertToNumberCommas(item.price * item.amount)}
                  {total(item)}
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
                    <TouchableOpacity
                      onPress={() => onHandleShopping(-1, item.menuId)}
                      style={styles.ButtomPlus}>
                      <Icon name="minus" size={20} color="gray" />
                    </TouchableOpacity>
                    <Text
                      style={{
                        color: '#62636a',
                        fontWeight: 'bold',
                        fontSize: 20,
                      }}>
                      {item.amount}
                    </Text>
                    <TouchableOpacity
                      onPress={() => onHandleShopping(1, item.menuId)}
                      style={styles.ButtomPlus}>
                      <Icon name="plus" size={20} color="gray" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
        
          <View
            style={{
              height: 50,
              // width: width,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              borderRadius: 12,
              backgroundColor: '#00a46c',
              margin: 12,
            }}>
            <Text style={{ fontSize: 18, color: 'white' }}>Tổng tiền: </Text>
            <Text style={{ fontSize: 18, color: 'white' }}>
              {convertToNumberCommas(tong)}
              Đ
            </Text>
          </View>
        
      </ScrollView>
      <View style={styles.ViewBottomContainer}>
        <TouchableOpacity
          onPress={() => {
            handlePay();
          }}
          style={styles.ViewButtom}>
          <Text
            style={{
              color: '#FFF',
              fontSize: 18,
            }}>
            Thanh Toán
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default ShoppingCart;
