(function(){
  // let input_field = '<div class="input-field col s6"><input id="email_addr" type="text" class="validate"><label for="email_addr">E-mail Address</label></div>'

  // setTimeout(function(){
  //   Materialize.toast('<h5 style="color:white;">Newsletter Sign-up!</h5> '+input_field, 32000)
  // }, 10000)

  let drop_the_menu = function(hover_elem, drop_elem) {

  }

  // if mouseenter nav-bar, set dropdown to hidden
  let nav = document.getElementById('nav')
  nav.addEventListener('mouseenter', () => {
    // document.getElementById('ddd').style.visibility = 'hidden'
  })

  document.getElementById('ddd').addEventListener('mouseleave', () => {
    // this.style.visibility = 'hidden'
    document.getElementById('ddd').style.visibility = 'hidden'
    // console.log(this)
  })



  // select the nav-items individually, then on mouseover, set the properties of the corresponding dropdown div
  // console.log('nav item 01 :', document.getElementById("nav-item-01"))
  console.log(
    document.getElementById("nav-item-01"),
    document.getElementById("nav-item-02"),
    document.getElementById("nav-item-03")
  )
  let service_nav = document.getElementById('nav-item-01')
  let about_nav = document.getElementById('nav-item-02')
  let collab_nav = document.getElementById('nav-item-03')

  let service_nav_drop = document.getElementById('navdrop01')
  let about_nav_drop = document.getElementById('navdrop02')
  let collab_nav_drop = document.getElementById('navdrop03')

  let nav_lst = {
    service: [
      service_nav,
      service_nav_drop
    ],
    about:[
      about_nav,
      about_nav_drop,
    ],
    collab:[
      collab_nav,
      collab_nav_drop
    ]
  }


  let drop_the_down = function(thas, n, d){
    let rect = thas.getBoundingClientRect()
    d.style.visibility = 'visible'
    d.style.backgroundColor = '#ffffff'
    d.width = n.getBoundingClientRect().width+'px'
    d.style.left = (n.getBoundingClientRect().left - n.getBoundingClientRect().width)+'px'
    d.style.top = n.getBoundingClientRect().bottom+'px'

    // if the mouse move out of the drop down, set it to hidden
    d.addEventListener('mouseleave', function(){
      d.style.visibility = 'hidden'
    })
    // n.addEventListener('click', function(){
    //   if (d.style.visibility == 'hidden') {
    //     d.style.visibility = 'visible'
    //   } else {
    //     d.style.visibility = 'hidden'
    //   }
    // })
  }
  nav_lst.service[0].addEventListener('click', function(){
    if (nav_lst.service[1].style.visibility == 'hidden') {

      drop_the_down(this, nav_lst.service[0], nav_lst.service[1])
    } else {
      nav_lst.service[1].style.visibility = 'hidden'
    }
  })
  nav_lst.about[0].addEventListener('click', function(){
    if ( nav_lst.about[1].style.visibility == 'hidden') {
      drop_the_down(this, nav_lst.about[0], nav_lst.about[1])
    } else {
      nav_lst.about[1].style.visibility = 'hidden'
    }
  })
  nav_lst.collab[0].addEventListener('click', function(){
    if (nav_lst.collab[1].style.visibility == 'hidden') {
      drop_the_down(this, nav_lst.collab[0], nav_lst.collab[1])
    } else {
      nav_lst.collab[1].style.visibility = 'hidden'
    }
  })

  // x(this, nav_lst.service[0], nav_lst.service[1])


  // for (x in nav_lst){
  //   nav_lst[x][1].addEventListener('mouseleave', function(){
  //     nav_lst.service[1].style.visibility = 'hidden'
  //   })
  // }
  // nav_lst.service[1].addEventListener('mouseout', function(){
  //   nav_lst.service[1].style.visibility = 'hidden'
  // })
  // nav_lst.push(service_nav, about_nav, collab_nav)
  console.log('nav lst :', nav_lst)

  // nav_lst.service.addEventListener('mouseover', function(){
  //   console.log('mouseover item 01')
  // })

  // get all nav items
  let nav_items = document.getElementsByClassName('nav-item')

  // loop through the nav items
  // for (let i = 0; i < nav_items.length;i++){
  //   console.log(nav_items[i].getBoundingClientRect())
  //
  //   nav_items[i].addEventListener("mouseover", function(){
  //     let rect = this.getBoundingClientRect()
  //     document.getElementById('ddd').style.visibility = 'visible'
  //     document.getElementById('ddd').style.backgroundColor = '#ffffff'
  //     document.getElementById('ddd').width = nav_items[i].getBoundingClientRect().width+'px'
  //     document.getElementById('ddd').style.left = (nav_items[i].getBoundingClientRect().left - nav_items[i].getBoundingClientRect().width)+'px'
  //     document.getElementById('ddd').style.top = nav_items[i].getBoundingClientRect().bottom+'px'
  //   })
  // }
})()
