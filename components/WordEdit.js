import React from 'react';
import { Icon, Input, ListItem } from 'react-native-elements';

class WordEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.titleInput = React.createRef();
  }

  componentDidMount() {
    this.titleInput.current.focus();
  }

  render() {
    const { pressHandler } =  this.props;
    return (
      <ListItem
        title={(<Input placeholder="Basic input" ref={this.titleInput} />)}
        bottomDivider
        rightIcon={(
          <Icon
            name="check"
            type="font-awesome"
            onPress={pressHandler}
          />
        )}
      />
    );
  }
}

export default WordEdit;
