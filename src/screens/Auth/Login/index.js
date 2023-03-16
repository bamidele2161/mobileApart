import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import PrimaryInput from '../../../components/Input';
import PrimaryButton from '../../../components/button';
import AuthButtomText from '../../../components/text/authButtomText';
import {useForm, Controller} from 'react-hook-form';

const Login = ({navigation}) => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = formData => {
    console.log('form data', formData);
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Sign In</Text>
        <View style={styles.formContainer}>
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

          <PrimaryButton title="Sign In" onPress={handleSubmit(onSubmit)} />
          <AuthButtomText
            question="Don't have an account?"
            bottomLink="Sign Up"
            onPress={() => navigation.navigate('Register')}
          />
        </View>
      </View>
    </>
  );
};

export default Login;
