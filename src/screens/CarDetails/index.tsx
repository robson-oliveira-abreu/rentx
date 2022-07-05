import React from "react";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Accessory } from "../../components/Accessory";
import { Button } from "../../components/Button";

import speedSvg from '../../assets/speed.svg'
import accelerationSvg from '../../assets/acceleration.svg'
import forceSvg from '../../assets/force.svg'
import gasolineSvg from '../../assets/gasoline.svg'
import exchangeSvg from '../../assets/exchange.svg'
import peopleSvg from '../../assets/people.svg'

import {
    Container,
    Header,
    CarImages,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    About,
    Accessories,
    Footer,
} from './styles'

export function CarDetails() {
    return (
        <Container>
            <Header>
                <BackButton onPress={() => { console.log('hello') }} />

            </Header>

            <CarImages>
                <ImageSlider
                    imagesUrls={['https://w7.pngwing.com/pngs/853/38/png-transparent-2017-audi-r8-car-audi-rs5-audi-r8-lms-2016-audi-sedan-car-performance-car.png']}
                />
            </CarImages>

            <Content>
                <Details>
                    <Description>
                        <Brand>Lamborghini</Brand>
                        <Name>Huracan</Name>
                    </Description>
                    <Rent>
                        <Period>Ao dia</Period>
                        <Price>R$ 580</Price>
                    </Rent>
                </Details>

                <Accessories>
                    <Accessory name='380km/h' icon={speedSvg}/>
                    <Accessory name='3.2s' icon={accelerationSvg}/>
                    <Accessory name='800hp' icon={forceSvg}/>
                    <Accessory name='Gasolina' icon={gasolineSvg}/>
                    <Accessory name='Auto' icon={exchangeSvg}/>
                    <Accessory name='2 pessoas' icon={peopleSvg}/>
                </Accessories>

                <About>
                Este é automóvel desportivo. Surgiu do lendário touro de 
                lide indultado na praça Real Maestranza de Sevilla. 
                É um belíssimo carro para quem gosta de acelerar.
                </About>
            </Content>

            <Footer>
                <Button title='Confirmar' />
            </Footer>

        </Container>
    )
}