import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex-row p-8 rounded-lg max-w-xl w-full text-center">
        <div className="mx-auto p-2">
          <h1 className="text-6xl font-bold mb-4 text-center">Oops!</h1>
        </div>
        <p className="text-gray-600 text-xl mt-10">This is unexpected.</p>
        <p className="italic text-gray-400 mt-10">
          {error.statusText || error.message}
        </p>
      </div>
    </div>
  );
}
