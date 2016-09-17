var bar = new ProgressBar.Circle(circle, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 10,
  trailWidth: 10,
  easing: 'easeInOut',
  duration: 2000,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#D32F2F', width: 10 },
  to: { color: '#388E3C', width: 10 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
   	circle.path.setAttribute('stroke-width', state.width);

    var remValue = 100 - Math.round(circle.value() * 100);
    var text = 'MORE';
    if (remValue >= 80) {
    	circle.path.setAttribute('stroke', '#D32F2F');
    }
    else if (remValue >= 50) {
    	circle.path.setAttribute('stroke', '#FF5722');
    }else if (remValue >= 30){
    	circle.path.setAttribute('stroke', '#FFEB3B');
    }else {
    	circle.path.setAttribute('stroke', '#388E3C');
    }
    if (remValue === 0) {
    	remValue = '';
      text = 'DONE';
    }
    var content = '<div class="circle-center">'+remValue+'<span class="small">'+text+'<span></div>';
    circle.setText(content);

  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
//bar.text.style.fontSize = '2.5rem';

bar.animate(0.7);  // Number from 0.0 to 1.0
