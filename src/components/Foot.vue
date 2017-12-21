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

footer {
    height: 12vh;
    background: #222;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        margin: 0;
    }
}
</style>
