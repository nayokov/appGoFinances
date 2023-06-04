import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex:1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width:100%;
    height:${RFPercentage(42)}px;

    background-color: ${({ theme }) => theme.colors.secondary_light}; 

    justify-content: center;
    align-items: center;
    flex-direction:row;
`;
// cima-baixo = 0 - aos-lados = 24
export const UserWrapper = styled.View`
    width: 100%;
    padding:0 24px;
    margin-top : ${getStatusBarHeight()+ RFValue(28)}px;
    flex-direction:row;
    justify-content: space-between;
    align-items:center;

`;

export const UserInfo = styled.View`
flex-direction: row;
align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;
  margin-top: -200;
  border-radius: 100px;
  `;
export const User = styled.View`
 margin-left: 17px;
`;
export const UserGreeting = styled.Text`
color: ${({ theme }) => theme.colors.shape};
margin-top: -100;

font-size: ${RFValue(18)}px;
font-family: ${({ theme }) => theme.fonts.regular};

`;
export const UserName = styled.Text`
color: ${({ theme }) => theme.colors.shape};

font-size: ${RFValue(18)}px;
font-family: ${({ theme }) => theme.fonts.bold};

`;

export const Icon = styled(Feather)`
    color: ${ ({ theme })=> theme.colors.secondary};
    font-size: ${RFValue (24)}px;
    margin-top: -100;
`;

export const HighLightCards = styled.ScrollView.attrs({
        horizontal:true,
        showsHorizontalScrollIndicator:false,
        contentContainerStyle: { padding: 24 }
})`
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(20)}px;
`;