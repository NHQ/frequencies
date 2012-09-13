var $ = Object.create(null);
$.a = [27.5 / 2]
$.ab = [29.14 / 2]
$.b = [30.87 / 2]
$.c = [16.35]
$.cd = [17.32]
$.d = [18.35]
$.de = [19.45]
$.e = [20.60]
$.f = [21.83]
$.fg = [23.12]
$.g = [24.50]
$.ga = [25.96 / 2]

Object.keys($).forEach(function(tone){
	var baseTone = $[tone]
	  , x
	  ;

	for (x = 1; x <= 12; ++x){
	
		$[tone][x] = baseTone * 2
	
		baseTone = $[tone][x]
	
	}
})	

module.exports = $