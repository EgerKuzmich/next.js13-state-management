export type TErrorWithMessage = {
  message: string;
};

function isErrorWithMessage(error: unknown): error is TErrorWithMessage {
  return (
    'object' === typeof error &&
    null !== error &&
    'message' in error &&
    'string' === typeof (error as Record<string, unknown>).message
  );
}

export function toErrorWithMessage(maybeError: unknown): TErrorWithMessage {
  if (isErrorWithMessage(maybeError)) return maybeError;

  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    return new Error(String(maybeError));
  }
}

export function getErrorMessage(error: unknown) {
  return toErrorWithMessage(error).message;
}
