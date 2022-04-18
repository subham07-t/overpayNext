import Link from "next/link";
const signup = () => {
  return (
    <>
      {/* <!-- Main section --> */}
      <div class="flex items-start justify-between h-screen p-4">
        {/* <!-- left section --> */}
        <div class="  hidden lg:flex w-4/12 h-full">
          <img class=" w-full h-full object-fill" src="/imgs/bg1.jpg" alt="" />
        </div>

        {/* <!-- right section --> */}
        <div class=" w-full lg:w-8/12 h-full flex flex-col  sm:px-8">
          {/* <!-- Top section --> */}
          <div class=" flex-1 flex flex-col items-center justify-center">
            <div class="  flex flex-col items-center justify-center  w-full max-w-md my-4">
              {/* <!-- Tittle section --> */}
              <div class="text-center">
                <h1 class="text-3xl font-bold">Sign up for an account</h1>
                <p class="text-md my-4">Send, spend and save smarter</p>
              </div>

              {/* <!-- Social section --> */}
              <div class=" sm:flex justify-between w-full">
                <div class="flex border p-4 rounded-lg hover:border-blue-300">
                  <img src="/imgs/google.svg" alt="" />
                  <p class="mx-2">Sign In with Google</p>
                </div>
                <div class="flex border p-4 rounded-lg hover:border-blue-300">
                  <img src="/imgs/apple.svg" alt="" />
                  <p class=" mx-2">Sign In with Apple</p>
                </div>
              </div>

              {/* <!-- Or section --> */}
              <div class="flex items-center w-full py-2">
                <div class="flex-1 border"></div>
                <p class="mx-2">Or with email</p>
                <div class="flex-1 border"></div>
              </div>

              {/* <!-- form section --> */}
              <form class=" my-4 w-full" action="">
                <div class=" sm:flex justify-between w-full">
                  <div class=" border p-4 rounded-lg hover:border-blue-300">
                    <input
                      type="text"
                      class="outline-0"
                      placeholder="First name"
                    />
                  </div>
                  <div class=" border p-4 rounded-lg hover:border-blue-300">
                    <input
                      type="text"
                      class="outline-0"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div class=" border p-4 rounded-xl my-2 hover:border-blue-300">
                  <input type="text" class="outline-0" placeholder="Email" />
                </div>
                <div class=" flex border p-4 rounded-xl justify-between my-2 hover:border-blue-300">
                  <input
                    type="password"
                    class="outline-0"
                    placeholder="Password"
                  />
                  <img src="/imgs/eye-off.svg" alt="" />
                </div>
                <div class="flex justify-between w-full">
                  <p>
                    By creating an account, you agreeing to our{" "}
                    <a class="font-bold">Privacy Policy</a>, and{" "}
                    <a class="font-bold">Electronics Communication Policy</a>.
                  </p>
                </div>
                <div class="my-4">
                  <button class="w-full bg-blue-700 text-white rounded-xl p-4">
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
          <div class="flex justify-between items-center">
            <a href="">Privacy policy</a>
            <a href="">Copyright 2022</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default signup;
