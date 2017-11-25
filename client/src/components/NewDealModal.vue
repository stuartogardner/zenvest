<template>
  <div class="modal-card">
        <section class="modal-card-body">

          <div class="field">
           <form dealId === undefined ? @submit.prevent="addDeal" : @submit.prevent="updateDeal">

              <div class="field">
                <label class="label">Company name
                    <input class="input" type="text" required v-model="companyName" placeholder="What is the name of the company?">
                </label>
              </div>

              <div class="field">
                <label class="label">Company Logo
                    <input class="input" type="text" required v-model="companyLogoUrl" placeholder="Add a link to the company logo">
                </label>
              </div>

              <div class="field">
                <label class="label">Deal Name
                    <input class="input" type="text" required v-model="dealName" placeholder="Give this deal a name">
                </label>
              </div>

              <div class="field">
                <label class="label">Deal Category</label>
                 <b-field type="no-icon">
                    <b-select placeholder="Category" required v-model="categoryName">
                        <option value="Pre-Seed / Seed">Pre-Seed / Seed</option>
                        <option value="Series A">Series A</option>
                        <option value="Series B">Series B</option>
                        <option value="Series C">Series C</option>
                    </b-select>
                 </b-field>
              </div>

              <div class="field">
                <label class="label" >Deal Description
                    <b-input maxlength="600" type="textarea" required rows="6" cols="30" v-model="description" placeholder="Introduce the key points of the deal"></b-input>
                </label>
              </div>

                <button class="button is-success" type="submit"  name="button" style="font-weight: bold">Add Deal</button>
                <p v-if="successMessage!==null">{{successMessage}}</p>
              </form>
              <br>
            </div>

        </section>
    </div>
</template>

<script>
import {addDeal} from '@/api/api';
import {getDealById} from '@/api/api';
import {updateDeal} from '@/api/api';

export default {
    data(){
        return{
            companyName: '',
            companyLogoUrl: '',
            dealName: '',
            categoryName: '',
            description: '',
            successMessage: null,
            dealId: null,
        };
    },
    created(){
        console.log('this dollar route', this.$route.path);
        this.dealId = this.$route.params[0];
        console.log('this. dealID', this.dealId)
        getDealById(this.dealId)
        .then(deal => {
            this.companyName = deal.companyName;
            this.companyLogoUrl = deal.companyLogoUrl;
            this.dealName = deal.dealName;
            this.categoryName = deal.categoryName;
            this.description = deal.description;
        });
    },
    methods:{
        addDeal(){
            console.log('front end one');
            addDeal({
                companyName: this.companyName,
                companyLogoUrl: this.companyLogoUrl, 
                dealName: this.dealName,
                categoryName: this.categoryName,
                description: this.description})
            .then(response => {
                this.successMessage = `The deal, '${this.dealName}' , has been added successfully`;
                setTimeout(()=> {
                    this.$parent.close();
                }, 2500);
            })
        },
        updateDeal(){
            updateDeal({
                companyName: this.companyName,
                companyLogoUrl: this.companyLogoUrl, 
                dealName: this.dealName,
                categoryName: this.categoryName,
                description: this.description,
            }, this.dealId)
            .then(response => {
                this.successMessage = `The deal, '${this.dealName}' , has been updated successfully`;
                setTimeout(()=> {
                    this.$parent.close();
                }, 2500);
            })
        },
    },

}
</script>

<style>

</style>
