import React from 'react';

import {
    Container,
    ImageIndexs,
    ImageIndex,
    CarImageWrapper,
    CarImage,
} from './styles';

interface Props {
    imagesUrls: string[];
}

export function ImageSlider({ imagesUrls }: Props) {
    return (
        <Container>
            <ImageIndexs>
                <ImageIndex active={true} />
                <ImageIndex active={false} />
                <ImageIndex active={false} />
                <ImageIndex active={false} />
            </ImageIndexs>

            <CarImageWrapper>
                <CarImage
                    source={{ uri: imagesUrls[0] }}
                    resizeMode='contain'
                />
            </CarImageWrapper>
        </Container>
    );
}
