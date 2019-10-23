function validateNumberEquation (numbersEquation) {
  if (numbersEquation.length < 3) {
    return false
  }
  if (!numbersEquation.every(Number.isFinite)) {
    return false
  }
    
  return numbersEquation.every((num, index) => {
    const nextIndex = index + 1
    return nextIndex < numbersEquation.length ? num < numbersEquation[nextIndex] : true
  })
}

function findStep (numbersEquation) {
  let step = 0

  for (let i = 0; i < numbersEquation.length; i++) {
    const a = numbersEquation[i]
    const b = numbersEquation[i + 1]
    const c = numbersEquation[i + 2]

    if (a && b && c) {
      const sum = (c - b) - (b - a)
      if (step === 0) {
        step = sum
      } else if (step !== sum) {
        return step
      }
    }
    
  }

  return step
}

function findFibonacci (numbers, step) {
  const fib = [...numbers]
  let currentStep = 0

  fib.forEach((num, index) => {
    const nextIndex = index + 1
    const prevIndex = index - 1
    if (num === null) {
      
      if (index === 0 && fib[nextIndex] !== null) {
        fib[index] = fib[nextIndex] - step
      }

      if (prevIndex >= 0) {
        if (fib[prevIndex] !== null) {
          fib[index] = fib[prevIndex] + currentStep
        } else {
          fib[index] = fib[nextIndex] - currentStep - step
        }
      }

    } else {
      if (fib[prevIndex] !== null && (fib[prevIndex] + currentStep !== num)) {
        throw Error('findFibonacci() sequence of numeric is not support')
      }
    }

    currentStep = currentStep + step
  })

  if (fib.some(val => val === null)) {
    return findFibonacci(fib, step)
  }

  return fib
}

function numberSeries (numbers) {

  const numbersEquation = numbers.filter(num => num !== null)

  if (!validateNumberEquation(numbersEquation)) {
    throw Error('numberSeries() numbers arguments is not support')
  }

  const step = findStep(numbersEquation)
  const result = findFibonacci(numbers, step)
  
  return result
}

module.exports = numberSeries

