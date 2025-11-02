import { Link } from "react-router-dom";
import { questionList } from "./QuestionList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        ⚛️ React Practice Questions
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {questionList.map((item) => (
          <Link
            key={item.id}
            to={`/practice/${item.id}`}
            className="block bg-white shadow-md rounded-2xl p-4 hover:shadow-lg hover:scale-[1.02] transition"
          >
            <h2 className="font-semibold text-lg mb-2 text-center text-gray-800">
              {item.name}
            </h2>
            <p className="text-sm text-gray-500 text-center">
              Click to open this question →
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
