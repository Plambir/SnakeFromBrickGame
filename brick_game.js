function create_canvas()
{
  document.getElementById("it_is_game").innerHTML = "\
    <table width='100%' height='100%'>\
      <tr>\
        <td align='center'>\
          <style>\
            #it_is_game_break\
            {\
              background: #ccc;\
            }\
          </style>\
          <canvas id='it_is_game_break' width='132' height='183' />\
        </td>\
      </tr>\
    </table>";

  return document.getElementById("it_is_game_break");
}

var canvas = create_canvas();
var ctx = canvas.getContext("2d");

ctx.strokeStyle = '#000';
ctx.fillStyle = '#000';
ctx.lineWidth = 1;

function draw_border()
{
  ctx.beginPath();
  ctx.moveTo(0.5,  0.5);
  ctx.lineTo(0.5,  182.5);
  ctx.lineTo(92.5, 182.5);
  ctx.lineTo(92.5, 0.5);
  ctx.lineTo(0.5,  0.5);
  ctx.stroke();
}

var maps = [
[
    [0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,0,0,0,0,0],
    [0,1,0,0,0,0,0,0,0,0],
    [0,1,1,1,0,0,0,0,0,0],
    [0,1,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,1,0,0,0],
    [0,0,0,1,1,0,1,0,0,0],
    [0,0,0,1,0,1,1,0,0,0],
    [0,0,0,1,0,0,1,0,0,0],
    [0,0,0,1,0,0,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,0,0],
    [0,0,0,0,0,1,0,0,1,0],
    [0,0,0,0,0,1,0,0,1,0],
    [0,0,0,0,0,1,0,0,1,0],
    [0,0,0,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
],
[
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
],
[
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
],
    ];

var map = maps[1];

function draw_block(i,j)
{
  var x = 2 + i + i * 8;
  var y = 2 + j + j * 8;
  ctx.beginPath();
  ctx.moveTo(x + 0.5, y + 0.5);
  ctx.lineTo(x + 0.5, y + 7.5);
  ctx.lineTo(x + 7.5, y + 7.5);
  ctx.lineTo(x + 7.5, y + 0.5);
  ctx.lineTo(x + 0.5, y + 0.5);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x + 2.5, y + 2.5);
  ctx.lineTo(x + 2.5, y + 5.5);
  ctx.lineTo(x + 5.5, y + 5.5);
  ctx.lineTo(x + 5.5, y + 2.5);
  ctx.lineTo(x + 2.5, y + 2.5);
  ctx.fill();
  ctx.stroke();
}

function draw_map(map)
{
  var i;
  var j;
  for (i = 0; i < map.length; i++)
    {
      for (j = 0; j < map[i].length; j++)
        {
          if (map[i][j] == 1)
            draw_block(j,i);
        }
    }
}

function draw_number(x, y, num)
{
  ctx.beginPath();

  if (num == 0 || num == 4 || num == 5 || num == 6 || num == 8 || num == 9)
    {
      ctx.moveTo(x + 0.5, y + 1.5);
      ctx.lineTo(x + 0.5, y + 5.5);
    }

  if (num == 0 || num == 2 || num == 6 || num == 8)
    {
      ctx.moveTo(x + 0.5, y + 7.5);
      ctx.lineTo(x + 0.5, y + 11.5);
    }

  if (num == 0 || num == 1 || num == 2 || num == 3 || num == 4 || num == 7 || num == 8 || num == 9)
    {
      ctx.moveTo(x + 3.5, y + 1.5);
      ctx.lineTo(x + 3.5, y + 5.5);
    }

  if (num == 0 || num == 1 || num == 3 || num == 4 || num == 5 || num == 6 || num == 7 || num == 8 || num == 9)
    {
      ctx.moveTo(x + 3.5, y + 7.5);
      ctx.lineTo(x + 3.5, y + 11.5);
    }

  if (num == 0 || num == 2 || num == 3 || num == 5 || num == 6 || num == 7 || num == 8 || num == 9)
    {
      ctx.moveTo(x + 1.5, y + 0.5);
      ctx.lineTo(x + 2.5, y + 0.5);
    }

  if (num == 2 || num == 3 || num == 4 || num == 5 || num == 6 || num == 8 || num == 9)
    {
      ctx.moveTo(x + 1.5, y + 6.5);
      ctx.lineTo(x + 2.5, y + 6.5);
    }

  if (num == 0 || num == 2 || num == 3 || num == 5 || num == 6 || num == 8 || num == 9)
    {
      ctx.moveTo(x + 1.5, y + 12.5);
      ctx.lineTo(x + 2.5, y + 12.5);
    }

  ctx.stroke();
}

var camera = {
    width  : 10,
    height : 20,
    x : 0,
    y : 0
};

var snake = {
    head : { x : 0, y : 0},
    tail : new Array(),
    move : { x : 0, y : 0}
};

var blink = {
    x : 0,
    y : 0,
    visible : false
};

function add_tail()
{
  if (snake.tail.length)
    return {x : snake.tail[snake.tail.length - 1].x, y : snake.tail[snake.tail.length - 1].y};
  else
    return {x : snake.head.x, y : snake.head.y};
}

document.onkeydown = function (event)
{
  switch(event.which)
    {
    case 87: //Up
      if (snake.move.y == 1)
        break;
      snake.move.x = 0;
      snake.move.y = -1;
      break;

    case 83: //Down
      if (snake.move.y == -1)
        break;
      snake.move.x = 0;
      snake.move.y = 1;
      break;

    case 65: //Left
      if (snake.move.x == 1)
        break;
      snake.move.x = -1;
      snake.move.y = 0;
      break;

    case 68: //Right
      if (snake.move.x == -1)
        break;
      snake.move.x = 1;
      snake.move.y = 0;
      break;
    }
}

function score_to_print(score)
{
  var str = "000000";
  var score_str = score.toString();
  var ret_str = new Array();

  for (var i = 0; i < str.length - score_str.length; i++)
  {
    ret_str.push('0');
  }

  ret_str.push(score_str);

  return ret_str.join('');
}

function draw_score()
{
  x = 98;
  y = 20;
  for(var i = 0; i < print_score.length; i++)
  {
    draw_number(x + (i * 4 + i * 1), y, print_score[i]);
  }
}

function snake_step()
{
  var head_x = snake.head.x;
  var head_y = snake.head.y;

  snake.head.x += snake.move.x;
  snake.head.y += snake.move.y;

  if (collision(blink.x, blink.y))
    {
      blink_random();
      snake.tail.push(add_tail());
      score += 100;
      print_score = score_to_print(score);
      if (snake.tail.length > 5)
        next_level();
    }

  if (snake.tail.length > 0)
    {
      for(i = snake.tail.length - 1; i > 0; i--)
        {
          snake.tail[i].x = snake.tail[i - 1].x;
          snake.tail[i].y = snake.tail[i - 1].y;
        }

      snake.tail[0].x = head_x;
      snake.tail[0].y = head_y;
    }

  if (snake.head.x >= camera.width || snake.head.x < 0)
    reset();
  if (snake.head.y >= camera.height || snake.head.y < 0)
    reset();

  for (var i = 0; i < snake.tail.length; i++)
    if (snake.tail[i].x == snake.head.x && snake.tail[i].y == snake.head.y && step > 3)
        reset();

  if (map[snake.head.y][snake.head.x] == 1)
    reset();

  step += 1;
}

function blink_step()
{
  blink.visible = !blink.visible;
}

function snake_render()
{
  draw_block(snake.head.x, snake.head.y);
  for(i = 0; i < snake.tail.length; i++)
    draw_block(snake.tail[i].x, snake.tail[i].y);
}

function blink_render()
{
  if (blink.visible)
    draw_block(blink.x, blink.y);
}

function collision(x,y)
{
  if (snake.head.x == x && snake.head.y == y)
    return true;

  for (var i = 0; i < snake.tail.length; i++)
    if (snake.tail[i].x == x && snake.tail[i].y == y)
      return true;

  return map[y][x] == 1
}

function blink_random()
{
  do
    {
      x = Math.floor(Math.random() * ( camera.width));
      y = Math.floor(Math.random() * ( camera.height));
    }
  while(collision(x, y));

  blink.x = x;
  blink.y = y;
}

snake.tail.push(add_tail());
snake.tail.push(add_tail());

blink_random();

var old_time = (new Date).getTime();
var time = old_time;
var dt = time - old_time;
var tmp_dt;

function getDt()
{
  time = (new Date).getTime();
  dt = time - old_time;
  old_time = time;
  return dt;
}

var score = 0;
var print_score = ['0', '0', '0', '0', '0', '0 '];

var run_time = 0;
var snake_speed = 150;
var blink_speed = 200;
var blink_run = 0;
var step = 0;
var level = 1;

snake.move.x = 0;
snake.move.y = 1;

function next_level()
{
  snake.head.x = 0;
  snake.head.y = 0;
  snake.tail = [];
  snake.tail.push(add_tail());
  snake.tail.push(add_tail());
  snake.move.x = 0;
  snake.move.y = 1;
  step = 0;
  level++;
  if (level < maps.length)
    map = maps[level];
  else
    map = maps[0];
}

function reset()
{
  run_time = 0;
  snake_speed = 150;
  blink_speed = 200;
  blink_run = 0;
  score = 0;
  print_score = ['0','0','0','0','0','0'];
  level = 0;
  next_level();
}

var need_draw = true;
function draw_all()
{
  if (level >= maps.length)
    {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      draw_border();
      draw_map(map);
      draw_score();
      return;
    }
  tmp_dt = getDt();
  run_time += tmp_dt;
  blink_run += tmp_dt;

  while (run_time > snake_speed)
    {
      run_time -= snake_speed;
      snake_step();
      need_draw = true;
    }
  while (blink_run > blink_speed)
    {
      blink_run -= blink_speed;
      blink_step();
      need_draw = true;
    }

  if (need_draw)
  {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw_border();
    snake_render();
    blink_render();
    draw_map(map);
    draw_score();

    need_draw = false;
  }


  tmp_dt = getDt();
  run_time += tmp_dt;
  blink_run += tmp_dt;

  setTimeout(draw_all, Math.max(0, Math.min(blink_speed - blink_run, snake_speed - run_time)));
}
setTimeout(draw_all, 40);

draw_border();
draw_map(map);
