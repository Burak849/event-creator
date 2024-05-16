import React, { useState, useEffect } from 'react';
import logo from './logo.png';
import EventForm from './EventForm';

export default () => {
    const [state, setState] = useState(false);
    const [textInput, setTextInput] = useState('');
    const [events, setEvents] = useState([]);

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

    const handleTextInputChange = (e) => {
        setTextInput(e.target.value);
    };

    const addEvent = (eventData) => {
        setEvents([...events, eventData]);
    };

    return (
        <div>
            <div className='relative'>
                <div className='absolute inset-0 blur-xl h-[580px]' style={{ background: "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)" }}></div>
                <div className='relative'>
                    <header>
                        <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
                            <Brand state={state} setState={setState} />
                        </div>
                        <nav className={`pb-5 md:text-sm ${state ? "absolute top-0 inset-x-0 bg-white shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent" : ""}`}>
                            <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                                <Brand state={state} setState={setState} />
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
                                <EventForm onSubmit={addEvent} />
                                <table className="w-full mt-6 border-collapse border border-gray-300">
                                    <thead className="bg-gray-200">
                                        <tr></tr>
                                    </thead>
                                    <tbody>
                                        {events.map((event, index) => (
                                            <tr key={index}>
                                                <td className="border px-10 py-8">{event.eventName}</td>
                                                <td className="border px-10 py-8">{event.eventDescription}</td>
                                                <td className="border px-10 py-8">{event.eventDate}</td>
                                                <td className="border px-10 py-8">{event.eventTime}</td>
                                                <td className="border px-10 py-8">{event.eventPrice}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

const TextInput = ({ label, value, onChange }) => {
    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={value}
                onChange={handleChange}
            />
        </div>
    );
};

const Brand = ({ state, setState }) => (
    <div className="flex items-center justify-between py-5 md:block">
        <a href="javascript:void(0)">
            <img
                src={logo}
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
