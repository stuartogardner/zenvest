<template>
  <div class="modal-card">
        <section class="modal-card-body">
            <div>
                <img :src="deal.companyLogoUrl">
                <h2>Company Name: {{deal.companyName}}</h2>
                <h2>Deal Title: {{deal.dealName}}</h2>
            </div>
            <div>
                <h3>Deal Overview</h3>
                <p>{{deal.description}}</p>
            </div>
            <div>
                <h3>Investors In This Deal</h3>
                <ul v-for="investor in deal.investors">
                    <li>{{investor}}</li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        };
    },
    props: ["deal"],
}
</script>

<style>

</style>
