<template>
    <div
        class="tag"
        :style="{ background: color }"
    >
        <i :class="icon" style="color:white;"></i>
        <span>{{ text }}</span>
    </div>
</template>

<script>
export default {
    props: ["color", "icon", "text"]
};
</script>

<style lang="scss">
.tag {
    min-width: 40px;
    width: auto;
    margin-right: 3%;
    height: 40px;
    border-radius: 30px;
    box-shadow: 2px 2px 2px #333;
    color: white;
    display: flex;
    align-items: center;
    //padding-right: 8%;
    padding-right: 20px;
    i {
        font-size: 150%;
        margin-left: 15px;
    }
    span {
        text-align: initial;
        margin-left: 10px;
        padding-right: 20px;
    }
}
</style>
