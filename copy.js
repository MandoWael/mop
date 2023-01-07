console.clear();
mop.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);
mop.defaults({ ease: "none" });

let bodyEl = document.body;

function intro() {
    ///SHIP///

    let shipTofish = mop.timeline();

    shipTofish
        .set("#esa", { opacity: 0 })
        .from("#ship", { x: -100, duration: 2.5 })
        .from("#top-hill", { x: 48, duration: 2 }, "<")
        // .from(bodyEl,{scale: 1.5, transformOrigin: "top", duration: 2.6},"<")
        .to("#esa", { opacity: 1 });

    let fishingAction = mop
        .timeline({
            defaults: { duration: 1 },
            scrollTrigger: {
                trigger: "#svg",
                scrub: true,
                start: "top top",
                end: "bottom bottom",
                // markers: true,
            },
        })
        .set("#esa-rope", { drawSVG: 0 }, 0)
        .from("#esa-rope", { drawSVG: 0 }, 0)
        .to("#esa", { y: 2020 }, 0);

    ///SMOKE///

    let smoke = mop.timeline({ repeat: -1 });
    smoke
        .from(".ship-smoke", {
            duration: 2,
            scale: 0,
            transformOrigin: "center center",
            stagger: { each: 0.6 },
        })
        .to(".ship-smoke", {
            opacity: 0,
        });

    ///MOON///

    let moon = mop.timeline();

    moon.set(".moon-el", {
        scale: 0.2,
        opacity: 0,
        transformOrigin: "center center",
    })
        .from(
            ".moon-main",
            {
                duration: 2,
                transformOrigin: "center center",
                scale: 0.2,
            },
            0
        )
        .to(
            ".moon-el",
            {
                scale: 1,
                opacity: 1,
                transformOrigin: "center center",
                duration: 2,
                stagger: {
                    each: 0.2,
                },
            },
            0
        );

    ///Fishes///
    function fishesMove() {
        let x = 0;
        let mx = 0;
        let xDis = 80;
        let topBtm = "top bottom";

        let bFishesTop = mop.timeline({
            scrollTrigger: {
                trigger: "#small-fishes-right",
                start: topBtm,
            },
        });
        let bFishesMid = mop.timeline({
            scrollTrigger: {
                trigger: "#small-fishes-left",
                start: topBtm,
            },
        });
        let sFishesTop = mop.timeline({
            scrollTrigger: {
                trigger: "#small-fishes-right1, #small-fishes-right2",
                start: topBtm,
            },
        });
        let sFishesBtm = mop.timeline({
            scrollTrigger: {
                trigger: "#small-fishes-left1",
                start: topBtm,
            },
        });
        for (let i = 0; i < 15; i++) {
            x += xDis;
            mx -= xDis;
            bFishesTop
                .set("#small-fishes-right", { x: -200 })
                .set(".b-fishes-top", { x: x })
                .to(".b-fishes-top", {
                    X: x + xDis,
                    ease: "power3.out",
                    duration: 1,
                    delay: 0.5,
                    stagger: { each: 0.01 },
                });
        }
    }
}
