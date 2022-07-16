import config from "@/config/config";

const shahts = config.shahts;
export const lifts = {
    state: () => ({
        lift: [],
    }),
    getters: {
        lift(state) {
            return state.lift;
        },

    },
    mutations: {
        setlifts(state, shahts) {
            for (let i = 0; i < shahts; i++) {
                state.lift.push({
                    floor: 1,
                    state: true,
                    name: (i + 1) + 'shaht'
                })
            }
        }
    },
    actions: {
        setLifts({commit}) {
            commit('setlifts', shahts);
        }
    },
    namespaced: true
}