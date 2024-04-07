import Link from "next/link";
import { Pokemon } from "~/components/Pokemon";

export default function PokemonPage({ params }: { params: { id: string } }) {
  return (
    <section className="relative flex translate-y-20 flex-col items-center justify-center text-white">
      <Pokemon id={params.id} />
      {parseInt(params.id) > 1 && (
        <Link
          className="absolute left-1/4 top-1/3 -translate-y-1/3 rounded-lg border px-2 text-lg shadow-inner shadow-white/50"
          href={"/" + (parseInt(params.id) - 1)}
        >
          Prev
        </Link>
      )}
      {parseInt(params.id) < 1010 && (
        <Link
          className="absolute right-1/4 top-1/3 -translate-y-1/3 rounded-lg border px-2 text-lg shadow-inner shadow-white/50"
          href={"/" + (parseInt(params.id) + 1)}
        >
          Next
        </Link>
      )}
    </section>
  );
}
