import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {

  const {createUser} = useContext(AuthContext);
  const navigate = useNavigate()
    const handleRegister = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        //create user
        createUser(email, password)
         .then(result =>{
          console.log(result.user);
          e.target.reset();
          navigate('/')
         })
         .catch(error =>{
          console.log('ERROR', error.message)
         })
    }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col p-10">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-10">
          <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <h4 className="font-bold">
            Already have an account?
            <Link to="/login">
              <button className="btn bg-blue-700 text-white ml-2 ">
                Login
              </button>
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Register;
