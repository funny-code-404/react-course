import React from 'react';
import Counter from './Counter';
import Form from './Form';

const data = {
  label: 'HEADER'
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="app">
        {/* <Counter headerLabel={data.label} /> */}
        <Form />
      </div>
    )
  }
}

export default App;
