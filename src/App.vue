<template>
  <div>
    <nav class="uk-navbar uk-navbar-container uk-navbar-transparent" aria-label="main navigation" uk-navbar>
      <a href="#"><img style="height: 100%" src="/128.png" /></a>
      <div class="uk-navbar-dropdown">
        <ul class="uk-nav uk-navbar-dropdown-nav">
          <li><a href="#resume">Resume</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li class="uk-nav-header">Contact</li>
          <li><a href="https://github.com/Whsmith1234">Github</a> Whsmith1234</li>
          <li><a href="mailto:wjpra@protonmail.com">Email</a> wjpra@protonmail.com</li>
          <li><a href="tel:9059738035">Phone</a> 905-973-8035 </li>
        </ul>
      </div>

      <div class="navbar-menu">
        <a href ="#" class="navbar-item"> Whsmith1234 </a>
      </div>
    </nav>
    <div id = "overlay" class="uk-overlay uk-position-cover uk-overlay uk-overlay-default" style="z-index: 10; position:fixed;">
      <div class = "uk-position-center">
      <h1
        class="
          fixed
           uk-text-light uk-text-primary"
        id = "name"
      >
        Will Prangley
      </h1>
      <a href="#resume" class = "main-link" style = "float:left;"> Resume </a>
      <a href="#portfolio" class = "main-link" style="float:right"> Portfolio</a>

      </div>
     
    </div>
    <div id="home">
      <div class="uk-container">
      <h1 class = "uk-text-light uk-text-primary" id = "name">About Me</h1>
      <article class="uk-article">
        <p>
          Hello I am an undergratuate Mathematics students at Bishops University in Sherbrooke Quebec. When I'm not playing with my cats I'm probably playing guitar or my drums, programming or biking.
          <br>
          I find very compares to the dopamine rush after finding a good mathematical proof or code finally running and tend to chase that high quite a bit. 
          <br>
          Currently working on making the internet a more decentralized place through Arweave and Adamants's storage/messaging blockchains.
          <br>
          Have a lovely day!
        </p>
        
      </article>
      </div>
      <resume/>
      <portfolio :projects="projects"/>
      <br>    
      </div>
  </div>
</template>

<script>
import Resume from "@/components/Resume.vue"
import Portfolio from "@/components/Portfolio.vue";
export default {
  name: "App",
  components: {
    Portfolio,
    Resume,
  },
  data: () => ({
    projects: [],
  }),
  mounted: async function () {
    var p = await fetch("https://raw.githubusercontent.com/Whsmith1234/portfoliojson/main/projects.json");
    p = await p.json();
    this.projects = p;

  },
};
</script>

<style>
</style>
