"use client"
import { atom, useAtom } from "jotai"

export const rosterAtom = atom<string[]>([])

export function AddPokemonBtn(props: { id: string }) {
  const [roster, setRoster] = useAtom(rosterAtom)
  function handleClick() {
    if (roster.length > 5) {
      return
    }
    setRoster((prev) => [...prev, props.id])
  }
  return (
    <div className="flex flex-col justify-center items-center py-8 ">
      <button
        className="border rounded-lg px-2 py-1 text-lg shadow-inner shadow-white/50"
        onClick={handleClick}
      >
        Add to roster
      </button>
    </div>
  )
}

