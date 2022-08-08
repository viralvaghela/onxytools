
    const fetch = require('node-fetch');

    const encodedParams = new URLSearchParams();
    encodedParams.append("longUrl", "https://google.com");
    encodedParams.append("accessToken", "7b027dcd1ea0bafe707fda33d13e39eca4a70446");
    
    const url = 'https://bitlymikilior1v1.p.rapidapi.com/createBitlink';
    
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '721a6118d6mshcfa249e66f0885ep1436fcjsnf6d7f02a57a8',
        'X-RapidAPI-Host': 'Bitlymikilior1V1.p.rapidapi.com'
      },
      body: encodedParams
    };
    
    fetch(url, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));

