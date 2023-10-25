


const nav_pop = {
  hidden:{ x:100, opacity:0,},
  visible:{ x:0, opacity:1,}
}

const hero_animate = {
  hidden:{
    y:-100,
     opacity: 0,
      scale: 0.5
    },
  visible:{
    y:0,
    opacity:1,
    scale:1,
    transition:{
       duration: 0.5,
       delayChildren:0.2,
       staggerChildren: 0.2
        }

  }

}
const boxes = {
  hidden:{
    y:-10,
    opacity: 0,
    scale: 0.5
   },
  visible:{
     y:0,
     opacity:1,
     scale:1,
     transition:{
      scale: {
        type: "spring",
        damping: 10,
        stiffness: 70,
        restDelta: 0.001},
      }

    
  }
}

const boxes_2 = {
  hidden:{
    y:-10,
    opacity: 0,
    scale: 0.5
   },
  visible:{
     y:0,
     opacity:1,
     scale:1,
     transition:{
      scale: {
        type: "spring",
        damping: 10,
        stiffness: 70,
        restDelta: 0.001},
      }

    
  }
}
const title_animate = {
  hidden:{x:-100, opacity: 0, scale: 0.5 },
  visible:{
     x:0,
     opacity: 1,
      scale: 1 ,
      transition:{
        duration:0.5,
        ease: "easeOut",
      }
  
  }
}

const circle = {
  animate:{
    scale:[1,1.3,0.3,1,1],
    borderRadius:["20%","20%","50%","20%","20%"],
    rotate:[0,270,270,270,270],
    transition:{
      repeat:Infinity,
      duration:2,
      delayChildren:0.5,
      staggerChildren: 0.6
         }
       },

    exit:{
       opacity:0
    }
}

const circle_mem ={
animate:{
  scale:[1,1.3,0.3,1,1],
  transition:{
    repeat:Infinity,
    duration:3
  }
},
exit:{
  opacity:0
}
}

const show_box = {
  hidden:{
    x:-200,
    transition:{ 
        type: "spring",
        damping: 10,
        stiffness: 70,
        restDelta: 0.001     
      }
    },

  visible:{
    x:0,
    transition:{
        type: "spring",
        damping: 10,
        stiffness: 70,
        restDelta: 0.001
      }
  }
}

const filter_animate = {
  hidden:{
    y:-100,
    opacity:0
  },
  visible:{
    y:0,
    opacity:1,
    transition:{
      type:'tween',
      duration:0.5
     }
  }
}


const itemVariants = {
    open:{
      height:"100%",
      transition: {
         type:'tween',
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    closed:{
     height:105,
     transition:{
      type:'tween',
      when: "afterChildren",
     }
    }

};

const  childVariants={
    open: { y: 10, opacity: 1 },
    closed: { y: 0, opacity: 0 },
}

export {
    nav_pop,
    hero_animate,
    boxes,
    title_animate,
    circle,
    circle_mem,
    boxes_2,
    show_box,
    filter_animate,
   itemVariants,
   childVariants
}