class BookStorePage {
    constructor(page) {
        this.page = page;
    }

    async getBookDetails() {
        const title = await this.page.locator('tbody tr td:nth-child(2) a').textContent();
        const author = await this.page.locator('tbody tr td:nth-child(3)').textContent();
        const publisher = await this.page.locator('tbody tr td:nth-child(4)').textContent();

        return { title, author, publisher };
    }
}

module.exports = BookStorePage;



