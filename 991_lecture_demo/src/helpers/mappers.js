import React from 'react';

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

const mapList = (element) => element.map(e => typeof (e.val) === 'string' ? <li>{e.val}</li> : <ul>{mapList(e.val.val)}</ul>);

const toHtml = (elements) => {
  return elements.map(e => {
    if (e.type.startsWith('h')) return mapHeader(e.type, e.val);
    else if (e.type === 'ul') return <ul>{mapList(e.val)}</ul>;
  })
};

export default toHtml;