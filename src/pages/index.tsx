import Link from 'next/link';

export default function Home() {
  return (
    <Link href="/projects" className="text-blue-600 hover:underline">
      View My Projects →
    </Link>
  );
}

