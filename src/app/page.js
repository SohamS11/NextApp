import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-evenly">
    new video
    <Link href={"/recipes"}>explore recipes</Link>
    </div>
  );
}
