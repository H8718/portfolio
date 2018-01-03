<template>
    <div
        class="tag"
        :style="{ background: color }"
    >
        <i :class="icon" style="color:white;"></i>
        {{ text }}
    </div>
</template>

<script>
export default {
    props: ["color", "icon", "text"]
};
</script>

<style lang="scss">
$colorMain: #f9aa39;
$colorLight: #fff;
$colorDark: #222;

.tag {
    width: 9vw;
    height: 2.3vw;
    border-radius: 3vw;
    box-shadow: 2px 2px 2px $colorDark;
    color: white;
}
</style>
