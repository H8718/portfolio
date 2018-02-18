<template>
    <footer>
        <p>© {{ new Date().getFullYear() }} Markus Moilanen. All rights reserved.</p>
    </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

footer {
    background: #222;
    color: white;
    @include flexbox(row, center, center);
    height: 90px;
    p {
        margin: 0;
    }
}
</style>
