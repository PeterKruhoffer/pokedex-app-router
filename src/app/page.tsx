import { Pokemon } from "~/components/Pokemon";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-stone-950 text-white">
      <Pokemon id="149" />
    </main>
  );
}
