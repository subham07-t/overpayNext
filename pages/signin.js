import Link from "next/link";
const signin = () => {
  return (
    <>
      {/* <!-- Main section --> */}
      <div className="flex items-start justify-between h-screen p-4">
        {/* <!-- left section --> */}
        <div className=" w-full lg:w-8/12 h-full flex flex-col  sm:px-8">
          {/* <!-- Header section --> */}
          <div className="  w-32 my-2 ">
            <img className=" w-full" src="/imgs/Logo.svg" alt="" />
          </div>

          {/* <!-- Mid section --> */}
          <div className=" flex-1 flex flex-col items-center justify-center">
            <div className="  flex flex-col items-center justify-center  w-full max-w-md my-4">
              {/* <!-- Tittle section --> */}
              <div className="text-center">
                <h1 className="text-3xl font-bold">Sign in to Overpay</h1>
                <p className="text-md my-4">Send, spend and save smarter</p>
              </div>

              {/* <!-- Social section --> */}
              <div className=" sm:flex justify-between w-full">
                <div className="flex border p-4 rounded-lg hover:border-blue-300">
                  <img src="/imgs/google.svg" alt="" />
                  <p className="mx-2">Sign In with Google</p>
                </div>
                <div className="flex border p-4 rounded-lg hover:border-blue-300">
                  <img src="/imgs/apple.svg" alt="" />
                  <p className=" mx-2">Sign In with Apple</p>
                </div>
              </div>

              {/* <!-- Or section --> */}
              <div className="flex items-center w-full py-2">
                <div className="flex-1 border"></div>
                <p className="mx-2">Or with email</p>
                <div className="flex-1 border"></div>
              </div>

              {/* <!-- Form section --> */}
              <form className=" my-4 w-full" action="">
                <div className=" border p-4 rounded-xl my-2 hover:border-blue-300">
                  <input
                    type="text"
                    className="outline-0"
                    placeholder="Username or email"
                  />
                </div>
                <div className=" flex border p-4 rounded-xl justify-between my-2 hover:border-blue-300">
                  <input
                    type="password"
                    className="outline-0"
                    placeholder="Password"
                  />
                  <img src="/imgs/eye-off.svg" alt="" />
                </div>
                <div className="flex justify-between w-full">
                  <div>
                    <input type="checkbox" className="rounded-full" />
                    Remember me
                  </div>
                  <a href="">Forgot password?</a>
                </div>
                <div className="my-4">
                  <button className="w-full bg-blue-700 text-white rounded-xl p-4">
                    Sign In
                  </button>
                </div>
              </form>

              {/* <!-- sign up --> */}
              <p>
                <span>
                  <span>Don’t have an account? </span>
                  <span>
                    <Link href="/signup">
                      <a> Sign Up</a>
                    </Link>
                  </span>
                </span>
              </p>
            </div>
          </div>

          {/* <!-- Footer section --> */}
          <div className="flex justify-between items-center">
            <a href="">Privacy policy</a>
            <a href="">Copyright 2022</a>
          </div>
        </div>

        {/* <!-- right section --> */}
        <div className="  hidden lg:flex w-4/12 h-full">
          <img
            className=" w-full h-full object-fill"
            src="/imgs/bg.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default signin;
