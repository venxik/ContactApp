import React from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';
import {DeviceWidth} from '../Constant/Constant';
import {Controller} from 'react-hook-form';
import Color from '../Constant/Color';

const ControlledFloatingLabel = (
  ({setRedux, name, title, control, error, placeholder, rules, ...props}) => {
    return (
      <View style={Styles.container}>
        <View style={{borderBottomWidth: 1, borderBottomColor: 'lightgray'}}>
          <Controller
            name={name}
            control={control}
            rules={rules}
            render={({onBlur, onChange, value}) => (
              <TextInput
                onChangeText={(value) => {
                  onChange(value);
                  setRedux(value);
                }}
                style={Styles.textInput}
                onBlur={onBlur}
                value={value.toString()}
                placeholder={placeholder}
                {...props}
              />
            )}
          />
        </View>
        {error && <Text style={Styles.errorText}>{error.message}</Text>}
      </View>
    );
  }
);
export default ControlledFloatingLabel;
const Styles = StyleSheet.create({
  container: {
    width: DeviceWidth - 24,
    marginTop: 12,
    marginHorizontal: 12,
  },
  textInput: {
    fontWeight: 'bold',
    marginTop: 5,
    color: '#182044',
    paddingVertical: 0,
    paddingBottom: 12,
    paddingTop: Platform.OS === 'ios' ? 14 : 10,
    paddingHorizontal: 0,
  },
  errorText: {
    color: Color.color_alert_500,
  },
});
