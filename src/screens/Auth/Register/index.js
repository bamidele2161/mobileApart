import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './style';
import PrimaryInput from '../../../components/Input';
import PrimaryButton from '../../../components/button';
import AuthButtomText from '../../../components/text/authButtomText';
import {useForm, Controller} from 'react-hook-form';

const Register = ({navigation}) => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
    },
  });

  const onSubmit = formData => {
    console.log('form data', formData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.formContainer}>
        <Controller
          name="firstName"
          control={control}
          render={({field: {onChange, value}}) => (
            <PrimaryInput
              placeholder={'First Name'}
              onChangeText={onChange}
              label="First Name"
              value={value}
            />
          )}
        />

        <Controller
          name="lastName"
          control={control}
          render={({field: {onChange, value}}) => (
            <PrimaryInput
              placeholder={'Last Name'}
              value={value}
              onChangeText={onChange}
              label="Last Name"
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({field: {onChange, value}}) => (
            <PrimaryInput
              placeholder={'Email Address'}
              onChangeText={onChange}
              label="Email Address"
              value={value}
            />
          )}
        />

        <Controller
          name="phone"
          control={control}
          render={({field: {onChange, value}}) => (
            <PrimaryInput
              placeholder={'Phone Number'}
              value={value}
              onChangeText={onChange}
              label="Phone Number"
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({field: {onChange, value}}) => (
            <PrimaryInput
              placeholder={'Password'}
              password
              value={value}
              onChangeText={onChange}
              label="Password"
            />
          )}
        />
        <PrimaryButton title="Sign Up" onPress={handleSubmit(onSubmit)} />
        <AuthButtomText
          question="Already have an account?"
          bottomLink="Sign In"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

export default Register;
