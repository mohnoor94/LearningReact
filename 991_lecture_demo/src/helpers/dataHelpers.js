const average = list => list.reduce((prev, curr) => prev + curr) / list.length;

const median = list => {
  const mid = Math.floor(list.length / 2);
  const nums = [...list].sort((a, b) => a - b);
  return list.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

const mode = (list) => list.reduce(
  (a, b, i, arr) => (arr.filter(v => v === a).length >= arr.filter(v => v === b).length ? a : b), null);

const zip = (a, b) => a.map((e, i) => [e, b[i]]);

const buildObject = (labels, values, val) => zip(labels, values).map(pair => ({name: pair[0], v1: pair[1], v2: val}));

const generateData = (labels, values, measure) => {
  const val = measure === 'mean' ? average(values) : measure === 'median' ? median(values) : mode(values);

  return {
    val: val,
    items: buildObject(labels, values, val)
  };
};

export default generateData;