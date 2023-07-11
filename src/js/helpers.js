const TIMEOUT_SEC = 10000;

export const timeout = function (s) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(
                new Error(`Request took too long! Timeout after ${s} second`)
            );
        }, s * 1000);
    });
};

export const AJAX = async function (url) {
    try {
        // const fetchPro = uploadData
        //     ? fetch(url, {
        //           method: 'POST',
        //           headers: {
        //               'Content-Type': 'application/json',
        //           },
        //           body: JSON.stringify(uploadData),
        //       })
        //     : fetch(url);
        const fetchPro = await fetch(url);
        const data = await fetchPro.json();

        // console.log(data);
        // const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
        // const data = await res.json();

        // if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        // console.log(res, data);
        return data;
    } catch (err) {
        throw err;
    }
};

export const getCookie = function (name) {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");
    
    // Loop through the array elements
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        
        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if(name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }
    
    // Return null if not found
    return null;
}
