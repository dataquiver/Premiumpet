import { useEffect, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop(){
  const { pathname, search, hash, key } = useLocation()

  const forceTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }

  useLayoutEffect(()=>{
    if(hash) return

    if('scrollRestoration' in window.history){
      window.history.scrollRestoration = 'manual'
    }

    requestAnimationFrame(()=>{
      forceTop()
    })
  }, [pathname, search, hash, key])

  useEffect(()=>{
    function onDocumentClick(event){
      if(event.defaultPrevented) return
      if(event.button !== 0) return
      if(event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      const anchor = event.target instanceof Element ? event.target.closest('a[href]') : null
      if(!anchor) return
      if(anchor.getAttribute('target') === '_blank') return

      const href = anchor.getAttribute('href')
      if(!href || href.startsWith('#')) return

      let url
      try{
        url = new URL(href, window.location.origin)
      }catch{
        return
      }

      if(url.origin !== window.location.origin) return
      if(url.hash) return

      requestAnimationFrame(()=>{
        forceTop()
      })
    }

    document.addEventListener('click', onDocumentClick, true)
    return ()=> document.removeEventListener('click', onDocumentClick, true)
  }, [])

  return null
}
