import { mount, shallowMount } from "@vue/test-utils"; //simulate component outside the browser
import MainNav from "@/components/MainNav.vue";

// avoid closely coupled tests - should not care how implemented
describe("MainNav", () => {
  it("renders company name", async () => {
    const name = "Company Job Board";
    const wrapper = mount(MainNav);
    //console.log(wrapper.html());
    //console.log(wrapper.text());
    expect(wrapper.text()).toMatch(name); //name found in blobs of text
    /*
    await wrapper.setData({
      company: "Job Board"
    })
    expect(wrapper.text()).toMatch("Job Board"); 
    */
  });
  it("displays menu items for navigation", async () => {
    const menuItems = [
      "Teams",
      "Locations",
      "Life At Company",
      "How We Hire",
      "Students",
      "Jobs",
    ]
    const wrapper = mount(MainNav);
    // get DOMWrapper elements of <li> 
    //const elements = wrapper.findAll("li") // tightly coupled (knowledge implementation detail)
    const elements = wrapper.findAll("[data-test='main_nav_list_item']")
    const texts = elements.map(element => element.text())
    expect(texts).toEqual(menuItems)
  });
});
