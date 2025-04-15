
const Login = () => {


    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        form.reset();
    }

    return (
        <div className="">
            <section className="nunito bg-[#c5d8f0]">
                <section className="lg:flex lg:justify-center mt-4 bg-white">
                    <div className="lg:w-[812px] lg:h-[599px] bg-white shadow-lg">
                        <div>
                            <div className="flex justify-center items-center lg:w-[800px] lg:h-[100px] mb-10">
                                {/* <img
                                    className="lg:w-[800px] lg:h-[100px]"
                                    src=""
                                    alt=""
                                    /> */}
                                <p className="text-center lg:text-center text-xl md:text-2xl font-bold">Welcome To Our <br />Patient record System</p>
                            </div>
                            <button
                                className=" w-full lg:w-[810px] lg:h-[44px] bg-gradient-to-r from-[#0069b4] via-[#0098dc] to-[#00d1ff] text-xl nunito text-white font-bold"
                            >
                                login
                            </button>
                        </div>

                        {/* <!-- login details  --> */}
                        <form onSubmit={handleSubmit} className="ml-16 flex lg:mr-16 lg:flex justify-center items-center h-[380px]">
                            <div className="space-y-2">
                                <div className="md:mr-0 mr-6">
                                    <button aria-label="Login with Google" type="button" className="mx-auto mb-4 flex items-center justify-center  p-2 space-x-3.5 border-2 rounded-md focus:ring-2 focus:ring-offset-1 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                        </svg>
                                        <p>Login with Google</p>
                                    </button>
                                </div>
                                <div className="lg:flex gap-3">
                                    <p className="text-xl font-bold">email :</p>
                                    <input name="email" type="text" className="border-black border-2 md:ml-10" />
                                </div>
                                <div className="lg:flex gap-3">
                                    <p className=" text-xl font-bold">Password :</p>
                                    <input name="password" className="border-black border-2 ml-1" type="number" />
                                </div>
                                <div className="mt-2">
                                    <div className="container">
                                        <p className="text-center mt-2 moving-text">Please enter login information.</p>
                                    </div>
                                    <div className="ml-5 lg:ml-24 mt-7">
                                        <div className="flex gap-3 lg:flex lg:justify-center lg:items-center lg:gap-3">
                                            <button type="submit" id="btn-login" className="px-5 py-1 rounded-lg text-white bg-gradient-to-r from-[#0069b4] via-[#0098dc] to-[#00d1ff]">login</button>
                                            <button type="button" className="px-5 py-1 rounded-lg text-white bg-gradient-to-r from-[#0069b4] via-[#0098dc] to-[#00d1ff] hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div className="lg:w-[810px] lg:h-[30px] lg:mt-[44px] bg-[#89c4eefa] lg:flex lg:justify-center lg:items-center">
                            <p className="text-center text-black text-[10px] lg:text-sm">System Clone by : <span className="font-semibold">Md Rifat Hossain</span></p>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default Login;