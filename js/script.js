'use strict';

class URLParser{
    constructor(url){
        this.url = url;
    }

    get protocol(){
        const protocol = this.url.slice(0,this.url.indexOf('://')+1);
        return protocol;
    }
    get hostname(){
        const domen=this.url.slice(this.url.indexOf('://')+3,
            this.url.indexOf('com')+3);
        return domen;
    }
    get path(){
        const path=this.url.slice(
            this.url.indexOf('com/')+3,
            this.url.lastIndexOf('?')
        )
        return path;
    }
    get queryParams(){
        const firstParam= this.url.slice(this.url.indexOf('?')+1, this.url.indexOf('='));
        const lastParam= this.url.slice(this.url.indexOf('&')+1, this.url.lastIndexOf('='));
        const firstValue = this.url.slice(this.url.indexOf('=')+1, this.url.indexOf('&'));
        const lastValue = this.url.slice(this.url.lastIndexOf('=')+1);
        const param =new Map([
            [firstParam, firstValue],
            [lastParam, lastValue],
        ])

        return param;
    }
}
const parser = new URLParser("https://example.com/products/item?search=book&page=2");
console.log(parser.queryParams); // { search: "book", page: "2" }


