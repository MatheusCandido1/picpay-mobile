import React from 'react';

import { Container, Option, Title, Img } from './styles';

import img8 from '../../assets/img/08.png';
import img9 from '../../assets/img/09.png';
import img10 from '../../assets/img/10.png';
import img11 from '../../assets/img/11.png';
import img12 from '../../assets/img/12.png';

const items = [
    {
        key: 1,
        img: img8,
        title: 'Pague suas contas sem sair de casa',
        bgColor: '#172c4a'
    },
    {
        key: 2,
        img: img9,
        title: 'Pague suas contas sem sair de casa',
        bgColor: '#6a0159'
    },
    {
        key: 3,
        img: img10,
        title: 'Pague suas contas sem sair de casa',
        bgColor: '#4139c8'
    },
    {
        key: 4,
        img: img11,
        title: 'Pague suas contas sem sair de casa',
        bgColor: '#00ab4b'
    },
    {
        key: 5,
        img: img12,
        title: 'Pague suas contas sem sair de casa',
        bgColor: '#ba2f76'
    },

]

export default function Tips(){
    return (
        <Container>
            {items.map((item) => (
            <Option key={item.key} bgColor={item.bgColor}>
                <Title>{item.title}</Title>
                <Img source={item.img} />
            </Option>
            ))}
        </Container>
    );
}