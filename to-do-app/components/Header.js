import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components'

const Wrapper = styled.View`
	justify-content: center;
	align-items: center;
	background-color: darkred;
  padding-top:50px;
  padding-bottom:12px;
`

const Title = styled.Text`
	font-size: 20px;
	font-weight: 500;
	color: whitesmoke;
`


export function Header () {
  return (
    <Wrapper>
      <Title>To Do List!!!</Title>
    </Wrapper>
  )
}


