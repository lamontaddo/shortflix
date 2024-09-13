const movies = [
  {
    "id": 1,
    "title": "The Dark Knight",
    "image": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "actors": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    "year": 2008,
    "trailer": "https://www.youtube.com/watch?v=EXeTwQWrcwY",
    "rating": 9.0
  },
  {
    "id": 2,
    "title": "Interstellar",
    "image": "https://www.themoviedb.org/t/p/w1280/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    "actors": ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    "year": 2014,
    "trailer": "https://www.youtube.com/watch?v=zSWdZVtXT7E",
    "rating": 8.6
  },
  {
    "id": 3,
    "title": "The Matrix",
    "image": "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    "actors": ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    "year": 1999,
    "trailer": "https://www.youtube.com/watch?v=vKQi3bBA1y8",
    "rating": 8.7
  },
  {
    "id": 4,
    "title": "Pulp Fiction",
    "image": "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    "actors": ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    "year": 1994,
    "trailer": "https://www.youtube.com/watch?v=s7EdQ4FqbhY",
    "rating": 8.9
  },
  {
    "id": 5,
    "title": "The Shawshank Redemption",
    "image": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    "actors": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    "year": 1994,
    "trailer": "https://www.youtube.com/watch?v=6hB3S9bIaco",
    "rating": 9.3
  },
  {
    "id": 6,
    "title": "Inception",
    "image": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    "actors": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    "year": 2010,
    "trailer": "https://www.youtube.com/watch?v=YoHD9XEInc0",
    "rating": 8.8
  },
  {
    "id": 7,
    "title": "The Wolf of Wall Street",
    "image": "https://image.tmdb.org/t/p/w500/pWHf4khOloNVfCxscsXFj3jj6gP.jpg",
    "actors": ["Leonardo DiCaprio", "Jonah Hill", "Margot Robbie"],
    "year": 2013,
    "trailer": "https://www.youtube.com/watch?v=iszwuX1AK6A",
    "rating": 8.2
  },
  {
    "id": 8,
    "title": "Schindler's List",
    "image": "https://image.tmdb.org/t/p/w500/c8Ass7acuOe4za6DhSattE359gr.jpg",
    "actors": ["Liam Neeson", "Ben Kingsley", "Ralph Fiennes"],
    "year": 1993,
    "trailer": "https://www.youtube.com/watch?v=gG22XNhtnoY",
    "rating": 9.0
  },
  {
    "id": 9,
    "title": "Fight Club",
    "image": "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
    "actors": ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
    "year": 1999,
    "trailer": "https://www.youtube.com/watch?v=SUXWAEX2jlg",
    "rating": 8.8
  },
  {
    "id": 10,
    "title": "Gladiator",
    "image": "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    "actors": ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
    "year": 2000,
    "trailer": "https://www.youtube.com/watch?v=owK1qxDselE",
    "rating": 8.5
  },
  {
    "id": 11,
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "image": "https://image.tmdb.org/t/p/w500/56zTpe2xvaA4alU51sRWPoKPYZy.jpg",
    "actors": ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
    "year": 2001,
    "trailer": "https://www.youtube.com/watch?v=V75dMMIW2B4",
    "rating": 8.8
  },
  {
    "id": 12,
    "title": "Star Wars: A New Hope",
    "image": "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
    "actors": ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    "year": 1977,
    "trailer": "https://www.youtube.com/watch?v=1g3_CFmnU7k",
    "rating": 8.6
  },
  {
    "id": 13,
    "title": "Goodfellas",
    "image": "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    "actors": ["Robert De Niro", "Ray Liotta", "Joe Pesci"],
    "year": 1990,
    "trailer": "https://www.youtube.com/watch?v=2ilzidi_J8Q",
    "rating": 8.7
  },
  {
    "id": 14,
    "title": "The Lion King",
    "image": "https://image.tmdb.org/t/p/w500/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
    "actors": ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
    "year": 1994,
    "trailer": "https://www.youtube.com/watch?v=7TavVZMewpY",
    "rating": 8.5
  },
  {
    "id": 15,
    "title": "Titanic",
    "image": "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    "actors": ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
    "year": 1997,
    "trailer": "https://www.youtube.com/watch?v=kVrqfYjkTdQ",
    "rating": 7.8
  },
  {
    "id": 16,
    "title": "The Avengers",
    "image": "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    "actors": ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
    "year": 2012,
    "trailer": "https://www.youtube.com/watch?v=eOrNdBpGMv8",
    "rating": 8.0
  },
  {
    "id": 17,
    "title": "Avatar",
    "image": "https://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg",
    "actors": ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
    "year": 2009,
    "trailer": "https://www.youtube.com/watch?v=5PSNL1qE6VY",
    "rating": 7.8
  },
  {
    "id": 18,
    "title": "The Green Mile",
    "image": "https://image.tmdb.org/t/p/w500/sOHqdY1RnSn6kcfAHKu28jvTebE.jpg",
    "actors": ["Tom Hanks", "Michael Clarke Duncan", "David Morse"],
    "year": 1999,
    "trailer": "https://www.youtube.com/watch?v=Ki4haFrqSrw",
    "rating": 8.6
  },
  {
    "id": 19,
    "title": "Se7en",
    "image": "https://image.tmdb.org/t/p/w500/69Sns8WoET6CfaYlIkHbla4l7nC.jpg",
    "actors": ["Brad Pitt", "Morgan Freeman", "Kevin Spacey"],
    "year": 1995,
    "trailer": "https://www.youtube.com/watch?v=znmZoVkCjpI",
    "rating": 8.6
  },
  {
    "id": 20,
    "title": "The Silence of the Lambs",
    "image": "https://image.tmdb.org/t/p/w500/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg",
    "actors": ["Jodie Foster", "Anthony Hopkins", "Scott Glenn"],
    "year": 1991,
    "trailer": "https://www.youtube.com/watch?v=W6Mm8Sbe__o",
    "rating": 8.6
  }
];

module.exports = movies;
