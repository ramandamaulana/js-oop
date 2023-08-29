class Order {
    #items = [];
    #discount = 0;

    constructor() {
        // Private field: items yang menyimpan daftar produk dalam pesanan
        // Private field: discount untuk diskon yang diterapkan
    }

    addItem(item, price) {
        this.#items.push({ item, price });
    }

    applyDiscount(discountPercentage) {
        // Private method: Mengatur diskon dengan nilai yang diberikan
        this.#discount = discountPercentage;
    }

    #calculateTotal() {
        // Private method: Menghitung total harga pesanan dengan memperhitungkan diskon
        let total = 0;
        for (const item of this.#items) {
            total += item.price;
        }
        return total - (total * (this.#discount / 100));
    }

    checkout() {
        const total = this.#calculateTotal();
        console.log(`Total harga: $${total}`);
    }
}

const order = new Order();
order.addItem('Burger', 100);
order.addItem('Nasi', 100);
order.addItem('Fries', 50);
order.applyDiscount(33); // Diskon 10%
order.checkout(); // Output: Total harga: $13.5
console.log(order);