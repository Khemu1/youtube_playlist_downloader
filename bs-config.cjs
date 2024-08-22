module.exports = {
  proxy: {
    target: "https://localhost:4000", // Proxy requests to  Express server
  },
  files: ["public/**/*.*"], // Watch these files for changes
  port: 3000, // Port BrowserSync runs on
  open: true, // Open
  ui: {
    port: 3001, // Port for BrowserSync UI
  },
};