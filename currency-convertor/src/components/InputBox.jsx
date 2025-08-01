import React, { useId } from 'react'


function InputBox({
    label,
    amount,
    onAmountChange,
    currencyOptions=[],
    OncurrencyChange,
    currencySelect="USD",
    amountDisabled=false,
    currencyDisabled=false,
    className = "",
}) {
   
const inputId=useId()
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label htmlFor={inputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                id={inputId}
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    disabled={currencyDisabled}
                    value={currencySelect}
                    onChange={(e)=> OncurrencyChange && OncurrencyChange(e.target.value)}
                >
                   { currencyOptions.map((Currency)=>
                       ( <option key={Currency} value={Currency}>
                            {Currency}
                        </option>))}
                
                </select>
            </div>
        </div>
    );
}

// export default InputBox;

export default InputBox