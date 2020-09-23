import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
    horizontal: true,
    contentContainerStyle: {
        alignItems: 'center',
        paddingLeft: 16
    },
}))`
    background-color: #1e222b;
    height: 130px;
`;

export const Option = styled.TouchableOpacity`
    width: 80px;
    margin-right: 16px;
    align-items: center;
`;

export const Icon = styled.Image`
`;

export const Label = styled.Text`
    color: #FFFFFF;
    font-weight: bold;
    margin-top: 8px;
    font-size: 14px;
    text-align: center;
`;
