import  Film, {CreateFilmDTO, UpdateFilmDTO } from "../../dtos/FilmDTO";

export interface IFilmService {
  getFilms():Promise<Film[]>;
  getFilmById(film_id:number):Promise<Film>;
  createFilm(film:CreateFilmDTO):Promise<Film>;
  updateFilm(id:number,film:UpdateFilmDTO):Promise<Film>;
  deleteFilm(id:number):Promise<void>;
}