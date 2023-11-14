import React, { useEffect, useState } from "react"


export const EventList = () => {
    // Establish the state
    const [ events, setEvents ] = useState([])


    const fetchEvents = async () => {
        const response = await fetch('http://localhost:8000/events', {
            headers: {
                "Authorization": `Token ${JSON.parse(localStorage.getItem("levelup_token")).token}`
            }
        })
        const events = await response.json()
        setEvents(events)
    }

    // Get the state after initialization
    useEffect(() => {
        fetchEvents()
    }, [])

    return (
        <article className="bg-blue-200 p-4">
          <div className="text-center text-2xl font-bold mb-4">Events</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {events.map((event) => (
              <div
                className="bg-white rounded shadow-md p-4"
                key={event.id}
              >
                <div className="text-center text-lg font-semibold mb-2">{event.name}</div>
                <div className="text-center text-lg mb-2">{event.game?.name}</div>
                <div className="text-center">
                <div className="text-gray-600 m-3">{event.location}</div>
                <div className="text-gray-600">Date: {event.date}</div>
                <div className="text-gray-600">Time: {event.time}</div>
                </div>
              </div>
            ))}
          </div>
        </article>
      );
}