import Link from "next/link";

export default function DayLayout({ day, children }) {
    return (
        <div className="min-h-screen bg-gray-900 py-8">
            <div className="max-w-4xl mx-auto px-4">
                <Link
                    href="/"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-4"
                >
                    <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    Back to Home
                </Link>

                <div className="bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700">
                    <h4 className="text-2xl font-bold mb-4 text-gray-100">{day}</h4>
                    {children}
                </div>
            </div>
        </div>
    );
}
