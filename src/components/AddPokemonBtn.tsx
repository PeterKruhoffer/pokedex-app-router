"use client"

export function AddPokemonBtn(props: { id: string }) {
  function handleClick() {
    console.log("clicked", props.id)
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

