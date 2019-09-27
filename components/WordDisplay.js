import React from 'react';
import { ListItem } from 'react-native-elements';

class WordDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, pressHandler } =  this.props;
    return (
      <ListItem
        title={title}
        bottomDivider
        chevron
        onPress={pressHandler}
      />
    );
  }
}

export default WordDisplay;