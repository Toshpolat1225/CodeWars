// Avtobusga har bekatdan massiv berailadi [chiqanlar, tushganlar]
// oxirgi bekatda avtobusda odam qolgan bolsa yani uxlab qolgan bolsa nechtlagini korsatish
var number = function(busStops){
    let ummumiy = 0
    for(var i=0; i<busStops.length; i++){
        ummumiy += busStops[i][0]
        ummumiy -= busStops[i][1]
    }
    return ummumiy
  }