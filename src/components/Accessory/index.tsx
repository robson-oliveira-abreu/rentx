import React from 'react';
import { SvgProps } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

import {
    Container,
    Name,
} from './styles';

interface Props {
    name: string;
    icon: React.FC<SvgProps>
}

export function Accessory({
    name,
    icon: Icon
}: Props) {
    const theme = useTheme()
    return (
        <Container>
            <Icon width={32} height={32} color={theme.colors.title}/>
            <Name>{name}</Name>
        </Container>
    )
}