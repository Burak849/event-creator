import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Logo from './logo.png';

export default () => {
    const [state, setState] = useState(false);

    // Replace javascript:void(0) paths with your paths
    const navigation = [
        { title: "Ana Sayfa", path: "/" },
        { title: "Hakkımızda", path: "/about" },
    ];

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".menu-btn")) setState(false);
        };
    }, []);

    const Brand = () => (
        <div className="flex items-center justify-between py-5 md:block">
            <a href="javascript:void(0)">
                <img
                    src={Logo}
                    width={120}
                    height={50}
                    alt="logo"
                />
            </a>
            <div className="md:hidden">
                <button className="menu-btn text-gray-500 hover:text-gray-800"
                    onClick={() => setState(!state)}
                >
                    {state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );

    return (
        <div>
            <div className='relative'>
                <div className='absolute inset-0 blur-xl h-[580px]' style={{ background: "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)" }}></div>
                <div className='relative'>
                    <header>
                        <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
                            <Brand />
                        </div>
                        <nav className={`pb-5 md:text-sm ${state ? "absolute top-0 inset-x-0 bg-white shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent" : ""}`}>
                            <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                                <Brand />
                                <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
                                    <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                                        {navigation.map((item, idx) => (
                                            <li key={idx} className="text-gray-700 hover:text-gray-900">
                                                <a href={item.path} className="block">
                                                    {item.title}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </header>
                    <section className="flex justify-center items-center">
                        <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
                            <div className='max-w-2xl mx-auto'>
                                <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl">
                                    Aktif Etkinlikler
                                </h1>
                                <table className="w-full mt-6 border-collapse border border-gray-300">
                                    <thead className="bg-gray-200">
                                        <tr>
                                            <th className="px-10 py-6">Etkinlik İsmi</th>
                                            <th className="px-10 py-6">Etkinlik Açıklaması</th>
                                            <th className="px-10 py-6">Tarih</th>
                                            <th className="px-10 py-6">Saat</th>
                                            <th className="px-10 py-6">Ücret</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Buraya veri tabanından etkinliklerin listesi gelecek */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                    <br /><br /><br /><br /><br /><br /><br /><br />
                    <div className='items-center justify-end mt-6 space-y-6 md:flex md:mt-0'>
                        <a href="/register" className="flex items-center justify-center gap-x-1 py-3 px-6 text-white font-medium bg-green-500 duration-150 hover:bg-green-600 active:bg-green-700 rounded-full md:inline-flex">
                            Etkinlik oluştur
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
