import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="text-center">
        <p className="mb-4 bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-8xl text-transparent md:text-9xl">
          404
        </p>
        <h1 className="text-2xl md:text-3xl text-white mb-4">Page Not Found</h1>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm text-white"
          >
            <Home size={15} /> Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-gray-300 rounded-xl text-sm hover:bg-white/10 transition-all"
          >
            <ArrowLeft size={15} /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
