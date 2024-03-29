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
    value?: string;
}

export function PasswordInput({
    iconName,
    value,
    ...rest
}: Props) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const theme = useTheme();


    const handleInputFocus = () => {
        setIsFocused(true)
    }

    const handleInputBlur = () => {
        setIsFocused(false)
        setIsFilled(!!value);
    }


    const handlePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState)
    }

    return (
        <Container>
            <IconContainer isFocused={isFocused}>
                <Feather
                    name={iconName}
                    size={24}
                    color={(isFocused || isFilled) ? theme.colors.main : theme.colors.text_details}
                />
            </IconContainer>
            <InputText
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                isFocused={isFocused}
                autoCorrect={false}
                {...rest}
                secureTextEntry={!isPasswordVisible}
            />
            <BorderlessButton onPress={handlePasswordVisibility}>
                <IconContainer isFocused={isFocused}>
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