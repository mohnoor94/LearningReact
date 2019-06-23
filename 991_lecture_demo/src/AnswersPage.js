import React from 'react';
import Page from "./Page";

import './css/AnswersPage.css'

class FirstPage extends Page {
  render() {
    return (
      <div className='AnswersPage'>
        <h1>Exercise Answers</h1>
        <table id='answers'>
          <tbody>
          <tr>
            <th>Group</th>
            <th>Mean</th>
            <th>Median</th>
            <th>Mode</th>
          </tr>
          <tr>
            <td>26, 34, 29, 16, 34, 16</td>
            <td>25.83</td>
            <td>27.5</td>
            <td>34, 16</td>
          </tr>
          <tr>
            <td>4, 7, 1, 98, 5, 2, 3</td>
            <td>17.14</td>
            <td>4</td>
            <td>None</td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default FirstPage;