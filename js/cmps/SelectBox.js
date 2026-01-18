export default {
    template: `
        <section class="select-box">
            <label>
                <span>{{info.label}}</span>
                <select v-model="val" @change="$emit('set-val', val)">  
                    <option v-for="opt in info.opts">{{opt}}</option>
                </select>
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