import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
	background-color: darkred;
	justify-content: center;
	align-items: center;
`

const Title = styled.Text`
	font-size: 20px;
	font-weight: 500;
	color: whitesmoke;
`;


export default function App() {
  return (
    <Container>
      <Title>Open up App.js to start working on your app!</Title>
    </Container>
  );
}


