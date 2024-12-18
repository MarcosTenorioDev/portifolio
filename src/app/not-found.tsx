import React from "react";

const NotFound = () => {
  return (
    <html>
      <body className="text-center">
        <div className="flex min-h-screen flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-lg mb-8">
            Oops! The page you are looking for does not exist.
          </p>
          <a
            href="/"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Go Back Home
          </a>
        </div>
      </body>
    </html>
  );
};

export default NotFound;
