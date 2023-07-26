import axios from axios

const url = 'http://localhost:8000/api/v1/invoices?status[ne]=I';
var respense = axios.get(url)
                    .then( (respense) => console.log(respense) )
                    .catch( (error) => console,log(error) )