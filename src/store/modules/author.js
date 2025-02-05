const state = () => ({
	skills: [
		{ percentage: 95, title: "C | C++" },
		{ percentage: 100, title: "C#" },
		{ percentage: 80, title: "Python" },
		{ percentage: 95, title: "JavaScript" },
		{ percentage: 90, title: "Lua" },
	],
});

const getters = {
	getSkills(state) {
		return state.skills;
	},
};

const mutations = {
	SET_SKILLS(state, skills) {
		state.skills = skills;
	},
};

const actions = {};

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions,
};
