import { useEffect, useState } from 'react'

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const localValue = localStorage.getItem(key)
    if (!localValue) {
      if (typeof initialValue === 'function') {
        return initialValue()
      } else {
        return initialValue
      }
    } else {
      return JSON.parse(localValue)
    }
  })

  useEffect(() => {
    if (value === undefined) {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }, [value, key])
  console.log(value)

  return [value, setValue]
}
