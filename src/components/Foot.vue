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
    height: 12vh;
    background: #222;
    color: white;
    @include flexbox(row, center, center);
    p {
        margin: 0;
        padding: 0 7vw 0 7vw;
    }
}
</style>
