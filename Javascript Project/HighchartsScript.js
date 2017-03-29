// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
    ['gb-ay', 0],
    ['gb-3270', 1],
    ['gb-hi', 2],
    ['gb-ab', 3],
    ['gb-ps', 4],
    ['gb-wi', 5],
    ['gb-my', 6],
    ['gb-7398', 7],
    ['gb-eb', 8],
    ['gb-lc', 9],
    ['gb-2393', 10],
    ['gb-db', 11],
    ['gb-de', 12],
    ['gb-an', 13],
    ['gb-bl', 14],
    ['gb-ng', 15],
    ['gb-do', 16],
    ['gb-2458', 17],
    ['gb-er', 18],
    ['gb-ea', 19],
    ['gb-gg', 20],
    ['gb-ed', 21],
    ['gb-ic', 22],
    ['gb-2446', 23],
    ['gb-nn', 24],
    ['gb-rf', 25],
    ['gb-sa', 26],
    ['gb-sl', 27],
    ['gb-wd', 28],
    ['gb-ar', 29],
    ['gb-as', 30],
    ['gb-fk', 31],
    ['gb-zg', 32],
    ['gb-cc', 33],
    ['gb-du', 34],
    ['gb-fi', 35],
    ['gb-ml', 36],
    ['gb-wh', 37],
    ['gb-bo', 38],
    ['gb-dh', 39],
    ['gb-da', 40],
    ['gb-hp', 41],
    ['gb-mb', 42],
    ['gb-rc', 43],
    ['gb-zt', 44],
    ['gb-ha', 45],
    ['gb-zh', 46],
    ['gb-2318', 47],
    ['gb-gc', 48],
    ['gb-mk', 49],
    ['gb-bu', 50],
    ['gb-bn', 51],
    ['gb-bs', 52],
    ['gb-ns', 53],
    ['gb-sj', 54],
    ['gb-2389', 55],
    ['gb-ds', 56],
    ['gb-2391', 57],
    ['gb-ht', 58],
    ['gb-cm', 59],
    ['gb-kh', 60],
    ['gb-ne', 61],
    ['gb-ba', 62],
    ['gb-xb', 63],
    ['gb-ke', 64],
    ['gb-bz', 65],
    ['gb-be', 66],
    ['gb-cn', 67],
    ['gb-eg', 68],
    ['gb-ef', 69],
    ['gb-gr', 70],
    ['gb-hf', 71],
    ['gb-hu', 72],
    ['gb-it', 73],
    ['gb-kc', 74],
    ['gb-cy', 75],
    ['gb-me', 76],
    ['gb-rb', 77],
    ['gb-ru', 78],
    ['gb-su', 79],
    ['gb-th', 80],
    ['gb-wf', 81],
    ['gb-ww', 82],
    ['gb-we', 83],
    ['gb-li', 84],
    ['gb-bf', 85],
    ['gb-ld', 86],
    ['gb-nm', 87],
    ['gb-am', 88],
    ['gb-bb', 89],
    ['gb-cr', 90],
    ['gb-dn', 91],
    ['gb-2347', 92],
    ['gb-lb', 93],
    ['gb-mf', 94],
    ['gb-om', 95],
    ['gb-lr', 96],
    ['gb-cf', 97],
    ['gb-nw', 98],
    ['gb-2354', 99],
    ['gb-dw', 100],
    ['gb-cl', 101],
    ['gb-by', 102],
    ['gb-cs', 103],
    ['gb-pe', 104],
    ['gb-2301', 105],
    ['gb-gd', 106],
    ['gb-sp', 107],
    ['gb-po', 108],
    ['gb-mt', 109],
    ['gb-bj', 110],
    ['gb-cp', 111],
    ['gb-rt', 112],
    ['gb-ca', 113],
    ['gb-vg', 114],
    ['gb-np', 115],
    ['gb-sw', 116],
    ['gb-7122', 117],
    ['gb-bw', 118],
    ['gb-la', 119],
    ['gb-ey', 120],
    ['gb-yk', 121],
    ['gb-di', 122],
    ['gb-fl', 123],
    ['gb-wx', 124],
    ['gb-bg', 125],
    ['gb-no', 126],
    ['gb-tf', 127],
    ['gb-lm', 128],
    ['gb-sb', 129],
    ['gb-fe', 130],
    ['gb-ny', 131],
    ['gb-2420', 132],
    ['gb-tb', 133],
    ['gb-ex', 134],
    ['gb-nf', 135],
    ['gb-bh', 136],
    ['gb-hv', 137],
    ['gb-tr', 138],
    ['gb-ss', 139],
    ['gb-ws', 140],
    ['gb-wr', 141],
    ['gb-hd', 142],
    ['gb-kt', 143],
    ['gb-sr', 144],
    ['gb-es', 145],
    ['gb-ox', 146],
    ['gb-sn', 147],
    ['gb-na', 148],
    ['gb-rl', 149],
    ['gb-hk', 150],
    ['gb-hy', 151],
    ['gb-hr', 152],
    ['gb-lt', 153],
    ['gb-lw', 154],
    ['gb-nh', 155],
    ['gb-sq', 156],
    ['gb-he', 157],
    ['gb-st', 158],
    ['gb-wc', 159],
    ['gb-tk', 160],
    ['gb-6338', 161],
    ['gb-nb', 162],
    ['gb-2367', 163],
    ['gb-7113', 164],
    ['gb-7114', 165],
    ['gb-7115', 166],
    ['gb-7116', 167],
    ['gb-2364', 168],
    ['gb-7118', 169],
    ['gb-7119', 170],
    ['gb-wt', 171],
    ['gb-ms', 172],
    ['gb-7117', 173],
    ['gb-3265', 174],
    ['gb-7130', 175],
    ['gb-7131', 176],
    ['gb-7132', 177],
    ['gb-7133', 178],
    ['gb-3266', 179],
    ['gb-7121', 180],
    ['gb-7123', 181],
    ['gb-7124', 182],
    ['gb-7125', 183],
    ['gb-7126', 184],
    ['gb-7127', 185],
    ['gb-7128', 186],
    ['gb-7129', 187],
    ['gb-2366', 188],
    ['gb-nt', 189],
    ['gb-3267', 190],
    ['gb-7134', 191],
    ['gb-7135', 192],
    ['gb-nl', 193],
    ['gb-7136', 194],
    ['gb-2377', 195],
    ['gb-7137', 196],
    ['gb-7138', 197],
    ['gb-7139', 198],
    ['gb-7140', 199],
    ['gb-7141', 200],
    ['gb-7142', 201],
    ['gb-2381', 202],
    ['gb-bd', 203],
    ['gb-2388', 204],
    ['gb-7143', 205],
    ['gb-7144', 206],
    ['gb-7145', 207],
    ['gb-7146', 208],
    ['gb-7147', 209],
    ['gb-7149', 210],
    ['gb-so', 211],
    ['gb-7150', 212],
    ['gb-7151', 213],
    ['gb-pb', 214],
    ['gb-iw', 215],
    ['gb-mo', 216],
    ['gb-ag', 217],
    ['gb-el', 218],
    ['gb-sm', 219],
    ['gb-ci', 220],
    ['gb-hl', 221],
    ['gb-co', 222],
    ['gb-cw', 223],
    ['gb-nd', 224],
    ['gb-dg', 225],
    ['gb-cu', 226],
    ['gb-sf', 227],
    ['gb-mw', 228],
    ['gb-lu', 229],
    ['gb-wl', 230],
    ['gb-3271', 231],
    ['undefined', 232]
];

// Create the chart
Highcharts.mapChart('mapcontainer', {
    plotOptions: {

    },
    chart: {
        map: 'countries/gb/gb-all'
    },

    title: {
        text: 'Highmaps basic demo'
    },

    subtitle: {
        text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/gb/gb-all.js">United Kingdom</a>'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
        min: 0
    },

    series: [{
        data: data,
        name: 'Random data',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }, {
        name: 'Separators',
        type: 'mapline',
        data: Highcharts.geojson(Highcharts.maps['countries/gb/gb-all'], 'mapline'),
        color: 'silver',
        showInLegend: false,
        enableMouseTracking: false
    }]
});
