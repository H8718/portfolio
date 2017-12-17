<template>
    <b-navbar
        inverse
        collapseOnSelect
        sticky={true}
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
            <img src="../assets/m.jpg" alt=""/>
            <div>
                <span id="markus">Markus </span>
                <span id="moilanen">Moilanen</span>
            </div>
        </b-navbar-brand>
        <b-navbar-nav id="nav-list" class="center-content">
            <b-nav-item eventKey={1} href="#about">
                <b-nav-text>About Me</b-nav-text>
            </b-nav-item>
            <b-nav-item eventKey={2} href="#skills">
                <b-nav-text>Skills</b-nav-text>
            </b-nav-item>
            <b-nav-item eventKey={3} href="#projects">
                <b-nav-text>Projects</b-nav-text>
            </b-nav-item>
            <b-nav-item eventKey={4} href="#contact">
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
#navbar {
    height: 80px;
    background-color: rgba(255, 255, 255, 0.95);
    z-index: 999;
    -webkit-box-shadow: 0 3px 8px 0 rgba(40, 40, 40, 0.3),
        0 6px 20px 0 rgba(40, 40, 40, 0.3);
    -moz-box-shadow: 0 3px 8px 0 rgba(40, 40, 40, 0.3),
        0 6px 20px 0 rgba(40, 40, 40, 0.3);
    box-shadow: 0 3px 8px 0 rgba(40, 40, 40, 0.3),
        0 6px 20px 0 rgba(40, 40, 40, 0.3);
    #brand {
        /* border-top: none !important; */
        img {
            border-radius: 3px;
            width: 50px;
            height: 50px;
        }
        div {
            font-family: "Questrial", sans-serif;
            font-size: 150%;
            font-weight: 700;
            font-variant: small-caps;
            margin-left: 15px;
        }
        #markus {
            margin-right: 5px;
        }
        #moilanen {
            color: #f9aa39;
        }
    }
    #nav-list {
        margin-top: 4px;
        margin-left: 30px;
    }
}
.center-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
</style>
