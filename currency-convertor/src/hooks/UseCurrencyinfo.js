import React, { use, useState } from 'react'

function UseCurrencyinfo() {

    const [data, setData] = useState({});

    useEffect((currency) => {
        fetch(`hhttps://api.frankfurter.app/latest?from=${currency}`
        )
            .then((res) => res.json())
            .then((res) => setData(res["rates"]))
        console.log(data);
    }, [currency]);
    console.log(data);
    return data;
}

export default UseCurrencyinfo