<template>
    <div id="main_footer">
    <div>
    <ul type="none" id="text1">
        <li><a href="/about" class="link">О нас</a></li>
        <li><a href="/company" class="link">Компании</a></li>
    </ul>
    </div>
    <div>
    <ul type="none" id="text2">
        <li><a href="/airports" class="link">Аэропорты</a></li>
        <li><a href="/flights" class="link">Рейсы</a></li>
    </ul></div>
    </div>

</template>

<script>


export default {
    
}
</script>

<style>
#main_footer {
    background-color: rgba(85, 90, 161, 0.705);
    width: 100%;
    height: 150px;
    padding-top: 30px;
    
    
}
#text1 {
    width: 50%;
    height:0%;
    padding-left: 450px;
    text-align: center;
    float: left;
     margin: 0 auto;


}
#text2 {
    width: 50%;
    height:0%;
    text-align: center;
    float: right;
    padding-right: 450px; 
    margin: 0 auto;
    

}
.link {
    text-decoration: none;
    color: black;
    font-family: 'Franklin Gothic Medium',;
}
</style>