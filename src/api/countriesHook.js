import React,{useState,useEffect} from 'react';
import axios from 'axios';

export default() => {
    const [results,setlist] = useState([]);
    
    useEffect(()=>{
        apicall();
    },[]);

    const apicall = async ()=>{
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/countries',
            headers: {
              'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
              'X-RapidAPI-Key': '7eccf3c916msh125eb404409a0fcp1de117jsn811515176179'
            }
          };
          axios.request(options).then(function (response) {
            setlist(response.data.response);
            console.log('at countriesHook.js lin no 23 length of results:');
            console.log(results.length);
        }).catch(function (error) {
            console.error(error);
        });
    };

    return [apicall,results];
};
