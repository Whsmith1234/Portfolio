<template>
  <div id="resume">
      <br><br>
    <div class="uk-container">
      <h1 id="name" class="uk-text-light uk-text-primary">Resume</h1>
      <h2>Work Experience</h2>
      <article v-for="s in places" class="uk-article" :key = "s">
        <p class="uk-text-lead">{{s.title}}</p>
        <p class="uk-article-meta">{{s.meta}}</p>
        <p>
         <div v-for="point in s.points" :key="point">
             {{point}}
         </div>
        </p>
      </article>
      <h2>Education</h2>
      <article v-for="s in education" class="uk-article" :key = "s">
        <p class="uk-text-lead">{{s.title}}</p>
        <p class="uk-article-meta">{{s.meta}}</p>
        <p>
         <div v-for="point in s.points" :key="point">
             {{point}}
         </div>
        </p>
      </article>
    </div>
  </div>
</template>
<style>
h2 {
  font-size: 2em;
  font-weight: 200;
  margin-bottom: 70px;
}
.uk-article + h2{
    margin-top:70px;
}
.uk-article {
  margin-left: 10%;
  width: 80%;
}
.uk-text-lead {
  color: #42b983;
  font-weight: 100;
}
</style>
<script>
export default {
  name: "Resume",
  data: () => ({
    places: [
      {
        title: "Bridge Market",
        meta: "Hamilton Developer September 2021-Present",
        points: [
          "Developed the auction interface and functionality for the Bridge-Market NFT exchange built on top of the Adamant Blockchain.",
          `Allowed the Market to accept Ethereum and Bitcoin transactions as well
          as the native token of ADM in a decentralised manner.`,
          `Developed the storage interface to upload media files to the Arweave Blockchain Network.`,
        ],
      },
      {
        title: "True Market Leaders",
        meta: "Hamilton Developer June-September 2021",
        points: [
          `Updated the
    backend logic and flow of the web application which allowed the servers to
    return results over 10 times faster`,
          `Designed and built the UI of the main stock screener the company offered to clients with React and Bootstrap.`,
          `Designed, planned and built the backend Flask api of stock screener while integrating a MySQL database forcommonly screened stocks resulting in a 90% decrease in external api calls and server runtimes.`,
        ],
      }, {
        title: "Adventure Attic",
        meta: "Hamilton Developer September 2021- January 2022",
        points: [
          "Developed a custom integration between their POS system and Spotify store allowing them to update over 5000 products automatically.",
          `Updated the store's website for the Banff film festival by over riding Yellow Pages website builder with custom javascript.`,
        ],
      }
    ],
    education: [
      {
        title: "Bishops University",
        meta: "Sherbrooke Quebec B.A Mathematics January 2022-Present",
        points: [
          "98% average across full time 5 courses",
          `Calculus, Systems Programming, History of Math, Intro to Computer Science, Macro Economics`
        ],
      },
      {
        title: "Westdale Secondary School",
        meta: "Hamilton Highschool 2017-2021",
        points: [
          `98% Grade 12 Average`,
          `Co-founder of the Westdale coding club and developer of the Westdale Physics website`,
          `Carole Moule Memorial Award:`,
          'Awarded to two students in the graduating class for excellence in Chemistry and Physics',
        ],
      },
    ],
  }),
};
</script>