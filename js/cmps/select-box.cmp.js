export default {
    template: `
        <section>
            <span>
                {{info.label}}
                <select v-model="val" @change="reportVal">  
                    <option v-for="opt in info.opts">{{opt}}</option>
                </select>
            </span>  
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