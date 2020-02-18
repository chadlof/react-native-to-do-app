import React, {useState} from 'react'
import styled from 'styled-components'
import {uuid} from 'uuidv4'
import { View, Alert } from 'react-native'
import { Header } from './components/Header'
import { ListItems } from './components/ListItems'
import { AddItem } from './components/AddItem'

const App = () =>  {

  const listOfItems = [
    { 
        id: uuid(),
        title: 'Wash car',
    },
    { 
        id: uuid(),
        title: 'Clean house'
    },
    { 
        id: uuid(),
        title: 'Walk dog'
    },
    { 
        id: uuid(),
        title: 'Take out trash'
    },
    { 
        id: uuid(),
        title: 'Make dinner'
    },
  ]
  
    const [items, setItems] = useState(listOfItems)
    
    const deleteItem = (id) => {
        const prevArray = items
        const filteredArray = prevArray.filter(item => item.id !== id)
        setItems(filteredArray)
    }
  
    const addItem = (title) => {
      if (title === ''){
        Alert.alert('Error','Please enter an item',{text: 'OK'})
      }else{
        setItems(prevArray => {
            return [ ...prevArray, {id: uuid(), title}]
        })
      }
    }

  return (
    <View>
      <Header/> 
      <ListItems items={items} deleteItem={deleteItem}/>
      <AddItem addItem={addItem}/>
    </View>
  );
}

export default App

