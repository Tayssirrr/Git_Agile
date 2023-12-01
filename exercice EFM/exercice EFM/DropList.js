import React from 'react';

class DropList extends React.Component {
  render() {
    return (
      <select onChange={(e) => this.props.selectedItem(e.target.value)}>
        {this.props.items.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    );
  }
}

export default DropList;
