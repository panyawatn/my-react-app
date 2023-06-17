import "./App.css";

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function PrimeNumberCheck({ number }) {
  const isNumberPrime = isPrime(number);

  return (
    <div>
      <p className="Content">
        {number} : {isNumberPrime ? " เป็นจำนวนเฉพาะ" : " ไม่เป็นจำนวนเฉพาะ"}
      </p>
    </div>
  );
}

export default PrimeNumberCheck;
