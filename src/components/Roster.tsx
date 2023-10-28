"use client"
import { PokemonCard } from "~/components/PokemonCard"
import { useAtom } from "jotai"
import { rosterAtom } from "./AddPokemonBtn"
import { Fragment } from "react"
import { cn } from "~/util"

export function Roster() {
  const [roster] = useAtom(rosterAtom)


  return (
    <div className="w-full flex justify-center items-center py-8 px-16 translate-y-28">
      {roster.map((id, index) => (
        <Fragment key={id}>
          <PokemonCard id={id} className={cn(
            "translate-y-8 hover:z-20 hover:scale-125 transition transform ease-in duration-75 w-1/6", {
            "-rotate-12": index === 0,
            "-rotate-6 -translate-y-0": index === 1,
            "-rotate-3 -translate-y-4": index === 2,
            "rotate-3 -translate-y-4": index === 3,
            "rotate-6 -translate-y-0": index === 4,
            "rotate-12": index === 5,
          })}
          />
        </Fragment>
      ))}
    </div>
  )
}
