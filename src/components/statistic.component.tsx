import React from 'react';

interface StatisticProps {
  Name: string;
  Score: string;
}

export class Statistic extends React.Component<any, StatisticProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return <span><strong>{this.props.Name}</strong> {this.props.Score}</span>
  }
}