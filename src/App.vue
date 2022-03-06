<template>
<div>
<nav class="navbar is-fixed-top" aria-label="main navigation" uk-navbar>
                <a href="#"><img style="height:100%" src = "/128.png"></a>
                <div class="uk-navbar-dropdown uk-open">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li class="uk-active"><a href="#">Active</a></li>
                        <li><a href="#">Item</a></li>
                        <li class="uk-nav-header">Header</li>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                        <li class="uk-nav-divider"></li>
                        <li><a href="#">Item</a></li>
                    </ul>
                </div>
                
  <div class="navbar-menu">
     <a class="navbar-item">
        Whsmith1234
      </a>
  </div>
</nav>
<br><br><br>
<div class = "uk-container">
  <div class="uk-child-width-1-2@s uk-child-width-1-3@m" uk-grid="masonry: true">
    <div class = "item" v-for="project in projects" :key = "project">
      <HelloWorld :link="project.link" :name="project.name" :image="project.image" :tags="project.tags" :description="project.description"/>
    </div>
  </div>
</div>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: () => ({
    projects: []
  }),
  mounted: async function(){
    for(var i =0;i<25;i++){
      this.projects[i]= {
        name:"Guelph Courses",
        link: "name",
        image: "https://d33wubrfki0l68.cloudfront.net/61391677a5c9a50ccb95a3bb/screenshot_2021-09-08-20-00-59-0000.png",
        tags: ["hey","there"],
        description: "Lorem ipsum"
      }
      }
    }
  }
</script>

<style>
.uk-navbar-nav > li> a{
  color: white !important;
}
.navbar-menu {
    flex-grow: 1;
    flex-shrink: 0;
    box-shadow: none !important;
}
.navbar, .navbar-end, .navbar-menu, .navbar-start {
    align-items: stretch;
    display: flex;
}
.navbar-item, .navbar-link {
    align-items: center;
    display: flex;
}
/* .navbar-dropdown {
    background-color: #fff;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    border-top: 2px solid #dbdbdb;
    box-shadow: 0 8px 8px rgba(10,10,10,.1);
    display: none;
    font-size: .875rem;
    left: 0;
    min-width: 100%;
    position: absolute;
    top: 100%;
    z-index: 20;
} */

nav{
  height: 5em;
    box-shadow: 0 .5em 1em -.125em rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.02);


}
.navbar {
    min-height: 3.25rem;
}
html {
  box-sizing: border-box;
}

</style>
