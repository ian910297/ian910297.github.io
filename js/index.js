'use strict';

let tag = [
  {text: '腳踏車', weight: 25},
  {text: '桌球', weight: 10},
  {text: '籃球', weight: 10},
  {text: '武俠小說', weight: 10},
  {text: '網路小說', weight: 10},
  {text: '線上遊戲', weight: 10},
  {text: 'javascript', weight: 10},
  {text: 'php', weight: 10},
  {text: 'sql', weight: 5},
  {text: 'c', weight: 8},
  {text: 'c++', weight: 5},
  {text: 'python', weight: 5},
  {text: 'ruby', weight: 2},
  {text: 'matlab', weight: 2},
  {text: 'java', weight: 2},
  {text: '言情小說', weight: 2},
  {text: '唱歌', weight: 1},
];

(function() {
  $('#tagCloud2D').jQCloud(tag);
})();

