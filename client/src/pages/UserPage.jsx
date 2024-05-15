import React from 'react'
import Navbar from '../components/Navbar' 
import Hero  from '../components/Hero' 
import Logo from './logo.png'
import { useEffect, useState } from 'react'


export default () => {
    const [state, setState] = useState(false)

    // Replace javascript:void(0) paths with your paths
    const navigation = [
        { title: "Ana Sayfa", path: "/" },
        { title: "Hakkımızda", path: "/about" },
        { title: "Özelliklerimiz", path: "#stats" },
        { title: "Yorumlar", path: "#comments" },
        { title: "Amacımız", path: "#about" }
    ]
    

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".menu-btn")) setState(false);
        };
    }, [])


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
                    {
                        state ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )
                    }
                </button>
            </div>
        </div>
    )
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
                                    {
                                        navigation.map((item, idx) => {
                                            return (
                                                <li key={idx} className="text-gray-700 hover:text-gray-900">
                                                    <a href={item.path} className="block">
                                                        {item.title}
                                                    </a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                <section class="flex justify-center items-center">
    <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
        <div className='max-w-2xl mx-auto'>
            <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl">
                En çok hangi alanda yaptığınız etkinliklerden hoşlanıyorusunuz?
            </h1>
        </div>
    </div>
</section>
    </div>
        </div>
<br /><br /> <br />
        <section id="about" className="py-14">
            <div className="max-w-screen-xl mx-auto md:px-8">
                <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <img src="https://julesverne.com.tr/wp-content/uploads/2021/02/1920x960_jv_kurumlara_ozel_geziler-scaled.jpg" className="md:max-w-lg sm:rounded-lg" alt="" />
                    </div>
                    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Geziler
                        </p>
                        <p className="mt-3 text-gray-600">
                            Organizatörlerimiz tarafından planlanan ve uygun bir bütçeye göre ayarlanan gezilerimizde yeni yerler keşfetmeye katılmak ister misiniz?
                        </p>
                        <div className='flex items-center gap-x-3 sm:text-sm'>
                                <a href="/register" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
                                    Başlayalım
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="about" className="py-14">
            <div className="max-w-screen-xl mx-auto md:px-8">
                <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <img src="https://atolyebambini.com.tr/wp-content/uploads/2017/06/5d63db8918c7732ac8e34aad.jpg" className="md:max-w-lg sm:rounded-lg" alt="" />
                    </div>
                    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Bilimsel Seminerler
                        </p>
                        <p className="mt-3 text-gray-600">
                        Alanında profesyonel kişilerden kendinizi geliştirme fırsatı yakalayacaksınız. 
                        </p>
                        <div className='flex items-center gap-x-3 sm:text-sm'>
                                <a href="/register" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
                                    Başlayalım
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="about" className="py-14">
            <div className="max-w-screen-xl mx-auto md:px-8">
                <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <img src="https://st3.depositphotos.com/3591429/18305/i/450/depositphotos_183057156-stock-photo-sports-tools-green-grass-concept.jpg" className="md:max-w-lg sm:rounded-lg" alt="" />
                    </div>
                    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Spor
                        </p>
                        <p className="mt-3 text-gray-600">
                        Kişisel spor zevklerinize göre insanlarla tanışıp sohbet edebileceğiniz bir platform oluşturduk.
                        </p>
                        <div className='flex items-center gap-x-3 sm:text-sm'>
                                <a href="/register" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
                                    Başlayalım
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="about" className="py-14">
            <div className="max-w-screen-xl mx-auto md:px-8">
                <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <img src="https://cdn.yemek.com/uploads/2022/05/ahlatlibel-ataturk-park-ankara-piknik-alanlari-2.jpg" className="md:max-w-lg sm:rounded-lg" alt="" />
                    </div>
                    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Piknik
                        </p>
                        <p className="mt-3 text-gray-600">
                        Organizatörlerimizin çevre ve belediye kanunlarına uygun şekilde düzenleyebileceği ve ateş başında mükemmel sohbetlerin edileceği bir doğa yerine gitmeyi kim istemez.
                        </p>
                        <div className='flex items-center gap-x-3 sm:text-sm'>
                                <a href="/register" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
                                    Başlayalım
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="about" className="py-14">
            <div className="max-w-screen-xl mx-auto md:px-8">
                <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <img src="https://www.dergibursa.com.tr/wp-content/uploads/2018/01/Parti.jpg" className="md:max-w-lg sm:rounded-lg" alt="" />
                    </div>
                    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Parti
                        </p>
                        <p className="mt-3 text-gray-600">
                        Yorucu bir haftanın ardından, hafta sonunu kafamızı dağıtarak başlamak en güzeli olacaktır.
                        </p>
                        <div className='flex items-center gap-x-3 sm:text-sm'>
                                <a href="/register" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
                                    Başlayalım
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="about" className="py-14">
            <div className="max-w-screen-xl mx-auto md:px-8">
                <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <img src="https://koa.com/blog/images/group-of-friends-taking-a-hike.jpg?preset=heroimagecropped" className="md:max-w-lg sm:rounded-lg" alt="" />
                    </div>
                    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Hiking
                        </p>
                        <p className="mt-3 text-gray-600">
                        Şehrinizin en güzel yerleri hep doğada saklıdır. Arkadaşlarınızla temiz bir doğa yürüyüşü yaparak tüm stresinizi atabilirsiniz.
                        </p>
                        <div className='flex items-center gap-x-3 sm:text-sm'>
                                <a href="/register" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
                                    Başlayalım
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="about" className="py-14">
            <div className="max-w-screen-xl mx-auto md:px-8">
                <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <img src="https://cdn0-production-images-kly.akamaized.net/xYEcqMdBWw6pN0mFBFD5_5uIjz8=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3396365/original/023706600_1615209973-concert-768722_1280.jpg" className="md:max-w-lg sm:rounded-lg" alt="" />
                    </div>
                    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Sohbet
                        </p>
                        <p className="mt-3 text-gray-600">
                        Herhangi bir mekanda günün her saatinde insanlarla buluşup sohbet edebilirsiniz.
                        </p>
                        <div className='flex items-center gap-x-3 sm:text-sm'>
                                <a href="/register" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
                                    Başlayalım
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}