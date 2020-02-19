import axios from "axios";

export default {
  getEmployees: function() {
    const url = "https://randomuser.me/api/?results=200&nat=us";
    return axios.get(url);
  }
};
