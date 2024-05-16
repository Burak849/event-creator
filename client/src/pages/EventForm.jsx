import React, { useState } from 'react';

const EventForm = ({ onSubmit }) => {
    const [eventName, setEventName] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventTime, setEventTime] = useState('');
    const [eventPrice, setEventPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            eventName,
            eventDescription,
            eventDate,
            eventTime,
            eventPrice
        });
        setEventName('');
        setEventDescription('');
        setEventDate('');
        setEventTime('');
        setEventPrice('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="eventName" className="block text-gray-700 text-sm font-bold mb-2">Etkinlik İsmi</label>
                <input
                    id="eventName"
                    className="shadow appearance-none border rounded w-full py-4 px-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="eventDescription" className="block text-gray-700 text-sm font-bold mb-2">Etkinlik Açıklaması</label>
                <textarea
                    id="eventDescription"
                    className="shadow appearance-none border rounded w-full py-4 px-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={eventDescription}
                    onChange={(e) => setEventDescription(e.target.value)}
                    required
                ></textarea>
            </div>
            <div className="mb-4">
                <label htmlFor="eventDate" className="block text-gray-700 text-sm font-bold mb-2">Tarih</label>
                <input
                    id="eventDate"
                    className="shadow appearance-none border rounded w-full py-4 px-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="eventTime" className="block text-gray-700 text-sm font-bold mb-2">Saat</label>
                <input
                    id="eventTime"
                    className="shadow appearance-none border rounded w-full py-4 px-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="time"
                    value={eventTime}
                    onChange={(e) => setEventTime(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="eventPrice" className="block text-gray-700 text-sm font-bold mb-2">Ücret</label>
                <input
                    id="eventPrice"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="number"
                    value={eventPrice}
                    onChange={(e) => setEventPrice(e.target.value)}
                    required
                />
            </div>
            <div className="flex justify-end">
                <button
                    type="submit"
                    className="bg-green-500 duration-150 hover:bg-green-600 active:bg-green-700 rounded-full md:inline-flex text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Etkinliği Oluştur
                </button>
            </div>
        </form>
    );
};

export default EventForm;
