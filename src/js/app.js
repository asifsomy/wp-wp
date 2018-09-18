// es6 to es5 using babel  | npm install -D babel-loader @babel/core @babel/preset-env webpack
// bootstrap
// scss | compile scss to its own css file | npm install -D css-loader sass-loader node-sass extract-loader file-loader postcss-cli postcss-loader autoprefixer cssnano
// add jquery | npm install jQuery
// @todo add vue
// combine js files | already being combined
// minify js files  | already being minified
// @todo setup environment
// watch

//es5 import
// let $ = require('jquery');
// let people = require('./js/people.js')

//es6 import after babel
import "../scss/app.scss"
import {default as $} from 'jquery'
import {default as people} from './people.js'
import {default as Vue} from 'vue'
import VueApp from './vue/App.vue'

$.each(people, function(key, val){
    $('body').append('<h1>' + key + ' - ' + people[key].name + '</h1>')
})

new Vue({
    el: '#app',
    render: h => h(VueApp)
})