import React from 'react';
import Navbar from '../components/Navbar';

function Register() {
  return (
    <div>
      <Navbar />
      <div className='w-full flex flex-row justify-evenly items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <div className="">
          <div className="flex flex-col">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-12 space-y-4 md:space-y-12 sm:p-24">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Hesabınızı oluşturun
                </h1>
                <form className="space-y-4 md:space-y-6">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="password">
                      Şifre
                    </label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      type="password"
                      id="password"
                      name="password"
                      placeholder="şifre"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="confirm-password">
                      Şifre tekrarı
                    </label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      type="password"
                      id="confirm-password"
                      name="confirm-password"
                      placeholder="şifre tekrarı"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-sky-400 mb-5"
                  >
                    Kayit ol
                  </button>
                  <a className="text-xs pt-5" href="/login">
                    Hesabınız varsa giriş yapın
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
