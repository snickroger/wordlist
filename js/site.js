var wordList = [];
jQuery(getWordList);

function nextWord(count) {
  var ret = [];
  var i = 0;
  for (; i < count; i++) {
    var category = Math.floor(Math.random() * wordList.length)
    var item = Math.floor(Math.random() * wordList[category].words.length)
	ret.push({
		'category': wordList[category].name,
		'word': wordList[category].words[item]
	});
  }
  return ret;
}

function getWordList() {
  jQuery.getJSON('js/wordList.json', null, getWordListDone)
}

function getWordListDone(data,textStatus,jqXHR) {
  wordList = data;
}

function jiggle(){
  var word = nextWord(1);
  jQuery('#word h1').html(word[0].word);
  
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
jQuery('#word').on('animationend', function(){
  jQuery('style').remove(); // remove the style tag this creates
});