
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['xxLpVGLUUz3W9tP5obHKh2'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  