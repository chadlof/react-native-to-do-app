import React from 'react'
import { View, FlatList} from 'react-native'
import { ListItem } from './ListItem'

export const ListItems = ({deleteItem, items}) => {

    return (
    <View>
        <FlatList
        data={items}
        renderItem={({ item}) => <ListItem item={item} deleteItem={deleteItem}/>}
        keyExtractor={item => item.id}
        />
    </View>
  );
}


