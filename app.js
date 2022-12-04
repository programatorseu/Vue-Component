const app = Vue.createApp({
    data() {
        return {
            plans: ["Simple", "Medium", "Hard Core"]
        }
    }
})
.component('plan', {
    template: '#plan-template',
    props: {
        name: {type: String, required: true}
    }
})
.mount('#app')