export const floor = (value, precision) => {
  const pow = Math.pow(10, precision);
  return Math.floor(value * pow) / pow;
};
