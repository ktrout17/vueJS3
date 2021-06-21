<template>
  <div class="block" v-if="showBlock" @click="stopTimer">Click Me</div>
</template>

<script>
export default {
    props: ['delay'],
    data() {
        return {
            showBlock: false,
            timer: null,
            reactionTime: 0
        }
    },
    // once component is mounted, timer is started until user clicks the box & once it's clicked the timer is cleared
    mounted() {
        console.log('component mounted.');
        setTimeout(() => {
            this.showBlock = true;
            this.startTimer();
        }, this.delay);
    },
    methods: {
        startTimer() {
            this.timer = setInterval(() => {
                this.reactionTime += 10;
            }, 10);
        },
        stopTimer() {
            clearInterval(this.timer);
            this.$emit('end', this.reactionTime);
        }
    },
    updated() {
        console.log('component updated.');
    },
    unmounted() {
        console.log('unmounted.');
    },
}
</script>

<style>
    .block {
        width: 400px;
        border-radius: 20px;
        background: #0faf87;
        color: #fff;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;
    }
</style>