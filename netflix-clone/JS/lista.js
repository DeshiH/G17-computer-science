const lista = (data) => {
        let movies = data.results;
        movies.forEach((movie) => {
            let poster = `${LIST}${movie.poster_path}`;
            let img_html = `<img src="${poster}" alt="${movie.title}">`
            let img = document.createElement("img");
            //img.src=poster;
            img.setAttribute("src", poster);
            img.setAttribute("alt", movie.title)
            document.querySelector("#lista").append(img);
            //console.log(movie);
        })

    }
    //fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
fetch(`${URL}/movie/now_playing?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
        lista(data);
    });