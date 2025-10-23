<template>
    <div>
        <DrillingChild />
    </div>
</template>

<script setup>
    import DrillingChild from './DrillingChild.vue';
    import {ref, provide} from 'vue';
    const count = ref(2);
    provide('count', count);
</script>

<style scoped>

</style>