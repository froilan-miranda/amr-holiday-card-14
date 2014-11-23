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
                            rect: ['-1176px', '0px', '692', '400', 'auto', 'auto']
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
                            rect: ['900px', '313px', '899px', '87px', 'auto', 'auto'],
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
                            rect: ['903px', '382px', '999px', '19px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mg_lc_water.png",'0px','0px']
                        },
                        {
                            id: 'mg_lc_water',
                            type: 'image',
                            rect: ['903px', '382px', '999px', '19px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mg_lc_water.png",'0px','0px']
                        },
                        {
                            id: 'mg_lc_rock_3',
                            type: 'image',
                            rect: ['900px', '150px', '344px', '250px', 'auto', 'auto'],
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
                            rect: ['901px', '315px', '302px', '85px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mg_st_green_hill_2.png",'0px','0px']
                        },
                        {
                            id: 'mg_st_green_hill_1',
                            type: 'image',
                            rect: ['903px', '257px', '339px', '144px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mg_st_green_hill_1.png",'0px','0px']
                        },
                        {
                            id: 'fg_st_sand_2',
                            type: 'image',
                            rect: ['-265px', '255px', '265px', '144px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fg_st_sand_2.png",'0px','0px']
                        },
                        {
                            id: 'fg_st_sand_1',
                            type: 'image',
                            rect: ['901px', '280px', '468px', '121px', 'auto', 'auto'],
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
                            id: 'mg_cr_green_hill_3',
                            type: 'image',
                            rect: ['-415px', '288px', '414px', '122px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mg_cr_green_hill_3.png",'0px','0px']
                        },
                        {
                            id: 'mid_cr',
                            type: 'image',
                            rect: ['-934px', '233px', '930px', '167px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mid_cr.png",'0px','0px']
                        },
                        {
                            id: 'mg_cr_water_hills2',
                            type: 'image',
                            rect: ['-1170px', '317px', '1164px', '82px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mg_cr_water_hills.png",'0px','0px']
                        },
                        {
                            id: 'mg_cr_water_hills2Copy',
                            type: 'image',
                            rect: ['-1170px', '317px', '1164px', '82px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mg_cr_water_hills.png",'0px','0px']
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
                            rect: ['-418px', '214px', '903px', '186px', 'auto', 'auto'],
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
                            rect: ['917px', '310px', '429px', '91px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fg_city_side.png",'0px','0px']
                        },
                        {
                            id: 'fg-cr-greenhill',
                            type: 'image',
                            rect: ['-352px', '320px', '345px', '82px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fg-cr-greenhill.png",'0px','0px']
                        },
                        {
                            id: 'gr_plane',
                            type: 'image',
                            rect: ['190px', '90px', '68px', '61px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"gr_plane.png",'0px','0px']
                        },
                        {
                            id: 'gr_banner',
                            display: 'block',
                            type: 'image',
                            rect: ['49px', '30px', '360px', '55px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"gr_banner.png",'0px','0px']
                        },
                        {
                            id: 'text_scroll',
                            display: 'block',
                            type: 'text',
                            rect: ['186px', '192px', 'auto', 'auto', 'auto', 'auto'],
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
                            symbolName: 'bttn_next',
                            display: 'none',
                            type: 'rect',
                            rect: ['845', '417', '12', '16', 'auto', 'auto'],
                            userClass: "touchElement"
                        },
                        {
                            id: 'bttn_prev',
                            symbolName: 'bttn_prev',
                            display: 'none',
                            type: 'rect',
                            rect: ['822', '417', '12', '16', 'auto', 'auto'],
                            userClass: "touchElement"
                        },
                        {
                            id: 'bttn_collection',
                            symbolName: 'bttn_collection',
                            type: 'rect',
                            rect: ['8', '408', '216', '34', 'auto', 'auto']
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
                            symbolName: 'bttn_fly',
                            display: 'block',
                            type: 'rect',
                            rect: ['188', '169', '71', '18', 'auto', 'auto']
                        },
                        {
                            id: 'clouds',
                            symbolName: 'clouds',
                            type: 'rect',
                            rect: ['0px', '0px', '138', '55', 'auto', 'auto']
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
                    duration: 14514,
                    autoPlay: true,
                    labels: {
                        "screen begin": 100,
                        "screen_cr": 5123,
                        "screen_st": 10000,
                        "screen_lc": 14514
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
                            "eid49",
                            "left",
                            12200,
                            2314,
                            "linear",
                            "${bg_ocean}",
                            '900px',
                            '4px'
                        ],
                        [
                            "eid186",
                            "display",
                            153,
                            0,
                            "linear",
                            "${gr_banner}",
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
                            "eid14",
                            "left",
                            100,
                            14414,
                            "linear",
                            "${bg_sky2}",
                            '0px',
                            '-1176px'
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
                            '900px',
                            '556px'
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
                            14430,
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
                            "eid181",
                            "display",
                            9936,
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
                            2250,
                            "linear",
                            "${mg_st_green_hill_2}",
                            '701px',
                            '-238px'
                        ],
                        [
                            "eid185",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bttn_next}",
                            'none',
                            'none'
                        ],
                        [
                            "eid167",
                            "display",
                            72,
                            0,
                            "linear",
                            "${bttn_next}",
                            'none',
                            'block'
                        ],
                        [
                            "eid169",
                            "display",
                            153,
                            0,
                            "linear",
                            "${bttn_next}",
                            'block',
                            'none'
                        ],
                        [
                            "eid174",
                            "display",
                            5046,
                            0,
                            "linear",
                            "${bttn_next}",
                            'none',
                            'block'
                        ],
                        [
                            "eid176",
                            "display",
                            5186,
                            0,
                            "linear",
                            "${bttn_next}",
                            'block',
                            'none'
                        ],
                        [
                            "eid172",
                            "display",
                            9936,
                            0,
                            "linear",
                            "${bttn_next}",
                            'none',
                            'block'
                        ],
                        [
                            "eid178",
                            "display",
                            10053,
                            0,
                            "linear",
                            "${bttn_next}",
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
                            9936,
                            0,
                            "linear",
                            "${btn_swipe_right}",
                            'none',
                            'block'
                        ],
                        [
                            "eid198",
                            "left",
                            0,
                            14514,
                            "linear",
                            "${gr_plane}",
                            '190px',
                            '666px'
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
                            2314,
                            "linear",
                            "${bg_oceanCopy}",
                            '0px',
                            '-897px'
                        ],
                        [
                            "eid188",
                            "display",
                            153,
                            0,
                            "linear",
                            "${bttn_fly}",
                            'block',
                            'none'
                        ],
                        [
                            "eid187",
                            "display",
                            153,
                            0,
                            "linear",
                            "${text_scroll}",
                            'block',
                            'none'
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
                            rect: ['0px', '0px', '692px', '400px', 'auto', 'auto'],
                            id: 'bg_sky_left2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bg_sky_left.jpg', '0px', '0px']
                        },
                        {
                            rect: ['691px', '0', '692px', '400px', 'auto', 'auto'],
                            id: 'bg_sky_center2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bg_sky_center.jpg', '0px', '0px']
                        },
                        {
                            rect: ['1382px', '0', '692px', '400px', 'auto', 'auto'],
                            id: 'bg_sky_right',
                            type: 'image',
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
                            type: 'image',
                            id: 'bttn_next',
                            rect: ['0px', '0px', '12px', '16px', 'auto', 'auto'],
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
                            rect: ['0px', '0px', '12px', '16px', 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'bttn_prev',
                            type: 'image',
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
                            rect: ['0px', '0px', '71px', '18px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bttn_fly.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '71px', '18px']
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
                            rect: ['0px', '0px', '216px', '34px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/collection.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '216px', '34px']
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
                            id: 'cloud2',
                            symbolName: 'cloud',
                            rect: ['757', '63', undefined, undefined, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'cloud3',
                            symbolName: 'cloud',
                            rect: ['397', '40', undefined, undefined, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'cloud4',
                            symbolName: 'cloud',
                            rect: ['102', '30', undefined, undefined, 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '900px', '150px']
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
                            id: 'gr_cloud',
                            type: 'image',
                            rect: ['0px', '0px', '138px', '55px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/gr_cloud.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '138px', '55px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("holidayCard_edgeActions.js");
})("EDGE-35607789");
