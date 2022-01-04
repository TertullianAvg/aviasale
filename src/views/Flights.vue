<template>
  <div class="About">
   <h1>Тут отображены расписания для вашего аэропорта</h1>
  </div><br><br>
 <div class="table">
   <iframe frameborder="0" style="-moz-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5); -webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5); box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5); overflow: hidden; border: 0; width: 700px; height: 982px;" src="https://rasp.yandex.ru/informers/station/9600213/?size=25&amp;color=7&amp;type=tablo"></iframe>
 </div>
  <div class="table">
    <iframe frameborder="0" style="-moz-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5); -webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5); box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5); overflow: hidden; border: 0; width: 700px; height: 982px;" src="https://rasp.yandex.ru/informers/station/9600216/?size=25&amp;color=7&amp;type=tablo"></iframe>
  </div>
  <div class="table">
    <iframe frameborder="0" style="-moz-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5); -webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5); box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5); overflow: hidden; border: 0; width: 700px; height: 982px;" src="https://rasp.yandex.ru/informers/station/9600215/?size=25&amp;color=7&amp;type=tablo"></iframe>
  </div>  
  
  <br><br>
</template>

<script>
export default {
  name: 'About',
  props: {
    
  }
}
</script>


<style scoped lang="scss">
.table {
  opacity: 0.8;
  padding-left:300px ;
}
.About {
  padding-left: 30px;
}
</style>
