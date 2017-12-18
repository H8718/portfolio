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
            <b-nav-item href="#projects">
                <b-nav-text>My Works</b-nav-text>
            </b-nav-item>
            <b-nav-item href="#skills">
                <b-nav-text>Skills</b-nav-text>
            </b-nav-item>
            <b-nav-item href="#about">
                <b-nav-text>About me</b-nav-text>
            </b-nav-item>
            <b-nav-item href="#contact">
                <b-nav-text>Contact</b-nav-text>
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
$colorMain: #f9aa39;
$colorLight: #fff;
$colorDark: #222;

#navbar {
    height: 9vh;
    background-color: rgba(255, 255, 255, 0.95);
    z-index: 999;
    -webkit-box-shadow: 0 3px 6px 20 rgba(40, 40, 40, 0.3),
        0 6px 20px 0 rgba(40, 40, 40, 0.3);
    -moz-box-shadow: 0 3px 6px 0 rgba(40, 40, 40, 0.3),
        0 6px 20px 0 rgba(40, 40, 40, 0.3);
    box-shadow: 0 3px 8px 0 rgba(40, 40, 40, 0.3),
        0 6px 20px 0 rgba(40, 40, 40, 0.3);
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
        margin-top: 0.4vh;
        margin-left: 4vh;
    }
}
a.no-style:hover,
a.no-style:visited,
a.no-style:active,
a.no-style:link {
    color: #f9aa39 !important;
    text-decoration: none;
}
.center-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
</style>
