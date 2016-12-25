<template>
  <div class="list-wrapper">
    <ul class="list-container" id="list-ul">
      <li>
        <router-link :to="'article'">
          <p class="list-title">标题</p>
          <p class="list-updated">更新时间</p>
          <p class="list-abstract">简介</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style>
  .list-container li{
    border-bottom: 1px solid #eee;
  }
  .list-title{
    margin-top: 0;
    font-size: 2.6rem;
    font-weight: 400;
    color: #404040;
  }
  .list-abstract{
    font-size: 1.6rem;
    font-weight: 300;
    color: #919191;
  }
  .list-updated{
    padding:5px 0;
    font-family: "Comic Sans MS",cursive,sans-serif;
    font-size: 1.8rem;
    color: #8b8b8b;
  }
  .list-container li a{
    display: block;
    padding:1rem 1.5rem;
    margin:0;
    transition:all .3s;
  }
  .list-container li a:hover{
    background-color: rgba(0,0,0,.2);
  }
  @media screen and (max-width: 768px){
    .list-title{
      font-size: 2.2rem;
    }
    .list-updated{
      font-size: 1.6rem;
    }
  }
</style>
