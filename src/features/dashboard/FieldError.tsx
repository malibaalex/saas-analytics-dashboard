const FieldError = ({ id, message }: { id: string; message?: string }) => {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 px-1 text-small text-destructive">
      {message}
    </p>
  );
};

export default FieldError;
