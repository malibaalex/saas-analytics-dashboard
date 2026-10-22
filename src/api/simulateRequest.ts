export interface SimulateOptions {
  delayMs?: number;
  /** 0–1 chance the request fails */
  failureRate?: number;
}

const simulateRequest = <T>(
  work: () => T,
  { delayMs = 450, failureRate = 0 }: SimulateOptions = {},
): Promise<T> => {
  return new Promise<T>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < failureRate) {
        reject(new Error("Network request failed. Check your connection and try again."));
        return;
      }
      try {
        resolve(work());
      } catch (error) {
        reject(error);
      }
    }, delayMs);
  });
};

export default simulateRequest;
