<template>
    <div class="shaht">
        <div class="shaht__floor">
            <v-lift
                class="shaht__lift"
                :id="lift.name"
            >{{ lift.floor }}
            </v-lift>
        </div>
    </div>

</template>

<script>


import VLift from "@/components/v-lift";

export default {
    name: "v-shahta",
    components: {VLift},
    props: {
        lift: {
            type: Object,
            default() {
                return {};
            }
        },
    }
}
</script>

<style scoped lang="scss">
.shaht {
    display: flex;
    justify-content: center;
    border: 1px solid black;
    margin-right: 10px;

    &__floor {
        flex-direction: column-reverse;
        align-self: end;
        width: $width;
        height: $height;
    }

    &__lift {
        display: flex;
        justify-content: center;
    }
}
</style>