const enterpriseInformation = {
    state: {
        userInfo: {},
        positionInfo: {}
    },
    mutations: {
        HAND_USER(state,user) {
			state.userInfo = user;
        },
        HAND_POSITION(state,position) {
            state.positionInfo = position;
        }
    },
    actions: {
        handUserAction ({commit}, user) {
		    commit('HAND_USER',user);
        },
        handPositionAction ({commit}, position) {
            commit('HAND_POSITION',position);
        }
    }
}

export default enterpriseInformation