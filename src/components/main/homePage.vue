<template>
 <div class="homePage">
   <div class="homePageNav">
      <div>
        <div>
          <router-link to="/footwear">Обувь</router-link>
        </div>
        <div>
          <router-link to="/outerwear">Верхняя Одежда</router-link>
        </div>
      </div>
      <div>
        <div>
          <router-link to="/underwear">Нижнее Белье</router-link>
        </div>
        <div>
          <router-link to="/accessories">Аксесуары</router-link>
        </div>
      </div>
   </div>
 </div>
</template>

<script>
export default {
name: "homePage"
}
</script>

<style scoped>
.homePageNav{
  display:flex;
  flex-direction:column;
  align-self:center;
  justify-content:center;
  justify-self:center;
  justify-items:center;
  align-content:center;
  align-items:center;
  margin: 0 auto;
}
.homePageNav > div{
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content: center;
}
.homePageNav > div > div > a{
  display:flex;
  width:250px;
  height:250px;
  background-color:#053354;
  border:white solid 2px;
  text-align:center;
  justify-content:center;
  justify-self:center;

  align-content:center;
  align-items:center;
  align-self:center;
  margin: 20px;
  color:white;
  -webkit-box-shadow: 6px 9px 27px 4px rgba(0,0,0,0.59);
  -moz-box-shadow: 6px 9px 27px 4px rgba(0,0,0,0.59);
  box-shadow: 6px 9px 27px 4px rgba(0,0,0,0.59);
}
</style>
