window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [
      {url: "swagger.yaml", name: "Version One"},
      {url: "swaggerv2.yaml", name: "Version Two"},
      {url: "swaggerasync.yaml", name: "Async API"},
    ],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl,
      EditorPreviewAsyncAPIPlugin,
      SwaggerUIAdapterPlugin,
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
