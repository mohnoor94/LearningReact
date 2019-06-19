import React from 'react';
import './css/App.css';
import ComparisonChart from "./ComparisonChart";
import generateData from './helpers/dataHelpers'

function App() {
  const labels = ['Jun 21', 'Jun 22', 'Jun 23', 'Jun 24', 'Jun 25', 'Jun 26', 'Jun 27', 'Jun 28', 'Jun 29', 'Jun 30'];
  const dataAmman = [31, 30, 31, 31, 35, 32, 32, 31, 31, 32];
  const corruptedDataAmman = [31, 30, 31, 31, 35, 320, 32, 31, 31, 32];

  const dataAqaba = [34, 33, 33, 33, 38, 37, 39, 35, 33, 34];

  const meanAmman = generateData(labels, dataAmman, 'mean');
  const meanAqaba = generateData(labels, dataAqaba, 'mean');

  const meanAmmanCorrupted = generateData(labels, corruptedDataAmman, 'mean');

  const medianAmmanCorrupted = generateData(labels, corruptedDataAmman, 'median');
  const medianAqaba = generateData(labels, dataAqaba, 'median');


  const modeAmmanCorrupted = generateData(labels, corruptedDataAmman, 'mode');
  const modeAqaba = generateData(labels, dataAqaba, 'mode');

  const amman = 'Amman';
  const aqaba = 'Aqaba';
  const key1 = 'Temperature';

  const template = {
    key1: key1,
    yStart: 0,
    xLabel: 'Days',
    yLabel: 'Temperatures',
  };

  const meanTemplate = {
    ...template,
    key2: 'Mean',
  };

  const mean1AmmanChart = {
    ...meanTemplate,
    title: amman,
    yEnd: 40,
    threshold: meanAmman.val,
    data: meanAmman.items
  };

  const mean1AqabaChart = {
    ...meanTemplate,
    title: aqaba,
    yEnd: 40,
    threshold: meanAqaba.val,
    data: meanAqaba.items
  };

  const mean2AmmanChart = {
    ...meanTemplate,
    title: amman,
    yEnd: 400,
    threshold: meanAmmanCorrupted.val,
    data: meanAmmanCorrupted.items
  };

  const mean2AqabaChart = {
    ...mean1AqabaChart,
    yEnd: 400
  };

  const medianTemplate = {
    ...template,
    key2: 'Median',
    yEnd: 350
  };

  const medianAmmanChart = {
    ...medianTemplate,
    title: amman,
    threshold: medianAmmanCorrupted.val,
    data: medianAmmanCorrupted.items,
  };

  const medianAqabaChart = {
    ...medianTemplate,
    title: aqaba,
    threshold: medianAqaba.val,
    data: medianAqaba.items
  };

  const modeTemplate = {
    ...template,
    key2: 'Mode',
    yEnd: 350
  };

  const modeAmmanChart = {
    ...modeTemplate,
    title: amman,
    threshold: modeAmmanCorrupted.val,
    data: modeAmmanCorrupted.items,
  };

  const modeAqabaChart = {
    ...modeTemplate,
    title: aqaba,
    threshold: modeAqaba.val,
    data: modeAqaba.items
  };

  return (
    <div className="App">

      <h1>Measures of Location</h1>

      <ComparisonChart title='1.1 - Mean' chart1={mean1AmmanChart} chart2={mean1AqabaChart}/>
      <ComparisonChart title='1.2 - Mean with Outliers' chart1={mean2AmmanChart} chart2={mean2AqabaChart}/>

      <ComparisonChart title='2 - Median with Outliers' chart1={medianAmmanChart} chart2={medianAqabaChart}/>

      <ComparisonChart title='3 - Mode with Outliers' chart1={modeAmmanChart} chart2={modeAqabaChart}/>

    </div>
  );
}

export default App;