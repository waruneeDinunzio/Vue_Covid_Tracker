<template>
    <div>
        <select @change="onChange()" 
                v-model="selected" 
                class="form-select mt-10 mb-12 block w-full border p-3 rounded">
            <option value="0">Select Country</option>
            <!--loop thoug data array name countries-->
            <option v-for="country in countries" v-bind:key="country.ID">
                {{country.Country}}
            </option>
           
        </select>

    </div>
</template>
<script>
export default {
    name: 'CountrySelect',
    props: ['countries'],
    data() {
        return {
            selected: 0
        }
    },
    methods: {
        onChange() {
            // console.log("you selected "+ this.selected)
            // console.log(this.countries.filter(country=> country.Country === this.selected))
            const country = this.countries.find((item) => item.Country === this.selected)
            //console.log(country)
            this.$emit('get-country', country)
        }
    }
}
</script>