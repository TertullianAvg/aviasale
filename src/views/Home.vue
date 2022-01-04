<template>
  <div class="Home">
    <br><br>
<b>Мы не продаём авиабилеты, а помогаем найти самые дешёвые. Бесплатно.</b><br><br>
<b>Авиасейлс — крупнейший поисковик авиабилетов в России. Мы сравниваем все доступные варианты перелётов по вашему запросу, а потом направляем вас для покупки на официальные сайты авиакомпаний и агентств.Сдесь вы найдете информацию об авиакомпаниях и ближайших вылетах из аэропортов Москвы.</b><br><br>
</div><br><br>

<div class="carusel">
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.ytimg.com/vi/p0ggtmXghPg/maxresdefault.jpg" height="600" width="1400" class="d-block w-300" alt="дубай">
    </div>
    <div class="carousel-item">
      <img src="https://cdnimg.rg.ru/img/content/205/66/65/iStock-6659315641000_d_850.jpg" height="600" width="1400"  class="d-block w-300" alt="турция">
    </div>
    <div class="carousel-item">
      <img src="https://fs.tonkosti.ru/53/cm/53cm91womf40wkw04wo0c0kws.jpg"  height="600" width="1400"  class="d-block w-300" alt="альпы">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div> <br><br><br><br><br><br><br><br>
</template>

<script>
export default {
  name: 'Home',
  props: {
    
  }
}
</script>


<style scoped lang="scss">
.carusel {
  margin-left: 50px;
}
b {
  color: black;
  font-family: 'Poppins', sans-serif;
  font-size: 26px;
  padding-left:55px;
  padding-right:30px;
  display: block;
}

</style>
