import axios from 'axios';

export default axios.create({

    baseURL: 'https://api-football-v1.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '7eccf3c916msh125eb404409a0fcp1de117jsn811515176179'
      }


});
