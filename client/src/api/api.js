import axios from 'axios';

const getDeals = function(){
    return axios.get('http://localhost:3000/api/deals')
    .then(response => response.data)
}

const getDealById = function(id){
    return axios.get('http://localhost:3000/api/deals/'+id)
    .then(response => response.data)
}

const addDeal = function(dealInfo){
    return axios.post('http://localhost:3000/api/deals', dealInfo)
    .then(response => response.data)
}

const updateDeal = function(updatedInfo, dealId){
    return axios.patch('http://localhost:3000/api/deals/'+dealId, updatedInfo)
    .then(response => response.data)
}

const getInvestors = function(){
    return axios.get('http://localhost:3000/api/investors')
    .then(response => response.data)
}

export {getDeals};
export {addDeal};
export {getDealById};
export {updateDeal};
export {getInvestors};
