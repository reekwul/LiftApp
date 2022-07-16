export const floors = {
    state: () => ({
        floor: [],
    }),
    getters: {
        floor(state) {
            return state.floor;
        },

    },
    mutations: {
        addQueue(state, floor){
            state.floor.push(floor)
        },
        delQueue(state, floor){

            let index = state.floor.indexOf(floor);
            state.floor.splice(index,1)
        }
    },
    actions: {
        addfloor({commit}, floor){
            commit('addQueue',floor)
            console.log(floor)
        },
        delfloor({commit},floor){

            commit('delQueue',floor)
        }
    },
    namespaced: true
}