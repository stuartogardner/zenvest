<template>
  <div class="page-frame">
        <section>
            <div class='deal-title-div'>
                <div>
                    <img :src="companyLogoUrl">
                </div>
                <div class="title-inner-div">
                    <h1>{{companyName}}</h1>
                    <h2>{{dealName}}</h2>
                    <button class='update-deal' @click="editDeal">
                        <icon class="icon is-small is-left" name="pencil-square-o"></icon>
                        Update deal
                    </button>
                </div>
            </div>
            <div class="description-div">
                <h2>Deal Overview</h2>
                <p>{{description}}</p>
            </div>
            <div class="investor-div">
                <h2>Investors In This Deal</h2>
                <ul v-for="investor in investors">
                    <li>{{investor}}</li>
                </ul>
            </div>
        </section>

    <b-modal :active.sync="isEditDealActive" has-modal-card>
          <new-deal-modal @close="close"></new-deal-modal>
    </b-modal>

    </div>
</template>

<script>
import {getDealById} from '@/api/api';
import NewDealModal from '@/components/NewDealModal';

export default {
    components: {NewDealModal},
    data(){
        return{
            dealId: null,
            companyName: null,
            companyLogoUrl: null,
            dealName: null,
            category: null,
            description: null,
            investors: null,
            isEditDealActive: false,
        };
    },
    created(){
        console.log('2',this.$route.params[0])
        this.dealId = this.$route.params[0];
        getDealById(this.dealId)
        .then(deal => {
            console.log('the deal data is', deal);
            this.companyName = deal.companyName;
            this.companyLogoUrl = deal.companyLogoUrl;
            this.dealName = deal.dealName;
            this.category = deal.category;
            this.description = deal.description;
            this.investors = deal.investors.sort((investor1, investor2) => {
                return investor1.split(' ')[1] > investor2.split(' ')[1];
            });
        })
    },
    watch: {
    isEditDealActive(){
      if(this.isEditDealActive === false){
        console.log('it chnaged to false');
      getDealById(this.dealId)
      .then(deal => {
            console.log('the deal data is', deal);
            this.companyName = deal.companyName;
            this.companyLogoUrl = deal.companyLogoUrl;
            this.dealName = deal.dealName;
            this.category = deal.category;
            this.description = deal.description;
            this.investors = deal.investors.sort((investor1, investor2) => {
                return investor1.split(' ')[1] > investor2.split(' ')[1];
            });
        })
      }
    }
  },
    methods: {
        editDeal(){
            this.isEditDealActive = true;

        },
        close(){
            this.isEditDealActive =false;
        },
    },
    // props: ["deal"],
}
</script>

<style scoped>
.page-frame{
  width: 50%;
  margin: 90px auto 60px;
  min-width: 500px;
  background-color: white;
}

img {
    height: 100px;
}

.deal-title-div{
    display: flex;
    flex-direction: row;
}

.title-inner-div{
    text-align: left;
    margin-left: 25px;
    display: flex;
    flex-direction: column;
}

h1{
    font-size: 1.5em;
    font-weight: bold;
}

h2{
    font-weight: bold;
}

.description-div{
    text-align: left;
    margin-bottom: 30px;
    margin-top: 30px;
}

.investor-div{
    text-align: left;
}

.update-deal{
  background-color: #2986CE;
  color: white;
  font-weight: bold;
  border: none;
  font-size: 1em;
  height: 2em;
  border-radius: 4px;
  width: 150px;
  margin-top: 10px;
}

.update-deal:hover {
  background-color: #5290bf;
  cursor: pointer;
}

.icon{
  margin-left: 2px;
  margin-right: 2px;
  vertical-align: bottom;
}
</style>
