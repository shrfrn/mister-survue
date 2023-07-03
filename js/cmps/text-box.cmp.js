export default {
    props: ['info'],
    template: `
        <section>
            <datalist :id="datalistId">
                <option v-for="opt in info.opts" :value="opt" :key="opt" />
            </datalist>
            <label>
                {{info.label}}
                <input type="text" v-model="val" @change="reportVal" :list="datalistId"/>
            </label>  
        </section>
    `,
    data() {
        return {
            val: '',
            datalistId: _makeId()
        }
    },
    methods: {
        reportVal() {
            this.$emit('set-val', this.val)
        },
    },
}

function _makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}