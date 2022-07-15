import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native';

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

export function SchedulingComplete() {
    const { width } = useWindowDimensions();
    const navigation = useNavigation()

    function handleConfirm() {
        navigation.navigate('Home')
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
                <Title>Carro alugado!</Title>

                <Menssage>
                    Agora você só precisa ir{'\n'}
                    até a concessionária da RENTX{'\n'}
                    pegar o seu automóvel.
                </Menssage>
            </Content>

            <Footer>
                <ConfirmButton title='OK' onPress={handleConfirm} />
            </Footer>
        </Container>
    )
}