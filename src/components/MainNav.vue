<template>
  <div class="mainnav">
    <header class="w-full text-sm">
      <div class="fixed top-0 left-0 w-full h-16 bg-white">
        <div
          class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
        >
          <a :href="url" class="flex items-center text-xl h-full">{{
            company
          }}</a>
          <nav class="h-full ml-12">
            <ul class="flex h-full p-0 m-0 list-none">
              <li
                v-for="menuItem in menuItems"
                :key="menuItem"
                class="h-full first:ml-0"
                data-test="main_nav_list_item"
              >
                <a href="#" class="flex h-full items-center py-3">{{
                  menuItem
                }}</a>
              </li>
            </ul>
          </nav>
          <div class="flex items-center h-full mx-auto">
            <ActionButton />
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
export default {
  name: "MainNav",
  data() {
    return {
      company: "Company Job Board",
      url: "https://google.com",
      menuItems: [
        "Teams",
        "Locations",
        "Life At Company",
        "How We Hire",
        "Students",
        "Jobs",
      ],
    };
  },
  components: {
    ActionButton,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
