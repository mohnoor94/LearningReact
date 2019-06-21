import React, {Component} from 'react';
import './css/Page.css'
import toHtml from "./helpers/mappers";
import ComparisonChart from "./ComparisonChart";

class Page extends Component {

  state = {
    charts: this.props.charts || []
  };

  render() {
    const props = this.props;
    const state = this.state;

    return (
      <div className='Page'>
        {toHtml(props.data)}
        {state.charts.map(c => <ComparisonChart title={c.title} chart1={c.chart1} chart2={c.chart2}/>)}
        <p className='Page-no'>{props.number}</p>
      </div>
    );
  }
}

export default Page;