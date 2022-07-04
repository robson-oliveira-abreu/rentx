import React from "react";
import { BackButton } from "../../components/BackButton";

import {
    Container,
    Header
} from './styles'

export function CarDetails() {
    return (
        <Container>
            <Header>
                <BackButton onPress={() => {console.log('hello')}} />

            </Header>

        </Container>
    )
}