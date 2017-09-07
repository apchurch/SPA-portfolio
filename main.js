var myRouter = new VueRouter({
    routes: [
        {
            path: '/', 
            component: {
                template:`<div><img class="box" src="http://i.imgur.com/xQPcqUi.jpg"/><div><h1 class="text-center">Andrew Church's Portfolio.</h1><p>Feel free to navigate around my website and visit my links!</p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p></div></div>`,

                created: function(){ console.log('created the main component')},
                destroyed: function(){ console.log('destroyed the main component')}
            }
        },
        {
            path: '/about',
            component: function(resolve, reject){
                $.get('/about.html', function(htmlFromServer){
                    resolve({
                        template: htmlFromServer
                    })
                })
            }
        },
        {
            path: '/contact',
            component: function(resolve, reject){
                $.get('/contact.html', function(htmlFromServer){
                    resolve({
                        template: htmlFromServer
                    })
                })
            }
        }
    ]
})




var mainVm = new Vue({
    el: '#app',
    router: myRouter,
    data: {
    }
})
