import React from 'react';
import {
  View, FlatList, TextInput, Alert, Text
} from 'react-native';

import { Input, ListItem, Icon } from 'react-native-elements';
// import { Icon } from 'react-native-vector-icons/FontAwesome';

const Item = ({ title, pressHandler, isEditing }) => (
  <>
    {isEditing
      ? (
        <ListItem
          title={isEditing ? (<Input placeholder="Basic input" />) : title}
          bottomDivider
          rightIcon={(
            <Icon
              name="check"
              type="font-awesome"
              onPress={pressHandler}
            />
          )}
        />
      ) : (
        <ListItem
          title={title}
          bottomDivider
          chevron
          onPress={pressHandler}
        />
      )}
  </>
);

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: '1',
          title: 'First Item',
          isEditing: false,
        },
        {
          id: '2',
          title: 'Second Item',
          isEditing: false,
        },
      ],
    };
  }

  pressHandler = (i) => {
    const { list } = this.state;
    const newList = list.slice(); // need to do a copy ?
    newList.splice(i, 1, { ...list[i], isEditing: !list[i].isEditing }); // splice return the removed elements and not the list
    this.setState((state) => ({ list: newList } ));
  };

  render() {
    const { list } = this.state;
    return (
      <View>
        <FlatList
          data={list}
          renderItem={({ item, index }) => <Item title={item.title} pressHandler={() => this.pressHandler(index)} isEditing={item.isEditing} />}
          keyExtractor={(item) => item.id}
        />
        <ListItem
          title={<TextInput placeholder="Basic input" />}
          bottomDivider
          chevron
        />
        <ListItem
          title={(
            <Input
              inputStyle={{
                alignSelf: 'flex-start',
                minHeight: 0,
              }}
              placeholder="Basic input"
            />
          )}
          bottomDivider
          chevron
        />
      </View>
    );
  }
}

export default List;
