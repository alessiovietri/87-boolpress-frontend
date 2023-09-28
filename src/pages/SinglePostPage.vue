<script>
import axios from 'axios';

export default {
    data() {
        return {
            post: null,
            loading: false
        }
    },
    created() {
        this.getPost();
    },
    methods: {
        getPost() {
            if (!this.loading) {
                this.loading = true;
                axios
                    .get(`http://localhost:8000/api/posts/${this.$route.params.slug}`)
                    .then(res => {
                        console.log(res);
                        this.post = res.data.results;
                        this.loading = false;
                    })
                    .catch(err => {
                        console.log(err);
                        if (err.response.status == 404) {
                            this.$router.push({ name: 'not-found' });
                        }
                    });
            }
        }
    }
}
</script>

<template>
    <template v-if="post">
        <div>
            <h1>
                {{ post.title }}
            </h1>
            <h2>
                Slug: {{ $route.params.slug }}
            </h2>
        </div>

        <section>
            <div v-if="post.full_cover_img">
                <img :src="post.full_cover_img">
                <!-- <img :src="`${post.full_cover_img}`"> -->
            </div>
            <p>
                {{ post.content }}
            </p>
        </section>
    </template>
</template>

<style scoped>
    h2 {
        color: red;
    }
</style>