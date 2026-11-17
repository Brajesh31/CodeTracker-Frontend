import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase";

const safeExternalUrl = (value) => {
  if (typeof value !== "string" || value.trim() === "") {
    return null;
  }

  try {
    const url = new URL(value);
    return ["https:", "http:"].includes(url.protocol) ? url.href : null;
  } catch {
    return null;
  }
};

const formatQuestionDate = (value) => {
  let date = null;

  if (value && typeof value.toDate === "function") {
    date = value.toDate();
  } else if (value instanceof Date) {
    date = value;
  } else if (typeof value === "string" || typeof value === "number") {
    date = new Date(value);
  }

  return date && !Number.isNaN(date.getTime())
    ? date.toLocaleString()
    : "Date unavailable";
};

const AllQuestions = ({ user }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const userId = user?.uid;

  useEffect(() => {
    let isCurrent = true;

    if (!userId) {
      setQuestions([]);
      setErrorMessage("");
      setLoading(false);
      return () => {
        isCurrent = false;
      };
    }

    const fetchQuestions = async () => {
      setLoading(true);
      setErrorMessage("");

      try {
        const questionsQuery = query(
          collection(db, "questions"),
          where("uid", "==", userId)
        );
        const querySnapshot = await getDocs(questionsQuery);
        const questionsList = querySnapshot.docs.map((document) => ({
          id: document.id,
          ...document.data(),
        }));

        if (isCurrent) {
          setQuestions(questionsList);
        }
      } catch (error) {
        console.error(
          "Unable to load question records:",
          error.code || "unknown-error"
        );
        if (isCurrent) {
          setErrorMessage(
            "Your questions could not be loaded. Check your connection or account access, then try again later."
          );
        }
      } finally {
        if (isCurrent) {
          setLoading(false);
        }
      }
    };

    fetchQuestions();

    return () => {
      isCurrent = false;
    };
  }, [userId]);

  if (loading) {
    return (
      <p className="px-6 py-8 text-sm text-gray-600" role="status" aria-live="polite">
        Loading your questions...
      </p>
    );
  }

  if (errorMessage) {
    return (
      <p className="px-6 py-8 text-sm text-red-700" role="alert">
        {errorMessage}
      </p>
    );
  }

  if (questions.length === 0) {
    return (
      <p className="px-6 py-8 text-sm text-gray-600" role="status">
        No question records were found for this account yet.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full overflow-hidden rounded-lg bg-white shadow-md">
        <caption className="sr-only">
          Coding questions associated with the signed-in account
        </caption>
        <thead className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-sm font-semibold">Title</th>
            <th scope="col" className="px-6 py-3 text-left text-sm font-semibold">Difficulty</th>
            <th scope="col" className="px-6 py-3 text-left text-sm font-semibold">Email</th>
            <th scope="col" className="px-6 py-3 text-left text-sm font-semibold">Link</th>
            <th scope="col" className="px-6 py-3 text-left text-sm font-semibold">Time</th>
            <th scope="col" className="px-6 py-3 text-left text-sm font-semibold">Topics</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {questions.map((question) => {
            const questionUrl = safeExternalUrl(question.link);
            const topics = Array.isArray(question.topics)
              ? question.topics.filter((topic) => typeof topic === "string").join(", ")
              : "Not specified";

            return (
              <tr key={question.id} className="hover:bg-gray-50">
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                  {typeof question.title === "string" && question.title.trim()
                    ? question.title
                    : "Untitled question"}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                  {typeof question.difficulty === "string" && question.difficulty.trim()
                    ? question.difficulty
                    : "Not specified"}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                  {typeof question.email === "string" ? question.email : "Not specified"}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-blue-700">
                  {questionUrl ? (
                    <a
                      href={questionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      View question
                    </a>
                  ) : (
                    <span className="text-gray-500">Unavailable</span>
                  )}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                  {formatQuestionDate(question.time)}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{topics || "Not specified"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllQuestions;
