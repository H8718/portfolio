<template>
    <b-navbar
        inverse
        collapseOnSelect
        sticky
        type="light"
        toggleable="md"
        id="navbar"
        class="center-content"
    >
        <b-navbar-brand
            id="brand"
            href="#banner"
            class="center-content smoothScroll"
        >
            <img src="../assets/logo.png" alt=""/>
            <div>
                <span id="markus">Markus </span>
                <span id="moilanen">Moilanen</span>
            </div>
        </b-navbar-brand>
        <b-navbar-nav id="nav-list" class="center-content">
            <b-nav-item href="#about">
                <b-nav-text>About me</b-nav-text>
            </b-nav-item>
            <b-nav-item href="#projects">
                <b-nav-text>Projects</b-nav-text>
            </b-nav-item>
            <b-nav-item href="#contact">
                <b-nav-text>Contact me</b-nav-text>
            </b-nav-item>
        </b-navbar-nav>

    </b-navbar>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>

<style lang="scss">
$colorMain: #ffa726;
$colorLight: #fff;
$colorDark: #212121;

#navbar {
    height: 9vh;
    background-color: rgba(255, 255, 255, 0.95);
    z-index: 999;
    -webkit-box-shadow: 0 2px 4px 20 rgba(40, 40, 40, 0.2),
        0 3px 10px 0 rgba(40, 40, 40, 0.2);
    -moz-box-shadow: 0 2px 4px 0 rgba(40, 40, 40, 0.2),
        0 3px 10px 0 rgba(40, 40, 40, 0.2);
    box-shadow: 0 2px 4px 0 rgba(40, 40, 40, 0.2),
        0 3px 10px 0 rgba(40, 40, 40, 0.2);
    #brand {
        /* border-top: none !important; */
        img {
            border-radius: 0.2vw;
            width: 6vh;
            height: 6vh;
        }
        div {
            font-family: "Questrial", sans-serif;
            font-size: 150%;
            font-weight: 700;
            font-variant: small-caps;
            margin-left: 2vh;
        }
        #markus {
        }
        #moilanen {
            color: #f9aa39;
        }
    }
    #nav-list {
        margin-left: 4vh;
        .nav-item {
            height: 9vh;
            width: 6.5vw;
            display: flex;
            justify-content: center;
            align-items: center;
            a .navbar-text {
                color: #444;
            }
        }
        .nav-item:hover {
            a .navbar-text {
                color: $colorMain !important;
                text-decoration: none;
            }
        }
    }
}
</style>
