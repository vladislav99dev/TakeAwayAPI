const data = {
  name: "",
  location: "somethinbg",
  type: "23",
  something: 22,
  foods: "",
  deliveryCost: ""
};


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




const locationCheck = (location) => {
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

const returnValue = locationCheck(location);
console.log(returnValue);
