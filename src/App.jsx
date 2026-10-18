
import { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch students");
        return response.json();
      })
      .then((data) => setStudents(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-800 to-pink-600 p-8">
      <h1 className="mb-8 text-center text-4xl font-extrabold text-white drop-shadow-lg">
        Student List
      </h1>

      {loading ? (
        <p className="text-center text-xl font-bold text-white">
          Loading students...
        </p>
      ) : (
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {students.map((student) => (
            <div
              key={student.id}
              className="rounded-2xl border-4 border-purple-300 bg-white p-5 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-pink-400 hover:shadow-2xl"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-purple-300 bg-purple-100 text-2xl font-extrabold text-purple-800">
                {student.name.charAt(0)}
              </div>

              <h2 className="text-xl font-extrabold text-purple-900">
                {student.name}
              </h2>

              <div className="mt-4 space-y-3">
                <p className="break-words rounded-lg border border-purple-200 bg-purple-50 p-3 text-sm text-gray-700">
                  <span className="font-extrabold text-purple-800">Email:</span>
                  <br />
                  {student.email}
                </p>

                <p className="rounded-lg border border-pink-200 bg-pink-50 p-3 text-sm text-gray-700">
                  <span className="font-extrabold text-pink-800">City:</span>
                  <br />
                  {student.address.city}
                </p>
              </div>

              <div className="mt-4 rounded-lg bg-purple-800 p-2 text-center font-bold text-white">
                Student ID: {student.id}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
