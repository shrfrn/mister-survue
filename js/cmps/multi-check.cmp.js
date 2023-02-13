export default {
    template:`
    <section>
        <label>
            {{info.label}}
            <label v-for="opt in info.opts">
                <input @change="reportVal" type="checkbox" :value="opt" v-model="opts">
                {{opt}}
            </label>
        </label>
    </section>
    `,
    props: ['info'],
    data(){
        return {
            opts: []
        }
    },
    methods:{
        reportVal(){
            this.$emit('setVal', this.opts)
        }
    }
}