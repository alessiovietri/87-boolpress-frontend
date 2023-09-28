<script>
import axios from 'axios';

export default {
    data() {
        return {
            title: 'PostsPage',
            posts: [],
            currentPage: 1,
            lastPage: 1,
            loading: false
        }
    },
    created() {
        this.getPosts();
    },
    methods: {
        getPosts() {
            if (!this.loading) {
                this.loading = true;
                axios
                    .get('http://localhost:8000/api/posts', {
                        params: {
                            page: this.currentPage
                        }
                    })
                    .then(res => {
                        console.log(res);
                        this.posts = res.data.results.data;
                        this.currentPage = res.data.results.current_page;
                        this.lastPage = res.data.results.last_page;
                        this.loading = false;
                    });
            }
        },
        changePage(mode) {
            if (!this.loading) {
                switch (mode) {
                    case '+':
                        if (this.currentPage < this.lastPage) {
                            this.currentPage++;
                            this.getPosts();
                        }
                        break;

                    case '-':
                        if (this.currentPage > 1) {
                            this.currentPage--;
                            this.getPosts();
                        }
                        break;
                }
            }
        }
    }
}
</script>

<template>
    <div>
        <h1>
            {{ title }}
        </h1>
    </div>

    <section>
        <div class="posts-container">
            <div v-for="post in posts" :key="post.id">
                <div v-if="post.full_cover_img">
                    <img :src="post.full_cover_img">
                    <!-- <img :src="`${post.full_cover_img}`"> -->
                </div>
                <h3>
                    {{ post.title }}
                </h3>
                <div>
                    <router-link :to="{ name: 'blog-post', params: { slug: post.slug } }">
                        Leggi tutto
                    </router-link>
                </div>
            </div>
        </div>
        <div class="pagination-container">
            <div>
                <button @click="changePage('-')">
                    &laquo; Prev
                </button>
            </div>
            <div>
                <button @click="changePage('+')">
                    &raquo; Next
                </button>
            </div>
        </div>
    </section>
</template>

<style scoped>
    h2 {
        color: red;
    }
    .posts-container {
        display: flex;
        flex-wrap: wrap;
    }
    .posts-container > * {
        width: calc(100% / 3);
        border: 1px solid black;
        padding: 10px;
    }
    .pagination-container {
        display: flex;
        justify-content: center;
    }
    .pagination-container button {
        padding: 15px 25px;
        background-color: aqua;
        color: blue;
        display: inline-block;
        font-size: 20px;
        transition: .2s all ease-in-out;
    }
    .pagination-container button:hover {
        cursor: pointer;
        color: aqua;
        background-color: blue;
    }
</style>