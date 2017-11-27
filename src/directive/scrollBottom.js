let isScrollBottom = () => {
    let [
        scrollTop,
        winHeight,
        bodyHeight
    ] = [
        (document.body.scrollTop),
        (window.outerHeight),
        (document.body.clientHeight)
    ]

    if (bodyHeight-scrollTop <= winHeight+50) {
        return true
    } else {
        return false
    }
}

let scrollEventFn = ''

export default {
    inserted (el, binding) {
        scrollEventFn = (e)=>{
            if (isScrollBottom()){
                binding.value()
            }
        }
        document.addEventListener('scroll', scrollEventFn, false)
    },
    update () {
        console.log( 'aaa' )
    },
    unbind () {
        
        document.removeEventListener('scroll', scrollEventFn)
    }
}
  