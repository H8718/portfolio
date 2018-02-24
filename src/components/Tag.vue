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
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

.tag {
    height: 35px;
    border-radius: 30px;
    box-shadow: 2px 2px 2px #333;
    color: white;
    display: flex;
    align-items: center;
    padding-right: 16px;
    padding-left: 12px;
    i {
        font-size: 150%;
    }
    span {
        text-align: initial;
        margin-left: 8px;
    }
}
@media screen and (min-width: $sizeSm) {
                .tag:nth-of-type(2) {
                    margin-left: 10px;
                }
                .tag:nth-of-type(3) {
                    margin-left: 10px;
                }
            }
</style>
