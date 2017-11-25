<template>
  <div class="modal-card">
        <section class="modal-card-body">

          <div class="field">
           <form @submit.prevent="addDeal">

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
import {addDeal} from '@/api/api'
export default {
    data(){
        return{
            companyName: '',
            companyLogoUrl: '',
            dealName: '',
            categoryName: '',
            description: '',
            successMessage: null,
        };
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
        }
    },

}
</script>

<style>

</style>
