import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NODE_ENV === "production" ? '/api' : "http://localhost:3000/api"
  });

const getDeals = function(){
    return api.get('/deals')
    .then(response => response.data)
}

const getDealById = function(id){
    return api.get('/deals/'+id)
    .then(response => response.data)
}

const addDeal = function(dealInfo){
    return api.post('/deals', dealInfo)
    .then(response => response.data)
}

const updateDeal = function(updatedInfo, dealId){
    return api.patch('/deals/'+dealId, updatedInfo)
    .then(response => response.data)
}

const getInvestors = function(){
    return api.get('/investors')
    .then(response => response.data)
}

export {getDeals};
export {addDeal};
export {getDealById};
export {updateDeal};
export {getInvestors};
