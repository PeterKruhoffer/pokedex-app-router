import { Fragment } from "react"
import Image from "next/image"
import type { Pokemon } from "pokenode-ts"
import { AddPokemonBtn } from "./AddPokemonBtn"

const colorMap = new Map<string, string>()
colorMap.set("normal", "#A8A878")
colorMap.set("fire", "#F08030")
colorMap.set("water", "#6890F0")
colorMap.set("electric", "#F8D030")
colorMap.set("grass", "#78C850")
colorMap.set("ice", "#98D8D8")
colorMap.set("fighting", "#C03028")
colorMap.set("poison", "#A040A0")
colorMap.set("ground", "#E0C068")
colorMap.set("flying", "#A890F0")
colorMap.set("psychic", "#F85888")
colorMap.set("bug", "#A8B820")
colorMap.set("rock", "#B8A038")
colorMap.set("ghost", "#705898")
colorMap.set("dragon", "#7038F8")
colorMap.set("dark", "#705848")
colorMap.set("steel", "#B8B8D0")
colorMap.set("fairy", "#EE99AC")

function getPokeColor(type: string | undefined) {
  return colorMap.get(type ?? "normal")
}

async function getPokemon(poke: string): Promise<Pokemon> {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + poke)
  const data = await res.json() as Pokemon
  return data
}

export async function Pokemon(props: { id: string, className?: string }) {
  const pokemon = await getPokemon(props.id.toLowerCase())

  return (
    <>
      <div
        className={"bg-white/30 w-1/3 rounded-lg backdrop-blur flex flex-col justify-center items-center p-4 shadow-inner shadow-white/50" + " " + props.className}
      >
        <h2 className="text-lg uppercase">{pokemon.name}</h2>
        <Image
          src={pokemon.sprites.front_default ?? ""}
          alt={pokemon.name}
          width={300}
          height={300}
          style={{ imageRendering: "pixelated" }}
        />
        <div className="flex flex-row gap-4">
          {pokemon.types.map((type) => (
            <span
              key={type.type.name}
              className="uppercase rounded-xl px-2 py-1 shadow-inner shadow-white/50"
              style={{ backgroundColor: getPokeColor(type.type.name) }}
            >
              {type.type.name}
            </span>
          ))}
        </div>
        <div className="w-full">
          {pokemon.stats.map((stat) => (
            <Fragment
              key={stat.stat.name}
            >
              <div
                className="flex flex-row justify-between"
              >
                <span
                  className="uppercase rounded-xl px-2 py-1"
                >
                  {stat.stat.name}:
                </span>
                <span
                  className="uppercase rounded-xl px-2 py-1"
                >
                  {stat.base_stat}
                </span>
              </div>
              <div className="h-px bg-white" />
            </Fragment>
          ))}
        </div>
      </div>
      <AddPokemonBtn id={props.id} />
    </>
  )
}
