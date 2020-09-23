import React from 'react';

import { 
    Container, 
    Header,
    Title,
    Card,
    CardHeader,
    Avatar,
    Description,
    Bold,
    CardBody,
    UserName,
    CardFooter,
    Details,
    Value,
    Divider,
    Date,
    Actions,
    Option,
    OptionLabel
} from './styles';

import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import avatar from '../../assets/img/avatar.png';

export default function Activities() {
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>

            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@burguerking</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Candin</UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$ 14,00</Value>
                        <Divider />

                        <Feather name="lock" color="#FFF" size={14} />
                        <Date> Há 2 horas </Date>
                    </Details>

                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name="comment-outline" size={14} color="#FFF" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                        <Option>
                            <AntDesign name="hearto" size={14} color="#FFF" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>
        </Container>
    );
}