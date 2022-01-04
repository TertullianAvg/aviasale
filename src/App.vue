<template>
  <div id="UpperHead">
    <a id="logo" href="/"><img src="./assets/icons/LogoAvia.png" width="330" alt="logo" /></a>
    <a href="/login" id="login"><b>Войти</b></a>
  </div>
   <main-container>
     <template v-slot:header>
  <Header/>
   </template>
   <main>
     <router-view/>
   </main>
   <template v-slot:footer>
			<Footer />
		</template>
   </main-container> 
</template>
<script>
import Header from './components/Header.vue';
import MainContainer from './components/MainContainer.vue';
import Footer from './components/Footer.vue';


export default {
  name: 'App',
  components: {
    Header,
    MainContainer,
    Footer,
   
  },
};
</script>


<style>
body {
  background-image: url(https://www.free-wallpapers.su/data/media/23/big/sam0231.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  
  
}
#login {
 float: right;
 padding-right: 30px;
 padding-top: 20px;
}
</style>
