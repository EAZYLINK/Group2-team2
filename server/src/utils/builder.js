buildResponse = (msg, data, field = "data", others = {}) => {
    return {
      msg,
      [field]: data,
      ...others,
    };
  };

buildUser = (userObject)=>{
    const {password, __v,...data} = userObject
    return data
  }

  module.exports = {
    buildResponse,
    buildUser
  }