import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import {
    Container,
    Content,
    Title,
    Menssage,
    Footer,
} from './styles';
import { ConfirmButton } from '../../components/ConfirmButton';

export interface ConfirmatinParamns {
    title: string;
    message: string;
    nextScreenRoute: keyof ReactNavigation.RootParamList;
}

export function Confirmation() {
    const { width } = useWindowDimensions();
    const navigation = useNavigation()
    const route = useRoute();

    const { title, message, nextScreenRoute } = route.params as ConfirmatinParamns;

    function handleConfirm() {
        navigation.navigate(nextScreenRoute)
    }
    return (
        <Container>
            <StatusBar
                barStyle='light-content'
                translucent
                backgroundColor='transparent'
            />
            <LogoSvg width={width} />

            <Content>
                <DoneSvg width={80} height={80} />
                <Title>{title}</Title>

                <Menssage>
                    {message}
                </Menssage>
            </Content>

            <Footer>
                <ConfirmButton title='OK' onPress={handleConfirm} />
            </Footer>
        </Container>
    )
}