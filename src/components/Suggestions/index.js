import React from 'react';

import { Container, Option, Icon, Label } from './styles';

import img1 from '../../assets/img/01.png';
import img2 from '../../assets/img/02.png';
import img3 from '../../assets/img/03.png';
import img4 from '../../assets/img/04.png';
import img5 from '../../assets/img/05.png';
import img6 from '../../assets/img/06.png';
import img7 from '../../assets/img/07.png';

const items = [
    {
        key: 1,
        img: img1,
        label: 'Doações'
    },
    {
        key: 2,
        img: img2,
        label: 'Uber'
    },
    {
        key: 3,
        img: img3,
        label: 'Transporte'
    },
    {
        key: 4,
        img: img4,
        label: 'TV'
    },
    {
        key: 5,
        img: img5,
        label: 'Central de Doações'
    },
    {
        key: 6,
        img: img6,
        label: 'Pagar Conta'
    },
    {
        key: 7,
        img: img7,
        label: 'Cobrar'
    },
];

export default function Suggestions(){
    return (
        <Container>
            {items.map((item) => (
                <Option key={item.key}>
                    <Icon source={item.img} />
                    <Label>{item.label}</Label>
                </Option>
            ))}
        </Container>
    );
}