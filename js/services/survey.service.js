export const surveyService = {
	getSurvey,
}

function getSurvey() {
	return Promise.resolve(survey)
}

const survey = {
	title: 'Robots Shopping',
    color: 'white',
	cmps: [
		{
			type: 'textBox',
			info: {
				label: 'Your full name:',
			},
		},
		{
			type: 'textBox',
			info: {
				label: 'Robot Type:',
				opts: ['CleanDude', 'FeedMeBob', 'VacuumGuy'],
			},
		},
		{
			type: 'multiCheck',
			info: {
				label: 'Features:',
				options: ['Responsive', 'Accurate', 'Resourceful', 'Flexible'],
			},
		},
		{
			type: 'selectBox',
			info: {
				label: 'How was it:',
				opts: ['Great', 'Fine', 'Crap', 'Worst Ever'],
			},
		},
		{
			type: 'linearScale',
			info: {
				label: 'Quality:',
				max: 10,
			},
		},
		{
			type: 'linearScale',
			info: {
				label: 'Quantity:',
				max: 5,
			},
		},
	],
}
