import React, {useState} from 'react'
import { View, TextInput, TouchableOpacity} from 'react-native'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/FontAwesome5'

const StyledTextInput = styled(TextInput)`
    height: 60px;
    padding: 8px 12px;
    font-size:16px;
`

const StyledButtonIcon = styled(Icon.Button)`
    padding: 8px;
    margin: 6px 20px;
    justify-content: center;
    background-color: darkred;
`

export const AddItem = ({addItem}) => {
    const [text, setText] = useState('')

    const _onChangeText = (textValue) => setText(textValue)
    const _onPress = (text) => {
        return (
            addItem(text),
            setText('')
        )
    }

    return(
        <View>
            <StyledTextInput 
                placeholder="Add Item..." 
                onChangeText={_onChangeText}
                clearButtonMode="always"
                value={text}
            />
            <TouchableOpacity>
                <StyledButtonIcon
                    name="plus" 
                    size={20} 
                    color="whitesmoke"
                    backgroundColor="transparent"
                    onPress={() => _onPress(text)}
                    >
                    Add Item
                </StyledButtonIcon>
            </TouchableOpacity>
        </View>
    )
}