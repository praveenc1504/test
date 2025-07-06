const app=require('./src/app');
const http=require('http');

const server=http.createServer(app);

app.listen(5000, () => console.log(`Server running on port 5000`));