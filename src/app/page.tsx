import Link from "next/link";
import { Pokemon } from "~/components/Pokemon";

export default function HomePage() {
  return (
    <section className="relative flex flex-col justify-center items-center text-white translate-y-20">
      <Pokemon id="1" />
      <Link className="top-1/3 -translate-y-1/3 right-1/4 absolute border rounded-lg px-2 text-lg" href="/2">Next</Link>
    </section>
  );
}
