'use strict';

let tag = {
  'programming': {
    'color': 'blue',
    'elements': {
      'c': 100,
      'php': 60,
      'javascript': 60,
      'c++': 40,
      'matlab': 1,
      'java': 1
    }
  }
};

let tagCloud2D = function(el) {
  return {
    'target': document.querySelector(el),
    'draw': function(content) {
      let result = '';

      for (let prop in content) {
        let color = content[prop].color;
        for (let name in content[prop].elements) {
          let score = content[prop].elements[name];
          result += this.generateTag(name, score, color);
          console.log(result);
        }
      }

      this.target.innerHTML = result;
    },
    'generateTag': function(name, score, color) {
      let fontsize;
      if(score >= 80) {
        fontsize = 72;
      } else if(score >= 60) {
        fontsize = 48;
      } else if(score >= 40) {
        fontsize = 28;
      } else {
        fontsize = 12;
      }

      return `<span style="font-size:${fontsize}px; color:'${color}';">${name}</span>`;
    }
  }
};

(function() {
  var t = new tagCloud2D('#tagCloud2D');
  t.draw(tag);
})();

