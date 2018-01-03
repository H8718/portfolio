<template>
    <section
        id="contact"
        class="container-fluid"
    >
        <h2>Send me a message</h2>
        <div class="horizontal-center"><div class="underline"></div></div>
        <div class="center-content">
            <p class="description">Send me a message using this form. I'll probably answer back.</p>
        </div>
        <div
            class="alert-message col-md-10 offset-1"
            v-if="alert"
        >
            <p>{{ alert }}</p>
        </div>
        <b-form
            id="contact-form"
            method="POST"
            @submit.prevent="submitForm()"
            :class="{ 'hide': success }"
        >
            <b-input
                type="text"
                class="col-lg-3 col-md-5 form-field"
                placeholder="Name"
                required
                v-model="name"
                name="name"
                @input="checkForm()"
            />
            <b-input
                type="text"
                class="col-lg-3 col-md-5 form-field"
                :class="{ 'highlight': success === false }"
                placeholder="Email"
                required
                v-model="email"
                name="email"
                @input="checkForm()"
            />
            <b-textarea
                rows="5"
                class="col-lg-3 col-md-5 form-field"
                placeholder="Message"
                required
                v-model="message"
                name="message"
                @input="checkForm()"
            />
            <b-button
                type="submit"
                class="col-lg-2 col-md-4 form-field"
                id="submit-btn"
                :class="{ 'btn-ready': btnReady }"
            >Send</b-button>
        </b-form>

    </section>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            name: null,
            email: null,
            message: null,
            btnReady: false,
            success: null,
            alert: null
        };
    },
    methods: {
        checkForm() {
            if (this.email && this.name && this.message) {
                this.btnReady = true;
            } else this.btnReady = false;
        },
        submitForm() {
            axios.post('https://formspree.io/moilamar@protonmail.com', {
                name: this.name,
                email: this.email,
                message: this.message
            })
            .then(function() {
                this.success = true;
                this.showMessage("Thank you. I will be in touch!");
            }.bind(this))
            .catch(function() {
                this.success = false;
                this.showMessage(`Something went wrong.
                Please make sure the email is correct, or
                contact me directly at Moilamar@protonmail.com.`);
            }.bind(this));
        },
        showMessage(msg) {
            this.alert = msg;
        }
    }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";

// LAITA VINOON

#contact {
    background: $colorMain;
    padding-top: 0 !important;
    margin-top: 0 !important;
    h2 {
        color: $colorLighter;
    }
    .underline {
        border-color: $colorLighter;
    }
    .center-content {
        .description {
            color: $colorLight;
            margin-top: 4vh;
        }
    }
    #contact-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 2vw;
        transition: opacity 0.7s, height 2.7s;
        .form-field {
            margin-bottom: 2.2vh;
        }
        textarea {
            overflow: hidden;
        }
        #submit-btn {
            border: 2px solid $colorLighter;
            color: $colorLight;
            box-shadow: none;
            background: none;
            transition: border-color 1s, color 1s;
        }
        .btn-ready {
            border-color: $colorSecondary !important;
            color: $colorSecondary !important;
        }
        .highlight {
            // highlight
        }
    }
    .hide {
        opacity: 0;
        height: 0;
    }
    .alert-message {
        text-align: center;
        font-size: 150%;
        color: white;
        transition: opacity 2s;
        margin-top: 1.5vh;
    }
}
#contact:before {
    background: inherit;
    content: '';
    display: inline-block;
    height: 10vh;
    width: 104.9vw;
    position: relative;
    transform: skewY(1deg);
    transform-origin: 100%;
    margin-left: -10vw;
}
</style>
