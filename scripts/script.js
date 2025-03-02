document.addEventListener("alpine:init", () => {
  Alpine.data("apiData", () => ({
      posts: [],
      products: [],

      async fetchPosts() {
          try {
              const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
              this.posts = await response.json();
          } catch (error) {
              console.error("Error fetching posts:", error);
          }
      },

      async fetchProducts() {
          try {
              const response = await fetch("https://dummyjson.com/products?limit=6");
              const data = await response.json();
              this.products = data.products;
          } catch (error) {
              console.error("Error fetching products:", error);
          }
      }
  }));
});