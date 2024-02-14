(function () {
    String.prototype.ensureStart = function (str) {
        if (this.startsWith(str)) {
            return this.toString();
        }
        return str + this;
    }

    String.prototype.ensureEnd = function (str) {
        if (this.endsWith(str)) {
            return this.toString();
        }
        return this + str;
    }

    String.prototype.isEmpty = function () {
        return !this.toString();
    }

    String.prototype.truncate = function (n) {
        if (n < 4) {
            return '.'.repeat(n);
        }
        if (this.length <= n) {
            return this.toString();
        }
        if (this.includes(' ')) {
            let arr = [];
            let words = this.split(' ');
            for (let word of words) {
                if (arr.join(' ').length + word.length + 3 <=n) {
                    arr.push(word);
                } else break;
            };
            return arr.join(' ') + '...';
        }
        return this.slice(0, n-3) + '...';
    }

    String.format = function (str, ...params) {
        for (let i=0; i<params.length; i++) {
            str = str.replace(`{${i}}`,params[i]);
        }
        return str;
    }

})();

let meStr = 'Hello Peter';
console.log(meStr.ensureStart('Hel'));