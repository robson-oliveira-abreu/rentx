import React, { useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';
import { Bullet } from '../Bullet';

import {
    Container,
    ImageIndexs,
    CarImageWrapper,
    CarImage,
} from './styles';

interface Props {
    imagesUrls: {
        id: string;
        photo: string;
    }[];
}

interface ChangeImageProps {
    viewableItems: ViewToken[];
    changed: ViewToken[];
}

export function ImageSlider({ imagesUrls }: Props) {
    const [imageIndex, setImageIndex] = useState(0)

    const indexChange = useRef((info: ChangeImageProps) => {
        const index = info.viewableItems[0].index!
        setImageIndex(index)
    })

    return (
        <Container>
            <ImageIndexs>
                {
                    imagesUrls.map((item, index) => (
                        <Bullet
                            key={item.id}
                            active={index === imageIndex}
                        />
                    ))
                }
            </ImageIndexs>

            <FlatList
                data={imagesUrls}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <CarImageWrapper>
                        <CarImage
                            source={{ uri: item.photo }}
                            resizeMode='contain'
                        />
                    </CarImageWrapper>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={indexChange.current}
            />

        </Container>
    );
}
