import React from 'react';
import { Button, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

import { 
    Container,
} from './styles';

export const Splash: React.FC = () => {
  return (
    <Container>

        <Animated.View style={styles.box}/>

        <Button title='Mover' onPress={()=>{}}/>
        
    </Container>
  );
}

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    }
})