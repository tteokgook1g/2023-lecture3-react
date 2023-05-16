import { useState } from "react";

export const ConditionalRendering = () => {
  const [checked, setChecked] = useState(false);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setChecked((prev) => !prev);
  }

  return (<div>
    <input type="checkbox" onChange={handleChange} />
    {checked && <div>Hello</div>}
  </div>)
}