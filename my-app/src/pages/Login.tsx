

const Login = () => {
  return (
    <section className="bg-gray-300 min-h-screen flex items-center justify-center">
      {/* <!-- login container --> */}
      <div className="bg-gray-100 flex rounded-3xl shadow-lg max-w-4xl p-5 items-center md:py-5 py-20">
        {/* <!-- form --> */}
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#071021] font-poppins">Login</h2>
          <p className="text-sm mt-4 text-[#071021] font-poppins">If you are already a member, easily log in</p>
          <form action="" className="flex flex-col gap- pt-5">

            {/* Email */}
            <div className="relative mb-7" data-te-input-wrapper-init>
              <input
                type="text"
                className="peer block bg-white min-h-[auto] rounded-lg w-full  border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-300 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput2"
                placeholder="Email address" />
              <label
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >Email address
              </label>
            </div>

            {/* Password */}
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="password"
                className="peer bg-white block min-h-[auto] w-full rounded-lg border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput22"
                placeholder="Password" />
              <label
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >Password
              </label>
            </div>
            <button className="bg-[#071021] rounded-xl text-white py-2 hover:scale-105 duration-300 font-poppins">Login</button>
          </form>

          <p className="text-sm mt-8 underline font-poppins cursor-pointer">Forgot your password?</p>
        </div>

        {/* <!-- image --> */}
        <div className="md:block hidden w-1/2">
          <img className="rounded-2xl" src="https://images.unsplash.com/photo-1616606103915-dea7be788566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" />
        </div>
      </div>
    </section>
  )
}

export default Login