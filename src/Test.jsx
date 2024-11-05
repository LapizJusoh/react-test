// props are arguments that are passed into components
// in this case, props are object containing the animals
// in conditionals in React, use 'null' to not show anything
// can conditionally render JSX using JavaScript syntax like 'if' statements, '&&', and '? :' operators

const people = [{
  id: 0, // Used in JSX as a key
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1, // Used in JSX as a key
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2, // Used in JSX as a key
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  id: 3, // Used in JSX as a key
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
}, {
  id: 4, // Used in JSX as a key
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];

const chemists = people.filter(person => person.profession === 'chemist');
const listItems = chemists.map(person => 
  <li key={person.id}>
    <p>
      <strong>{person.name}:</strong>
      {' ' + person.profession + ' '}
    </p>
  </li>
);

function Test() {
  return <ul>{listItems}</ul>;
}

export default Test;