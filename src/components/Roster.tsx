import { PokemonCard } from "~/components/PokemonCard"

export function Roster() {
  return (
    <div className="w-full flex justify-center items-center py-8 px-16 translate-y-28">
      <PokemonCard id="155" className="-rotate-12 translate-y-8 hover:z-20 hover:scale-125 transition transform ease-in duration-100" />
      <PokemonCard id="148" className="-rotate-6 hover:z-20 hover:scale-125 transition transform ease-in duration-100" />
      <PokemonCard id="149" className="-rotate-3 -translate-y-4 hover:z-20 hover:scale-125 transition transform ease-in duration-100" />
      <PokemonCard id="150" className="rotate-3 -translate-y-4 hover:z-20 hover:scale-125 transition transform ease-in duration-100" />
      <PokemonCard id="158" className="rotate-6 hover:z-20 hover:scale-125 transition transform ease-in duration-100" />
      <PokemonCard id="152" className="rotate-12 translate-y-8 hover:z-20 hover:scale-125 transition transform ease-in duration-100" />
    </div>
  )
}
