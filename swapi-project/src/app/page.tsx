
import CharactersList from "@/components/CharactersList";

export default function Home() {
  return (
    <main className="bg-[#141318] h-[calc(100vh-89.94px)] px-8 md:px-32 py-4 box-border overflow-auto md:overflow-hidden">
      <CharactersList />
    </main>
  );
}
