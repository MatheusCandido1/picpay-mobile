import styled from 'styled-components/native';
import  { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.View`
    background-color: #000000;
    flex: 1;
`;

export const Header = styled(LinearGradient)`
    height: 300px;
`;

export const HeaderContainer = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
`;

export const BalanceContainer = styled.View`
    margin: 10px 0;
    flex-direction: row;
    align-items: center;
`;

export const Value = styled.Text`
    font-size: 38px;
    color: #FFF;
    font-weight: 800;
`;

export const Bold = styled.Text`
    font-weight: bold;
    justify-content: center;
`;

export const EyeButton = styled.TouchableOpacity`
    margin-left: 10px;
`;

export const Info = styled.Text`
    color: #FFF;
    font-size: 14px;
    font-weight: bold;
`;

export const Actions = styled.View`
    flex-direction: row;
    margin-top: 40px;
`;



export const Action = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    border: 1px solid rgba(255,255,255, 0.6);
    width: 150px;
    height: 45px;
    border-radius: 25px;
    justify-content: center;
    margin: 0 10px;
`;


export const ActionLabel = styled.Text`
    font-size: 16px;
    color: #FFF;
    margin-left: 10px;
`;

export const UseBalance = styled.View`
    background-color: #1c1c1e;
    height: 60px;
    flex-direction: row;
    padding: 0 16px;
    align-items: center;
    justify-content: space-between;
`;


export const UseBalanceTitle = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-weight: 500;
`;

export const PaymentMethods = styled.View`
    margin-top: 25px;
    padding: 0 16px;
`;

export const PaymentMethodsTitle = styled.Text`
    color: #8e8e93;
    text-transform: uppercase;
`;


export const Card = styled.View`
    background-color: #1E232a;
    padding: 16px;
    border-radius: 8px;
    margin-top: 10px;
`;

export const CardBody = styled.View`
    flex-direction: row;
`;

export const CardDetails = styled.View`
    flex: 1;
    margin-right: 20px;
`;


export const CardTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #FFF;
`;

export const CardInfo = styled.Text`
    font-size: 14px;
    color: rgba(255,255,255,0.8);
    margin-top: 15px;
`;

export const CardFooter = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-top: 25px;
`;

export const CardFooterText = styled.Text`
    color: #0DB060;
    font-size: 18px;
    font-weight: bold;
    margin-left: 15px;
`

export const Img = styled.Image`
    width: 60px;
`;

export const TicketContainer = styled.View`
    align-items: center;
    margin-top: 25px;
`;

export const Ticket = styled.TouchableOpacity`
    flex-direction: row;
`;

export const TicketLabel = styled.Text`
    color: #0DB060;
    font-size: 16px;
    font-weight: bold;
    margin-left: 15px;
    text-decoration-line: underline;
`;







