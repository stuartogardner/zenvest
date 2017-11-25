<template>
  <div class="modal-card">
        <section class="modal-card-body">

          <div class="field">
            <form @submit.prevent="addDeal(); updateDeal()">
              <div class="field">
                <label class="label">Company name
                    <input class="input" type="text" required v-model="companyName" placeholder="What is the name of the company?">
                </label>
              </div>

              <div class="field">
                <label class="label">Company Logo
                    <input class="input" type="text" required v-model="companyLogoUrl" placeholder="Add a link to the company logo, e.g. https://company.com/logo.png">
                </label>
              </div>

              <div class="field">
                <label class="label">Deal Name
                    <input class="input" type="text" required v-model="dealName" placeholder="Give this deal a name">
                </label>
              </div>

              <div class="field">
                <label class="label">Deal Category</label>
                 <b-field type="no-icon" >
                    <b-select required v-model="categoryName" placeholder="Category" >
                        <option disabled value=""><span class="option">Please select one</span></option>
                        <option value="Pre-Seed / Seed"><span class="option">Pre-Seed / Seed</span></option>
                        <option value="Series A"><span class="option">Series A</span></option>
                        <option value="Series B"><span class="option">Series B</span></option>
                        <option value="Series C"><span class="option">Series C</span></option>
                    </b-select>
                 </b-field>
              </div>

              <div class="field">
                <label class="label" >Deal Description
                    <b-input maxlength="600" type="textarea" required rows="3" cols="30" v-model="description" placeholder="Introduce the key points of the deal"></b-input>
                </label>
              </div>

                <button v-if="dealId === undefined" class="button is-success" type="submit"  name="button" style="font-weight: bold">Add Deal</button>
                <button v-else class="button is-success" type="submit"  name="button" style="font-weight: bold">Update Deal</button>
                <br>
                <br>
                <p v-if="successMessage!==null" class="success-message">{{successMessage}}</p>

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
        if(this.dealId!==undefined){
            console.log('only triggers on the edit page')
            getDealById(this.dealId)
            .then(deal => {
                this.companyName = deal.companyName;
                this.companyLogoUrl = deal.companyLogoUrl;
                this.dealName = deal.dealName;
                this.categoryName = deal.categoryName;
                this.description = deal.description;
            });
        }
    },
    methods:{
        addDeal(){
            if(this.dealId === undefined){
                console.log('the wrong button was triggered')
    
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
        updateDeal(){
            if(this.dealId!==undefined){
                console.log('the right button was triggered')
                updateDeal({
                    companyName: this.companyName,
                    companyLogoUrl: this.companyLogoUrl, 
                    dealName: this.dealName,
                    categoryName: this.categoryName,
                    description: this.description,
                }, this.dealId)
                .then(response => {
                    this.successMessage = `The deal, '${this.dealName}' , has been updated successfully`;
                    console.log('the updated response is', response)
                    setTimeout(()=> {
                        this.$parent.close();
                    }, 2500);
                })
            }
        },
    },

}
</script>

<style scoped>

.success-message{
    color: lightseagreen;
}

.modal-card-body{
    border-radius: 8px;
    padding-bottom: 40px;
    height: 1500px;
}

.label{
    text-align: left;
}

.option{
    font-size: 0.5em;
}
</style>

<style>

::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:    lightgrey;
    font-size: 0.8em;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color:    lightgrey;
   opacity:  1;
   font-size: 0.8em;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
   color:    lightgrey;
   opacity:  1;
   font-size: 0.8em;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
   color:    lightgrey;
   font-size: 0.8em;
}
::-ms-input-placeholder { /* Microsoft Edge */
   color:    lightgrey;
   font-size: 0.8em;
}
</style>

