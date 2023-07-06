
import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,

  Image,
} from 'react-native';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

import { convertToNumberCommas } from '../../utilities';
import { SafeAreaView } from 'react-navigation';
import datagiohang from '../../Data/datagiohang';
const Detail = ({ navigation, route }) => {
  const [numberProduct, setNumberProduct] = useState(route?.params?.count ? route?.params?.count : 1,);
  const [dataDetail, setDataDetail] = useState(route?.params?.dataItem);
  const [dataShopping, setDataShopping] = useState(datagiohang);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Header */}
      <View style={styles.ViewHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon2 name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ShoppingCart', { dataShopping })}>
          <Icon1 name="shoppingcart" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* //View thong tin của từng quyển sách */}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <ImageBackground
          resizeMode="stretch"
          source={require('../../images/Avatar/individualBookPage.png')}
          style={{ width: '100%', height: 290 }}
        />
        <View style={{ marginTop: -100 }}>
          <Image source={dataDetail.avatarImage} style={styles.ImageView} />
          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <Text style={styles.TxtName}>{dataDetail.nameProducts}</Text>
            <Text style={styles.TxtAuthor}>Tác giả : {dataDetail.author}</Text>
            <Text style={styles.TxtPrice}>
              {convertToNumberCommas(dataDetail.price)} Đ
            </Text>
          </View>
          <View style={{ marginVertical: 12 }}>
            <Text style={styles.TxtIntroduce}>Mô tả:</Text>
            <Text style={[styles.TxtIntroduce, { color: 'black' }]}>
              {dataDetail.description}
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* //View bottom thêm vào giỏ, tăng giảm số lượng */}
      <View style={styles.ViewBottomContainer}>
        <View style={styles.ViewNumProduct}>
          <TouchableOpacity
            onPress={() => {
              if (numberProduct > 0) {
                setNumberProduct(numberProduct - 1);
              }
            }}
            style={styles.ButtomPlus}>
            <Icon name="minus" size={25} color="gray" />
          </TouchableOpacity>
          <Text
            style={{
              color: '#62636a',
              fontWeight: 'bold',
              fontSize: 25,
            }}>
            {numberProduct}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setNumberProduct(numberProduct + 1);
            }}
            style={styles.ButtomPlus}>
            <Icon name="plus" size={25} color="gray" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          
          onPress={() => {
            var kt = false;
            datagiohang.forEach(element => {
              if (element.menuId !== dataDetail.menuId)
                kt = false;

              else {
                kt = true;
                element.amount=element.amount+numberProduct;
                return;

              }
            })
            if (kt == false) {
              datagiohang.push({
                menuId: dataDetail.menuId,
                nameProducts: dataDetail.nameProducts,
                avatarImage: dataDetail.avatarImage,
                description: dataDetail.description,
                price: dataDetail.price,
                author: dataDetail.author,
                amount: numberProduct,
              })
            }



          }}
          style={styles.ViewButtom}>
          <Text
            style={{
              color: '#FFF',
              fontSize: 18,
            }}>
            Thêm vào giỏ
            {console.log(dataShopping)}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Detail;
