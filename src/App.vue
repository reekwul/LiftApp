<template>
    <div class="wrapper">
        <v-shahta
            v-for="shaht in conf.shahts"
            :key="shaht+'shaht'"
            :lift="this.lift[shaht-1]"
            class="wrapper__shaht"
        />
        <div class="wrapper__btn">
            <v-button-lift
                v-for="btn in conf.buttonLift"
                :key="btn+'btn'"
                :floors="btn"
            >
            </v-button-lift>
        </div>
    </div>

</template>

<script>

import config from '@/config/config'
import VShahta from "@/components/v-shahta";
import VButtonLift from "@/components/v-button-lift";
import {mapActions, mapGetters} from 'vuex'


export default {
    name: 'App',
    components: {
        VButtonLift,
        VShahta
    },
    data() {
        return {
            conf: config,
        }
    },
    methods: {
        ...mapActions({
            add: 'floors/addfloor',
            del: 'floors/delfloor',
            set: 'lifts/setLifts'
        }),

    },
    computed: {
        ...mapGetters({
            floor: 'floors/floor',
            lift: 'lifts/lift'
        })
},
    mounted() {
        this.set()
    }
}
</script>

<style scoped lang="scss" >
.wrapper{
    margin-top: 50px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    &__btn{
        display: flex;
        flex-direction: column-reverse;
    }
    &__shaht{
        background: aliceblue;
    }
}

</style>
