import { useState } from 'react';
import { InputBox } from './components';
import  useCurrencyinfo  from './hooks/useCurrencyinfo';
import './App.css';

function App() {
    const [from, setFrom] = useState('usd');
    const [to, setTo] = useState('inr');
    const [amount, setAmount] = useState(0);
    const [currencyChanged, setCurrencyChanged] = useState(0);

    const currencyInfo = useCurrencyinfo(from);
    const options = Object.keys(currencyInfo);

    const swap = () => {
        setFrom(to);
        setTo(from);
        const tempAmount = amount;
        setAmount(currencyChanged);
        setCurrencyChanged(tempAmount);
    };

    const convert = () => {
        if (currencyInfo[to]) {
            setCurrencyChanged(amount * currencyInfo[to]);
        } else {
            alert('Invalid currency or conversion rate not available.');
        }
    };

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('/src/assets/pexels-pixabay-259132.jpg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                onAmount={(value) => setAmount(Number(value))}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                currencyOptions={options}
                                selectCurrency={from}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                Swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={currencyChanged}
                                onCurrencyChange={(currency) => setTo(currency)}
                                currencyOptions={options}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                        >
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;

