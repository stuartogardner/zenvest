import axios from 'axios';

const getDeals = function(){
    return axios.get('http://localhost:3000/api/deals')
    .then(response => response.data)
}

const getDealById = function(id){
    console.log('entering the api file on the FE')
    console.log('the payload id is', id)

    return axios.get('http://localhost:3000/api/deals/'+id)
    .then(response => response.data)
}

const addDeal = function(dealInfo){
    console.log('fe 2')
    console.log(dealInfo)
    return axios.post('http://localhost:3000/api/deals', dealInfo)
    .then(response => response.data)
}

const updateDeal = function(updatedInfo, dealId){
    return axios.patch('http://localhost:3000/api/deals/'+dealId)
    .then(response => response.data)
}

export {getDeals};
export {addDeal};
export {getDealById};
export {updateDeal}