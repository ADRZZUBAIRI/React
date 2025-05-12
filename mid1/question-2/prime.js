function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function printPrimes(start, end) {
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

document.body.innerHTML = "<pre></pre>";
const output = [];
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        output.push(i);
    }
}
document.querySelector("pre").textContent = output.join("\n");