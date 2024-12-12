export class Loader {
    static startLoading() {
        const loader = document.createElement('div');
        loader.id = this.selector;
        loader.innerText = 'Loading...';
        document.body.appendChild(loader);
    }
    static stopLoading() {
        const loader = document.getElementById(this.selector);
        loader === null || loader === void 0 ? void 0 : loader.remove();
    }
}
Loader.selector = 'loader';
//# sourceMappingURL=Loader.js.map