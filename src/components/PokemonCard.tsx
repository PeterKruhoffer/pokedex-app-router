"use client"
import Image from "next/image"
import type { Pokemon } from "pokenode-ts"
import { useQuery } from "@tanstack/react-query"
import { cn } from "~/util"

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

export function PokemonCard(props: { id: string, className?: string }) {
  const { data } = useQuery({
    queryKey: ["pokemon", props.id],
    queryFn: () => getPokemon(props.id.toLowerCase())
  })
  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <div
      className={cn(
        "h-72 w-full rounded-lg flex flex-col justify-center items-center p-4 shadow-inner shadow-white/50",
        props.className
      )}
      style={{ backgroundColor: getPokeColor(data.types.at(0)?.type.name) }}
    >
      <h2 className="text-lg uppercase">{data.name}</h2>
      <Image
        src={data.sprites.front_default ?? ""}
        alt={data.name}
        width={300}
        height={300}
        style={{ imageRendering: "pixelated" }}
      />
      <div className="flex flex-row gap-4">
        {data.types.map((type) => (
          <span
            key={type.type.name}
            className="uppercase rounded-xl px-2 py-1 border shadow-inner shadow-white/50"
            style={{ backgroundColor: getPokeColor(type.type.name) }}
          >
            {type.type.name}
          </span>
        ))}
      </div>
    </div>
  )
}
