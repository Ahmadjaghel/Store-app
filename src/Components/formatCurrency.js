const Format = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});
const fomatCurrency = (number) => {
  return Format.format(number);
};

export default fomatCurrency;
