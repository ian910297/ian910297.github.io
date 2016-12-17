(function() {
  drawCanvas();
})();

function drawCanvas() {
  var canvas;
  var context;
  var site = './'

  canvas = document.getElementById('name');
  context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);

  Promise.all([getMesh(), getPoly()])
    .spread(function(position, poly) {
      console.log(poly);
      return drawPolygon(poly, position);
    });

  function getMesh() {
    return $.ajax({
      //'url': `${site}models/demonic.json`,
      'url': `${site}models/demonic.json`,
      'type': 'GET'
    }).then(function(data, textStatus) {
      console.log(data);
      var position = [];
      var i;
      for (i = 0; i < data.length; i++) {
        position[i] = [];
        position[i][0] = data[i]['pos'][0] *= 500;
        position[i][1] = data[i]['pos'][1] *= 500;
      }
      return position
    });
  }

  function getPoly() {
    return $.ajax({
      'url': `${site}models/demonic_poly.json`,
      //'url': `${site}models/demonic_poly.json`,
      'type': 'GET'
    });
  }

  function drawPolygon(data, position) {
    return new Promise(function (resolve) {
      var i = 0
      var iv

      function _draw() {
        if (i >= data.length) {
          clearTimeout(iv);
          resolve();
          return;
        }
        context.beginPath();
        context.moveTo(position[data[i]][0], position[data[i]][1]);
        context.lineTo(position[data[i + 1]][0], position[data[i + 1]][1]);
        context.moveTo(position[data[i + 1]][0], position[data[i + 1]][1]);
        context.lineTo(position[data[i + 2]][0], position[data[i + 2]][1]);
        context.moveTo(position[data[i + 2]][0], position[data[i + 2]][1]);
        context.lineTo(position[data[i]][0], position[data[i]][1]);
        context.lineWidth = 1;
        context.strokeStyle = '#000000';
        context.stroke();
        i = i + 3;
      }

      iv = setInterval(_draw, 1)
    })
  }
}

