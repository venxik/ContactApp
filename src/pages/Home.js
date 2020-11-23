import React, {useState, useEffect} from 'react';
import {FlatList, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MainHeader from '../components/header/MainHeader';
import {HeaderConfig} from '../Constant/Constant';
import Color from '../Constant/Color';
import Foundation from 'react-native-vector-icons/Foundation';
import LoadingBlocker from '../components/LoadingBlocker';
import CellPhone from '../components/CellPhone';
import {useDispatch, useSelector} from 'react-redux';
import {refreshLandingOff} from '../redux/actions/refreshLanding';
import {fetchContacts} from '../redux/actions/getContacts';
import SecondaryHeader from '../components/SecondaryHeader';

const Home = ({navigation}) => {
  HeaderConfig();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {isRefresh: test} = useSelector(
    (state) => state.refresh_landing_reducers,
  );
  const {isFetching, error, contactsData} = useSelector(
    (state) => state.get_contacts_reducers,
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  useEffect(() => {
    if (test === true) {
      console.log('fetch again');
      dispatch(fetchContacts()).then(() => {
        dispatch(refreshLandingOff());
      });
    }
  }, [test, dispatch, fetchContacts, refreshLandingOff]);

  const noData = () => {
    if (contactsData.length === 0)
      return (
        <View style={styles.MainContainer}>
          <Text style={{textAlign: 'center'}}> Sorry, No Data</Text>
        </View>
      );
  };

  return (
    <SecondaryHeader
      title={'Contact'}
      renderStaticBody={isFetching && !loading ? <LoadingBlocker /> : undefined}
      renderRight={
        <View style={{justifyContent: 'flex-end', flexDirection: 'row'}}>
          <TouchableOpacity
            style={{borderRadius: 50, marginRight: 6, padding: 4}}
            onPress={() => navigation.push('CreateUpdateContact')}>
            <Foundation name={'plus'} size={24} color={Color.color_0} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{borderRadius: 50, marginLeft: 6, padding: 4}}
            onPress={() => navigation.push('SearchContact')}>
            <Foundation
              name={'magnifying-glass'}
              size={24}
              color={Color.color_0}
            />
          </TouchableOpacity>
        </View>
      }>
      <FlatList
        renderItem={(value, index) => {
          const {item} = value || {};
          const {firstName, lastName, photo, id} = item || {};
          return (
            <CellPhone
              index={index}
              firstName={firstName}
              lastName={lastName}
              photo={photo}
              id={id}
            />
          );
        }}
        ListEmptyComponent={noData()}
        data={contactsData.length > 1 && contactsData}
        refreshing={loading}
        progressViewOffset={150}
        onRefresh={() => {
          setLoading(true);
          dispatch(fetchContacts()).then(() => setLoading(false));
        }}
      />
    </SecondaryHeader>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default Home;
