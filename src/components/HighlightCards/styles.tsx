import styled, {css} from 'styled-components/native'
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'

interface TypeProps{
   type: 'up'| 'down'| 'total';
}

export const Container = styled.View<TypeProps>`
   background-color: ${({ theme, type }) =>
   type === 'total' ? theme.colors.primary : theme.colors.shape}; 
   width: ${RFValue(300)}px;
   border-radius:5px;
   padding: 19px 23px;
   padding-bottom: ${RFValue(42)}px;
   height:300px;
   margin-right: 16px;
`;

export const Title = styled.Text<TypeProps>`
   font-family: ${({ theme }) => theme.fonts.bold};
   font-size: ${RFValue(12)}px;
   color: ${({ theme})=> theme.colors.text_dark};
`;

export const Header = styled.View`
   flex-direction: row;
   justify-content: space-between;
`;

export const Icon = styled(Feather)<TypeProps>`
   font-size: ${RFValue(40)}px;

   ${({type})=> type === 'up' && css`
      color: ${({ theme })=> theme.colors.success};
   `};

   ${({type})=> type === 'down' && css`
      color: ${({ theme })=> theme.colors.attention};
   `};

   ${({type})=> type === 'total' && css`
      color: ${({ theme })=> theme.colors.primary};
   `};
`;
export const Footer = styled.View``;

export const Amount = styled.Text<TypeProps>`
   font-family: ${({ theme }) => theme.fonts.bold};
   font-size: ${RFValue(32)}px;
   color: ${({ theme }) => theme.colors.text_dark};
   margin-top: 38px;
`;
export const LastTransaction = styled.Text<TypeProps>`
   font-family: ${({ theme }) => theme.fonts.bold};
   font-size: ${RFValue(10)}px;
   color: ${({ theme }) => theme.colors.text};
`;

