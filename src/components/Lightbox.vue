<template>
    <div
        class="modal-overlay"
        v-if="showModal"
        @click="disableModal()"
    >
        <div
            class="modal"
            @click.stop
        >
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showModal: false
        };
    },
    mounted() {
        console.log("mounted");
        var test = { template: "<div></div>" };
    },
    methods: {
        disableModal() {
            this.showModal = false;
        }
    },
    props: ["enabled", "childComponent"],
    watch: {
        enabled: function() {
            this.showModal = true;
        }
    }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";

.modal-overlay {
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 9999;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .modal {
        background: white;
        border-radius: 3px;
        color: $colorDark;
        position: relative;
        width: auto;
        height: auto;
        display: block;
    }
}
</style>
