import React, { useState } from 'react';

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
    UseBalanceTitle,
    PaymentMethods,
    PaymentMethodsTitle,
    Card,
    CardDetails,
    CardInfo,
    CardTitle,
    CardFooter,
    Img,
    CardBody,
    CardFooterText,
    TicketContainer,
    Ticket,
    TicketLabel
} from './styles';

import { Feather, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';

import creditCard from '../../assets/img/credit-card.png';

import { Switch } from 'react-native';

export default function Home() {
    const [useBalance, setUseBalance] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    function handleSwitch() {
        setUseBalance(previousState => !previousState);
    }

    function handleBalanceVisibility() {
        setIsVisible(previousState => !previousState);
    }

    return (
        <Wrapper>
            <Header
                colors={ useBalance 
                        ?['#52E78C', '#1Ab563']
                        :['#D3D3D3', '#868686']}
            >
                <HeaderContainer>
                    <Title>Saldo PicPay</Title>
                    <BalanceContainer>
                        <Value>
                            R$ <Bold>{isVisible ? '0,00':'----'}</Bold>
                        </Value>
                        <EyeButton onPress={handleBalanceVisibility}>
                            <Feather name={isVisible ? 'eye':'eye-off'} size={28} color="#FFF" />
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
                <Switch onValueChange={handleSwitch} value={useBalance} />
            </UseBalance>

            <PaymentMethods>
                <PaymentMethodsTitle>
                    Forma de pagamento
                </PaymentMethodsTitle>

                <Card>
                    <CardBody>
                    <CardDetails>
                        <CardTitle>
                            Cadastre seu cartão de crédito
                        </CardTitle>
                        <CardInfo>
                            Cadastre um cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo no seu PicPay.
                        </CardInfo>
                    </CardDetails>

                    <Img resizeMode="contain" source={creditCard}>
                    </Img>
                    </CardBody>
                    
                    <CardFooter>
                        <AntDesign name="pluscircleo" size={30} color="#0DB060" />
                        <CardFooterText>Adicionar cartão de crédito</CardFooterText>
                    </CardFooter>
                </Card>
                <TicketContainer>
                    <Ticket>
                        <MaterialCommunityIcons name="ticket-outline" size={20} color="#0DB060" />
                        <TicketLabel>Usar código promocional</TicketLabel>
                    </Ticket>
                </TicketContainer>
            </PaymentMethods>
        </Wrapper>
    );
}