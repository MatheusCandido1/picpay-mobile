import React from 'react';

import { Container, Option, Icon, Label } from './styles';

import img1 from '../../assets/img/01.png';

export default function Suggestions(){
    return (
        <Container>
            <Option>
                <Icon source={img1} />
                    <Label> Doações </Label>
            </Option>
        </Container>
    );
}