<template>
    <section id="contact" class="container-fluid">
        <h2>Contact me</h2>
        <div class="center-content">
            <p class="description">Here are my latest solo projects.</p>
        </div>
        <b-form
            id="contact-form"
            action="https://formspree.io/moilamar@protonmail.com"
            method="POST"
        >
            <b-input
                type="text"
                class="col-md-3 form-field"
                placeholder="Name"
                required
                v-model="name"
                name="name"
                @input="checkForm()"
            />
            <b-input
                type="text"
                class="col-md-3 form-field"
                placeholder="Contact method"
                required
                v-model="contactMethod"
                name="contact-method"
                @input="checkForm()"
            />
            <b-textarea
                rows="5"
                class="col-md-3 form-field"
                placeholder="Message"
                required
                v-model="message"
                name="message"
                @input="checkForm()"
            />
            <b-button
                type="submit"
                class="col-md-2 form-field"
                :variant="btnStatus"
            >Send</b-button>
        </b-form>
    </section>
</template>

<script>
export default {
    data() {
        return {
            name: null,
            contactMethod: null,
            message: null,
            btnStatus: "disabled"
        };
    },
    methods: {
        checkForm() {
            if (this.contactMethod && this.name && this.message) {
                this.btnStatus = "primary";
            } else this.btnStatus = "disabled";
        },
        submitForm() {}
    }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";

// LAITA VINOON

#contact {
    background: $colorMain;
    h2 {
        color: $colorLight;
    }
    #contact-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .form-field {
            margin-bottom: 2vh;
        }
        textarea {
            overflow: hidden;
        }
        .btn-disabled {
            border: 2px solid $colorLight;
            color: $colorLight;
            box-shadow: none;
            background: none;
        }
        .btn-primary {
            animation: readyBtn 1s;
            background: none;
            box-shadow: none;
        }
        @keyframes readyBtn {
            0% {
                border: 2px solid $colorLight;
                color: $colorLight;
            }
            100% {
                border: 2px solid orange;
                color: orange;
            }
        }
    }
}
</style>
