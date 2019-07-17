module.exports = {
  outputDir: "docs",
  css: {
    loaderOptions: {
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        // @import 'node_modules/bootstrap/scss/bootstrap';
        // @import 'node_modules/bootstrap-vue/src/index.scss';
        //

        data: `
          @import url("https://fonts.googleapis.com/css?family=Poppins:300,400,600&display=swap");
          @import "~@/styles/_vars.scss";
          `
      }
    }
  }
};
