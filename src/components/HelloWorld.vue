<template>
  <div class="card">
    <article class="message is-primary">
      <div class="message-header">
        {{ name }}
      </div>
    </article>
        <img :src="image" alt="Placeholder image" />
        <div class="desc">
            {{ description }}
        </div>
      <div class="">
        <span v-for="tag in tags" :key="tag">
          <span class="tag is-primary is-light">{{ tag }}</span>
        </span>
      </div>
    <footer class="card-footer">
      <a :href="link" class="card-footer-item">Site</a>
      <a :href="code" class="card-footer-item">Code</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    link: String,
    name: String,
    description: String,
    image: String,
    tags: Array,
    code: String
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.desc{
  margin:0.75em;
}
.tag{
  margin:10px;
}
article {
  margin: 0px !important;
}
.message-header {
  background-color: #fff !important;
  color: #34495e !important;
}
a {
  color: #34495e;
}
.header {
  background: #42b983;
  padding: 15px;
  color: white;
  text-align: center;
  border-radius: 1.5px;
}
.box {
  margin: 0px;
  margin-top: 10px;
  border-width: 1px;
  background-color: #ffffff;
  border-color: #42b983;
  border-style: solid;
  border-radius: 2.5px;
}
.description {
  border-color: #42b983;
  border-width: 1px;
  border-style: solid;
  border-left: none;
  border-bottom: none;
  border-right: none;
}
img {
  border-radius: 2.5px;
}
</style>
