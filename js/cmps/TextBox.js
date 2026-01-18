export default {
    props: ['info'],
    template: `
        <section class="text-box">
            <label>
                <span>{{ info.label }}</span>
                <input 
                    v-model="val" 
                    @change="$emit('set-val', val)" 
                    :list="datalistId" type="text"/>
            </label>  

            <datalist :id="datalistId">
                <option v-for="opt in info.opts" :value="opt" :key="opt" />
            </datalist>
        </section>
    `,
    data() {
        return {
            val: '',
            datalistId: _makeId()
        }
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