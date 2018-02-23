<template>
    <footer>
        <span>© {{ new Date().getFullYear() }} Markus Moilanen. All rights reserved.</span>
    </footer>
</template>

<style lang="scss">
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

footer {
    background: $colorDark;
    color: white;
    @include flexbox(row, center, center);
    text-align: center;
    height: 90px;
}
</style>
