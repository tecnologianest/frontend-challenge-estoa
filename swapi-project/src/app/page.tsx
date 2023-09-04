
import CharactersList from "@/components/CharactersList";

export default function Home() {
 
  return (
    <main className="bg-[#141318] h-[calc(100vh-89.94px)] px-32 py-4 box-border">
      <h1 className="font-semibold text-xl text-sky-400 mt-4 border-b-2 border-sky-400 inline-block pr-12">Star Wars characters list</h1>
      
      <CharactersList />
    </main>
  );
}
