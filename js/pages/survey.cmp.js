import selectBox from '../cmps/select-box.cmp.js'
import textBox from '../cmps/text-box.cmp.js'
import linearScale from '../cmps/linear-scale.cmp.js'
import photoTuner from '../cmps/photo-tuner.cmp.js'
import multiCheck from '../cmps/multi-check.cmp.js'

import { surveyService } from '../services/survey.service.js'

export default {
    template: `
        <section v-if="survey">
            <h2 :style="{color: survey.color}">{{survey.title}}</h2>
            <form @submit.prevent="save">
                <div v-for="(cmp, idx) in survey.cmps">
                    <component 
                        :is="cmp.type"  
                        :info="cmp.info" 
                        @setVal="setAns($event, idx)" />
                </div>
                <button>Save</button>
            </form>
            <pre>{{answers}}</pre>
        </section>
    `,
    data() {
        return {
            survey: null,
            answers: []
        }
    },
    created() {
        surveyService.getSurvey()
            .then(survey => {
                this.survey = survey
                this.answers = new Array(this.survey.cmps.length)
            })

    },
    methods: {
        setAns(ans, idx) {
            console.log('Setting the answer: ', ans, 'idx:', idx);
            // this.answers[idx] = ans
            this.answers.splice(idx, 1, ans)

        },
        save() {
            console.log('Saving..');
        }
    },
    components: {
        selectBox,
        textBox,
        linearScale,
        photoTuner,
        multiCheck,
    }
};

