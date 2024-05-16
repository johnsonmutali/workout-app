import "./index.scss"
import { useState } from "react"


export default function Form() {
  //form states
  const [title, setTitle] = useState("")
  const [preps, setPreps] = useState("")
  const [load, setLoad] = useState("")
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    //take in the request body
    const workout = { title, preps, load }
    //fetch the data from the server
    const res = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(workout)
    })

    const data = await res.json()

    //handle errors
    if (!res.ok) {
      setError(data.error)
    }
    if (res.ok) {
      setTitle("")
      setPreps("")
      setLoad("")
      setError(null)
      console.log("new workout added: ", data)
    }
  }
  return (
    <form
      className="workout-form"
      onSubmit={handleSubmit}
    >
      <h3 className="workout-form__title">create new workout</h3>
      <label>
        <span>title: </span>
        <input
          type="text"
          //set the title to whatever the uset types in
          onChange={(e) => { setTitle(e.target.value) }}
          value={title}
          required
        />
      </label>
      <label>
        <span>preps: </span>
        <input
          type="number"
          //set the title to whatever the uset types in
          onChange={(e) => { setPreps(e.target.value) }}
          value={preps}
          required
        />
      </label>
      <label>
        <span>load: </span>
        <input
          type="number"
          //set the title to whatever the uset types in
          onChange={(e) => { setLoad(e.target.value) }}
          value={load}
          required
        />
      </label>
      <button className="form-submit-btn">submit</button>
      {
      error && <div className="error-msg">{error}</div>
      }
    </form>
  )
}