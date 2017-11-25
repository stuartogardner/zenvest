import axios from 'axios';

const getDeals = function(){
    return axios.get('http://localhost:3000/api/deals')
    .then(response => response.data)
}

const addDeal = function(dealInfo){
    console.log('fe 2')
    console.log(dealInfo)
    return axios.post('http://localhost:3000/api/deals', dealInfo)
    .then(response => response.data)
}

export {getDeals};
export {addDeal};