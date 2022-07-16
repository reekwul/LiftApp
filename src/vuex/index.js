import {createStore} from "vuex";

import {floors} from '@/vuex/floor.js'
import {lifts} from "@/vuex/lift";

export default createStore({
    modules: {
        floors:floors,
        lifts:lifts
    }
});
