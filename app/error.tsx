"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

function Error({ error, reset }: ErrorProps) {
  return (
    <div>
      <h1>ERROR</h1>
      <p>{error.message}</p>
      <button type="button" className="btn btn-primary" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default Error;
