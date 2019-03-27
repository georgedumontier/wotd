export function exit(node,nextOrPrev){
    if(nextOrPrev > 0){
        node.classList.remove("prev-defs-exit");
        node.classList.add("next-defs-exit");
    }
    else{
        node.classList.remove("next-defs-exit");
        node.classList.add("prev-defs-exit");
    }
}

export function exiting(node,nextOrPrev){
    if(nextOrPrev > 0){
        node.classList.remove("prev-defs-exit-active");
        node.classList.add("next-defs-exit-active");
    }
    else{
        node.classList.remove("next-defs-exit-active");
        node.classList.add("prev-defs-exit-active");
    }
}
export function enter(node,nextOrPrev){
    if(nextOrPrev > 0){
        node.classList.remove("prev-defs-enter");
        node.classList.add("next-defs-enter");
    }
    else{
        node.classList.remove("next-defs-enter");
        node.classList.add("prev-defs-enter");
    }
}
export function entering(node,nextOrPrev){
    if(nextOrPrev > 0){
        node.classList.remove("prev-defs-enter-active");
        node.classList.add("next-defs-enter-active");
    }
    else{
        node.classList.remove("prev-defs-enter");
        node.classList.add("next-defs-enter");
    }
}
