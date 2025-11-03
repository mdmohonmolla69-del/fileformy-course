import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form"

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }

  const onSubmit = async (data) => {
    // await delay(2)
    let r = await fetch("http://localhost:3000/", { method: "POST", headers:{"Content-Type": "application/json"}, body: JSON.stringify(data) })
    let res = await r.text()
    console.log(data, res)
    // if(data.username !== "mohon"){
    //   setError("myform", {message: "Your form is not in good order because credentials are invalid"})
    // }
    // if (data.username === "rohan"){
    //   setError("blocked", {message: "Sorry this user is blocked"})
    // }
  }
  return (
    <>
      {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='username' {...register("username", { required: { required: true, message: "This field is required" }, minLength: { value: 3, message: "min length is 3" }, maxLength: { value: 8, message: "max length is 8" } })} type="text" />
          {errors.username && <div>{errors.username.message}</div>}
          <br />
          <input placeholder='password' {...register("password", { required: { required: true, message: "This field is required" }, minLength: { value: 8, message: "min length is 8" }, })} type="password" />
          {errors.password && <div>{errors.password.message}</div>}
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit" />
          {errors.myform && <div>{errors.myform.message}</div>}
          {errors.blocked && <div>{errors.blocked.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App
