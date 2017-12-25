<template>
    <b-navbar
        sticky
        type="light"
        toggleable="md"
        id="navbar"
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

        <div
            id="nav-collapse-btn"
            v-b-toggle.collapse
        >
            <i class="fa fa-bars" />
        </div>

        <b-navbar-nav id="nav-list" class="center-content">
            <b-nav-item href="#about">About me</b-nav-item>
            <b-nav-item href="#projects">Projects</b-nav-item>
            <b-nav-item href="#contact">Contact me</b-nav-item>
        </b-navbar-nav>

        <b-collapse id="collapse">
            <b-nav-item href="#about">About me</b-nav-item>
            <b-nav-item href="#projects">Projects</b-nav-item>
            <b-nav-item href="#contact">Contact me</b-nav-item>
        </b-collapse>

    </b-navbar>
</template>

<script>
export default {
    data() {
        return {
            hover: 0
        };
    }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";

#navbar {
    height: 8vh;
    background-color: rgba(255, 255, 255, 0.95);
    z-index: 999;
    -webkit-box-shadow: 0 2px 4px 20 rgba(40, 40, 40, 0.2),
        0 3px 10px 0 rgba(40, 40, 40, 0.2);
    -moz-box-shadow: 0 2px 4px 0 rgba(40, 40, 40, 0.2),
        0 3px 10px 0 rgba(40, 40, 40, 0.2);
    box-shadow: 0 2px 4px 0 rgba(40, 40, 40, 0.2),
        0 3px 10px 0 rgba(40, 40, 40, 0.2);
    #brand {
        img {
            border-radius: 0.2vw;
            width: 6vh;
            height: 6vh;
        }
        div {
            font-family: $fontBrand;
            font-size: 150%;
            font-weight: 700;
            font-variant: small-caps;
            margin-left: 1vh;
        }
        #markus {
        }
        #moilanen {
            color: $colorSecondary;
        }
    }
    #nav-collapse-btn {
        font-size: 150%;
        color: #444;
        opacity: 0;
    }
    #nav-list {
        margin-left: 2vh;
        .nav-item {
            height: 9vh;
            width: 14vh;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            a {
                color: #555;
                font-size: 115%;
                font-weight: bold;
                font-family: $fontBrand;
                transition: color 0.7s;
            }
        }
        .nav-item:hover {
            a {
                color: $colorMain;
            }
        }
    }
}
</style>
