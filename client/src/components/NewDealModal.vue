<template>
  <div class="modal-card">
        <section class="modal-card-body">

          <div class="field">
            <form @submit.prevent="addDeal(); updateDeal()">
              <div class="field">
                <label class="label">Company name <span class="required">*</span>
                    <input class="input" type="text" required v-model="companyName" placeholder="What is the name of the company?">
                </label>
              </div>

              <div class="field">
                <label class="label">Company Logo <span class="required">*</span>
                    <input class="input" type="text" required v-model="companyLogoUrl" placeholder="Add a link to the company logo, e.g. https://company.com/logo.png">
                </label>
              </div>

              <div class="field">
                <label class="label">Deal Name <span class="required">*</span>
                    <input class="input" type="text" required v-model="dealName" placeholder="Give this deal a name">
                </label>
              </div>

              <div class="field">
                <label class="label">Deal Category <span class="required">*</span></label>
                 <b-field type="no-icon" >
                    <b-select class='select' required v-model="categoryName" placeholder="Category">
                        <option disabled value=""><span class="option">Please select one</span></option>
                        <option value="Pre-Seed / Seed"><span class="option">Pre-Seed / Seed</span></option>
                        <option value="Series A"><span class="option">Series A</span></option>
                        <option value="Series B"><span class="option">Series B</span></option>
                        <option value="Series C"><span class="option">Series C</span></option>
                    </b-select>
                 </b-field>
              </div>

              <div class="field">
                <label class="label deal-desc">Deal Description <span class="required">*</span>
                    <b-input maxlength="600" type="textarea" required rows="3" cols="30" v-model="description" placeholder="Introduce the key points of the deal"></b-input>
                </label>
              </div>

<!-- Investors, not sure how they're supposed to be added - are we in an admin section or client section? -->

                <!-- <div class="field">
                    <label class="label">Participating Investors <span class="required">*</span><br>
                        <v-select required class="vue-select-form" multiple :closeOnSelect='false' v-model="participatingInvestors" :options="investors"></v-select><br>
                    </label>
                </div> -->

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
import {getInvestors} from '@/api/api';
import vSelect from "vue-select"


export default {
    components: {vSelect},
    data(){
        return{
            companyName: '',
            companyLogoUrl: '',
            dealName: '',
            categoryName: '',
            description: '',
            successMessage: null,
            dealId: null,
            // investors: [],
            // participatingInvestors: '',
        };
    },
    created(){
        this.dealId = this.$route.params[0];

        if(this.dealId!==undefined){
            getDealById(this.dealId)
            .then(deal => {
                this.companyName = deal.companyName;
                this.companyLogoUrl = deal.companyLogoUrl;
                this.dealName = deal.dealName;
                this.categoryName = deal.categoryName;
                this.description = deal.description;
            });
        };

// Not certain how the investors are supposed to be added -- is this the admin section or the client section?

        // getInvestors()
        // .then(investors => {
        //     investors.forEach((investor) => this.investors.push(`${investor.firstName} ${investor.lastName}`));
        // });

    },
    methods:{
        addDeal(){
            if(this.dealId === undefined){
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
                .catch(err => {
                    console.error(err);
                })
            }
        },
        updateDeal(){
            if(this.dealId!==undefined){
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
                .catch(err => {
                console.error(err);
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

.option {
    font-size: 0.5em;
}

.select {
    font-size: 0.8em;
    float: left;
}

.deal-desc{
    clear: both;
    padding-top: 15px;
}

.required{
    color: salmon;
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

