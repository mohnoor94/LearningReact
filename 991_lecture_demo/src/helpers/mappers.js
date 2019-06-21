import React from 'react';
import {BlockMath} from "react-katex";

const mapHeader = (type, value) => {
  type = type.toLowerCase();
  switch (type) {
    case 'h1': return <h1>{value}</h1>;
    case 'h2': return <h2>{value}</h2>;
    case 'h3': return <h3>{value}</h3>;
    case 'h4': return <h4>{value}</h4>;
    case 'h5': return <h5>{value}</h5>;
    case 'h6': return <h6>{value}</h6>;
  }
};

const mapList = (element) => element.map(e => typeof (e.val) === 'string'
  ? e.sub === 'equ'
    ? <li>{mapEquation(e.val, e.class)}</li>
    : e.highlight
      ? <li>{mapLine(e.val, e.highlight)}</li>
      : <li>{e.val}</li>
  : <ul>{mapList(e.val.val)}</ul>);

const mapEquation = (equation, clazz) => {
  return <div className={clazz || 'equation'}>
    <BlockMath>{equation}</BlockMath>
  </div>
};

const mapLine = (line, highlight) => {
  const parts = line.split(highlight);
  return <div>
    {parts[0]} <span className='highlight'>{highlight}</span> {parts[1]}
  </div>
};

const toHtml = (elements) => {
  return elements.map(e => {
    if (e.type.startsWith('h')) return mapHeader(e.type, e.val);
    else if (e.type === 'ul') return <ul>{mapList(e.val)}</ul>;
    else if (e.type === 'equ') {
      console.log(e.class);
      return mapEquation(e.val, e.class);
    }
  })
};

export default toHtml;