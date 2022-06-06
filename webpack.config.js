const path = require('path'); //permite saber donde vamos a trabajar o donde esta ubicado el proyecto, donde lo estemos utilizando(nuestra computadora, deun amigo o ejecutando en un servidor)
const HtmlWebpackPlugin = require('html-webpack-plugin'); //traemos el plugin
//de html
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//objeto donde ira cada configuracion necesaria para nuetsro proyecto
module.exports = {
    entry: './src/index.js', // punto de entrada
    output: { // lugar al que saldrán todos los archivos, donde vivira el proyecto una vez preparado
        path: path.resolve(__dirname, 'dist'), //en nuestro path, crea la carpeta dist(distribution)
        filename: 'bundle.js', // nombre del archivo js resultante
        publicPath: '/'
    },
    mode: "development",
    resolve: { // extensión de archivos con las que vamos a trabajar nuestro proyecto
        extensions: ['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@icons': path.resolve(__dirname, 'public/assets/icons/'),
            '@logos': path.resolve(__dirname, 'public/assets/logos/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@routes': path.resolve(__dirname, 'src/routes/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@context': path.resolve(__dirname, 'src/context/'),
        }
    },
    module: { // loaders para cada tipo de archivo
        rules: [ // reglas para usar
            {
                test: /\.(js|jsx)$/, // extensiones en las cuales actuará babel
                exclude: /node_modules/, // siempre excluir node modules 
                use: { // indicamos el loader
                    loader: 'babel-loader' // babel 
                }
            },
            {
                test: /\.html$/, // extensiones html
                use: [
                    {
                        loader: 'html-loader' // loader a usar
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpg|svg|jpeg|webp)$/,
	            /*aquí en test agregas la expresión regular para procesar los diferentes tipos de imagenes que tengas.*/
                type: 'asset/resource',
                generator: {
                filename: 'assets/pictures/[hash][ext]',
                /*aquí en filename pones la carpeta en donde quieres que se guarden tus imagenes (le agrego el [hash] para evitar problemas con el cache, además [ext] hace referencia a la extensión del archivo que se haya procesado).*/
                }
            }
        ]
    },
    plugins: [ // plugins 
        new HtmlWebpackPlugin({ // instanciamos el plugin para html 
            template: './public/index.html', // archivo raíz a transformar
            filename: './index.html' // el archivo resultante
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    //configuracion recomendada para trabajar en modo desarrollo para q el servidor funcione sin ningun problema
    devServer: { //devserver permite trabajar con los elementos clave para nuestro entorno de desarrollo local
        allowedHosts: path.join(__dirname, 'dist'), 
        compress: true,
        port: 3005,
        historyApiFallback: true
    }
}