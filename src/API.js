// const API_URL = "https://openlibrary.org/";
import axios from "axios";
const SEARCH_URL = "https://openlibrary.org/search/authors.json?";/* Book or author */

export default axios.create({
  baseURL: 'https://openlibrary.org/'
});


// const apiSettings = {

//   fetchBooks : async() => {
//     const endpoint = `${API_URL}OL45883W`
//     return await (await fetch(endpoint)).json();
//   }


// };

// export default apiSettings;
