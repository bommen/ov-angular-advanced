/**
 * Helper type that enforces a consistent shape for dealing with async state.
 */
export interface AsyncState<T> {
  data?: T;
  error?: Error;
  loading: boolean;
}
