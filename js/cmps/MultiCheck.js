export default {
    props: ['info'] ,
    template: `
        <section class="multi-check">
            <label>{{ info.label }}</label>
            
            <label v-for="opt in info.options"> {{opt}}
                <input
                    v-model="options"
                    @change="$emit('set-val', options)"
                    :value="opt"
                    type="checkbox" >
            
            </label>
        </section>`,
    data() {
        return {
            options: [],
        }
    },
}