import React, { useEffect, useState } from "react"
//import { getGames } from "../../managers/GameManager.js"

export const GameList = (props) => {
    // Establish the state
    const [ games, setGames ] = useState([])


    const fetchGames = async () => {
        const response = await fetch('http://localhost:8000/games', {
            headers: {
                "Authorization": `Token ${JSON.parse(localStorage.getItem("levelup_token")).token}`
            }
        })
        const games = await response.json()
        setGames(games)
    }

    // Get the state after initialization
    useEffect(() => {
        fetchGames()
    }, [])


    return (
        <article className="bg-blue-200 p-4">
          <div className="text-center text-2xl font-bold mb-4">Games</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {games.map((game) => (
              <div
                className="bg-white rounded shadow-md p-4"
                key={game.id}
              >
                <div className="text-center text-lg font-semibold mb-2">{game.name}</div>
                <div className="text-center">
                <div className="text-gray-600 m-3">{game.description}</div>
                <div className="text-gray-600 my-3">The game is {Math.floor(game.duration)} hours long</div>
                <div className="text-gray-600">Number of players: {game.num_of_players}</div>
                </div>
              </div>
            ))}
          </div>
        </article>
      );
      
}