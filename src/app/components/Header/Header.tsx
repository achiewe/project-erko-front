export default function Header() {
  return (
    <header className="w-full bg-white py-[10px] border-b-[2px] border-black shadow-lg">
      <nav className="w-full flex flex-row justify-center items-center gap-[15px]">
        <button className="relative underline-button text-[20px]">File</button>
        <button className="relative underline-button text-[20px]">View</button>
        <button className="relative underline-button text-[20px]">
          Surprise
        </button>
        <button className="relative underline-button text-[20px]">Help</button>
      </nav>
    </header>
  );
}
