import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700">
          <h1 className="text-3xl font-bold mb-6 text-gray-100">
            Advent of Code 2025
          </h1>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold mb-3 text-gray-300">
              Solutions
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                <Link href="/day1" className="text-blue-400 hover:text-blue-300 hover:underline">
                  Day 1
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
