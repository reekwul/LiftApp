<template>
    <div class="btn_lift">
        <button
            class="btn_lift__btn"
            @click="startLift()"
        >
            {{ floors }}
        </button>
    </div>

</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    name: "v-button-lift",
    props: {
        floors: {
            type: Number,
            default() {
                return 0
            }
        }
    },
    methods: {
        ...mapActions({
            add: 'floors/addfloor',
            del: 'floors/delfloor'
        }),

        async startLift() {

            this.add(this.floors);

            let freedom = this.lift.findIndex(el => el.state === true)

            if (freedom !== -1) {

                this.lift[freedom].state = false;

                while (this.floor.length > 0) {

                    let res = this.floor[0] > this.lift[freedom].floor ?
                        this.floor[0] - this.lift[freedom].floor : this.lift[freedom].floor - this.floor[0];

                    this.lift[freedom].floor = this.floor[0];

                    this.del(this.floor[0]);


                    let i = await new Promise((resolve) => {
                        let lift = document.getElementById(this.lift[freedom].name);
                        lift.style.background = 'rgba(0, 255, 40, 1)';
                        lift.style.transition = `transform ${res}s`;
                        lift.style.transform = `translate3d(0px, -${150 * (this.lift[freedom].floor - 1)}px,0)`;


                        setTimeout(() => {

                            let freedomLiftColor1 = setInterval(() => lift.style.background = ' rgba(0, 255, 40, 0.1)', 500)
                            let freedomLiftColor2 = setInterval(() => lift.style.background = ' rgba(0, 255, 40, 0.7)', 1000)

                            setTimeout(() => {
                                clearInterval(freedomLiftColor1);
                                clearInterval(freedomLiftColor2);
                                lift.style.background = 'white';
                                resolve(this.floor.length)
                            }, 3000)

                        }, 1000 * res)
                    });
                    if (!i) {
                        this.lift[freedom].state = true;
                    }
                }
            }
        }
    },
    computed: {
        ...mapGetters({
            floor: 'floors/floor',
            lift: 'lifts/lift'
        }),
    },
}
</script>

<style scoped lang="scss">
.btn_lift {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: $width;
    height: $height;

    &__btn{
        border: 2px solid rosybrown;
        font-size: 16px;
        font-weight: bold;
    }
}
</style>