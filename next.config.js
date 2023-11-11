module.exports = {

    // Can be safely removed in newer versions of Next.js
    future: {
  
      // by default, if you customize webpack config, they switch back to version 4.
      // Looks like backward compatibility approach.
      webpack5: true,   
    },
  
    webpack(config) {
      config.resolve.fallback = {
      };
      
      return config;
    },
};