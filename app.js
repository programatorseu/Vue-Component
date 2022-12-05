let PlanComponent = {
    template: '#plan-template',
    props: {
        name: {type: String, required: true},
        selected: {type: Boolean, default: true}
    },
    methods: {
        select() {
            this.selected   = true
            this.$emit('select', this.name)
        }
    }
}
let PlanPickerComponent = {
    components: {plan: PlanComponent},
    template: '#plan-picker-template',
    data() {
        return {
            plans: ["beginer", "Medium", "Hard Core"],
            selectedPlan:null
        }
    },
    methods: {
        selectPlan(plan) {
            this.selectedPlan = plan
        }
    }
}
const app = Vue.createApp({
    components: {PlanPicker: PlanPickerComponent}
})
.mount('#app')