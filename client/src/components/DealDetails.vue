<template>
  <div>
      <router-link to="/deals">Back to your deals</router-link>
        <section>
            <div>
                <img :src="companyLogoUrl">
                <h2>Company Name: {{companyName}}</h2>
                <h2>Deal Title: {{dealName}}</h2>
            </div>
            <div>
                <h3>Deal Overview</h3>
                <p>{{description}}</p>
            </div>
            <div>
                <h3>Investors In This Deal</h3>
                <ul v-for="investor in investors">
                    <li>{{investor}}</li>
                </ul>
            </div>
        </section>
        <button @click="editDeal">Edit this deal</button>

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
            this.investors = deal.investors;
        })
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

img {
    height: 100px;
}

</style>
