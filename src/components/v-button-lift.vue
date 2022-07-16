<template>
    <div class="btn_lift">
        <button
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
            let freedom = this.lift.findIndex(el => el.state === true)
            this.add(this.floors);
            if (freedom !== -1) {

                this.lift[freedom].state = false;
                console.log(this.lift[freedom])

                while (this.floor.length > 0) {
                          let res = this.floor[freedom] > this.lift[freedom].floor ? this.floor[freedom] - this.lift[freedom].floor: this.lift[freedom].floor - this.floor[0]
                            console.log(res)
                    let i = await new Promise((resolve) => {
                        setTimeout(() => {

                            setTimeout(() => {
                                console.log(`open ${this.floor[freedom]}`);

                                this.lift[freedom].floor = this.floor[freedom];

                                this.del(this.floor[freedom]);

                                console.log(this.floor)
                                resolve(this.floor.length)
                            }, 3000)

                        }, 1000 * res)
                    });
                    if (!i) {
                        this.lift[freedom].state = true;
                        console.log(this.lift[freedom])
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
    border: 2px solid rosybrown;
}
</style>