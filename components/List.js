import React from 'react';
import { View, FlatList } from 'react-native';
import { Input, ListItem } from 'react-native-elements';

const Item = ({ title, pressHandler, isEditing }) => (
  <>
    {isEditing
      ? (
        <ListItem
          title={isEditing ? (<Input placeholder="Basic input" />) : title}
          bottomDivider
          chevron
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
        },
        {
          id: '3',
          title: '2 Item',
        },
      ],
    };
  }

  pressHandler = () => {
    this.setState({
      list: [
        {
          id: '1',
          title: 'First Item',
          isEditing: true,
        },
        {
          id: '2',
          title: 'Second Item',
        },
      ],
    });
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.state.list}
          renderItem={({ item }) => <Item title={item.title} pressHandler={this.pressHandler} isEditing={item.isEditing} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

export default List;
