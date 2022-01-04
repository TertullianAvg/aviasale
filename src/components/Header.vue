<template>
  
  <div id="navbar">
    <ul class="nav justify-content-center">
  <li class="nav-item" v-for="(menu, index) in HeaderMenuList" :key="index">
    <router-link class="nav-link active" aria-current="page" :to="menu.path"><b>{{menu.name}}</b></router-link>
  </li>
  
    


</ul>
  </div>
  

</template>

<script>
// @ is an alias to /src


export default {
  name: 'Header',
 props: {
   msg: String,
 },
 
  
  data() {
    return {
      HeaderMenuList: [
        {name: 'О нас', path: '/about'},
        {name: 'Компании', path: '/company'},
        {name: 'Аэропорты', path: '/airports'},
        {name: 'Рейсы', path: '/flights'},
      ], 
    }
  }

}
</script>
<style scoped>
.nav-item {
  padding: 50px;
  margin: 50px;
  font-size: 26px;
  font-family: 'Fjalla One', sans-serif;
  padding-bottom: 5px;
  padding-top: 5px;
  margin-bottom: 5px;
  margin-top: 5px;  
}
b:hover {
  color: rgb(27, 26, 95);
}
#navbar {
 background-color: rgba(85, 90, 161, 0.705);
 margin: 25px;
 opacity: 0.6;
 border-radius:70px;
}
b {
  color: white;
  
}


#UpperHead {
  color: white; 
  margin: 5px;
  padding: 5px;
  font-family: 'Fjalla One', sans-serif;

}


</style>
