import Link from "next/link"
import { Pokemon } from "~/components/Pokemon"

export default function PokemonPage({ params }: { params: { id: string } }) {
  return (
    <section className="relative flex flex-col justify-center items-center text-white translate-y-20">
      <Pokemon id={params.id} />
      <Link
        className="top-1/3 -translate-y-1/3 right-1/4 absolute border rounded-lg px-2 text-lg"
        href={"/" + (parseInt(params.id) + 1)}
      >
        Next
      </Link>
    </section>
  )
}
