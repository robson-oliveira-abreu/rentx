import React, { useState } from 'react';
import { KeyboardAvoidingView, Keyboard } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components/native';
import { Feather } from '@expo/vector-icons'

import { useAuth } from '../../hooks/Auth';

import { BackButton } from '../../components/BackButton';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';

import {
    Container,
    Header,
    HeaderTop,
    HeaderTitle,
    LogoutButton,
    PhotoContainer,
    Photo,
    PhotoButton,
    Content,
    Options,
    Option,
    OptionsTitle,
    Section,
} from './styles';

export function Profile() {
    const { user, signOut } = useAuth();

    const [option, setOption] = useState<'dataEdit' | 'passwordEdit'>('dataEdit');
    const [avatar, setAvatar] = useState(user.avatar);
    const [name, setName] = useState(user.name);
    const [driverLicense, setDriverLicense] = useState(user.driver_license);


    const theme = useTheme();
    const navigation = useNavigation();

    const handleBack = () => {
        navigation.goBack();
    }

    const handleOptionChange = (selectedOption: 'dataEdit' | 'passwordEdit') => {
        setOption(selectedOption)
    }

    const handleSelectAvatar = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        if (result.cancelled) {
            return;
        }

        if (result.uri) {
            return setAvatar(result.uri);
        }
    }

    return (
        <KeyboardAvoidingView behavior='position' enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <Header>
                        <HeaderTop>
                            <BackButton color={theme.colors.shape} onPress={handleBack} />
                            <HeaderTitle>Editar Perfil</HeaderTitle>
                            <LogoutButton onPress={signOut}>
                                <Feather name="power" size={24} color={theme.colors.shape} />
                            </LogoutButton>
                        </HeaderTop>
                        <PhotoContainer>
                            {!!avatar && <Photo source={{ uri: avatar }} />}
                            <PhotoButton onPress={handleSelectAvatar}>
                                <Feather name='camera' size={24} color={theme.colors.shape} />
                            </PhotoButton>
                        </PhotoContainer>
                    </Header>

                    <Content style={{ marginBottom: useBottomTabBarHeight() }}>
                        <Options>
                            <Option
                                active={option === 'dataEdit'}
                                onPress={() => handleOptionChange('dataEdit')}
                            >
                                <OptionsTitle active={option === 'dataEdit'}>
                                    Dados
                                </OptionsTitle>
                            </Option>
                            <Option
                                active={option === 'passwordEdit'}
                                onPress={() => handleOptionChange('passwordEdit')}
                            >
                                <OptionsTitle active={option === 'passwordEdit'}>
                                    Trocar senha
                                </OptionsTitle>
                            </Option>
                        </Options>

                        {option === 'dataEdit' ?
                            <Section>
                                <Input
                                    iconName='user'
                                    placeholder='Nome'
                                    autoCorrect={false}
                                    defaultValue={name}
                                    onChangeText={setName}
                                />
                                <Input
                                    iconName='mail'
                                    editable={false}
                                    defaultValue={user.email}
                                />
                                <Input
                                    iconName='credit-card'
                                    placeholder='CNH'
                                    keyboardType='numeric'
                                    defaultValue={driverLicense}
                                    onChangeText={setDriverLicense}
                                />
                            </Section>
                            :
                            <Section>
                                <PasswordInput
                                    iconName='lock'
                                    placeholder='Senha atual'
                                />
                                <PasswordInput
                                    iconName='lock'
                                    placeholder='Nova senha'
                                />
                                <PasswordInput
                                    iconName='lock'
                                    placeholder='Repetir senha'
                                />
                            </Section>}
                    </Content>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}