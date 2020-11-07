import axios from "axios";

export default axios.create({
  baseURL: "https://ohunayogege.pythonanywhere.com/api/",
  headers: {
    "Content-type": "application/json"
  }
});