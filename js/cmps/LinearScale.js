export default {
    template: `
        <section class="linear-scale">
            <span>{{info.label}}</span>
            <label v-for="n in info.max" >
                <input 
                    :value="n" 
                    @change="$emit('set-val', val)" 
                    v-model="val"
                    type="radio">
                <span>{{ n }}</span>
            </label>
        </section>
    `,
    props: ['info'],
    data() {
        return {
            val: '',
        }
    },
} 