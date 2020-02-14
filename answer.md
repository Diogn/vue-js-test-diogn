What do you know about Vue ?
    A Framework based on javascript, yang menyederhanakan pembuatan sebuah aplikasi.
    mis. (( index.vue )) bisa mengolah secara langsung [ view + logic + style ], dan karenanya pembuatan sebuah aplikasi berdasar pada component based, akan lebih efisien karena pemeriksaan per satuan file.

How to define data in Vue ?
    In Vue, data can be define inside <script></script> tag, setelah element [ "el:#app" ] di deklarasikan terlebih dahulu, untuk merunjuk kepada apa script ini akan di gunakan.
    mis. 
        <script>
        new Vue({       // Vue Instance
            el: '#app',
            data: {
                greet: 'Hello World!'
                }
            })
        </script>

In Vue What lifecycle you can run after instance created ?
    event, injection & reactivity, mounting data, render template.

How to bind vue property to page ?
    you can bind vue property by adding the name of the page into vue script, then adding the props after the name of the page.

    Vue.component('blog-post', {
        // camelCase in JavaScript
        props: ['postTitle'],
        template: '<h3>{{ postTitle }}</h3>'
    })

    <!-- kebab-case in HTML -->
    <blog-post post-title="hello!"></blog-post>

How to trigger an event and handling it in Vue ?
    bisa menggunakan "v-on" directive to listen to DOM events,
    then after DOM events listened, script running to some function for the feedback in methods or computed.

What usage of Computed Properties ?
    Computed properties used for complex logic, that cant be handled by simple methods.
    data atau properties yang banyak better be handled by computed.

What usage of Watch Properties ?
    untuk mengawasi (observe) / memantau properti yang ada dalam script dan di render pada template, 
    then react to that changes. it's useful to make changed of some props based on some condition.

How to handling input in Vue ?
    in input, we can use v-model in template html element and the data will be binded to input area.
    a two way data binding, that ignores, initial data, selected or checked attributes found in form elements.

How to make class html tag receive property ?
    vue can binding class property, 
    mis. in template:
    <div v-bind:class="{ active: isActive }"></div>

    in script:
    data: {
        isActive: true,
        isOff: false
    }
    then data will be regenerated to the binded classes.

How to make conditional rendering in vue ?
    vue provided a v-if - v-else to rendering a view in template. if condition is true, template will be rendered, or else will be rendered if false condition emerged.

How we can render list in vue ?
    vue provided a v-for command to render a list of data array in template view.

If we rendering list there must be bind key tag describe usage of it ?
    bind key in v-for used for getting a hint for list of array that would be rendered, 
    bila aplikasi semakin besar dan render list semakin banyak, bind key can be like a unique marker so it can be distinguish from another list.

How we can handling input in vue ?
    in input, we can use v-model in template html element and the data will be binded to input area.
    a two way data binding, that ignores, initial data, selected or checked attributes found in form elements.

What is props describe it ?
    props can be a listed of array, as an object contain the prop names and value of it.

What is component in vue ?
    a reusable instance that can be recalling to another instance with a unique name each of it.
    mis. <button-counter>
        <alert-message>

How to pass property from parent component to child component ?
    in script section, declare props[] of what would be use.

What is Vuex ?
    a state management pattern & library for vue.js application, consist of state -> actions -> mutations. 
    a one way data flow.