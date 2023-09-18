// export const ADD_CART = (item) => {
//   return {
//     type: "ADD_CART",
//     payload: item,
//   };
// };

// export const ADD_CART = (item) => {
//   return {
//     type: "ADD_CART",
//     payload: item,
//   };
// };
// export const ADD_CART = (item) => {
//   return {
//     type: "ADD_CART",
//     payload: item,
//   };
// };

// export const ADD_ITEM = (item) => {
//   return {
//     type: "ADD_ITEM",
//     payload: item,
//   };
// };

// export const ADD_ITEM = (item) => {
//   return {
//     type: "ADD_CART",
//     payload: item,
//   };
// };
export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};

export const DLT = (id) => {
  return {
    type: "RMV_CART",
    payload: id,
  };
};
