// Create Vue App & root app object
const app = Vue.createApp({
    // data, functions
    // template: '<h2> I am the template </h2>'

    // Create function then return object
    data() {
        return {
            url: 'http://www.google.com',
            showBooks: true,
            // title: 'The Final Empire',
            // author: 'Brandon Sanderson',
            // age: 45,
            // x: 0,
            // y: 0
            books: [
                { title: 'name of the wind', author: ' patrick', img: 'assets/1.jpg', isFav: true },
                { title: 'hey there', author: 'hey', img: 'assets/2.jpg', isFav: false },
                { title: 'awe', author: 'bra', img: 'assets/3.jpg', isFav: true }
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        // handleEvent(e, data) {
        //     console.log(e, e.type);
        //     if (data) {
        //         console.log(data);
        //     }
        // },
        // handleMousemove(e) {
        //     this.x = e.offsetX;
        //     this.y = e.offsetY;
        // }
        toggleIsFav(book) {
            book.isFav = !book.isFav;
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
});

// Control certain part of webpage / Where in the DOM to mount App
// Take app and mount it where there is an ID of #app
app.mount('#app');