export interface Omdb{
    Response: string,
    Search: MoviePreview[],
    totalResult: string
}

export interface MoviePreview {
    Poster: string,
    Title: string,
    Type: string,
    Year: string,
    imdbID: string
}