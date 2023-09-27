<script>
export default {
    name: 'MainComponent',
    data() {
        return {
            title: 'Main Component'
        }
    }
}
</script>

<template>
    <main>
        <h2>
            {{ title }}
        </h2>
    </main>
</template>

<style scoped>
    h2 {
        color: red;
    }
</style>