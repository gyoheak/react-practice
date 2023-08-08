interface ErrorHandler {
  error: Error| null;
  setError: (error: Error| null) => void;
  clearError: () => void;
}

export {ErrorHandler}