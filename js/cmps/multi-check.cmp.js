export default {
    props: ['info'] ,
    template: `
    <label> {{info.label}}
        <label v-for="opt in info.options"> {{opt}}
            <input 
                type="checkbox"
                @change="reportVal"
                :value="opt"
                v-model="options">
            
        </label>
    </label>
    `,
    data() {
        return {
            options: [],
        }
    },
    methods: {
        reportVal(){
            this.$emit('setVal', this.options)
        }
    }
}