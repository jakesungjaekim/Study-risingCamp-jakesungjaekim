import React from 'react';

interface Props {
  title: string;
}

interface State {
  name: string;
}

class classA extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
    this.state = {
      name: 'componentA',
    };
  }

  render(): React.ReactNode {
    return (
      <div>
        <h1>{this.props.title}: {this.state.name}</h1>
      </div>
    );
  }
}

export default classA;
