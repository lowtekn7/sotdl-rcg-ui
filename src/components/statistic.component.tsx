import React from 'react';

interface StatisticProps {
  Name: string;
  Score: string;
}

export class Statistic extends React.Component<any, StatisticProps> {
  render() {
    return (
      <React.Fragment>
        <strong>{this.props.Name}</strong> {this.props.Score}
      </React.Fragment>
    );
  }
}