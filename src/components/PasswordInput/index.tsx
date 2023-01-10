import React, { useState } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components';

import {
    Container,
    InputText,
    IconContainer,
} from './styles';

interface Props extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name'];
}

export function PasswordInput({
    iconName,
    ...rest
}: Props) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const theme = useTheme();

    const handlePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState)
    }

    return (
        <Container>
            <IconContainer>
                <Feather
                    name={iconName}
                    size={24}
                    color={theme.colors.text_details}
                />
            </IconContainer>
            <InputText
                {...rest}
                secureTextEntry={!isPasswordVisible}
            />
            <BorderlessButton onPress={handlePasswordVisibility}>
                <IconContainer>
                    <Feather
                        name={isPasswordVisible ? 'eye' : 'eye-off'}
                        size={24}
                        color={theme.colors.text_details}
                    />
                </IconContainer>
            </BorderlessButton>

        </Container>
    );
}