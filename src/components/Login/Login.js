import React, { useState, useContext } from "react";
import Context from "../../context/context";
import http from "../../http";
import { LOGIN } from "../../reducer/reducer";

const Login = () => {
	const { state, dispatch } = useContext(Context);
	const [values, setValues] = useState({username:'', password: ''});

	const onChange = (e) => {
		const field = e.target.id;
			setValues({...values, [field]:e.target.value})
	}

	const login = (e) => {
    e.preventDefault();
		http.post('https://fakestoreapi.com/auth/login', values).then((res) => {
      dispatch({type: LOGIN, data: res.data.token });
      window.localStorage.setItem('token', res.data.token)
    }).catch((e) => console.log(e))
	}

  return (
    <form className="container mt-5 col-4">
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
					id="username"
					onChange={onChange}
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
					onChange={onChange}
        ></input>
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
					onChange={onChange}
        ></input>
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button className="btn btn-primary" onClick={login}>
        Submit
      </button>
    </form>
  );
};

export default Login;
