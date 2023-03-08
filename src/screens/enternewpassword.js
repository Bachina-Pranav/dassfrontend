import React, { useState } from 'react'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import Logo from '../components/Logo'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'

export default function ResetPasswordScreen2({ navigation }) {
  const [password,setpassword] = useState({ value:'', error:'' })
  const [password2,setpassword2] = useState({ value:'', error:'' })

  const sendResetPassword = () => {
    passwordError = ""
    if (!password.value) {passwordError = "Password can't be empty."}
    if ((password.value).length < 5) {passwordError = "Password must be at least 5 characters long."}
    if (passwordError) {
      setpassword({ value:'', error: passwordError })
      return
    }
    if ( password.value != password2.value )
    {
        setpassword2({ ...password2, error: "Enter the same password again!" })
        return
    }
    navigation.navigate('LoginScreen')
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Enter new Password</Header>
      <TextInput
        label="enter new password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setpassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        autoCapitalize="none"
        autoCompleteType="password"
        textContentType="password"
        keyboardType="default"
        secureTextEntry={true}
        //description="You will receive email with password reset link."
      />
      <TextInput
        label="confirm new password"
        returnKeyType="done"
        value={password2.value}
        onChangeText={(text) => setpassword2({ value: text, error: '' })}
        error={!!password2.error}
        errorText={password2.error}
        autoCapitalize="none"
        autoCompleteType="password"
        textContentType="password"
        keyboardType="default"
        secureTextEntry={true}
        //description="You will receive email with password reset link."
      />
      <Button
        mode="contained"
        onPress={sendResetPassword}
        style={{ marginTop: 16 }}
      >
        Confirm
      </Button>
    </Background>
  )
}
