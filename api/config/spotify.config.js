const axios = require("axios");

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

async function example() {
  let res;

  res = await axios.post(
    "https://accounts.spotify.com/api/token",
    { grant_type: "client_credentials" },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          new Buffer.from(client_id + ":" + client_secret).toString("base64"),
      },
    }
  );

  const token = res.data.access_token;

  console.log("token", token);

  res = await axios.get("https://accounts.spotify.com/api/v1/recommendations", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      seed_genres: "pop",
    },
  });

  console.log("tracks", res.data);
}

async function project(genres, artistName) {
  // get spotify recommendations based on genres and artist name
  let res;
  res = await axios.post(
    "https://accounts.spotify.com/api/token",
    { grant_type: "client_credentials" },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          new Buffer.from(client_id + ":" + client_secret).toString("base64"),
      },
    }
  );

  const token = res.data.access_token;
  
  // get artist id from artist name
  res = await axios.get("https://api.spotify.com/v1/search", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      q: artistName,
      type: "artist",
    },
  });

  const artistId = res.data.artists.items[0].id;
  
  res = await axios.get("https://api.spotify.com/v1/recommendations", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      seed_genres: genres,
      seed_artists: artistId,
      limit: 10,
    },
  });

  console.log("tracks", res.data);
}

project("pop", "drake");