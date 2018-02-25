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
    height: 2.5em;
    border-radius: 2em;
    box-shadow: 2px 2px 2px #333;
    color: white;
    display: flex;
    align-items: center;
    padding-right: 1em;
    padding-left: 0.9em;
    i {
        font-size: 160%;
    }
    span {
        text-align: initial;
        margin-left: 8px;
    }
}
</style>
