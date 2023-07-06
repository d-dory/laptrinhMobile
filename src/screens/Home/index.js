
import * as React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert, ScrollView, Dimensions,
} from 'react-native';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/Entypo';
import DataProduct from '../../Data/DataProduct';
import styles from './styles';
import { convertToNumberCommas } from '../../utilities/index';

import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { EvilIcons, Entypo, FontAwesome, Octicons, SimpleLineIcons } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');




const Home = ({ navigation }) => {
  const DataProducts = DataProduct;
  const customImg = [
    "https://lh3.googleusercontent.com/fife/AAbDypBIZ4tJDyVsl3YatlQ-e-SOb40dVReRgAWy1Pdp7_PpvgbnZlh-JMh8u7CpTXqQseYHiWJPMTlu0ab3yNSHU6ghg1acsWJcx9l_hZ6glMZe99VCSfER6GrM92cvst620UNzJn5plDlPhx8PxRmBq52e3bC2vABSehlUDkw-QPf5cTaMhXijq0RhezGov0Kt6SVAv0eYm16qpedl1IO3ARd1iTlNQ40JeKbQgmQYOY5o43nWVTntKqVVrPXykWYMF9dE_UJ8O44eWzWTytMAKlvwdNpZtmOmSQQZ9Z5vamH7kLfqokVpjzLOad2aETRGfDDrbqSlj-ISDv75vxgGoF_mmd3Mhcar6SmSVjw_nrYmbtKe8OGxuLOJ58CSQTac_l5l9Bp9WhLpJbOwl5aqGZFOUThaxJm-7k5W8rERgJdU7bu1rWQ0mXBqBM_A0vVPvH5cCEgObzGG21IpINN4CrBiq7xAL09qAX6leiBSm2CqJs-OhB0oF0IPOlvWBIPT96I3iYGSN2V__OOKUl-7kiyPmfO8CVL9Ww4GQe7pLjumrq-QU53lm0bcacdfXLjHXttQkxydtvefeOwtNYJWI3dvqXqM5DOxsVI_rxaDST06-h9WHMTEnTD2M95Jv9rFZtv_w2ARBwR6vKxwMXrS-cfsvgd2RXNfBrAAvnkz09KuhqlvrMr3BVjSiAoADcG9JZEcg5pBGoCIn9NkzFeGJ9ZWrO_HeBqokoiKsf-Mr7JfyJWMuXRKG5sgIEdygaJUrWbJ-uGh3cAd98Qi6WH9v8jvM5zAbz7CgKa9T_guqS1s95ys9ZUbZ_jcfUXJkpaY4T9db9i98GCKign_AZMZQzwj9gkymVMHS7F3BlW4LZnxUI06P_eIbNfPKpVQjo_hZF1Wk_0gyquUM7rKJY9SwlOS0XuTsIwimL68ENrFT-rlg5RF59xAWvRTnfQy3nTDjvNehiSlq4wtAluqVVRlt_tp1QN3ND9duC1AG1jQBzFGjXl1J6t3RMhfn60HBeGxhu_5RbaBhUjRI-VUnbG6OItw_AvzRnkGfMOIwGW9Qtk3m7F4IoD92bxn7IMmM4ap2J3n06I-DkDiH2pBhHuUI_WRaf7kWwCCuCFBhUGd5w4NeVAkjB8gohJMekhd3pcZWLMYEXKgriHCDPOLYFcC6wUewuMOqH0atb7SQquEFt7LKwavkftbI_T7Uh8wTF0uQW515X8rN1RevpualPI9xd2ZL8R5Skm_yGv7k3Cxx8ISnpqYv9RBSHosOeLSH79H5owrNG9TXB9ULAuR5j5abzbwsQUBoOiewCBhO-lQEH8oA5ItMkPqULBt6Vd3cWFDpaQC8l2mbmSAeMHTpzYRFq47k5V1vsdUo7F9PrIZauCBsUZwjMeuUBIODkxtXABqNFONYvnr6uMufWH2PP4mKpUr39g5nXfv0ZsIAkcdzoEHIlQXtjM6MMXAUx_Er_0QhY7KcEXFZrT3mliR6t4zjyfh6wyFLaVzH7i6pp5ExK3WDawXLoDKwF2F7b6UeN6M7EJ1iSqRuUeVzUI2e_c5tzAmWNtUSkeaNcFYfUlwIura8Xd3TiJp8WHueFqkgHdNBKgU-zP1elHOlzPrLN9DElsO9X8CDkk2ETiCsR5CLNsr71Pm7bdWlDDucgWi1Od-mwEXT0h2Lgahxu8lqfrlQmA7exY_Mac-rrEbVE9W4w=w1920-h922",
    "https://lh3.googleusercontent.com/fife/AAbDypB6RaNK29RVZieP_Og8270JpfzcT06BlPZ22VCSsNY9Th8R5uqUko_EOBpL1H0A2KXWClClKTqy6wTyFwJRvDMmLtzRY_tNZP1uySo48LVpZkVZVNqQqWyKbcPtUGC6p3lmjhIoC84lNljGS_AsKLSROduEYVSba4G9SZhtfoT17WIsYNi0cfFpyjHrCoe1tf27V-y0-t7D1-nhh3T1cbL3csWAKJRwJyFEcF8xzeIWzj8KzvGVd0dh4P-IEFd-cxrNeFgr4ySEHrnqLhTrCx-LV72FwbCoxaUqNd5uB_hqomDSzZU9lAQpwC6CYUs4kCfvKAXvzqFXnD5Ml2YP5gactBgG4d0POOIk5T7HjVpgd0H57JpLMN6SE4FRrwQbByKBjzk8hAjeVqraF3t8UqUjGRjjDeJLnyQhu_XFS5sSR53mIVuuR1MjGdak_5sruIQ4zrE8X_ibvIcN_t47lHbkyEaxKv0cAFIgndkXanDaL7yfgmmbPfQgTjowz7zPKZZVETFUUwYEOXmyPY4tmeztoAMWlVRlHoMDfu5vE9Go7e8L9PMLTAwY75kJLKH6yCH9mTLZj0xmd0DnrVFZjGtAbIC9v-L_wLWAYeiDxIfsxUu-5ynSA5_4YD0iQjgzu-IIpZCJtz7jHkijA70embsp94sm4wCqWPgdBz0AA6CNEnkVo3q1UyfYXFUKS3EOAeffRs68BTwxbkH4BIs2apIdlTVkSoF60Ct1b-57VRRpGM7AGQVUxp1p9ztmfADk7WEZ1d5zZ4gXrN6FePR60HA7LRu9uUbCTw_5PKDU2elujrZJOhUZGcT3RQsoAndEX7aaOyKwt5TPPHlKK83XalpzkApooconSwZ3MvI1YY-b2RCb1dL5MIFZqP-nh3uNGf-smM6dxXvFCtpyZwp4kemV3Vtv32iiX75QBP7on1Jap0ajqBAlvi0Pa8ECLBq4qS0T2fkOA7MwHV-4oAHNPgmRsADeJ4t52bNHUbAEP8FnhhxyKUeWpQmKTtonYqlrbz3LbZSZcsfRUwERXh_7cNpfa8LanIffKbzzNuEefoLGnOupFgTb8f25w2MspG5TfIx2ZyB_MwFsRMiayb16ryQSWUgnaDAk_004tncSQq0BZyvi15mlzIhc8Z5LYW-Vdzv70YNE69MM1K7kQV8qK8azgyAoJ1R9RnLQoJU87y0fBIAEXSix18OCgILsrCCXS71usZz_HwIh0K-R0CXuhUpl4h575UyGuUM-qNBuvyVFiYjvF2ZhdHtjU6bzupNXX72s6_ZQ8y4qzfSq6m2OV-LtxsG49mzoEElQCHhsz_iGwCmLbZxiMLR1LS32yTeYnmVMMctNl_iKYtmuYzFRCun7KhPZTPXtzHgVVzAzm66XpUoS-iCehe3fasXiPUFbpXGoAwKwJo1Rvd139XwC3km-jAXNGXAOWHOuod16N1XTGFNhQwNjtmeGjS2vifbokLjZhugMSA0iS8V54zygQHtYaA1szJIqt155wmu9Sl1Fz9y0BBl5bZjbT-CgycVS23uTxSP3ILNcSBqezSlFrNbSDWqqHkHweKpGY8QyVMzLv8UdYG3yvL0I0H9-RFNKlevaQdpQUrmnma-Mlo3lF3XJQzyYHm1RnhNcdR3XhwjL_5XIO96FdFNeIm_yOVYW6dm5Vl4hp_9O_8jRDQYCtxqGScQTTG7vlTnDriPNVg=w1576-h922",
    "https://lh3.googleusercontent.com/fife/AAbDypDeELWC28OhpsPaFBhzpIYSdwvkMvfOBvygBQJrQDe40CZJ_mM731QgMLwwHLQBg-RzVfcgtS9DFyW0yJSjSO0spmzIRE6AySF0lZlMrm5Qjm52HX88p4F6jI-UbZPVRcWKL0m5xz9-NLEpx5lngj8X5twKAMvPCFPCwrqpx3J7F92Zcvwhhns55_kfQZlw20JjRrfjSO369vVgkQVwCll-sxHw088bCakMCf6utKwmD4QC6eIET5k8GSw3Oefu6GvJSiKD66uVJGQFpYmKR4AE8k1TUUX7eOjehm1Zgp4wAUJ177Kpo4kPRpvu9wM62S2pw0inMPH7vLJ-0WjGuA6g2sH-lWK488cCT3f1vxVgfReTboqw07dvgYd4tHxmvu56cNjqUY3lq5xeAiy9S31UwmbAQsBNZD_sdBgtUnjaNGwjSZZBzqtC2F7IhonMgZBFCGmaO4riehcWTG2gsvsMCu6703Af0gSDJ_0yo3TeuQYIqEXvjfCOpPfwwpbQTy9ICQZVFeyHG0ms-3Xkd3laW150jf_Eq3zQFXmJQcTyCTK6wFqRf_WVLNgjf4BxRT1iNOyHnqhsBNzBmoxf_kToC2ukBQQWehpY4pl0BO44Bii0QAgdj1x04PrbfEylH3rRDkICszZ8mNINKzxWGWXl0M3dfCMXcVIkS3bFVZbYlwGi8PkH0b5-a9kdkmo4eYgR0kzNU19JvKnjuGC2O3F2Xd5Guiqf_hTXU0eV1VEJ0wWTYMUii56L7DpjnPk17GA11Qpni3Od4PXowWLkfNwtzBTY-Eb6DmFdMTsLFweRdWyjtjRIpU7dMQBSspz3GrhjND9GTmLS9RxXrFkV7PmHJq3fOELPQXde4EZPMszBIyZx3Z1f8UPvYllwkDPCMroFvyhV1xH_KHWXzCnxcL7AYCBhEqNxVzf2ho4L1oT_kmP3wGkYwUlWRLpSB9aC9SoJtomiovLfnNOu50hHZzE1yMmW_dyga9tRXPH4lEmQ0pNMc76RlL0UMLO9KoIXowpcUlZcb22usRGEW008fEx2P7fvu1Udo2tv5nMtMLpoSZcOEkmlrvMNeG3zeX_P2erZGah6LcDK6QO0XQZaR2mraX5AQ-qVru_vbsabLtUtC80sEIPLM0bAUFh6CBn_dvgRReRp7PPRO7mA0EViiUm6unl3CCfGsB00p3fvbVmwKOKr9RHMuxvC__ymh8r6VviNp-0GEMiv_oAlNC-rMU2agiinDJV4i2xpsx0-N_ZGmRS-c8yWrAOixVtgVzPT7pqLtnVIyiNRP7ezUyuiTDOpO_LbSxKQa8Eicld73LcId1TOQGTKfqaTNki9Cy1rTzkt1MJn7ciYe-03QxkMloebqxy1KYndoRo1eQwt6y6fYJ9cdrL-1HfxJs2cyDy6B_Te-Poj25gRIOPB9-0OJVQLEUrFFHc_XofPH-s1FdM_RqjP_yjbibWEBhL1XdNFVVlq_Dc4pimm4Sh87mU6pImqkipTuAlOLNSOQPYwucsTmMRFHk3xDI8s6SlED7AoazseIwPg1TRcz8E05bmaaSK2lg8ytfL4O6LOARi5rkHGT9cv0z29KUw5Cj2fyqAMhCnqdFwfVJ9TcbVS87u1DZlPy1WkLEmyEU76P-PwuT4ZHufmFwaISnzabOMGbe4n69Hkq04_NG6eIubRapxplGmzcsoKAxPNenutbw4c_w=w1576-h922"
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}


      <View style={styles.ViewHeader}>
        {/* đăng xuất */}
        <TouchableOpacity
          onPress={() => {
            Alert.alert('Thông báo!', 'Bạn có muốn đăng xuất', [
              { text: 'Cannel' },
              { text: 'Okay', onPress: () => navigation.goBack() },
            ]);
          }}>

          <SimpleLineIcons name="logout" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <View style={styles.Search}>
            <EvilIcons name="search" size={24} color="black" />
            <Text style={{ marginLeft: 20 }}>Tìm kiếm </Text>

          </View>
        </TouchableOpacity>
        <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>
          BOOK ON
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ShoppingCart');
          }}>
          <Icon1 name="shoppingcart" size={30} color="white" />
        </TouchableOpacity>
      </View>
      {/* noi dung */}
      <View style={styles.ViewBody}>
        <ScrollView>

          <View style={{ backgroundColor: '#eeeee4', width: '100%' }}>
            <SwiperFlatList
              autoplay
              autoplayDelay={5}
              autoplayLoop
              index={0}
              showPagination={true}
              data={customImg}
              renderItem={({ item }) => (
                <View style={{ width: 415, height: 180, marginLeft: 0, marginRight: 0 }}>
                  <TouchableOpacity
                    onPress={() => {
                      <Text style={styles.text}>{item}</Text>;
                    }}>
                    <Image
                      style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                      source={{ uri: item }}
                    />

                  </TouchableOpacity>

                </View>
              )}
            />
          </View>


          {/* View danh sách cách sách */}
          <View style={{ marginBottom: 20 }}>
            <View style={styles.ViewTitileProducts}>
              <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>Dành cho bạn</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
              }}>
              <View style={styles.ViewLine} />
              <View style={styles.ViewProducts}>
                <FlatList
                  data={DataProducts}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) => (
                    <TouchableOpacity
                      key={index}
                      opacity={1}
                      style={styles.ButtomDetail}
                      onPress={() => {

                        navigation.navigate('Detail', { dataItem: item });
                      }}>
                      <Image
                        source={item.avatarImage}
                        style={styles.ViewImageProducts}
                      />
                      <Text numberOfLines={4} style={styles.ViewTitilePro}>
                        {item.nameProducts}
                      </Text>
                      <Text numberOfLines={1} style={styles.TxtAuthor}>
                        by {item.author}
                      </Text>
                      <Text numberOfLines={1} style={styles.TxtPrice}>
                        price: {convertToNumberCommas(item.price)} Đ
                      </Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
          </View>
          <View style={{ marginBottom: 20 }}>
            <View style={styles.ViewTitileProducts}>
              <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>Top bán chạy</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
              }}>
              <View style={styles.ViewLine} />
              <View style={styles.ViewProducts}>
                <FlatList
                  data={DataProducts}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) => (
                    <TouchableOpacity
                      key={index}
                      opacity={1}
                      style={styles.ButtomDetail}
                      onPress={() => {

                        navigation.navigate('Detail', { dataItem: item });
                      }}>
                      <Image
                        source={item.avatarImage}
                        style={styles.ViewImageProducts}
                      />
                      <Text numberOfLines={4} style={styles.ViewTitilePro}>
                        {item.nameProducts}
                      </Text>
                      <Text numberOfLines={1} style={styles.TxtAuthor}>
                        by {item.author}
                      </Text>
                      <Text numberOfLines={1} style={styles.TxtPrice}>
                        price: {convertToNumberCommas(item.price)} Đ
                      </Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.ViewFooter}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={{}}>
            <Entypo name="home" size={30} color="white" style={{ textAlign: 'center' }} />
            <Text style={{ color: 'white', }}>Trang chủ </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DonHang')}>
          <View style={{}}>
            <Octicons name="package" size={24} color="white" style={{ textAlign: 'center' }} />
            <Text style={{ color: 'white' }}>Đơn hàng </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={{}}>
            <FontAwesome name="user-circle" size={24} color="white" style={{ textAlign: 'center' }} />
            <Text style={{ color: 'white' }}>Người dùng </Text>
          </View>
        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );
};
export default Home;
