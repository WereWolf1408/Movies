export interface SingleMovieProps {
  src: string;
  title: string;
  year: number;
  genre: string;
}

export interface DropdownCallbackProps {
  (value: Array<string> | string): void;
}

export interface formDataReceived {
  title: string;
  movieURL: string;
  genre: Array<string>;
  releaseDate: string;
  rating: number;
  runTime: string;
}
