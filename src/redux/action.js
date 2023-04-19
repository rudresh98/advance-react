const inc_Num = () => {
  return {
    type: "INCREMENT",
  };
};
const dec_Num = () => {
  return {
    type: "DECREMENT",
  };
};
module.exports = { inc_Num, dec_Num };
