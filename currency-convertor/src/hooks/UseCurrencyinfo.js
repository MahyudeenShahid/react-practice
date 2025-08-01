import React, {  useEffect, useState } from 'react'

function UseCurrencyinfo(currency) {

    const [data, setData] = useState({});

    useEffect(() => {
        // currency = currency.toUppercase()
        fetch(`https://api.frankfurter.app/latest?from=${currency}`
        )
            .then((res) => res.json())
            .then((res) => setData(res["rates"]))
        console.log(data);
    }, [currency]);
    console.log(data);
    return data;
}

export default UseCurrencyinfo