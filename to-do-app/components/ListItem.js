import React, {useState} from 'react'
import { Text, View, TouchableOpacity} from 'react-native'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/FontAwesome5'

const ItemWrapper = styled.View`
    background-color: #f8f8f8;
    padding: 16px 20px;
    border-bottom-width: 1px;
    border-color: #eee;
    flex-direction:row;
    justify-content: space-between;
    align-items:center;
`

 export const ListItem = ({item, deleteItem}) => {
    return (
        <TouchableOpacity>
            <ItemWrapper>
                <Text>{item.title}</Text>
                <Icon.Button 
                    name="trash-alt" 
                    size={20} 
                    color="firebrick"
                    backgroundColor="transparent"
                    onPress={() => deleteItem(item.id)}
                    />
            </ItemWrapper>
        </TouchableOpacity>
    )
}