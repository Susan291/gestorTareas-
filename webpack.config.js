const path = require ('path');

module.exports = {
entry: './scr/index.js', //punto de entrada de la aplicacion 
output: {
    filename: 'bundle.js', // nombre de archivo de salida 
    path: path.resolve(_dirname, 'dist'), //carpeta de salida 
},
module: {
    rules: [
        {
            test:/\.css$/ , // Regex para identificar archivos CSS
            use: [ 'style-loader'], // loaders para procesar archivos CSS
            },
{
    test:/\.js$/, // Reguex para identificar archivos JS 
    exclude: /node_modules/ , // Excluir la carpeta node_modules
    use: {
        loader:'babel-loader', // Loader para pasar JS moderno  a JS mas antigua 
        options: { 
            presents: [ '@babel/preset-env'],
        },
    },
},
 ],
},
devtool:'source-map', // para generar source maps para facilitar la depuracion 
devServer: {
    contentBase: path.resolve(_dirname, 'dist'), //Carpeta principal del servidor 
    compress: true, // Habilitar la compresión gzip
    port: 9000, //Puerto del servidor de desarrollo 
},

};