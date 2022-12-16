
const location = {
    name:"",
    street:"somethinbg",
    unit: "23",
    something:22
}

const locationCheck = (location) => {
    let isValid = false;
    for (const value in location) {
        if(Boolean(location[value]) && location[value].trim() !== "" && typeof location[value] === 'string') {
            isValid = true;
        } else {
            isValid = false;
            break
        }
    }
    return isValid;
  };

  const returnValue = locationCheck(location);
  console.log(returnValue);