/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"scroll_activated.js",
            "https://code.jquery.com/jquery-1.11.1.min.js",
            js+"modernizr.mobiletouch.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "both",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bg_sky2',
                            symbolName: 'bg_sky',
                            type: 'rect',
                            rect: ['-1174px', '0px', '692', '400', 'auto', 'auto']
                        },
                        {
                            id: 'clouds',
                            symbolName: 'clouds',
                            type: 'rect',
                            rect: ['0px', '0px', '138', '55', 'auto', 'auto']
                        },
                        {
                            id: 'clouds_med',
                            symbolName: 'clouds_med',
                            type: 'rect',
                            rect: ['0px', '151px', '88', '35', 'auto', 'auto']
                        },
                        {
                            id: 'bg_oceanCopy',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '313px', '899px', '87px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bg_ocean.png",'0px','0px']
                        },
                        {
                            id: 'bg_ocean',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '313px', '899px', '87px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bg_ocean.png",'0px','0px']
                        },
                        {
                            id: 'mg_lc_rock_2',
                            display: 'none',
                            type: 'image',
                            rect: ['905px', '292px', '86px', '97px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mg_lc_rock_2.png",'0px','0px']
                        },
                        {
                            id: 'mg_lc_waterCopy',
                            display: 'none',
                            type: 'image',
                            rect: ['903px', '383px', '999px', '19px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mg_lc_water.png",'0px','0px']
                        },
                        {
                            id: 'mg_lc_water',
                            display: 'none',
                            type: 'image',
                            rect: ['903px', '383px', '999px', '19px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mg_lc_water.png",'0px','0px']
                        },
                        {
                            id: 'gr_signatures',
                            type: 'image',
                            rect: ['278px', '89px', '342px', '126px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gr_signatures.png",'0px','0px']
                        },
                        {
                            id: 'mg_lc_rock_3',
                            display: 'none',
                            type: 'image',
                            rect: ['905px', '175px', '342px', '226px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mg_lc_rock_3.png",'0px','0px']
                        },
                        {
                            id: 'bg_mountain_2',
                            display: 'none',
                            type: 'image',
                            rect: ['900px', '279px', '332px', '121px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bg_mountain_2.png",'0px','0px']
                        },
                        {
                            id: 'gr_boat_4',
                            display: 'none',
                            type: 'image',
                            rect: ['984px', '338px', '32px', '31px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"gr_boat_4.png",'0px','0px']
                        },
                        {
                            id: 'gr_boat_3',
                            display: 'none',
                            type: 'image',
                            rect: ['905px', '315px', '37px', '55px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"gr_boat_3.png",'0px','0px']
                        },
                        {
                            id: 'gr_boat_2',
                            display: 'none',
                            type: 'image',
                            rect: ['907px', '280px', '96px', '91px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"gr_boat_2.png",'0px','0px']
                        },
                        {
                            id: 'mg_st_waterCopy',
                            display: 'none',
                            type: 'image',
                            rect: ['-901px', '279px', '899px', '121px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mg_st_water.png",'0px','0px']
                        },
                        {
                            id: 'mg_st_water',
                            display: 'none',
                            type: 'image',
                            rect: ['-901px', '279px', '899px', '121px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mg_st_water.png",'0px','0px']
                        },
                        {
                            id: 'mg_st_green_hill_2',
                            display: 'none',
                            type: 'image',
                            rect: ['-308px', '317px', '302px', '85px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mg_st_green_hill_2.png",'0px','0px']
                        },
                        {
                            id: 'mg_st_green_hill_1',
                            display: 'none',
                            type: 'image',
                            rect: ['903px', '257px', '339px', '144px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mg_st_green_hill_1.png",'0px','0px']
                        },
                        {
                            id: 'gr_bird_flock',
                            display: 'none',
                            type: 'image',
                            rect: ['-339px', '200px', '318px', '67px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"gr_bird_flock.png",'0px','0px']
                        },
                        {
                            id: 'fg_st_sand_2',
                            display: 'none',
                            type: 'image',
                            rect: ['-265px', '259px', '265px', '144px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fg_st_sand_2.png",'0px','0px']
                        },
                        {
                            id: 'fg_st_sand_1',
                            display: 'none',
                            type: 'image',
                            rect: ['901px', '280px', '466px', '121px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fg_st_sand_1.png",'0px','0px']
                        },
                        {
                            id: 'bg_mountain',
                            display: 'none',
                            type: 'image',
                            rect: ['-467px', '162px', '464px', '242px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bg_mountain.png",'0px','0px']
                        },
                        {
                            id: 'mg_cr_hill',
                            display: 'none',
                            type: 'image',
                            rect: ['901px', '260px', '848px', '140px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mg_cr_hill.png",'0px','0px']
                        },
                        {
                            id: 'gr_red_bird',
                            display: 'none',
                            type: 'image',
                            rect: ['905px', '178px', '35px', '47px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"gr_red_bird.png",'0px','0px']
                        },
                        {
                            id: 'mg_cr_green_hill_3',
                            display: 'none',
                            type: 'image',
                            rect: ['-415px', '288px', '414px', '122px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mg_cr_green_hill_3.png",'0px','0px']
                        },
                        {
                            id: 'mid_cr',
                            display: 'none',
                            type: 'image',
                            rect: ['-934px', '211px', '930px', '190px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mid_cr.png",'0px','0px']
                        },
                        {
                            id: 'mg_cr_water_hills2',
                            display: 'none',
                            type: 'image',
                            rect: ['-1170px', '320px', '1164px', '82px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mg_cr_water_hills.png",'0px','0px']
                        },
                        {
                            id: 'mg_cr_water_hills2Copy',
                            display: 'none',
                            type: 'image',
                            rect: ['-1170px', '320px', '1164px', '82px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mg_cr_water_hills.png",'0px','0px']
                        },
                        {
                            id: 'fg_cr_sand_grass',
                            display: 'none',
                            type: 'image',
                            rect: ['-479px', '310px', '480px', '101px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fg_cr_sand_grass.png",'0px','0px']
                        },
                        {
                            id: 'bg_city',
                            display: 'block',
                            type: 'image',
                            rect: ['-49px', '215px', '577px', '185px', 'auto', 'auto'],
                            overflow: 'visible',
                            fill: ["rgba(0,0,0,0)",im+"bg_city.png",'0px','0px']
                        },
                        {
                            id: 'mg_buildings',
                            display: 'block',
                            type: 'image',
                            rect: ['-393px', '215px', '334px', '186px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mg_buildings.png",'0px','0px']
                        },
                        {
                            id: 'mg_city_side',
                            display: 'block',
                            type: 'image',
                            rect: ['-418px', '216px', '903px', '186px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mg_city_side.png",'0px','0px']
                        },
                        {
                            id: 'fg_city_side',
                            display: 'block',
                            type: 'image',
                            rect: ['-427px', '310px', '429px', '91px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fg_city_side.png",'0px','0px']
                        },
                        {
                            id: 'fg_city_sideCopy',
                            display: 'none',
                            type: 'image',
                            rect: ['-433px', '310px', '429px', '91px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fg_city_side.png",'0px','0px']
                        },
                        {
                            id: 'fg-cr-greenhill',
                            display: 'none',
                            type: 'image',
                            rect: ['-352px', '320px', '345px', '82px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fg-cr-greenhill.png",'0px','0px']
                        },
                        {
                            id: 'gr_snowfall',
                            display: 'block',
                            type: 'image',
                            rect: ['-791px', '0', '789px', '257px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"gr_snowfall.png",'0px','0px']
                        },
                        {
                            id: 'gr_plane',
                            type: 'image',
                            rect: ['190px', '90px', '68px', '61px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"gr_plane.png",'0px','0px']
                        },
                        {
                            id: 'gr_banner',
                            type: 'image',
                            rect: ['49px', '30px', '360px', '55px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"gr_banner.png",'0px','0px']
                        },
                        {
                            id: 'text_scroll',
                            type: 'text',
                            rect: ['186px', '192px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '1',
                            text: "(Click to start)",
                            align: "left",
                            userClass: "scroll_message",
                            font: ['Verdana, Geneva, sans-serif', [10, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'bottom_bar',
                            type: 'image',
                            rect: ['0', '400px', '900px', '50px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bottom_bar.png",'0px','0px']
                        },
                        {
                            id: 'bttn_next',
                            display: 'block',
                            type: 'image',
                            rect: ['826px', '415px', '15px', '20px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bttn_next.png",'0px','0px']
                        },
                        {
                            id: 'bttn_prev',
                            display: 'none',
                            type: 'image',
                            rect: ['780px', '415px', '15px', '20px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bttn_prev.png",'0px','0px']
                        },
                        {
                            id: 'navigate',
                            display: 'none',
                            type: 'text',
                            rect: ['569px', '417px', '198px', '16px', 'auto', 'auto'],
                            text: "Navigate to your next destination",
                            font: ['Verdana, Geneva, sans-serif', [11, "px"], "rgba(133,133,133,1.00)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'bttn_restart',
                            display: 'none',
                            type: 'image',
                            rect: ['806px', '409px', '86px', '31px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bttn_restart.png",'0px','0px']
                        },
                        {
                            id: 'btn_swipe_left',
                            display: 'block',
                            type: 'rect',
                            rect: ['103px', '0px', '692px', '400px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            userClass: "touchElement"
                        },
                        {
                            id: 'btn_swipe_right',
                            display: 'none',
                            type: 'rect',
                            rect: ['103px', '0px', '692px', '400px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            userClass: "touchElement"
                        },
                        {
                            id: 'btn_swipe_both',
                            display: 'none',
                            type: 'rect',
                            rect: ['103px', '0px', '692px', '400px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            userClass: "touchElement"
                        },
                        {
                            id: 'bttn_fly',
                            display: 'block',
                            type: 'image',
                            rect: ['174px', '160px', '101px', '29px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"bttn_fly.png",'0px','0px']
                        },
                        {
                            id: 'bttn_again',
                            display: 'none',
                            type: 'image',
                            rect: ['402px', '234px', '104px', '32px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bttn_again.png",'0px','0px']
                        },
                        {
                            id: 'background_audio',
                            display: 'none',
                            volume: '0.36',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            autoplay: 'autoplay',
                            loop: 'loop',
                            source: [aud+"background.mp3",aud+"background.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'collection',
                            type: 'image',
                            rect: ['12px', '412px', '373px', '25px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"collection.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '900px', '450px', 'auto', 'auto'],
                            sizeRange: ['','900px','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 30291.083,
                    autoPlay: true,
                    labels: {
                        "screen begin": 100,
                        "screen_cr": 5123,
                        "screen_st": 10000,
                        "screen_lc": 16000
                    },
                    data: [
                        [
                            "eid399",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mg_cr_hill}",
                            'none',
                            'none'
                        ],
                        [
                            "eid344",
                            "display",
                            2064,
                            0,
                            "linear",
                            "${mg_cr_hill}",
                            'none',
                            'block'
                        ],
                        [
                            "eid337",
                            "display",
                            7649,
                            0,
                            "linear",
                            "${mg_cr_hill}",
                            'block',
                            'none'
                        ],
                        [
                            "eid33",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bg_mountain}",
                            'none',
                            'none'
                        ],
                        [
                            "eid34",
                            "display",
                            2587,
                            0,
                            "linear",
                            "${bg_mountain}",
                            'none',
                            'block'
                        ],
                        [
                            "eid37",
                            "display",
                            7337,
                            0,
                            "linear",
                            "${bg_mountain}",
                            'block',
                            'none'
                        ],
                        [
                            "eid61",
                            "left",
                            100,
                            1900,
                            "linear",
                            "${fg_city_side}",
                            '580px',
                            '-427px'
                        ],
                        [
                            "eid366",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mg_st_waterCopy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid357",
                            "display",
                            5186,
                            0,
                            "linear",
                            "${mg_st_waterCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid356",
                            "display",
                            9936,
                            0,
                            "linear",
                            "${mg_st_waterCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid82",
                            "left",
                            2064,
                            2575,
                            "linear",
                            "${mg_cr_hill}",
                            '901px',
                            '812px'
                        ],
                        [
                            "eid80",
                            "left",
                            4639,
                            3010,
                            "linear",
                            "${mg_cr_hill}",
                            '812px',
                            '-846px'
                        ],
                        [
                            "eid403",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bg_oceanCopy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid404",
                            "display",
                            9886,
                            0,
                            "linear",
                            "${bg_oceanCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid405",
                            "display",
                            14593,
                            0,
                            "linear",
                            "${bg_oceanCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid276",
                            "left",
                            100,
                            4810,
                            "linear",
                            "${gr_snowfall}",
                            '0px',
                            '-791px'
                        ],
                        [
                            "eid385",
                            "display",
                            0,
                            0,
                            "linear",
                            "${fg-cr-greenhill}",
                            'none',
                            'none'
                        ],
                        [
                            "eid391",
                            "display",
                            1895,
                            0,
                            "linear",
                            "${fg-cr-greenhill}",
                            'none',
                            'block'
                        ],
                        [
                            "eid327",
                            "display",
                            4445,
                            0,
                            "linear",
                            "${fg-cr-greenhill}",
                            'block',
                            'none'
                        ],
                        [
                            "eid315",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bttn_restart}",
                            'none',
                            'none'
                        ],
                        [
                            "eid316",
                            "display",
                            15514,
                            0,
                            "linear",
                            "${bttn_restart}",
                            'none',
                            'block'
                        ],
                        [
                            "eid179",
                            "display",
                            153,
                            0,
                            "linear",
                            "${btn_swipe_left}",
                            'block',
                            'none'
                        ],
                        [
                            "eid28",
                            "left",
                            100,
                            4900,
                            "linear",
                            "${bg_city}",
                            '-49px',
                            '-580px'
                        ],
                        [
                            "eid330",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${mg_buildings}",
                            'block',
                            'none'
                        ],
                        [
                            "eid252",
                            "left",
                            9354,
                            646,
                            "linear",
                            "${gr_bird_flock}",
                            '907px',
                            '518px'
                        ],
                        [
                            "eid255",
                            "left",
                            10000,
                            1500,
                            "linear",
                            "${gr_bird_flock}",
                            '518px',
                            '-339px'
                        ],
                        [
                            "eid392",
                            "display",
                            0,
                            0,
                            "linear",
                            "${fg_city_sideCopy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid393",
                            "display",
                            799,
                            0,
                            "linear",
                            "${fg_city_sideCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid329",
                            "display",
                            5062,
                            0,
                            "linear",
                            "${fg_city_sideCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid394",
                            "display",
                            0,
                            0,
                            "linear",
                            "${fg_cr_sand_grass}",
                            'none',
                            'none'
                        ],
                        [
                            "eid338",
                            "display",
                            4910,
                            0,
                            "linear",
                            "${fg_cr_sand_grass}",
                            'none',
                            'block'
                        ],
                        [
                            "eid331",
                            "display",
                            6105,
                            0,
                            "linear",
                            "${fg_cr_sand_grass}",
                            'block',
                            'none'
                        ],
                        [
                            "eid190",
                            "left",
                            9786,
                            2364,
                            "linear",
                            "${mg_lc_waterCopy}",
                            '903px',
                            '-99px'
                        ],
                        [
                            "eid192",
                            "left",
                            12150,
                            2364,
                            "linear",
                            "${mg_lc_waterCopy}",
                            '-99px',
                            '-1000px'
                        ],
                        [
                            "eid231",
                            "opacity",
                            14514,
                            1000,
                            "linear",
                            "${gr_signatures}",
                            '0',
                            '1'
                        ],
                        [
                            "eid395",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mg_cr_water_hills2Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid339",
                            "display",
                            5123,
                            0,
                            "linear",
                            "${mg_cr_water_hills2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid336",
                            "display",
                            7135,
                            0,
                            "linear",
                            "${mg_cr_water_hills2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid396",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mg_cr_water_hills2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid341",
                            "display",
                            4250,
                            0,
                            "linear",
                            "${mg_cr_water_hills2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid332",
                            "display",
                            6263,
                            0,
                            "linear",
                            "${mg_cr_water_hills2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid210",
                            "display",
                            0,
                            0,
                            "linear",
                            "${gr_red_bird}",
                            'none',
                            'none'
                        ],
                        [
                            "eid202",
                            "display",
                            3911,
                            0,
                            "linear",
                            "${gr_red_bird}",
                            'none',
                            'block'
                        ],
                        [
                            "eid203",
                            "display",
                            5123,
                            0,
                            "linear",
                            "${gr_red_bird}",
                            'block',
                            'block'
                        ],
                        [
                            "eid204",
                            "display",
                            6105,
                            0,
                            "linear",
                            "${gr_red_bird}",
                            'block',
                            'none'
                        ],
                        [
                            "eid32",
                            "left",
                            2587,
                            2536,
                            "linear",
                            "${bg_mountain}",
                            '900px',
                            '436px'
                        ],
                        [
                            "eid36",
                            "left",
                            5123,
                            2214,
                            "linear",
                            "${bg_mountain}",
                            '436px',
                            '-467px'
                        ],
                        [
                            "eid184",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_swipe_right}",
                            'none',
                            'none'
                        ],
                        [
                            "eid182",
                            "display",
                            153,
                            0,
                            "linear",
                            "${btn_swipe_right}",
                            'none',
                            'none'
                        ],
                        [
                            "eid183",
                            "display",
                            15894,
                            0,
                            "linear",
                            "${btn_swipe_right}",
                            'none',
                            'block'
                        ],
                        [
                            "eid220",
                            "left",
                            8500,
                            1500,
                            "linear",
                            "${gr_boat_3}",
                            '905px',
                            '195px'
                        ],
                        [
                            "eid222",
                            "left",
                            10000,
                            1000,
                            "linear",
                            "${gr_boat_3}",
                            '195px',
                            '-57px'
                        ],
                        [
                            "eid159",
                            "left",
                            5186,
                            2463,
                            "linear",
                            "${mg_st_waterCopy}",
                            '902px',
                            '-79px'
                        ],
                        [
                            "eid160",
                            "left",
                            7649,
                            2287,
                            "linear",
                            "${mg_st_waterCopy}",
                            '-79px',
                            '-901px'
                        ],
                        [
                            "eid326",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${mg_city_side}",
                            'block',
                            'none'
                        ],
                        [
                            "eid209",
                            "display",
                            0,
                            0,
                            "linear",
                            "${gr_bird_flock}",
                            'none',
                            'none'
                        ],
                        [
                            "eid208",
                            "display",
                            9354,
                            0,
                            "linear",
                            "${gr_bird_flock}",
                            'none',
                            'block'
                        ],
                        [
                            "eid211",
                            "display",
                            11500,
                            0,
                            "linear",
                            "${gr_bird_flock}",
                            'block',
                            'none'
                        ],
                        [
                            "eid132",
                            "left",
                            12150,
                            2364,
                            "linear",
                            "${mg_lc_water}",
                            '903px',
                            '-99px'
                        ],
                        [
                            "eid367",
                            "display",
                            0,
                            0,
                            "linear",
                            "${gr_boat_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid359",
                            "display",
                            8856,
                            0,
                            "linear",
                            "${gr_boat_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid358",
                            "display",
                            10500,
                            0,
                            "linear",
                            "${gr_boat_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid94",
                            "left",
                            7500,
                            2463,
                            "linear",
                            "${mg_st_water}",
                            '902px',
                            '-79px'
                        ],
                        [
                            "eid113",
                            "left",
                            9963,
                            2287,
                            "linear",
                            "${mg_st_water}",
                            '-79px',
                            '-901px'
                        ],
                        [
                            "eid49",
                            "left",
                            12200,
                            2314,
                            "linear",
                            "${bg_ocean}",
                            '900px',
                            '0px'
                        ],
                        [
                            "eid400",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bg_ocean}",
                            'none',
                            'none'
                        ],
                        [
                            "eid401",
                            "display",
                            12200,
                            0,
                            "linear",
                            "${bg_ocean}",
                            'none',
                            'block'
                        ],
                        [
                            "eid124",
                            "left",
                            7250,
                            2750,
                            "linear",
                            "${mg_st_green_hill_1}",
                            '903px',
                            '-204px'
                        ],
                        [
                            "eid122",
                            "left",
                            10000,
                            500,
                            "linear",
                            "${mg_st_green_hill_1}",
                            '-204px',
                            '-344px'
                        ],
                        [
                            "eid29",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${bg_city}",
                            'block',
                            'none'
                        ],
                        [
                            "eid398",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mg_cr_green_hill_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid343",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${mg_cr_green_hill_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid334",
                            "display",
                            6192,
                            0,
                            "linear",
                            "${mg_cr_green_hill_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14",
                            "left",
                            100,
                            14414,
                            "linear",
                            "${bg_sky2}",
                            '0px',
                            '-1174px'
                        ],
                        [
                            "eid43",
                            "left",
                            7414,
                            2472,
                            "linear",
                            "${bg_mountain_2}",
                            '900px',
                            '605px'
                        ],
                        [
                            "eid46",
                            "left",
                            9886,
                            2472,
                            "linear",
                            "${bg_mountain_2}",
                            '605px',
                            '-333px'
                        ],
                        [
                            "eid142",
                            "left",
                            1895,
                            2550,
                            "linear",
                            "${fg-cr-greenhill}",
                            '902px',
                            '-352px'
                        ],
                        [
                            "eid309",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bttn_prev}",
                            'none',
                            'none'
                        ],
                        [
                            "eid310",
                            "display",
                            5046,
                            0,
                            "linear",
                            "${bttn_prev}",
                            'none',
                            'block'
                        ],
                        [
                            "eid311",
                            "display",
                            5186,
                            0,
                            "linear",
                            "${bttn_prev}",
                            'block',
                            'none'
                        ],
                        [
                            "eid312",
                            "display",
                            9936,
                            0,
                            "linear",
                            "${bttn_prev}",
                            'none',
                            'block'
                        ],
                        [
                            "eid313",
                            "display",
                            10053,
                            0,
                            "linear",
                            "${bttn_prev}",
                            'block',
                            'none'
                        ],
                        [
                            "eid314",
                            "display",
                            15514,
                            0,
                            "linear",
                            "${bttn_prev}",
                            'none',
                            'block'
                        ],
                        [
                            "eid105",
                            "left",
                            8557,
                            1443,
                            "linear",
                            "${fg_st_sand_1}",
                            '901px',
                            '-276px'
                        ],
                        [
                            "eid109",
                            "left",
                            10000,
                            574,
                            "linear",
                            "${fg_st_sand_1}",
                            '-276px',
                            '-487px'
                        ],
                        [
                            "eid291",
                            "display",
                            0,
                            0,
                            "linear",
                            "${navigate}",
                            'none',
                            'none'
                        ],
                        [
                            "eid287",
                            "display",
                            5046,
                            0,
                            "linear",
                            "${navigate}",
                            'none',
                            'block'
                        ],
                        [
                            "eid288",
                            "display",
                            5186,
                            0,
                            "linear",
                            "${navigate}",
                            'block',
                            'none'
                        ],
                        [
                            "eid289",
                            "display",
                            9936,
                            0,
                            "linear",
                            "${navigate}",
                            'none',
                            'block'
                        ],
                        [
                            "eid290",
                            "display",
                            10053,
                            0,
                            "linear",
                            "${navigate}",
                            'block',
                            'none'
                        ],
                        [
                            "eid66",
                            "left",
                            2864,
                            2259,
                            "linear",
                            "${mid_cr}",
                            '898px',
                            '-8px'
                        ],
                        [
                            "eid68",
                            "left",
                            5123,
                            1700,
                            "linear",
                            "${mid_cr}",
                            '-8px',
                            '-934px'
                        ],
                        [
                            "eid324",
                            "display",
                            500,
                            0,
                            "linear",
                            "${bttn_fly}",
                            'block',
                            'none'
                        ],
                        [
                            "eid180",
                            "display",
                            153,
                            0,
                            "linear",
                            "${btn_swipe_both}",
                            'none',
                            'block'
                        ],
                        [
                            "eid278",
                            "display",
                            15894,
                            0,
                            "linear",
                            "${btn_swipe_both}",
                            'block',
                            'none'
                        ],
                        [
                            "eid56",
                            "left",
                            100,
                            2542,
                            "linear",
                            "${mg_city_side}",
                            '0px',
                            '-418px'
                        ],
                        [
                            "eid58",
                            "left",
                            2642,
                            2358,
                            "linear",
                            "${mg_city_side}",
                            '-418px',
                            '-906px'
                        ],
                        [
                            "eid382",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mg_lc_waterCopy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid383",
                            "display",
                            9786,
                            0,
                            "linear",
                            "${mg_lc_waterCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid374",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mg_lc_rock_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid375",
                            "display",
                            14070,
                            0,
                            "linear",
                            "${mg_lc_rock_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid377",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mg_lc_water}",
                            'none',
                            'none'
                        ],
                        [
                            "eid378",
                            "display",
                            12150,
                            0,
                            "linear",
                            "${mg_lc_water}",
                            'none',
                            'block'
                        ],
                        [
                            "eid384",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mg_lc_rock_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid370",
                            "display",
                            0,
                            0,
                            "linear",
                            "${gr_boat_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid369",
                            "display",
                            8500,
                            0,
                            "linear",
                            "${gr_boat_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid368",
                            "display",
                            11000,
                            0,
                            "linear",
                            "${gr_boat_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid325",
                            "display",
                            4910,
                            0,
                            "linear",
                            "${gr_snowfall}",
                            'block',
                            'none'
                        ],
                        [
                            "eid216",
                            "left",
                            8856,
                            1144,
                            "linear",
                            "${gr_boat_2}",
                            '907px',
                            '281px'
                        ],
                        [
                            "eid218",
                            "left",
                            10000,
                            500,
                            "linear",
                            "${gr_boat_2}",
                            '281px',
                            '-114px'
                        ],
                        [
                            "eid129",
                            "left",
                            9354,
                            646,
                            "linear",
                            "${mg_st_green_hill_2}",
                            '901px',
                            '701px'
                        ],
                        [
                            "eid127",
                            "left",
                            10000,
                            2500,
                            "linear",
                            "${mg_st_green_hill_2}",
                            '701px',
                            '-308px'
                        ],
                        [
                            "eid364",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mg_st_green_hill_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid352",
                            "display",
                            9354,
                            0,
                            "linear",
                            "${mg_st_green_hill_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid351",
                            "display",
                            12500,
                            0,
                            "linear",
                            "${mg_st_green_hill_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid397",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mid_cr}",
                            'none',
                            'none'
                        ],
                        [
                            "eid342",
                            "display",
                            2864,
                            0,
                            "linear",
                            "${mid_cr}",
                            'none',
                            'block'
                        ],
                        [
                            "eid335",
                            "display",
                            6823,
                            0,
                            "linear",
                            "${mid_cr}",
                            'block',
                            'none'
                        ],
                        [
                            "eid298",
                            "display",
                            120,
                            0,
                            "linear",
                            "${bttn_next}",
                            'block',
                            'none'
                        ],
                        [
                            "eid299",
                            "display",
                            5046,
                            0,
                            "linear",
                            "${bttn_next}",
                            'none',
                            'block'
                        ],
                        [
                            "eid300",
                            "display",
                            5186,
                            0,
                            "linear",
                            "${bttn_next}",
                            'block',
                            'none'
                        ],
                        [
                            "eid301",
                            "display",
                            9936,
                            0,
                            "linear",
                            "${bttn_next}",
                            'none',
                            'block'
                        ],
                        [
                            "eid302",
                            "display",
                            10053,
                            0,
                            "linear",
                            "${bttn_next}",
                            'block',
                            'none'
                        ],
                        [
                            "eid363",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mg_st_green_hill_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid350",
                            "display",
                            7250,
                            0,
                            "linear",
                            "${mg_st_green_hill_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid349",
                            "display",
                            10500,
                            0,
                            "linear",
                            "${mg_st_green_hill_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid322",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bttn_again}",
                            'none',
                            'none'
                        ],
                        [
                            "eid323",
                            "display",
                            15514,
                            0,
                            "linear",
                            "${bttn_again}",
                            'none',
                            'block'
                        ],
                        [
                            "eid200",
                            "left",
                            4910,
                            213,
                            "linear",
                            "${fg_cr_sand_grass}",
                            '901px',
                            '688px'
                        ],
                        [
                            "eid201",
                            "left",
                            5123,
                            982,
                            "linear",
                            "${fg_cr_sand_grass}",
                            '688px',
                            '-479px'
                        ],
                        [
                            "eid296",
                            "opacity",
                            100,
                            400,
                            "linear",
                            "${bttn_fly}",
                            '1',
                            '0'
                        ],
                        [
                            "eid362",
                            "display",
                            0,
                            0,
                            "linear",
                            "${fg_st_sand_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid348",
                            "display",
                            9542,
                            0,
                            "linear",
                            "${fg_st_sand_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid347",
                            "display",
                            11500,
                            0,
                            "linear",
                            "${fg_st_sand_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid262",
                            "opacity",
                            100,
                            400,
                            "linear",
                            "${gr_banner}",
                            '1',
                            '0'
                        ],
                        [
                            "eid103",
                            "left",
                            9542,
                            458,
                            "linear",
                            "${fg_st_sand_2}",
                            '929px',
                            '635px'
                        ],
                        [
                            "eid111",
                            "left",
                            10000,
                            1500,
                            "linear",
                            "${fg_st_sand_2}",
                            '635px',
                            '-265px'
                        ],
                        [
                            "eid153",
                            "left",
                            1250,
                            2119,
                            "linear",
                            "${mg_cr_green_hill_3}",
                            '907px',
                            '520px'
                        ],
                        [
                            "eid156",
                            "left",
                            3369,
                            2823,
                            "linear",
                            "${mg_cr_green_hill_3}",
                            '520px',
                            '-415px'
                        ],
                        [
                            "eid247",
                            "left",
                            3911,
                            1212,
                            "linear",
                            "${gr_red_bird}",
                            '905px',
                            '392px'
                        ],
                        [
                            "eid249",
                            "left",
                            5123,
                            982,
                            "linear",
                            "${gr_red_bird}",
                            '392px',
                            '-41px'
                        ],
                        [
                            "eid321",
                            "opacity",
                            15514,
                            486,
                            "linear",
                            "${bttn_again}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid272",
                            "opacity",
                            100,
                            400,
                            "linear",
                            "${text_scroll}",
                            '1',
                            '0'
                        ],
                        [
                            "eid138",
                            "left",
                            13750,
                            764,
                            "linear",
                            "${mg_lc_rock_2}",
                            '905px',
                            '548px'
                        ],
                        [
                            "eid62",
                            "left",
                            799,
                            1951,
                            "linear",
                            "${fg_city_sideCopy}",
                            '917px',
                            '-427px'
                        ],
                        [
                            "eid242",
                            "left",
                            2750,
                            2312,
                            "linear",
                            "${fg_city_sideCopy}",
                            '-427px',
                            '-433px'
                        ],
                        [
                            "eid371",
                            "display",
                            0,
                            0,
                            "linear",
                            "${gr_boat_4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid372",
                            "display",
                            8500,
                            0,
                            "linear",
                            "${gr_boat_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid373",
                            "display",
                            11000,
                            0,
                            "linear",
                            "${gr_boat_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid136",
                            "left",
                            14070,
                            444,
                            "linear",
                            "${mg_lc_rock_3}",
                            '905px',
                            '559px'
                        ],
                        [
                            "eid365",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mg_st_water}",
                            'none',
                            'none'
                        ],
                        [
                            "eid355",
                            "display",
                            7500,
                            0,
                            "linear",
                            "${mg_st_water}",
                            'none',
                            'block'
                        ],
                        [
                            "eid354",
                            "display",
                            12250,
                            0,
                            "linear",
                            "${mg_st_water}",
                            'block',
                            'none'
                        ],
                        [
                            "eid328",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${fg_city_side}",
                            'block',
                            'none'
                        ],
                        [
                            "eid41",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bg_mountain_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid38",
                            "display",
                            7414,
                            0,
                            "linear",
                            "${bg_mountain_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid44",
                            "display",
                            12357,
                            0,
                            "linear",
                            "${bg_mountain_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid224",
                            "left",
                            8500,
                            1500,
                            "linear",
                            "${gr_boat_4}",
                            '984px',
                            '427px'
                        ],
                        [
                            "eid225",
                            "left",
                            10000,
                            1500,
                            "linear",
                            "${gr_boat_4}",
                            '427px',
                            '-36px'
                        ],
                        [
                            "eid198",
                            "left",
                            153,
                            14361,
                            "linear",
                            "${gr_plane}",
                            '190px',
                            '666px'
                        ],
                        [
                            "eid53",
                            "left",
                            100,
                            2400,
                            "linear",
                            "${mg_buildings}",
                            '32px',
                            '-393px'
                        ],
                        [
                            "eid361",
                            "display",
                            0,
                            0,
                            "linear",
                            "${fg_st_sand_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid346",
                            "display",
                            8557,
                            0,
                            "linear",
                            "${fg_st_sand_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid345",
                            "display",
                            10574,
                            0,
                            "linear",
                            "${fg_st_sand_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid89",
                            "left",
                            5123,
                            880,
                            "linear",
                            "${mg_cr_water_hills2Copy}",
                            '913px',
                            '-173px'
                        ],
                        [
                            "eid90",
                            "left",
                            6002,
                            1133,
                            "linear",
                            "${mg_cr_water_hills2Copy}",
                            '-173px',
                            '-1170px'
                        ],
                        [
                            "eid189",
                            "left",
                            9886,
                            2314,
                            "linear",
                            "${bg_oceanCopy}",
                            '900px',
                            '0px'
                        ],
                        [
                            "eid194",
                            "left",
                            12200,
                            2393,
                            "linear",
                            "${bg_oceanCopy}",
                            '0px',
                            '-897px'
                        ],
                        [
                            "eid88",
                            "left",
                            4250,
                            880,
                            "linear",
                            "${mg_cr_water_hills2}",
                            '913px',
                            '-173px'
                        ],
                        [
                            "eid86",
                            "left",
                            5130,
                            1133,
                            "linear",
                            "${mg_cr_water_hills2}",
                            '-173px',
                            '-1170px'
                        ]
                    ]
                }
            },
            "gr_bg_sky": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bg_sky_left',
                            type: 'image',
                            rect: ['0px', '0px', '735px', '425px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bg_sky_left.jpg', '0px', '0px']
                        },
                        {
                            id: 'bg_sky_center',
                            type: 'image',
                            rect: ['735', '0', '735px', '425px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bg_sky_center.jpg', '0px', '0px']
                        },
                        {
                            id: 'bg_sky_right',
                            type: 'image',
                            rect: ['1470px', '0px', '735px', '425px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bg_sky_right.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '735px', '425px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "bg_sky": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'bg_sky_left2',
                            rect: ['0px', '0px', '692px', '400px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bg_sky_left.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'bg_sky_center2',
                            rect: ['691px', '0', '692px', '400px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bg_sky_center.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'bg_sky_right',
                            rect: ['1382px', '0', '692px', '400px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bg_sky_right.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '692px', '400px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "clouds": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'cloud2',
                            symbolName: 'cloud',
                            rect: ['757', '63', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'cloud3',
                            symbolName: 'cloud',
                            rect: ['317px', '79px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'cloud4',
                            symbolName: 'cloud',
                            rect: ['-14px', '20px', null, null, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '900px', '150px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "cloud": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'gr_cloud',
                            rect: ['0px', '0px', '138px', '55px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/gr_cloud.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '138px', '55px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "clouds_med": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'cloud_med',
                            symbolName: 'cloud_med',
                            rect: ['71px', '33px', '88', '35', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'cloud_med2',
                            symbolName: 'cloud_med',
                            rect: ['572', '33', null, null, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '900px', '75px']
                        }
                    }
                },
                timeline: {
                    duration: 93,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "cloud_med": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'clouds_med',
                            rect: ['0px', '0px', '88px', '35px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/clouds_med.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '88px', '35px']
                        }
                    }
                },
                timeline: {
                    duration: 93,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("holidayCard_edgeActions.js");
})("EDGE-35607789");
