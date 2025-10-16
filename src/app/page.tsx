'use client'
import Image from "next/image";
import "./globals.css";
import { useState } from "react";

const winCombination: number[][] = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
export default function Home() {
  const [game, setGame] = useState<string[]>(["","","","","","","","",""])
  const [player, setPlayer] = useState<string>('X')
  const [winner, setWinner] = useState<string>('')
  const [draw, setDraw] = useState(false)

  function checkWin(game: any){
    for(let win of winCombination){
      const [a,b,c] = win;
      if(game[a] && game[a]==game[b] && game[a]==game[c]){
        setWinner(game[a])
        return game[a];
      }
    }
    return null;
  }

  function move(id: number){
    if(game[id]||winner){
      return;
    }
    const newGame = [...game]
    newGame[id] = player
      const win = checkWin(newGame)
       
      if(win){
        setWinner(win);
      }else if(!newGame.includes('')){
        setDraw(true)
      }
      else{
        player=='X'?setPlayer('O'):setPlayer('X')
      }
      setGame(newGame)
  }

  function restart(){
    setGame(["","","","","","","","",""])
    setWinner('')
    setPlayer('X')
    setDraw(false)
  }
  return (
    <section>
      <div className="outerbox">
        <div className="box" onClick={()=>move(0)}>{game[0]}</div>
        <div className="box" onClick={()=>move(1)}>{game[1]}</div>
        <div className="box" onClick={()=>move(2)}>{game[2]}</div>
        <div className="box" onClick={()=>move(3)}>{game[3]}</div>
        <div className="box" onClick={()=>move(4)}>{game[4]}</div>
        <div className="box" onClick={()=>move(5)}>{game[5]}</div>
        <div className="box" onClick={()=>move(6)}>{game[6]}</div>
        <div className="box" onClick={()=>move(7)}>{game[7]}</div>
        <div className="box" onClick={()=>move(8)}>{game[8]}</div>
      </div>
      {draw && <h2>Game Drawn</h2>}
      {winner && <h2>{winner} Wins</h2>}
      <button onClick={()=>restart()}>Restart</button>
    </section>
  );
}
