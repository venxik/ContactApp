import React from 'react';
import AnimatedHeader from './AnimatedHeader/AnimatedHeader';
import {getStatusBarHeight, isIPhoneX} from 'react-native-status-bar-height';
import {View, Platform, TouchableOpacity, Text, StatusBar} from 'react-native';
import Color from '../../Constant/Color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaView} from 'react-native-safe-area-context';

const MainHeader = (props) => {
  const title = props.title || '';
  const marginBottomTitle = props.marginBottomTitle || 8;
  const marginLeftTitle = props.marginLeftTitle || 16;
  const headerMaxHeight = props.headerMaxHeight || 120;

  const navigation = props.navigation || undefined;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        ...isIPhoneX({paddingTop: getStatusBarHeight()}),
        backgroundColor: Color.color_one_500,
      }}>
      <AnimatedHeader
        style={{flex: 1}}
        backText="true"
        title={title}
        renderLeft={() => navigation}
        renderRight={props.renderRight}
        fontSizeTitle={props.fontSizeTitle}
        titleColor={props.titleColor}
        imageSource={props.imageSource}
        renderStaticBody={props.renderStaticBody}
        staticBodyStyle={props.staticBodyStyle}
        titleStyle={{
          fontSize: 22,
          left: marginLeftTitle,
          bottom: marginBottomTitle,
          color: Color.color_1,
        }}
        headerMaxHeight={headerMaxHeight}>
        {props.children}
      </AnimatedHeader>
    </SafeAreaView>
  );
};

export default MainHeader;
