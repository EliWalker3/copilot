document.addEventListener("alpine:init", () => {
    Alpine.data("apiData", () => ({
        posts: [],
        products: [],
        postsLoading: true,
        productsLoading: true,
        postsError: null,
        productsError: null,

        async fetchPosts() {
            this.postsLoading = true;
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
                if (!response.ok) throw new Error('Failed to fetch posts');
                this.posts = await response.json();
                this.postsError = null;
            } catch (error) {
                console.error("Error fetching posts:", error);
                this.postsError = error.message;
            } finally {
                this.postsLoading = false;
            }
        },

        async fetchProducts() {
            this.productsLoading = true;
            try {
                const response = await fetch("https://dummyjson.com/products?limit=6");
                if (!response.ok) throw new Error('Failed to fetch products');
                const data = await response.json();
                this.products = data.products;
                this.productsError = null;
            } catch (error) {
                console.error("Error fetching products:", error);
                this.productsError = error.message;
            } finally {
                this.productsLoading = false;
            }
        }
    }));
});