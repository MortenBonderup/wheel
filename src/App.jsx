import { useState } from 'react';
import './App.css'
import { Wheel } from 'react-custom-roulette'

function App() {

  const data = [
    { option: '0', style: { backgroundColor: 'green', textColor: 'black' } },
    { option: '1', style: { backgroundColor: 'blue', textColor: 'black' } },
    { option: '2', style: { backgroundColor: 'red', textColor: 'black' } },
    { option: '3', style: { backgroundColor: 'yellow', textColor: 'black' } }
  ]

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  }

  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}

        onStopSpinning={() => {
          setMustSpin(false);
          alert("Tillykke!! Du har vundet pris nr. " + prizeNumber);
        }}
      />
      <button onClick={handleSpinClick}>SPIN</button>
    </>
  )
}

export default App
