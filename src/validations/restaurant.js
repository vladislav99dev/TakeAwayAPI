const validateAllFields = (data) => {
    data?.name && data?.location && data?.type && data?.foods && data?.deliveryCost ? true : false
//   if (
//     data.name &&
//     data.location &&
//     data.type &&
//     data.foods &&
//     data.deliveryCost
//   )
//     true;
};
const name = (name) => {
  return typeof name === "string";
};
const location = (location) => {
    let isValid = false;
    for (const value in location) {
      if (
        Boolean(location[value]) &&
        location[value].trim() !== "" &&
        typeof location[value] === "string"
      ) {
        isValid = true;
      } else {
        isValid = false;
        break;
      }
    }
    return isValid;
  };
