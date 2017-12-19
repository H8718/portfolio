<template>
    <section id="footer">
        <p>© {{ new Date().getFullYear() }} Markus Moilanen. All rights reserved.</p>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
$colorMain: #f9aa39;
$colorLight: #fff;
$colorDark: #222;

#footer {
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
