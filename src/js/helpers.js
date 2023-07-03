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
