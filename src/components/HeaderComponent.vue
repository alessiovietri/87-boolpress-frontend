<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {
            title: 'Header Component'
        }
    }
}
</script>

<template>
    <header>
        <h2>
            {{ title }}
        </h2>

        <nav>
            <ul>
                <li>
                    <router-link :to="{ name: 'home' }">
                        Home
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'about' }">
                        Chi siamo
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'blog' }">
                        Blog
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
    h2 {
        color: blue;
    }
</style>