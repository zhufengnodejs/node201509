var util = {
    toQueryString: function (data) {
        var arr = [];
        for (var attr in data) {
            if (data.hasOwnProperty(attr)) {
                arr.push(encodeURIComponent(attr) + '='
                    + encodeURIComponent(data[attr]));
            }
        }
        return arr.join('&');
    }
}

function to(data){
    return Object.keys(data).map(function(key){
        return key + '='+ data[key];
    }).join('&');
}

console.log(to({name:'zfpx',age:6}));