let ele= document.querySelector('img')

let arr=[
        'https://images.unsplash.com/photo-1698243282692-616402a5d535?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1686727103601-68fdc6ee2d3d?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1698285439441-f162fb7e8d45?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1694430505232-0dfc6864d3e0?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDF8fHxlbnwwfHx8fHw%3D',
        'https://images.unsplash.com/photo-1693677291570-a0627c748774?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDB8fHxlbnwwfHx8fHw%3D'
]

let num=0
// change the attribute src

let stopid=  setInterval(function(){
    ele.setAttribute('src', arr[num])
    num=(num+1)% arr.length;
},3000)

setTimeout(function(){
    clearInterval(stopid)
},30000)
