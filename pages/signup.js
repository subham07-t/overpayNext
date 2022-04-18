import Link from "next/link";
const signup = () => {
  return (
    <>
      {/* <!-- Main section --> */}
      <div className="flex items-start justify-between h-screen p-4">
        {/* <!-- left section --> */}
        <div className="  hidden lg:flex w-4/12 h-full">
          <img
            className=" w-full h-full object-fill"
            src="/imgs/bg1.jpg"
            alt=""
          />
        </div>

        {/* <!-- right section --> */}
        <div className=" w-full lg:w-8/12 h-full flex flex-col  sm:px-8">
          {/* <!-- Top section --> */}
          <div className=" flex-1 flex flex-col items-center justify-center">
            <div className="  flex flex-col items-center justify-center  w-full max-w-md my-4">
              {/* <!-- Tittle section --> */}
              <div className="text-center">
                <h1 className="text-3xl font-bold">Sign up for an account</h1>
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

              {/* <!-- form section --> */}
              <form className=" my-4 w-full" action="">
                <div className=" sm:flex justify-between w-full">
                  <div className=" border p-4 rounded-lg hover:border-blue-300">
                    <input
                      type="text"
                      className="outline-0"
                      placeholder="First name"
                    />
                  </div>
                  <div className=" border p-4 rounded-lg hover:border-blue-300">
                    <input
                      type="text"
                      className="outline-0"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div className=" border p-4 rounded-xl my-2 hover:border-blue-300">
                  <input
                    type="text"
                    className="outline-0"
                    placeholder="Email"
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
                  <p>
                    By creating an account, you agreeing to our{" "}
                    <a className="font-bold">Privacy Policy</a>, and{" "}
                    <a className="font-bold">
                      Electronics Communication Policy
                    </a>
                    .
                  </p>
                </div>
                <div className="my-4">
                  <button className="w-full bg-blue-700 text-white rounded-xl p-4">
                    Sign In
                  </button>
                </div>
              </form>

              {/* <!-- sign in --> */}
              <p>
                <span>
                  <span>Allready have an account? </span>
                  <span>
                    <Link href="/signin">
                      <a> Sign In</a>
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
      </div>
    </>
  );
};

export default signup;
