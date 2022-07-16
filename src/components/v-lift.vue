<template>
    <div
        class="lift">
        <div class="lift__box">
            <slot>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "v-lift",

}
</script>

<style scoped lang="scss">
.lift {
    box-sizing: border-box;
    margin: 10px;
    height: 130px;
    width: 80px;
    background: white;
    animation-duration: 1s;
    border: 2px solid black ;
    border-radius: 5px;

    &__box {
        text-align: center;
        font-weight: bold;
        margin-top: 10px;
        padding-top: 2px;
        background: white;
        height: 20px;
        width: 40px;
        border: 2px solid black ;
        border-radius: 7px;
    }
}
</style>