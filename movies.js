const MovieDatabase = (() => { 
	
	let movies = [ 
    {
        Title: "True Romance",
        IMDB_Rating: "7.9",
        Genres: ["Crime", "Drama", "Romance"],
        Release_date: "1993",
        Director: "Quentin Tarantino",
        URL: "https://www.imdb.com/title/tt0108399/?ref_=ttfc_fc_tt"
    },

    {
        Title: "Pretty Woman",
        IMDB_Rating: "7.1",
        Genres: ["Comedy", "Romance"],
        Release_date: "1990",
        Director: "Garry Marshall",
        URL: "https://www.imdb.com/title/tt0100405/?ref_=nv_sr_srsg_3"
    },

    {
        Title: "Once Upon a Time In Hollywood",
        IMDB_Rating: "7.6",
        Genres: ["Comedy", "Drama"],
        Release_date: "2019",
        Director: "Quentin Tarantino",
        URL: "https://www.imdb.com/title/tt7131622/?ref_=nv_sr_srsg_0"
    }
]
})();

console.log(JSON.parse(movies)[0].Title);