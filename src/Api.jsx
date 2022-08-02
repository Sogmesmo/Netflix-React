const API_KEY = "307f43531a74a5eed3a8ff946f9e5dbe";

const categories = [
  {
    name: "trending",
    title: "Em alta",
    path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR `,
    isLarge: true,
  },
  {
    name: "netflixOriginals",
    title: "Originais Netflix",
    path: `/discover/tv?api_key=${API_KEY}&with_networks=21 `,
    isLarge: false,
  },
  {
    name: "topRated",
    title: "Populares",
    path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR `,
    isLarge: false,
  },
  {
    name: "horror",
    title: "Terror",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=14 `,
  },
  {
    name: "mystery",
    title: "Mistério",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=9648 `,
    isLarge: false,
  },
  {
    name: "scienceFiction",
    title: "Ficção Científica",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=878 `,
    isLarge: false,
  },
  {
    name: "comedy",
    title: "Comedias",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=35 `,
    isLarge: false,
  },

  {
    name: "documentaries",
    title: "Documentarios",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=99 `,
    isLarge: false,
  },
];

export const getMovies = async (path) => {
  try {
    let url = `https://api.themoviedb.org/3${path}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("error getMovies:", error);
  }
};

export default categories;
