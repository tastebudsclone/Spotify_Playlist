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

async function getRecommendations(data) {
  // get spotify recommendations based on genres and artist name
  console.log(data)
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
 let artists = data.artistsName.split(',').map(x => x.trim());

 const artistsIds = await Promise.all(artists.map(async (artist) => {
   const res = await axios.get("https://api.spotify.com/v1/search", {
     headers: {
       Authorization : `Bearer ${token}`,
     },
     params: {
       q: artist,
       type: 'artist',
     }
   });
   return res.data.artists.items[0].id;
   }
 ));
 
 const paramsKey = {
   seed_artists: artistsIds.join(),
   limit: data.limit,
   target_valence: (data.valence / 10) || undefined,
   target_instrumentalness: (data.instrumentalness / 10) || undefined,
   target_tempo: data.tempo || undefined,
 };

 res = await axios.get("https://api.spotify.com/v1/recommendations", {
   headers: {
     Authorization: `Bearer ${token}`,
   },
   params: 
     paramsKey
   ,
 });

 console.log("tracks", res.data.tracks);
 return res.data.tracks
}

async function getSeveralTracks(data) {
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

  res = await axios.get("https://api.spotify.com/v1/tracks?market=ES", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params:{
      ids: data.join(',')
    } 
  });
  
  console.log('data', res.data);
  return res.data
}

// create a function to get random songs getRandomTracks

module.exports = {getRecommendations, example, getSeveralTracks};