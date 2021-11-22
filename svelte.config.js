import preprocess from 'svelte-preprocess';
import path from 'path';
/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [
        preprocess({
            postcss: true
        })
    ],

    kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte',

        floc: false,
        vite: {
            resolve: {
                alias: {
                    $components: path.resolve('src/components'),
                    $routes: path.resolve('src/routes'),
                    $store: path.resolve('src/store'),
                    $layout: path.resolve('src/layout')
                }
            }
        }
    }
};

export default config;