<template>
    <div
        class="modal-overlay"
        v-if="showModal"
        @click="disableModal()"
        :class="{ 'show-modal': showModal }"
    >
        <div
            class="modal"
            @click.stop
        >
            <div
                class="close-btn"
                @click="disableModal()"
            >X</div>
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
    methods: {
        disableModal() {
            this.showModal = false;
        },
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
@import "../styles/mixins.scss";

.modal-overlay {
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 9999;
    left: 0;
    top: 0;
    @include flexbox(row, center, center);
    pointer-events: none;
    overflow-y: auto !important;
    .modal {
        background: white;
        @include border-radius(3px);
        color: $colorDark;
        position: relative;
        width: auto;
        height: auto;
        display: block;
        .close-btn {
            font-size: 160%;
            position: absolute;
            right: 0.9em;
            top: 0.5em;
            font-weight: bold;
            cursor: pointer;
            @media screen and ($sizeSm) {

            }
        }

    }
}
.show-modal {
    pointer-events: initial;
    animation-name: show-overlay;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    .modal {
        animation-name: show-modal;
        animation-duration: 0.8s;
        animation-fill-mode: forwards;
        opacity: 1 !important;
        overflow: visible;
    }
    @keyframes show-modal {
        from {
            top: -100%;
        }
        to {
            top: 0;
        }
    }
}
@keyframes show-overlay {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>
