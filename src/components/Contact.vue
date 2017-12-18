<template>
    <section id="contact" class="container-fluid">
        <h2>Contact me</h2>
        <b-form
            id="contact-form"
            @submit.prevent="submitForm()"
        >
            <b-input
                type="text"
                class="col-md-3 form-field"
                placeholder="Name"
                required
                v-model="name"
                @input="checkForm()"
            />
            <b-input
                type="text"
                class="col-md-3 form-field"
                placeholder="Contact method"
                required
                v-model="contactMethod"
                @input="checkForm()"
            />
            <b-textarea
                rows="5"
                class="col-md-3 form-field"
                placeholder="Message"
                required
                v-model="message"
                @input="checkForm()"
            />
            <b-button
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
$colorMain: #f9aa39;
$colorLight: #fff;
$colorDark: #222;

#contact {
    background: $colorDark;
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
            border: none;
            box-shadow: none;
        }
        .btn-primary {
            background-color: $colorMain;
            border: none;
            box-shadow: none;
        }
    }
}
</style>
