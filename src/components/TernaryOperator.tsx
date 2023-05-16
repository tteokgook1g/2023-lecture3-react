import { useState } from "react";

export const TernaryOperator = () => {
  const [checked, setChecked] = useState(false);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setChecked((prev) => !prev);
  }

  return (<div>
    <input type="checkbox" onChange={handleChange} />
    <div>{checked ? "눌렸다!" : "안 눌렸다!"}</div>
  </div>)
}