import React, {useState, useEffect} from 'react';
import {View, Image, Text} from 'react-native';

//  redux
import {connect} from 'react-redux';
import {ActionCreators} from '../../actions';
import {bindActionCreators} from 'redux';

// library
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// style
import styles from './styles';

// components
import TextInput from '../../components/Inputs';
import Button from '../../components/Button';

// Interfaces
import {LoginProps} from '../../Interfaces/containers';

// helper
import {appString} from '../../utils/contants';
import {emailValidation, InputValidation} from '../../helper/validation';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Header';

const imageURl =
  'https://c4.wallpaperflare.com/wallpaper/790/555/758/garden-square-square-garden-nature-forests-hd-art-wallpaper-preview.jpg';

const Login = ({props, navigation, loginSuccess, actions}: LoginProps) => {
  // Setting up states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMsg, sePasswordErrorMsg] = useState('');

  useEffect(() => {
    if (loginSuccess) {
      // on getting login success navigate user to Home/dashboard screen:
      navigation.navigate('Home');
    }
  }, [loginSuccess]);

  const onChangeEmail = (value: any) => {
    // handle change event of Email textInput:
    setEmail(value);
    setEmailError(false);
    setPasswordError(false);
  };

  const onChangePassword = (value: any) => {
    // handle change event of password textInput:
    setPassword(value);
  };

  const onLogin = async () => {
    // handle login button press event: validate the inputs and proccedd:
    let valid = await handleValidation();
    if (valid) {
      const data = {
        email: email,
        password: password,
      };
      actions.loginApi(data);
    }
  };

  const handleValidation = () => {
    let errorEmail = null;
    let errorPassword = null;
    let isValid: boolean = true;

    errorEmail = emailValidation(email);
    if (!errorEmail.emailValid) {
      setEmailError(true);
      setEmailErrorMsg(errorEmail.errorMessage);
      isValid = false;
    }

    errorPassword = InputValidation(password);
    if (!errorPassword.passwordValid) {
      setPasswordError(true);
      sePasswordErrorMsg(errorPassword.errorMessage);
      isValid = false;
    }

    return isValid;
  };

  return (
    <View style={styles.containerView}>
      <SafeAreaView style={styles.containerView}>
        <Header title={appString.sign_in} navigation={navigation} />
        <KeyboardAwareScrollView
          bounces={false}
          scrollEnabled
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.mainView}>
            <Image style={styles.img} source={{uri: imageURl}} />
            <Text style={styles.title}>{appString.welcome}</Text>

            <TextInput
              onChangeText={text => onChangeEmail(text)}
              placeholder={appString.email_placeholder}
              value={email}
              error={emailError}
              errorMessage={emailErrorMsg}
            />
            <TextInput
              onChangeText={text => onChangePassword(text)}
              placeholder={appString.password_placeholder}
              value={password}
              secureEntry={true}
              error={passwordError}
              errorMessage={passwordErrorMsg}
            />
            <View style={{height: 30}} />
            <Button text={appString.sign_in} onClick={onLogin} />
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </View>
  );
};

// received  props
const mapStateToProps = (state: any) => ({
  loginSuccess: state.authReducer.loginSuccess,
});

// send action
const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

// export container
export default connect(mapStateToProps, mapDispatchToProps)(Login);
