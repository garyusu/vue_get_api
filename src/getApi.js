const axios = require('axios');

export function getApi () {
    const url = 'http://localhost:8000/api/v1/invoices/1';
    const token = '1|YRz0fntuSgwBBW67Va32uT2ktg94Q8sngGtCIDsJ';
    axios.get(url, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })   
        .then( respense => {
            // 將回傳的內容丟到 標籤id為'data-container' 的文字區塊內
            // JSON.stringify(respense.data.(第一層).(第二層), [想顯示的Key])
            const dataContainer = document.getElementById('data-container');
            dataContainer.textContent = JSON.stringify(respense.data.data, ["customerId", "amount", "status"]); 
        })
        .catch( error => console.log('Error', error) );
}
