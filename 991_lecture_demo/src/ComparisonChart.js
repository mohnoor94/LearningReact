import React, {Component} from 'react';
import {Area, Bar, CartesianGrid, ComposedChart, Label, Legend, ReferenceLine, Tooltip, XAxis, YAxis} from 'recharts';

import './css/ComparisonChart.css'

export default class ComparisonChart extends Component {

  static defaultProps = {
    width: 750,
    height: 500
  };

  render = () => {
    const props = this.props;
    return (
      <div className='ComparisonChart'>
        <h1>{props.title}</h1>
        <div className='ComparisonChart-Content'>
          {ComparisonChart.renderChart(props.chart1, props)}
          {ComparisonChart.renderChart(props.chart2, props)}
        </div>
      </div>
    );
  };

  static renderChart = (chart, props) => {
    return <div>
      <h2>{chart.title}</h2>

      <ComposedChart
        width={props.width}
        height={props.height}
        data={chart.data}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >

        <CartesianGrid stroke="#f5f5f5"/>
        <Tooltip/>
        <Legend/>

        <XAxis dataKey="name">
          <Label value={chart.xLabel} offset={0} position="insideBottom"/>
        </XAxis>

        <YAxis domain={[chart.yStart, chart.yEnd]}
               label={{value: chart.yLabel, angle: -90, position: 'insideLeft'}}/>


        <Bar dataKey="v1" name={chart.key1} barSize={20} fill="#413ea0"/>

        <Area type="monotone" dataKey="v2" fill="#ff7300" opacity={.15} stroke="#ff7300" name={chart.key2}/>
        <ReferenceLine y={chart.threshold} label={chart.key2} stroke="red" strokeDasharray="3 6"/>

      </ComposedChart>

      <h3>{chart.key2}: {chart.threshold}</h3>
    </div>;
  }
}