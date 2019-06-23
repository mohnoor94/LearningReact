import React from 'react';
import {BlockMath} from "react-katex";

const mapHeader = (type, value) => {
  type = type.toLowerCase();
  switch (type) {
    default: case 'h1': return <h1>{value}</h1>;
    case 'h2': return <h2>{value}</h2>;
    case 'h3': return <h3>{value}</h3>;
    case 'h4': return <h4>{value}</h4>;
    case 'h5': return <h5>{value}</h5>;
    case 'h6': return <h6>{value}</h6>;
  }
};

const mapList = element => element.map(e => {
  if (typeof (e.val) === 'string') {
    if (e.sub === 'equ') return <li>{mapEquation(e.val, e.class)}</li>;
    else if (e.highlight) return <li>{mapLine(e.val, e.highlight)}</li>;
    return <li className={e.class}>{e.val}</li>;
  }
  return <ul>{mapList(e.val.val)}</ul>;
});

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
    else if (e.type === 'equ') return mapEquation(e.val, e.class);

    console.log('Element type unrecognized and will be skipped',e);
    return null;
  })
};

export default toHtml;