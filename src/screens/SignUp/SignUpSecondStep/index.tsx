import React, { useState } from 'react';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'

import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { PasswordInput } from '../../../components/PasswordInput';
import { Button } from '../../../components/Button';

import {
  Container,
  Header,
  Steps,
  Title,
  SubTitle,
  Form,
  FormTitle,
} from './styles';
import { api } from '../../../services/api';

export interface SignUpParamns {
  user: {
    name: string;
    email: string;
    driveLicense: string;
  }
}

export function SignUpSecondStep() {
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const navigation = useNavigation();
  const route = useRoute();
  const theme = useTheme();

  const { user } = route.params as SignUpParamns;

  const handleBack = () => {
    navigation.goBack();
  }

  const handleRegister = async () => {
    if (!password || !passwordConfirm) {
      return Alert.alert('Informe a senha e a confirmação.')
    }

    if (password !== passwordConfirm) {
      return Alert.alert('As senhas não são iguais')
    }

    await api.post('/users', {
      name: user.name,
      email: user.email,
      driver_license: user.driveLicense,
      password,
    })
      .then(() => {
        navigation.navigate('Confirmation', {
          nextScreenRoute: 'SignIn',
          title: 'Conta Criada!',
          message: `Agora é só fazer o login \n e aproveitar.`
        })
      })
      .catch(() => {
        Alert.alert('Opa', 'Não foi possível cadastrar.')
      });
  }

  return (
    <KeyboardAvoidingView
      behavior='position'
      enabled
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton onPress={handleBack} />
            <Steps>
              <Bullet active={false} />
              <Bullet active />
            </Steps>
          </Header>

          <Title>
            Crie sua {'\n'}conta
          </Title>
          <SubTitle>
            Faça seu cadastro de {'\n'}
            forma rápida e fácil
          </SubTitle>

          <Form>
            <FormTitle>
              2.Senha
            </FormTitle>


            <PasswordInput
              iconName='lock'
              placeholder='Senha'
              onChangeText={setPassword}
              value={password}
            />

            <PasswordInput
              iconName='lock'
              placeholder='Repetir senha'
              onChangeText={setPasswordConfirm}
              value={passwordConfirm}
            />
          </Form>

          <Button
            title='Cadastrar'
            color={theme.colors.success}
            onPress={handleRegister}
          />

        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
