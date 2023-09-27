<script>
export default {
    name: 'FooterComponent',
    data() {
        return {
            title: 'Footer Component'
        }
    }
}
</script>

<template>
    <footer>
        <h2>
            {{ title }}
        </h2>
    </footer>
</template>

<style scoped>
    h2 {
        color: green;
    }
</style>