import React from 'react';

import { 
    Wrapper, 
    Header, 
    HeaderContainer,
    Title,
    BalanceContainer,
    Value,
    Bold,
    EyeButton,
    Info,
    Actions,
    Action,
    ActionLabel,
    UseBalance,
    UseBalanceTitle
} from './styles';

import { Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import { Switch } from 'react-native';

export default function Home() {
    return (
        <Wrapper>
            <Header
                colors={['#52E78C', '#1Ab563']}
            >
                <HeaderContainer>
                    <Title>Saldo PicPay</Title>
                    <BalanceContainer>
                        <Value>
                            R$ <Bold>0,00</Bold>
                        </Value>
                        <EyeButton>
                            <Feather name="eye" size={28} color="#FFF" />
                        </EyeButton>
                    </BalanceContainer>
                   
                   <Info>
                       Seu saldo está rendendo 100% do CDI
                   </Info>

                   <Actions>
                       <Action>
                            <MaterialCommunityIcons name="cash" size={28} color="#FFF" />
                            <ActionLabel>Adicionar</ActionLabel>
                       </Action>
                       <Action>
                            <FontAwesome name="bank" size={20} color="#FFF" />
                            <ActionLabel>Retirar</ActionLabel>
                       </Action>
                   </Actions>
                </HeaderContainer>
            </Header>
            <UseBalance>
                <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>
                <Switch />
            </UseBalance>
        </Wrapper>
    );
}