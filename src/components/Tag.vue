<template>
    <div
        class="tag"
        :style="{ background: color  }"
    >
        <i :class="icon"></i>
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
    height: 3vw;
    border-radius: 3vw;
}
</style>
