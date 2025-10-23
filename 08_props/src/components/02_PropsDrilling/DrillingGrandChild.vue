<template>
    <div>
        <h3>GrandChild: {{ injectedCount }}</h3>
    </div>
</template>

<script setup>
    import {inject} from 'vue';

    const injectedCount = inject('count');
</script>

<style scoped>

</style>