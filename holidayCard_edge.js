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
                            type: 'image',
                            rect: ['0px', '313px', '899px', '87px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bg_ocean.png",'0px','0px']
                        },
                        {
                            id: 'bg_ocean',
                            type: 'image',
                            rect: ['0px', '313px', '899px', '87px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bg_ocean.png",'0px','0px']
                        },
                        {
                            id: 'mg_lc_rock_2',
                            type: 'image',
                            rect: ['905px', '292px', '86px', '97px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mg_lc_rock_2.png",'0px','0px']
                        },
                        {
                            id: 'mg_lc_waterCopy',
                            type: 'image',
                            rect: ['903px', '383px', '999px', '19px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mg_lc_water.png",'0px','0px']
                        },
                        {
                            id: 'mg_lc_water',
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
                            type: 'image',
                            rect: ['984px', '338px', '32px', '31px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"gr_boat_4.png",'0px','0px']
                        },
                        {
                            id: 'gr_boat_3',
                            type: 'image',
                            rect: ['905px', '315px', '37px', '55px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"gr_boat_3.png",'0px','0px']
                        },
                        {
                            id: 'gr_boat_2',
                            type: 'image',
                            rect: ['907px', '280px', '96px', '91px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"gr_boat_2.png",'0px','0px']
                        },
                        {
                            id: 'mg_st_waterCopy',
                            type: 'image',
                            rect: ['-901px', '279px', '899px', '121px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mg_st_water.png",'0px','0px']
                        },
                        {
                            id: 'mg_st_water',
                            type: 'image',
                            rect: ['-901px', '279px', '899px', '121px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mg_st_water.png",'0px','0px']
                        },
                        {
                            id: 'mg_st_green_hill_2',
                            type: 'image',
                            rect: ['-308px', '317px', '302px', '85px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mg_st_green_hill_2.png",'0px','0px']
                        },
                        {
                            id: 'mg_st_green_hill_1',
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
                            type: 'image',
                            rect: ['-265px', '259px', '265px', '144px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fg_st_sand_2.png",'0px','0px']
                        },
                        {
                            id: 'fg_st_sand_1',
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
                            type: 'image',
                            rect: ['-415px', '288px', '414px', '122px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mg_cr_green_hill_3.png",'0px','0px']
                        },
                        {
                            id: 'mid_cr',
                            type: 'image',
                            rect: ['-934px', '211px', '930px', '190px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mid_cr.png",'0px','0px']
                        },
                        {
                            id: 'mg_cr_water_hills2',
                            type: 'image',
                            rect: ['-1170px', '320px', '1164px', '82px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mg_cr_water_hills.png",'0px','0px']
                        },
                        {
                            id: 'mg_cr_water_hills2Copy',
                            type: 'image',
                            rect: ['-1170px', '320px', '1164px', '82px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mg_cr_water_hills.png",'0px','0px']
                        },
                        {
                            id: 'fg_cr_sand_grass',
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
                            type: 'image',
                            rect: ['-393px', '215px', '334px', '186px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mg_buildings.png",'0px','0px']
                        },
                        {
                            id: 'mg_city_side',
                            type: 'image',
                            rect: ['-418px', '216px', '903px', '186px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mg_city_side.png",'0px','0px']
                        },
                        {
                            id: 'fg_city_side',
                            type: 'image',
                            rect: ['-427px', '310px', '429px', '91px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fg_city_side.png",'0px','0px']
                        },
                        {
                            id: 'fg_city_sideCopy',
                            type: 'image',
                            rect: ['-433px', '310px', '429px', '91px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fg_city_side.png",'0px','0px']
                        },
                        {
                            id: 'fg-cr-greenhill',
                            type: 'image',
                            rect: ['-352px', '320px', '345px', '82px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fg-cr-greenhill.png",'0px','0px']
                        },
                        {
                            id: 'gr_snowfall',
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
                            id: 'bttn_next2',
                            type: 'image',
                            rect: ['866px', '415px', '15px', '20px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bttn_next.png",'0px','0px']
                        },
                        {
                            id: 'bttn_prev',
                            symbolName: 'bttn_prev',
                            display: 'none',
                            type: 'rect',
                            rect: ['822', '417', '12', '16', 'auto', 'auto'],
                            cursor: 'pointer',
                            userClass: "touchElement"
                        },
                        {
                            id: 'navigate',
                            display: 'none',
                            type: 'text',
                            rect: ['606px', '419px', '198px', '16px', 'auto', 'auto'],
                            text: "Navigate to your next destination",
                            font: ['Verdana, Geneva, sans-serif', [11, "px"], "rgba(133,133,133,1.00)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'bttn_restart',
                            symbolName: 'bttn_restart',
                            display: 'none',
                            type: 'rect',
                            rect: ['840', '418', '44', '15', 'auto', 'auto'],
                            cursor: 'pointer'
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
                            type: 'image',
                            rect: ['174px', '160px', '101px', '29px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"bttn_fly.png",'0px','0px']
                        },
                        {
                            id: 'bttn_again',
                            symbolName: 'bttn_again',
                            type: 'rect',
                            rect: ['418', '241', '72', '18', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0'
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
                            2861,
                            "linear",
                            "${mg_cr_hill}",
                            '812px',
                            '-846px'
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
                            "eid166",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bttn_prev}",
                            'none',
                            'none'
                        ],
                        [
                            "eid173",
                            "display",
                            5046,
                            0,
                            "linear",
                            "${bttn_prev}",
                            'none',
                            'block'
                        ],
                        [
                            "eid175",
                            "display",
                            5186,
                            0,
                            "linear",
                            "${bttn_prev}",
                            'block',
                            'none'
                        ],
                        [
                            "eid171",
                            "display",
                            9936,
                            0,
                            "linear",
                            "${bttn_prev}",
                            'none',
                            'block'
                        ],
                        [
                            "eid177",
                            "display",
                            10053,
                            0,
                            "linear",
                            "${bttn_prev}",
                            'block',
                            'none'
                        ],
                        [
                            "eid170",
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
                            "eid239",
                            "opacity",
                            15514,
                            486,
                            "linear",
                            "${bttn_again}",
                            '0',
                            '1'
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
                            "eid241",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bttn_restart}",
                            'none',
                            'none'
                        ],
                        [
                            "eid240",
                            "display",
                            15514,
                            0,
                            "linear",
                            "${bttn_restart}",
                            'none',
                            'block'
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
            "bttn_next": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '12px', '16px', 'auto', 'auto'],
                            id: 'bttn_next',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bttn_next.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '12px', '16px']
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
            "bttn_prev": {
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
                            overflow: 'visible',
                            id: 'bttn_prev',
                            rect: ['0px', '0px', '12px', '16px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bttn_prev.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '12px', '16px']
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
            "bttn_fly": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bttn_fly',
                            type: 'image',
                            rect: ['0px', '0px', '101px', '29px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bttn_fly.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '101px', '29px']
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
            "bttn_collection": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'collection',
                            type: 'image',
                            rect: ['0px', '0px', '373px', '25px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/collection.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '373px', '25px']
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
            },
            "bttn_again": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '72px', '18px', 'auto', 'auto'],
                            id: 'bttn_again',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bttn_again.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '72px', '18px']
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
            "bttn_restart": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '44px', '15px', 'auto', 'auto'],
                            id: 'bttn_restart',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bttn_restart.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '44px', '15px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("holidayCard_edgeActions.js");
})("EDGE-35607789");
