const http = require('http');
const data = require('./utils/data')

         http.createServer(( request, response ) => {
            response.setHeader('Access-Control-Allow-Origin', '*');
            const {url} = request;
        
            if (url.includes('/rickandmorty/character')){
            
                const urlToArray = (url) => url.split('/');
                const stringToNum = (array) => {return parseInt(array[3])}
                const id = stringToNum(urlToArray(url))
                const character = data.find((char) => {return (char.id === id)})
                response.writeHead(200,{'Content-Type': 'application/json'});
                response.write(JSON.stringify(character));
               return response.end();
                
            }
            if (url === '/'){
                response.write(JSON.stringify(data));
               return response.end();
            }
            response.writeHead(404);
            return response.end();
        }).listen(3001, 'lolcalhost', () => {console.log('Server listening on port 3001');});

        
          
          