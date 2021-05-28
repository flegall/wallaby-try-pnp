module.exports = () => {
  return {
      // Setup auto detect based on jest config
      autoDetect: true,
      testFramework: {
          configFile: '../../jest-config.js'
      },

      // Ensure not all tests are run on start
      addModifiedTestFileToExclusiveTestRun: false
  };
};
