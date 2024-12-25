import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {GlobalColors} from './../../constants/Colors';
import {CountryPicker} from 'react-native-country-codes-picker';
import CustomButton from '../../Customs/CustomButton';

const CreateAccount = () => {
  const theme = useColorScheme();
  const [show, setShow] = useState(false);
  const [flag, setFlag] = useState('🇮🇳');
  const [countryCode, setCountryCode] = useState('+91');
  const [phone, setPhone] = useState('');

  return (
    <ScrollView
      style={[
        {
          backgroundColor:
            theme === 'dark' ? GlobalColors.dark.bg : GlobalColors.light.bg,
        },
        styles.main,
      ]}>
      <View
        style={[
          {
            backgroundColor: GlobalColors.light.Border,
          },
          styles.stepsCont,
        ]}>
        <View
          style={[
            {
              backgroundColor: GlobalColors.light.BorderAccent,
            },
            styles.step,
          ]}
        />
      </View>
      <View style={styles.view}>
        <Text
          style={[
            {
              color:
                theme === 'dark'
                  ? GlobalColors.dark.ContentPrimary
                  : GlobalColors.light.ContentPrimary,
            },
            styles.title,
          ]}>
          Create an account
        </Text>
        <Text
          style={[
            {
              color:
                theme === 'dark'
                  ? GlobalColors.dark.ContentPrimary
                  : GlobalColors.light.ContentPrimary,
            },
            styles.head,
          ]}>
          Enter your mobile number to create an account
        </Text>
        <View style={styles.phone}>
          <Text style={styles.phoneHead}>Phone</Text>
          <View style={{flexDirection: 'row', gap: 10}}>
            <TouchableOpacity
              onPress={() => setShow(true)}
              style={{
                width: responsiveScreenWidth(23),
                height: responsiveScreenHeight(5),
                borderWidth: 1,
                padding: 10,
                borderRadius: 10,
                borderColor:
                  theme === 'dark'
                    ? GlobalColors.dark.Border
                    : GlobalColors.light.Border,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color:
                    theme === 'dark'
                      ? GlobalColors.dark.ContentPrimary
                      : GlobalColors.light.ContentPrimary,
                  fontSize: responsiveScreenFontSize(1.8),
                  alignSelf: 'center',
                }}>
                {flag} {countryCode}
              </Text>
            </TouchableOpacity>
            <TextInput
              style={[
                styles.input,
                {
                  borderColor:
                    theme === 'dark'
                      ? GlobalColors.dark.Border
                      : GlobalColors.light.Border,
                  color:
                    theme === 'dark'
                      ? GlobalColors.dark.ContentPrimary
                      : GlobalColors.light.ContentPrimary,
                },
              ]}
              placeholder="Mobile Number"
              placeholderTextColor={
                theme === 'dark'
                  ? GlobalColors.dark.ContentDisabled
                  : GlobalColors.light.ContentDisabled
              }
              keyboardType="phone-pad"
              maxLength={10}
              onChangeText={setPhone}
            />
          </View>
          <CountryPicker
            lang="en"
            show={show}
            pickerButtonOnPress={item => {
              setFlag(item.flag);
              setCountryCode(item.dial_code);
              setShow(false);
            }}
          />
        </View>
        <CustomButton
          onPress={() => {}}
          title="Continue"
          style={[
            phone.length !== 10
              ? {backgroundColor: GlobalColors.light.Border}
              : {},
            {alignSelf: 'center'},
          ]}
          disabled={phone.length !== 10}
        />
      </View>
    </ScrollView>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    gap: responsiveScreenWidth(5),
  },
  stepsCont: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(0.4),
  },
  step: {
    width: responsiveScreenWidth(10),
    height: responsiveScreenHeight(0.4),
    borderRadius: 50,
  },
  title: {
    fontSize: responsiveScreenHeight(3),
    fontFamily: 'Poppins-SemiBold',
  },
  view: {
    margin: responsiveScreenWidth(2),
    gap: responsiveScreenHeight(0.8),
    height: responsiveScreenHeight(100),
  },
  head: {
    fontFamily: 'Poppins',
    fontWeight: '200',
    fontSize: responsiveScreenFontSize(1.5),
  },
  phone: {
    marginTop: responsiveScreenHeight(2),
    gap: responsiveScreenHeight(1),
    flex: 0.75,
  },
  phoneHead: {
    fontSize: responsiveScreenFontSize(1.8),
    fontFamily: 'Poppins-bold',
  },
  input: {
    width: responsiveScreenWidth(70),
    height: responsiveScreenHeight(5),
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: responsiveScreenWidth(3),
    fontSize: responsiveScreenFontSize(1.8),
    fontFamily: 'Poppins',
  },
});
