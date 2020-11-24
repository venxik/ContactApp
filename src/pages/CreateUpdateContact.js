import React, {useState, useEffect, useCallback} from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Alert,
} from 'react-native';
import Color from '../Constant/Color';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import SecondaryHeader from '../components/SecondaryHeader';
import ControlledFloatingLabel from '../components/ControlledFloatingLabel';
import {update_contact} from '../fetcher/update_contact';
import {create_contact} from '../fetcher/create_contact';
import {useDispatch, useSelector} from 'react-redux';
import {refreshLandingOn} from '../redux/actions/refreshLanding';
import {useForm} from 'react-hook-form';
import {
  setFirstName,
  setLastName,
  setAge,
  setPhotoLink,
  resetContactData,
} from '../redux/actions/createContact';

const CreateUpdateContact = ({navigation, route}) => {
  const {params} = route;
  const {photo, firstName, lastName, age} = params || {};
  const [loading, setLoading] = useState(false);

  const {
    firstName: firstNameRedux,
    lastName: lastNameRedux,
    age: ageRedux,
    photoLink: photoLinkRedux,
  } = useSelector((state) => state.set_create_contact_reducers);

  console.log(firstNameRedux, lastNameRedux, ageRedux, photoLinkRedux)

  const dispatch = useDispatch();

  const setFirstNameToRedux = useCallback(
    (value) => {
      dispatch(setFirstName(value));
    },
    [dispatch],
  );

  const setLastNameToRedux = useCallback(
    (value) => {
      dispatch(setLastName(value));
    },
    [dispatch],
  );

  const setAgeToRedux = useCallback(
    (value) => {
      dispatch(setAge(value));
    },
    [dispatch],
  );

  const setPhotoLinkToRedux = useCallback(
    (value) => {
      dispatch(setPhotoLink(value));
    },
    [dispatch],
  );

  const defaultValue = {
    firstName: params ? firstName : firstNameRedux,
    lastName: params ? lastName : lastNameRedux,
    age: params ? age.toString() : ageRedux,
    photoLink: params ? photo : photoLinkRedux,
  };

  const {handleSubmit, errors, control, reset} = useForm({
    defaultValues: defaultValue,
  });

  const onSubmit = (value) => {
    setLoading(true);
    const {firstName, lastName, age, photoLink} = value;
    const body = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      age: parseInt(age),
      photo: photoLink.trim(),
    };
    if (params) {
      update_contact({
        id: params.id,
        body: body,
      })
        .then((v) => {
          setLoading(false);
          if (v.error) {
            Alert.alert(v.error, v.message);
          } else {
            Alert.alert('Success', 'Contact is updated', [
              {
                text: 'OK',
                onPress: () => dispatch(refreshLandingOn()),
              },
            ]);
          }
        })
        .catch((e) => {
          setLoading(false);
          Alert.alert('Error', JSON.stringify(e));
        });
    } else {
      create_contact({
        body: body,
      })
        .then((v) => {
          setLoading(false);
          dispatch(resetContactData());
          reset();
          if (v.error) {
            Alert.alert(v.error, v.message);
          } else {
            Alert.alert('Success', 'Contact is created', [
              {
                text: 'OK',
                onPress: () => dispatch(refreshLandingOn()),
              },
            ]);
          }
        })
        .catch((e) => {
          setLoading(false);
          Alert.alert('Error', JSON.stringify(e));
        });
    }
  };

  return (
    <SecondaryHeader
      title={`${params ? 'Update' : 'Create'} Contact`}
      onPressLeft={() => navigation.goBack()}
      renderRight={
        <TouchableOpacity onPress={handleSubmit(onSubmit)} disabled={loading}>
          {!loading ? (
            <MaterialCommunity
              name={'content-save'}
              size={24}
              color={Color.color_0}
            />
          ) : (
            <ActivityIndicator
              style={{flex: 0}}
              size={'large'}
              color={Color.color_0}
            />
          )}
        </TouchableOpacity>
      }>
      <ScrollView>
        <ControlledFloatingLabel
          control={control}
          editable={!loading}
          rules={{required: 'First Name is required'}}
          name={'firstName'}
          error={errors.firstName}
          placeholder={'First Name'}
          setRedux={setFirstNameToRedux}
        />
        <ControlledFloatingLabel
          control={control}
          editable={!loading}
          rules={{required: 'Last Name is required'}}
          name={'lastName'}
          error={errors.lastName}
          placeholder={'Last Name'}
          setRedux={setLastNameToRedux}
        />
        <ControlledFloatingLabel
          control={control}
          editable={!loading}
          rules={{pattern: {value: /^[0-9]*$/, message: 'Number Only'}, required: 'Age is required'}}
          name={'age'}
          error={errors.age}
          keyboardType={'numeric'}
          placeholder={'Age'}
          setRedux={setAgeToRedux}
        />
        <ControlledFloatingLabel
          control={control}
          editable={!loading}
          rules={{required: 'Photo Link is required'}}
          name={'photoLink'}
          error={errors.photoLink}
          placeholder={'Photo Link'}
          setRedux={setPhotoLinkToRedux}
        />
      </ScrollView>
    </SecondaryHeader>
  );
};
export default CreateUpdateContact;
