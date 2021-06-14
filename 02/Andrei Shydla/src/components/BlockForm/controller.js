export const checkValueConditionsName = (value) => {
  return value[0] !== " " &&
    value[0] !== "0" &&
    Number.isNaN(Number(value[0])) &&
    Boolean(value) &&
    value.length >= 3 &&
    value.length <= 30
    ? true
    : false;
};

export const checkValueConditionsEmail = (value) => {
  return value[0] !== " " &&
    value[0] !== "0" &&
    Boolean(value) &&
    value.length >= 7 &&
    value.length <= 30 &&
    value.indexOf("@") > -1 &&
    value.indexOf(".") > -1
    ? true
    : false;
};

export const checkValueConditionsPassword = (value) => {
  return value[0] !== " " &&
    value[0] !== "0" &&
    Boolean(value) &&
    value.length >= 8 &&
    value.length <= 30 &&
    value.split("").some(function (i) {
      return Number(!isNaN(Number(i)));
    }) &&
    value.split("").some(function (i) {
      return Number(isNaN(Number(i)));
    })
    ? true
    : false;
};
