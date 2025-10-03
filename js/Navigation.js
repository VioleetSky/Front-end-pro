'use strict';

class Navigation {
    constructor() {
        this.hrefList = Array.from(document.querySelectorAll('nav a'));
        for (const link of this.hrefList) {
            link.addEventListener('click', (event) => this.processingClick(event));
        }
        window.addEventListener('popstate', () => this.updateActiveItem());
        this.updateActiveItem();
    }

    normalizePath(path) {
        if (!path) return '/';
        let p = String(path);
        if (!p.startsWith('/')) p = '/' + p;
        p = p.replace(/\/+$/, '');
        return p === '' ? '/' : p;
    }

    updateActiveItem() {
        const current = this.normalizePath(location.pathname);
        for (const link of this.hrefList) {
            const linkPath = this.normalizePath(link.getAttribute('href'));
            if (linkPath === current) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    }

    processingClick(event) {
        event.preventDefault();
        const link = event.currentTarget;
        const newPath = this.normalizePath(link.getAttribute('href'));
        history.pushState(null, '', newPath);
        this.updateActiveItem();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
});
