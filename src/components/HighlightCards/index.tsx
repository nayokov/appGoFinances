import React from 'react';

import { Container,
Header,Title,Icon,
Footer,
Amount,
LastTransaction } from './styles';

interface Props {
    title:string;
    amount:string;
    lastTransaction: string;
    type: 'up'| 'down'| 'total'
}

const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total: 'dollar-sign'
}

export function HighlightCard({
    type,
    title,
    amount,
    lastTransaction
}: Props){
    return(
        <Container type={type}>
            <Header>
                <Title type={type}></Title>
                <Icon name={icon[type]} type={type}></Icon>
            </Header>
            <Footer>
                <Amount type={type}>R$ 17.400.000,00</Amount>
                <LastTransaction type={type}>Seu saldo em 15 de abril</LastTransaction>
            </Footer>
        </Container>
    )
}