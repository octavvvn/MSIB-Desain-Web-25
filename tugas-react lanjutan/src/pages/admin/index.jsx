export default function Dashboard() {
  return (
    <section className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Statistik Ringkas */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="bg-indigo-600 rounded-2xl p-5 shadow-lg hover:shadow-xl transition">
          <h2 className="text-sm font-medium text-gray-200">Total Books</h2>
          <p className="text-3xl font-bold mt-2">128</p>
        </div>

        <div className="bg-green-600 rounded-2xl p-5 shadow-lg hover:shadow-xl transition">
          <h2 className="text-sm font-medium text-gray-200">Total Authors</h2>
          <p className="text-3xl font-bold mt-2">34</p>
        </div>

        <div className="bg-yellow-500 rounded-2xl p-5 shadow-lg hover:shadow-xl transition">
          <h2 className="text-sm font-medium text-gray-900">Total Genres</h2>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>

        <div className="bg-red-600 rounded-2xl p-5 shadow-lg hover:shadow-xl transition">
          <h2 className="text-sm font-medium text-gray-200">Active Users</h2>
          <p className="text-3xl font-bold mt-2">529</p>
        </div>
      </div>

      {/* Recent Activities Section */}
<div className="mt-10 bg-gray-800 p-6 rounded-2xl shadow-md">
  <h2 className="text-xl font-semibold mb-6 flex items-center">
    <svg
      className="w-6 h-6 mr-2 text-indigo-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 2a1 1 0 00-1 1v1H3a2 2 0 00-2 2v2h18V6a2 2 0 00-2-2h-2V3a1 1 0 00-1-1H6zM19 10H1v7a2 2 0 002 2h14a2 2 0 002-2v-7z"></path>
    </svg>
    Recent Activities
  </h2>

  <div className="space-y-4">
    {/* Item 1 */}
    <div className="flex items-center bg-gray-700/50 rounded-xl p-4 hover:bg-gray-700 transition">
      <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
        <span className="text-white text-lg">📚</span>
      </div>
      <div className="ml-4 flex-1">
        <p className="text-gray-200">
          <span className="font-semibold text-white">New book</span> “Digital Fortress” was added.
        </p>
        <p className="text-xs text-gray-400 mt-1">5 minutes ago</p>
      </div>
    </div>

    {/* Item 2 */}
    <div className="flex items-center bg-gray-700/50 rounded-xl p-4 hover:bg-gray-700 transition">
      <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
        <span className="text-white text-lg">👤</span>
      </div>
      <div className="ml-4 flex-1">
        <p className="text-gray-200">
          Author <span className="font-semibold text-white">J.K. Rowling</span> updated profile.
        </p>
        <p className="text-xs text-gray-400 mt-1">25 minutes ago</p>
      </div>
    </div>

    {/* Item 3 */}
    <div className="flex items-center bg-gray-700/50 rounded-xl p-4 hover:bg-gray-700 transition">
      <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
        <span className="text-white text-lg">🎭</span>
      </div>
      <div className="ml-4 flex-1">
        <p className="text-gray-200">
          Genre <span className="font-semibold text-white">Fantasy</span> was created.
        </p>
        <p className="text-xs text-gray-400 mt-1">1 hour ago</p>
      </div>
    </div>

    {/* Item 4 */}
    <div className="flex items-center bg-gray-700/50 rounded-xl p-4 hover:bg-gray-700 transition">
      <div className="flex-shrink-0 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
        <span className="text-white text-lg">💳</span>
      </div>
      <div className="ml-4 flex-1">
        <p className="text-gray-200">
          <span className="font-semibold text-white">3 transactions</span> completed successfully.
        </p>
        <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
      </div>
    </div>
  </div>
</div>

    </section>
  );
}
