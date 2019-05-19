<template>
    <div id="app">
        <p>{{ message }}</p>
        <ng-element id="nge"
                    v-bind:increment="increment"
                    @doAdd="reverseMessage">
        </ng-element>
    </div>
</template>

<script>

    export default {
        name: 'app',
        data() {
            return {
                message: 'Hello Vue!',
                increment: 2,
                time: new Date()
            }
        },
        methods: {
            reverseMessage: function (e) {
                // eslint-disable-next-line log
                console.log(e);
                if (e.detail % 10 === 0) {
                    this.message = this.message.split('').reverse().join('');
                    this.customElement.time = new Date();
                }
            }
        },
        mounted() {
            this.customElement = document.getElementById('nge');
        }
    }

</script>
