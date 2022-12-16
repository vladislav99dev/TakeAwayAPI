const validateAllFields = (data) => {
  if (
    data.name &&
    data.location &&
    data.type &&
    data.foods &&
    data.deliveryCost
  )
    true;
};
const name = (name) => {
  return typeof name === "string";
};
const location = (location) => {
    
};
