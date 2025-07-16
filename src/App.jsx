import { useState } from "react";
import "./App.css";
import InputBox from "./components/InputBox.jsx";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";

function App() {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);

  // Get the conversion rate
  const rate = useCurrencyInfo(from, to);

  const convertHandler = () => {
    if (rate) {
      setConvertedAmount((amount * rate).toFixed(2));
    } else {
      setConvertedAmount(0);
    }
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
    // Optionally, recalculate after swap
    // setTimeout(convertHandler, 0);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg')",
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convertHandler();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                onAmountChange={setAmount}
                onCurrencyChange={setFrom}
                currencyOptions={currencyOptions}
                selectedCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                onAmountChange={setConvertedAmount}
                onCurrencyChange={setTo}
                currencyOptions={currencyOptions}
                selectedCurrency={to}
                isReadOnly
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
