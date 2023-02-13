export default {
    template: `
        <section>
            {{info.label}}
            <label v-for="n in info.max" >
                <input type="radio" :value="n" @change="reportVal" v-model="val">
                <span>{{n}} &nbsp;&nbsp;</span>
            </label>
        </section>
    `,
    props: ['info'],
    data() {
        return {
            val: '',
        }
    },
    methods: {
        reportVal() {
            this.$emit('setVal', this.val)
        }
    }
} 