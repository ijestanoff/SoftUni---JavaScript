function extensibleObject () {
    const parent = {};
    const childObj = Object.create(parent);

    childObj.extend = function (obj) {
        let ObjectAsArray = Object.entries(obj);
        for (let [key,val] of ObjectAsArray) {
            if (typeof(val) == 'function') {
                parent[key] = val;
            } else {
                childObj[key] = val;
            }
        }
    }
    return childObj;
}