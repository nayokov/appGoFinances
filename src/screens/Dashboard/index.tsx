import React from 'react';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize'

import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighLightCards
} from './styles';
import { HighlightCard } from '../../components/HighlightCards';

export function Dashboard() {
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/60889087?v=4' }} />
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Nayan G. Ribeiro</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power" />
                    <Feather name="home" color="#FFF" />
                </UserWrapper>
            </Header>
            <HighLightCards
            >
                <HighlightCard type="up"
                    title="Entradas"
                    amount="R$ 18.000,00"
                    lastTransaction="Ultima entrada dia 13 de abril"
                />
               <HighlightCard type="down"
                    title="Saídas"
                    amount="R$ 14.00,00"
                    lastTransaction="Ultima saída dia 15 de abril"
                />
                <HighlightCard type="total"
                    title="Entradas"
                    amount="R$ 13.000,00"
                    lastTransaction="Ultima entrada dia 15 de abril"
                />
            </HighLightCards>

        </Container>
    )
}