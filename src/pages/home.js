import React from 'react';
import { styled } from 'styletron-react';

const SortOptions = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
]

const NameButton = styled('button', (props) => {
  return {
    color: props.sortOrder === 'asc' ? 'green' : props.vvv === 'desc' ? 'red' : 'black',
  };
});

const AgeButton = styled('button', (props) => {
  return {
    color: props.sortOrder === 'asc' ? 'green' : props.sortOrder === 'desc' ? 'red' : 'black',
  };
});

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: SortOptions,
      sortBy: null,
      sortOrder: null,
    };
    this.originalList = [...this.state.people];
  }

  handleSort = (sortBy) => {
    let order;
    if (this.state.sortBy === sortBy) {
      if (this.state.sortOrder === 'asc') {
        order = 'desc';
      } else if (this.state.sortOrder === 'desc') {
        order = null;
      } else {
        order = 'asc';
      }
    } else {
      order = 'asc';
    }
    this.setState({ sortBy, sortOrder: order });
  }

  render() {
    let sortedPeople = this.state.sortOrder === 'none' ? [...this.originalList] : [...this.state.people];
    if (this.state.sortOrder !== 'none') {
      sortedPeople.sort((a, b) => {
        if (this.state.sortOrder === 'asc') {
          if (a[this.state.sortBy] < b[this.state.sortBy]) {
            return -1;
          } else {
            return 1;
          }
        } else {
          if (a[this.state.sortBy] > b[this.state.sortBy]) {
            return -1;
          } else {
            return 1;
          }
        }
      });
    }
    return (
      <div>
        <NameButton onClick={() => this.handleSort('name')} sortOrder={this.state.sortOrder}>Sort by Name</NameButton>
        <AgeButton onClick={() => this.handleSort('age')} sortOrder={this.state.sortOrder}>Sort by Age</AgeButton>
        <ul>
          {sortedPeople.map((person, i) => (
            <li key={i}>{person.name}, {person.age}</li>
          ))}
        </ul>
      </div>
    );
  }
}

