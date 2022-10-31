$(document).ready(function () {
    $(window).scroll(function () { 
        let pos = $(window).scrollTop();
        let current = (pos / ($(document).outerHeight()- $(window).height()))*100;

        if(pos >=65){
            $(".menu").addClass("on")
        }else{
            $(".menu").removeClass("on")
        }

    });

    // $(".slide-info a").click(function (e) { 
    //     e.preventDefault()
    //     $(".slide-info .slide .img").attr("left","800px")
    // });

    // const swiper = new Swiper(".slide",{
    //     autoplay: {
    //         delay: 2000
    //     },
    //     slidesPerView: 1,
    //     loop: true,
    //     navigation:{
    //         nextEl : ".right",
    //         prevEl : ".left"
    //     },
    //     centeredSlides: true,
    //     freeMode: true,
    // })

    $(".character-info .position ul li").eq(0).addClass("on")
    $(".character-info .left .character").isotope(function(e){
        e.preventDefault()
        itemSelector : ".face"
    })
    $(".character-info .position ul li").click(function (e) { 
        e.preventDefault()
        let selector = $(this).attr("data-filter");
        let i = $(this).index();
        $(".character-info .position ul li").removeClass("on").eq(i).addClass("on");
        // $(".character-info .left .character").removeClass("on").eq(i).addClass("on");
        $(".character-info .left .character").isotope({
            filter : selector
        })
        
    });
    $(".character-info .left .character .face").click(function(){
        let i = $(this).index();
        let prevImg = $(this).find("img").attr("src").slice(12)
        // 현재 클릭한 페이스 밑에 있는 이미지 태그의 주소를 가져와 12글자를 잘라냄
        let prevImg2 = prevImg.slice(0,-4)

        // 잘라낸 이미지 주소에서 확장자를 제거
        
        $(".character-info .right .right-wrap img").attr("src", `images/body/${prevImg2}.png`)

        // 해당 오른쪽 리스트에 이미지 주소를 변경
    })

    // $(".left .character").eq(0).click({
    //     $(".right-wrap").attr("src","images/body/J.jpg")
    // })

    
});