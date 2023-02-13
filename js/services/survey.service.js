'use strict'

export const surveyService = {
    getSurvey
}

function getSurvey() {
    return Promise.resolve(survey);
}

const survey =
{
    title: 'Robots Shopping',
    cmps: [
        {
            type: 'textBox',
            info: {
                label: 'Your full name:'
            }
        },
        {
            type: 'textBox',
            info: {
                label: 'Robot Type:',
                opts: ['CleanDude', 'FeedMeBob', 'VacuumGuy']
            }
        },
        {
            type: 'multiCheck',
            info: {
                label: 'Features:',
                opts: ['Responsive', 'Accurate', 'Resourceful', 'Flexible']
            }
        },
        {
            type: 'selectBox',
            info: {
                label: 'How was it:',
                opts: ['Great', 'Fine', 'Crap', 'Worst Ever']
            }
        },

        {
            type: 'linearScale',
            info: {
                label: 'Quality:',
                max: 10
            }
        },
        {
            type: 'photoTuner',
            info: {
                label: 'Tune your photo:',
                // imgUrl: 'https://res.cloudinary.com/daahi2yaz/image/upload/v1557175588/Robots/Crypto-robots.jpg'
                imgUrl: 'https://res.cloudinary.com/daahi2yaz/image/upload/v1547889015/Robots/spotmini-975475584.jpg'
                // imgUrl: 'https://res.cloudinary.com/daahi2yaz/image/upload/v1555521791/Robots/maxresdefault.jpg'
                // imgUrl: 'https://res.cloudinary.com/demo/image/upload/lady.jpg'
            }
        },

    ]
}