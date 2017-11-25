<template>
  <div class="hello">
    <h1>Welcome to Zenvest</h1>
    <button @click="createNewDealModal">Create a new deal</button>
    <table>
      <tr>
        <th class='right-border'>Company</th>
        <th>Deal</th>
      </tr>
      <tr v-for="deal in deals" @click="showDetailsModal(deal)"> 
        <td class='right-border'><img :src="deal.companyLogoUrl"> {{deal.companyName}}</td>
        <td>{{deal.dealName}}</td>
      </tr>
    </table>

    <!-- the text form of the deals, to be removed -->
    <p>what is this {{deals}}</p>

    <b-modal :active.sync="isNewDealModalActive" has-modal-card>
          <new-deal-modal @close="close"></new-deal-modal>
    </b-modal>

    <b-modal :active.sync="isDetailsModalActive" has-modal-card>
          <deal-details-modal :deal="deal" @close="close"></deal-details-modal>
    </b-modal>

  </div>
</template>

<script>
import {getDeals} from '@/api/api';
import NewDealModal from '@/components/NewDealModal';
import DealDetailsModal from '@/components/DealDetailsModal';

export default {
  components: {NewDealModal, DealDetailsModal},
  data () {
    return {
      deal: null,
      deals: [],
      isNewDealModalActive: false,
      isDetailsModalActive: false,
    }
  },
  created(){
    getDeals()
    .then(response => this.deals = response);
  },
  methods: {
    createNewDealModal(){
      this.isNewDealModalActive = true;
    },
    close(){
      this.isNewDealModalActive =false;
    },
    showDetailsModal(deal){
      console.log('ive been clicked');
      this.isDetailsModalActive=true;
      this.deal = deal;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
  height: 50px;
  vertical-align: middle;
}

th {
  text-align: center;
  border-bottom: 1px solid lightgray;
  padding: 20px 0;
}

td {
  display: table-cell;
  text-align: left;
  vertical-align: top;
  border-bottom: 1px solid lightgray;
  line-height: 60px;
  padding: 0 20px;
}

.right-border{
  border-right: lightgrey solid 1px;
}

tr:not(:first-child):hover {
    background-color: lightgrey;
}
</style>
