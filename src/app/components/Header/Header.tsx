export default function Header() {
  return (
    <header className="w-full bg-white py-[10px]">
      <nav className="w-full flex flex-row justify-center items-center gap-[15px]">
        <button className="relative underline-button">File</button>
        <button className="relative underline-button">View</button>
        <button className="relative underline-button">Surprise</button>
        <button className="relative underline-button">Help</button>
      </nav>
    </header>
  );
}
