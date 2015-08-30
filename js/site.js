function jiggle(){
  var bounce = new Bounce();
  bounce.translate({
    from: { x: -2200, y: 0 },
    to: { x: 0, y: 0 },
	easing: 'bounce',
    duration: 1000,
    stiffness: 5
  })
  .skew({
	from: { x: 0, to: 120},
	to: { x: 0, to: 0},
	easing: 'sway',
	duration: 1000,
	bounces: 4,
	stiffness: 3
  })
  .applyTo(document.querySelectorAll("#word"));
}

$$('#word').swipe(jiggle);