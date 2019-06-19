import React, {Component} from 'react';
import {
  ComposedChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, Label
} from 'recharts';

import './css/ComparisonChart.css'

export default class ComparisonChart extends Component {

  static defaultProps = {
    width: 750,
    height: 500,
    key1: 'Value',
    key2: 'Measure',
    yStart: 'dataMin',
    yEnd: 'dataMax',
    xLabel: 'Values',
    yLabel: 'Observations',
    threshold: 25
  };

  render() {
    const props = this.props;
    const chart1 = props.chart1;
    const chart2 = props.chart2;

    return (

      <div className='ComparisonChart'>

        <h1>{props.title}</h1>
        <div className='ComparisonChart-Content'>
          <div>
            <h2>{chart1.title}</h2>

            <ComposedChart
              width={props.width}
              height={props.height}
              data={chart1.data}
              margin={{
                top: 20, right: 20, bottom: 20, left: 20,
              }}
            >

              <CartesianGrid stroke="#f5f5f5"/>
              <Tooltip/>
              <Legend/>

              <XAxis dataKey="name">
                <Label value={chart1.xLabel} offset={0} position="insideBottom"/>
              </XAxis>

              <YAxis domain={[chart1.yStart, chart1.yEnd]}
                     label={{value: chart1.yLabel, angle: -90, position: 'insideLeft'}}/>


              <Bar dataKey="v1" name={chart1.key1} barSize={20} fill="#413ea0"/>

              <Area type="monotone" dataKey="v2" fill="#ff7300" opacity={.15} stroke="#ff7300" name={chart1.key2}/>
              <ReferenceLine y={chart1.threshold} label={chart1.key2} stroke="red" strokeDasharray="3 6"/>

            </ComposedChart>

            <h3>{chart1.key2}: {chart1.threshold}</h3>
          </div>

          <div>
            <h2>{chart2.title}</h2>

            <ComposedChart
              width={props.width}
              height={props.height}
              data={chart2.data}
              margin={{
                top: 20, right: 20, bottom: 20, left: 20,
              }}
            >

              <CartesianGrid stroke="#f5f5f5"/>
              <Tooltip/>
              <Legend/>

              <XAxis dataKey="name">
                <Label value={chart2.xLabel} offset={0} position="insideBottom"/>
              </XAxis>

              <YAxis domain={[chart2.yStart, chart2.yEnd]}
                     label={{value: chart2.yLabel, angle: -90, position: 'insideLeft'}}/>


              <Bar dataKey="v1" name={chart2.key1} barSize={20} fill="#413ea0"/>

              <Area type="monotone" dataKey="v2" fill="#ff7300" opacity={.15} stroke="#ff7300" name={chart2.key2}/>
              <ReferenceLine y={chart2.threshold} label={chart2.key2} stroke="red" strokeDasharray="3 6"/>

            </ComposedChart>

            <h3>{chart2.key2}: {chart2.threshold}</h3>
          </div>

        </div>
      </div>
    );

  }
}