export default ({ Vue }) => {
    Vue.component("NotFound", () => import("./components/MyNotFound.vue"));
};