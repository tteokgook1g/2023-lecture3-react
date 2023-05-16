import { useState } from "react"

export const ArrayRenderer = () => {
  const [arr, setArr] = useState<string[]>([]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setArr(e.target.value.split(','));
  }

  return (<div>
    <input type="text" onChange={handleChange} />
    <ul>
      {arr.map((item, idx) => <li key={idx}>{item}</li>)}
    </ul>
  </div>)
}