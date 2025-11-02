import { useParams, Link } from "react-router-dom";
import { questionList } from "./QuestionList";

export default function PracticePage() {
  const { id } = useParams();
  const question = questionList.find((q) => q.id === id);

  if (!question) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <p className="text-xl text-gray-600 mb-4">❌ Component not found!</p>
        <Link
          to="/"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold">{question.name}</h1>
        <Link
          to="/"
          className="px-4 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          ← Back
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-md p-4">
        {question.component}
      </div>
    </div>
  );
}
