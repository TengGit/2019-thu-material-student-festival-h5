!function(t){t.nullTransistion=function(){return Animate.nullAnimation().start()},t.fadeIn=function(t,i){return t.style.opacity=0,new Animate(t.style,{opacity:1},i).setFunc(Animate.easeOut).start()},t.fadeOut=function(t,i){return t.style.opacity=1,new Animate(t.style,{opacity:0},i).setFunc(Animate.easeOut).start()},t.fadeOutAndDelete=function(t,i){return t.style.opacity=1,new Animate(t.style,{opacity:0},i).setFunc(Animate.easeOut).setData(t).then(function(t){t.data.parentNode.removeChild(t.data)}).start()}}(window)