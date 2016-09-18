var bar = new ProgressBar.Circle(circle, {
  color: '#aaa',
  strokeWidth: 10,
  trailWidth: 10,
  easing: 'easeInOut',
  duration: 2000,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#D32F2F', width: 10 },
  to: { color: '#388E3C', width: 10 },

  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
   	circle.path.setAttribute('stroke-width', state.width);
    let target = $('#goal_target').val();
    if (!target)
      target = 100;
    var remValue = target - Math.round(circle.value() * target);
    var text = 'MORE';
    if (remValue >= 80/target) {
    	circle.path.setAttribute('stroke', '#D32F2F');
    }
    else if (remValue >= 50/target) {
    	circle.path.setAttribute('stroke', '#FF5722');
    }else if (remValue >= 30/target){
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
const remaining = $('#goal_remaining').val();
const target = $('#goal_target').val();
bar.animate((target - remaining)/target);  // Number from 0.0 to 1.0

$('#add_btn').on('click', function() {
    const remaining = $('#goal_remaining').val();
    $('#goal_remaining').val(remaining - 1);
});

$('#sub_btn').on('click', function() {
    const remaining = +$('#goal_remaining').val();
    $('#goal_remaining').val(remaining + 1);
});
