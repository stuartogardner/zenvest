<template>
  <div class="page-frame">
    <h1 class="welcome">Welcome to Zenvest</h1>
    <p class='intro-text'>Below, you can view all of your deals. Click on a deal to see more information, or click the <span style="font-style: italic">'Create a new deal'</span> button to add a new deal.</p>
    <button class='new-deal' @click="createNewDealModal">
      <icon class="icon is-small is-left" name="plus-square"></icon>
      Create a new deal
    </button>
    <table class='main-table'>
      <tr>
        <th class='right-border'>Company</th>
        <th>Deal</th>
      </tr>
      <tr v-for="deal in deals" @click="showDetails(deal)"> 
        <td class='cell1 right-border capitalise'><img :src="deal.companyLogoUrl"> &nbsp{{deal.companyName}}</td>
        <td class='cell2 capitalise'>{{deal.dealName}}</td>
      </tr>
    </table>

    <b-modal :active.sync="isNewDealModalActive" has-modal-card>
          <new-deal-modal @close="close"></new-deal-modal>
    </b-modal>

  </div>
</template>

<script>
import {getDeals} from '@/api/api';
import {getDealById} from '@/api/api';
import NewDealModal from '@/components/NewDealModal';
import DealDetails from '@/components/DealDetails';

export default {
  components: {NewDealModal, DealDetails},
  data () {
    return {
      deal: null,
      deals: [],
      isNewDealModalActive: false,
    }
  },
  created(){
    getDeals()
    .then(response => this.deals = response);
  },
  watch: {
    isNewDealModalActive(){
      if(this.isNewDealModalActive === false){
      getDeals()
      .then(response => this.deals = response);
      }
    }
  },
  methods: {
    createNewDealModal(){
      this.isNewDealModalActive = true;
    },
    close(){
      this.isNewDealModalActive =false;
      getDeals()
      .then(response => this.deals = response);
    },
    showDetails(deal){ 
      const dealId = deal._id;
      getDealById(dealId)
      .then(deal => this.$router.push("/deal/" + deal._id))
    }
  },
}
</script>

<style scoped>
.page-frame{
  width: 50%;
  margin: 90px auto 60px;
  min-width: 500px;;
}

.intro-text{
  width: 80%;
  margin: 20px auto;
  text-align: left;
}

.main-table{
  margin: 0 auto;
}

.welcome{
  font-size: 2.5em;
  font-weight: bold;
}

h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

img {
  height: 40px;
  vertical-align: middle;
}

th {
  text-align: left;
  border-bottom: 1px solid lightgray;
  padding: 15px 0;
  padding-left: 15px;
}

td {
  display: table-cell;
  text-align: left;
  vertical-align: top;
  border-bottom: 1px solid lightgray;
  padding: 20px 20px;
}

.cell1{
    font-weight: bold;
    width: 50%;
    min-width: 250px;
}

.right-border{
  border-right: lightgrey solid 1px;
}

tr:not(:first-child):hover {
    background-color: #f4f4f4;
    cursor: pointer;
}

.new-deal{
  background-color: #2986CE;
  color: white;
  font-weight: bold;
  border: none;
  font-size: 1em;
  height: 2em;
  border-radius: 4px;
  margin-bottom: 40px;
  width: 190px;
}

.new-deal:hover {
  background-color: #5290bf;
  cursor: pointer;
}

.icon{
  margin-left: 2px;
  margin-right: 2px;
  vertical-align: bottom;
}
.capitalise{
  text-transform: capitalize;
}
</style>
