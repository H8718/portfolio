<template>
    <div id="footer">
        <p>© {{ new Date().getFullYear() }} Markus Moilanen. All rights reserved.</p>
    </div>
</template>

<style lang="scss">
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

#footer {
    background: $colorDark;
    color: white;
    @include flexbox(column, center, center);
    text-align: center;
    height: 6em;
    @media screen and (max-width: $sizeSm) {
        height: 60px;
    }
    padding: 20px;
    p {
        margin: 0;
    }
}
</style>
