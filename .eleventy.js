module.exports = function(eleventyConfig) {
    // Copiar arquivos de CSS, JS e imagens para o diretório de saída
    eleventyConfig.addPassthroughCopy("src/dev-assets/css");
    eleventyConfig.addPassthroughCopy("src/dev-assets/js");
    eleventyConfig.addPassthroughCopy("src/gestao-projeto/assets/img");

    // Outras configurações
    return {
      dir: {
        input: "src/dev-assets",  // Diretório de entrada
        output: "_site",          // Diretório de saída
        includes: "src/dev-assets/_includes", // Caminho correto para os includes
        layouts: "_layouts"       // Diretório de layouts
      }
    };
};
