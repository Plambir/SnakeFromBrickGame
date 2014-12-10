/* Brick Game (Snake Game)
 * Copyright (C) 2011  Alexander A. Prusov
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
function create_canvas()
{
  document.getElementById("it_is_game").innerHTML = [
    "<table width='100%'>",
    "  <tr>",
    "    <td align='center'>",
    "      <table width='132px'>",
    "        <tr>",
    "          <td align='center'>",
    "            <button id='it_is_game_play'>play</button>",
    "          </td>",
    "          <td align='center'>",
    "            speed:<br/>",
    "            <select id='it_is_game_speed'>",
    "              <option>1</option>",
    "              <option>2</option>",
    "              <option>3</option>",
    "              <option>4</option>",
    "              <option>5</option>",
    "              <option>6</option>",
    "              <option>7</option>",
    "              <option>8</option>",
    "              <option>9</option>",
    "            </select>",
    "          </td>",
    "        </tr>",
    "      </table>",
    "      <style>",
    "        #it_is_game_break",
    "        {",
    "          background: #ccc;",
    "        }",
    "      </style>",
    "      <canvas id='it_is_game_break' width='132' height='183' />",
    "    </td>",
    "  </tr>",
    "</table>"].join("");

  return document.getElementById("it_is_game_break");
}

var canvas = create_canvas();
var ctx = canvas.getContext("2d");
var speed_select = document.getElementById('it_is_game_speed').value;

var timer_id = null;
document.getElementById('it_is_game_play').onclick = function ()
{
  if (timer_id !== null)
    clearTimeout(timer_id);

  speed_select = document.getElementById('it_is_game_speed').value;
  reset();
  timer_id = setTimeout(draw_all, 40);
};

ctx.strokeStyle = '#000';
ctx.fillStyle = '#000';
ctx.lineWidth = 1;

function draw_border()
{
  ctx.beginPath();
  ctx.moveTo(0.5,  0);
  ctx.lineTo(0.5,  183);

  ctx.moveTo(92.5,  0);
  ctx.lineTo(92.5,  183);

  ctx.moveTo(0,  0.5);
  ctx.lineTo(93, 0.5);

  ctx.moveTo(0,  182.5);
  ctx.lineTo(93, 182.5);
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
    [0,0,0,1,0,0,1,0,0,0],
    [0,0,0,1,1,0,1,0,0,0],
    [0,0,0,1,0,1,1,0,0,0],
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
[
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
],
[
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,0,0,0,0],
    [0,0,0,0,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
],
[
    [0,0,0,0,0,0,0,0,0,0],
    [0,1,1,0,0,0,0,1,1,0],
    [0,1,0,0,0,0,0,0,1,0],
    [0,0,0,0,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,0,0,0,0],
    [0,0,0,0,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,0,0,0,0],
    [0,1,0,0,0,0,0,0,1,0],
    [0,1,1,0,0,0,0,1,1,0],
    [0,0,0,0,0,0,0,0,0,0],
],
[
    [0,0,0,0,0,0,0,0,0,0],
    [0,1,1,0,0,0,0,1,1,0],
    [0,1,0,0,0,0,0,0,1,0],
    [0,0,0,0,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,1,0,0],
    [0,0,1,0,0,0,0,1,0,0],
    [0,0,1,0,0,0,0,1,0,0],
    [0,0,1,0,0,0,0,1,0,0],
    [0,0,1,0,0,0,0,1,0,0],
    [0,0,1,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,0,0,0,0],
    [0,1,0,0,0,0,0,0,1,0],
    [0,1,1,0,0,0,0,1,1,0],
    [0,0,0,0,0,0,0,0,0,0],
],
[
    [0,0,0,0,0,0,0,0,0,0],
    [0,1,1,0,0,0,0,0,0,0],
    [0,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,1,0,0],
    [0,0,0,1,1,0,1,1,0,0],
    [0,0,0,1,0,0,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,0,0,1,1,1,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,0,0],
    [0,0,0,0,0,1,1,0,0,0],
    [0,0,1,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,0,0,0],
    [0,0,1,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
],
[
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,1,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,1,1,1,1,0],
    [0,1,1,1,1,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,1,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
],
[
    [0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,0],
    [0,1,0,0,0,0,0,0,1,0],
    [0,0,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,1,0],
    [0,1,1,1,1,1,1,0,1,0],
    [0,1,0,0,0,0,0,0,1,0],
    [0,1,0,1,1,1,1,1,1,0],
    [0,1,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,1,0],
    [0,1,1,1,1,1,1,0,1,0],
    [0,1,0,0,0,0,0,0,1,0],
    [0,1,0,1,0,0,1,0,1,0],
    [0,1,0,1,0,0,1,0,1,0],
    [0,1,0,1,0,0,1,0,1,0],
    [0,1,0,1,0,0,1,0,0,0],
    [0,1,0,0,0,0,0,0,1,0],
    [0,1,1,1,1,1,1,1,1,0],
    [0,0,0,0,0,0,0,0,0,0],
],
[
    [0,0,0,0,0,0,0,0,0,0],
    [0,1,0,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,0,1,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0],
    [0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,0,1,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,0,0,0],
    [0,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
],
[
    [0,0,0,0,0,0,0,0,0,0],
    [0,1,0,0,0,0,0,0,1,0],
    [0,0,1,0,0,0,0,1,0,0],
    [0,0,0,1,0,0,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,1,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,1,0,0,1,0],
    [0,1,0,0,1,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,1,0],
    [0,1,0,0,1,0,0,0,1,0],
    [0,1,0,0,0,1,0,0,1,0],
    [0,1,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,1,0,0,1,0],
    [0,1,0,0,1,0,0,0,1,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,1,0,0,0],
    [0,0,1,0,0,0,0,1,0,0],
    [0,1,0,0,0,0,0,0,1,0],
    [0,0,0,0,0,0,0,0,0,0],
],
[
    [0,0,0,1,0,0,0,1,0,0],
    [0,1,0,1,0,1,0,1,0,0],
    [0,1,0,1,0,1,0,1,0,0],
    [0,1,0,1,0,1,0,1,0,0],
    [0,1,0,1,0,1,0,1,0,0],
    [0,1,0,1,0,1,0,1,0,0],
    [0,1,0,1,0,1,0,1,0,0],
    [0,1,0,1,0,1,0,1,0,0],
    [0,1,0,1,0,1,0,1,0,0],
    [0,1,0,1,0,1,0,0,0,0],
    [0,1,0,0,0,1,0,1,0,0],
    [0,1,0,1,0,1,0,1,0,0],
    [0,1,0,1,0,1,0,1,0,0],
    [0,1,0,1,0,1,0,1,0,0],
    [0,1,0,1,0,1,0,1,0,0],
    [0,1,0,1,0,1,0,1,0,0],
    [0,1,0,1,0,1,0,1,0,0],
    [0,1,0,1,0,1,0,1,0,0],
    [0,1,0,1,0,1,0,1,0,0],
    [0,0,0,1,0,0,0,1,0,0],
],
[
    [0,0,0,0,0,0,0,0,0,0],
    [0,1,1,0,1,1,0,1,1,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,1,1,0,1,1,0,1,1,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,1,1,0,1,1,0,1,1,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,1,1,0,1,1,0,1,1,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,1,1,0,1,1,0,1,1,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,1,1,0,1,1,0,1,1,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,1,1,0,1,1,0,1,1,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,1,1,0,1,1,0,1,1,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,1,1,0,1,1,0,1,1,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
],
[
    [0,0,0,0,0,0,0,0,0,0],
    [0,1,1,0,0,0,0,1,1,0],
    [0,1,0,0,0,0,0,0,1,0],
    [0,0,0,1,1,1,1,0,0,0],
    [0,0,0,1,0,0,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,0,0,0],
    [0,0,0,1,1,1,1,0,0,0],
    [0,0,0,1,1,1,1,0,0,0],
    [0,0,0,1,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,1,0,0,0],
    [0,0,0,1,1,1,1,0,0,0],
    [0,1,0,0,0,0,0,0,1,0],
    [0,1,1,0,0,0,0,1,1,0],
    [0,0,0,0,0,0,0,0,0,0],
],
[
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,1,0,0],
    [0,1,1,0,0,0,0,1,1,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,1,1,0,0,0,0,1,1,0],
    [0,0,1,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,1,0,0],
    [0,1,1,0,0,0,0,1,1,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,1,1,0,0,0,0,1,1,0],
    [0,0,1,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,0,0,0],
],
[
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,0,0],
    [0,0,1,1,0,0,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,0,0,1,1,0,0],
    [0,0,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,0,0,1,1,0,0],
    [0,0,0,1,0,0,1,0,0,0],
    [0,0,0,1,0,0,1,0,0,0],
    [0,0,1,1,0,0,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,0,0],
    [0,0,1,1,0,0,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,0,0,1,1,0,0],
    [0,0,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
],
[
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,0,0,1,1,0,0],
    [0,0,0,1,0,0,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,0,0],
    [0,0,0,1,1,0,0,0,0,0],
    [0,0,0,0,0,1,1,0,0,0],
    [0,0,0,0,0,0,1,0,0,0],
    [0,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,0,1,1,0,0,0],
    [0,0,0,1,1,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,1,0,0,0],
    [0,0,1,1,0,0,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
],
[
    [0,0,0,0,0,0,0,0,0,0],
    [0,1,0,0,0,0,1,0,0,0],
    [0,0,1,0,0,1,0,0,0,0],
    [0,0,0,1,1,0,0,0,0,0],
    [0,0,0,1,1,0,0,0,0,0],
    [0,0,1,0,0,1,0,0,0,0],
    [0,1,0,0,0,0,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0],
    [0,0,0,0,0,0,0,1,1,0],
    [0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,0,1,0,0,0,0],
    [0,0,0,1,1,0,0,0,0,0],
    [0,0,0,1,1,0,0,0,0,0],
    [0,0,1,0,0,1,0,0,0,0],
    [0,1,0,0,0,0,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0],
    [0,0,0,0,0,0,0,1,1,0],
    [0,1,0,0,0,0,1,0,0,0],
    [0,0,1,0,0,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
],
    ];

var map = maps[1];

function draw_block(i,j)
{
  var x = 2 + i + i * 8;
  var y = 2 + j + j * 8;
  ctx.beginPath();
  ctx.moveTo(x + 0.5, y + 0);
  ctx.lineTo(x + 0.5, y + 8);

  ctx.moveTo(x + 0, y + 7.5);
  ctx.lineTo(x + 8, y + 7.5);

  ctx.moveTo(x + 7.5, y + 0);
  ctx.lineTo(x + 7.5, y + 8);


  ctx.moveTo(x + 0, y + 0.5);
  ctx.lineTo(x + 8, y + 0.5);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x + 2.5, y + 2);
  ctx.lineTo(x + 2.5, y + 6);

  ctx.moveTo(x + 3.5, y + 2);
  ctx.lineTo(x + 3.5, y + 6);

  ctx.moveTo(x + 4.5, y + 2);
  ctx.lineTo(x + 4.5, y + 6);

  ctx.moveTo(x + 5.5, y + 2);
  ctx.lineTo(x + 5.5, y + 6);
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

  if (num === 0 || num == 4 || num == 5 || num == 6 || num == 8 || num == 9)
    {
      ctx.moveTo(x + 0.5, y + 1);
      ctx.lineTo(x + 0.5, y + 6);
    }

  if (num === 0 || num == 2 || num == 6 || num == 8)
    {
      ctx.moveTo(x + 0.5, y + 7);
      ctx.lineTo(x + 0.5, y + 12);
    }

  if (num === 0 || num == 1 || num == 2 || num == 3 || num == 4 || num == 7 || num == 8 || num == 9)
    {
      ctx.moveTo(x + 3.5, y + 1);
      ctx.lineTo(x + 3.5, y + 6);
    }

  if (num === 0 || num == 1 || num == 3 || num == 4 || num == 5 || num == 6 || num == 7 || num == 8 || num == 9)
    {
      ctx.moveTo(x + 3.5, y + 7);
      ctx.lineTo(x + 3.5, y + 12);
    }

  if (num === 0 || num == 2 || num == 3 || num == 5 || num == 6 || num == 7 || num == 8 || num == 9)
    {
      ctx.moveTo(x + 1, y + 0.5);
      ctx.lineTo(x + 3, y + 0.5);
    }

  if (num == 2 || num == 3 || num == 4 || num == 5 || num == 6 || num == 8 || num == 9)
    {
      ctx.moveTo(x + 1, y + 6.5);
      ctx.lineTo(x + 3, y + 6.5);
    }

  if (num === 0 || num == 2 || num == 3 || num == 5 || num == 6 || num == 8 || num == 9)
    {
      ctx.moveTo(x + 1, y + 12.5);
      ctx.lineTo(x + 3, y + 12.5);
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
    tail : [],
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

var key_press = false;
document.onkeydown = function (event)
{
  if (key_press)
    return;

  switch(event.which)
    {
    case 87: //Up
      if (snake.move.y == 1)
        break;
      snake.move.x = 0;
      snake.move.y = -1;
      key_press = true;
      break;

    case 83: //Down
      if (snake.move.y == -1)
        break;
      snake.move.x = 0;
      snake.move.y = 1;
      key_press = true;
      break;

    case 65: //Left
      if (snake.move.x == 1)
        break;
      snake.move.x = -1;
      snake.move.y = 0;
      key_press = true;
      break;

    case 68: //Right
      if (snake.move.x == -1)
        break;
      snake.move.x = 1;
      snake.move.y = 0;
      key_press = true;
      break;
    }
};

function snake_rotate(side)
{
  if(snake.move.y == 1)
  {
    snake.move.x = side;
    snake.move.y = 0;
    return;
  }
  if(snake.move.y == -1)
  {
    snake.move.x = side;
    snake.move.y = 0;
    return;
  }
  if(snake.move.x == 1)
  {
    snake.move.x = 0;
    snake.move.y = side;
    return;
  }
  if(snake.move.x == -1)
  {
    snake.move.x = 0;
    snake.move.y = side;
    return;
  }
}

var touch_press = false;
document.addEventListener('touchstart', function(event) {
  if(touch_press)
    return;

  var rotate = 1;
  if(event.touches[0].screenX < screen.width / 2)
    rotate = -1;

  snake_rotate(rotate);
  touch_press = true;
}, false);

function number_to_print(score, length)
{
  var score_str = score.toString();
  var ret_str = [];

  for (var i = 0; i < length - score_str.length; i++)
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
  for (var i = 0; i < print_score.length; i++)
  {
    draw_number(x + (i * 4 + i), y, print_score[i]);
  }
}

function draw_live()
{
  var print_live = number_to_print(live, 2);
  x = 108;
  y = 47;
  for (var i = 0; i < print_live.length; i++)
    draw_number(x + (i * 4 + i), y, print_live[i]);
}

function draw_speed()
{
  var print_live = number_to_print(speed_select, 1);
  x = 111;
  y = 91;
  for (var i = 0; i < print_live.length; i++)
    draw_number(x + (i * 4 + i), y, print_live[i]);
}

function draw_level()
{
  var print_level = number_to_print(level, 3);
  x = 106;
  y = 108;
  for (var i = 0; i < print_level.length; i++)
    draw_number(x + (i * 4 + i), y, print_level[i]);
}

function draw_hud()
{
  //draw text
  ctx.beginPath();
  ctx.moveTo(106, 3.5);
  ctx.lineTo(109, 3.5);

  ctx.moveTo(111, 3.5);
  ctx.lineTo(114, 3.5);

  ctx.moveTo(115, 3.5);
  ctx.lineTo(117, 3.5);

  ctx.moveTo(119, 3.5);
  ctx.lineTo(122, 3.5);

  ctx.moveTo(123, 3.5);
  ctx.lineTo(126, 3.5);

  ctx.moveTo(106, 4.5);
  ctx.lineTo(108, 4.5);

  ctx.moveTo(110, 4.5);
  ctx.lineTo(111, 4.5);

  ctx.moveTo(114, 4.5);
  ctx.lineTo(115, 4.5);

  ctx.moveTo(117, 4.5);
  ctx.lineTo(118, 4.5);

  ctx.moveTo(119, 4.5);
  ctx.lineTo(120, 4.5);

  ctx.moveTo(121, 4.5);
  ctx.lineTo(122, 4.5);

  ctx.moveTo(123, 4.5);
  ctx.lineTo(126, 4.5);

  ctx.moveTo(108, 5.5);
  ctx.lineTo(109, 5.5);

  ctx.moveTo(110, 5.5);
  ctx.lineTo(111, 5.5);

  ctx.moveTo(114, 5.5);
  ctx.lineTo(115, 5.5);

  ctx.moveTo(117, 5.5);
  ctx.lineTo(118, 5.5);

  ctx.moveTo(119, 5.5);
  ctx.lineTo(121, 5.5);

  ctx.moveTo(123, 5.5);
  ctx.lineTo(124, 5.5);

  ctx.moveTo(106, 6.5);
  ctx.lineTo(109, 6.5);

  ctx.moveTo(111, 6.5);
  ctx.lineTo(114, 6.5);

  ctx.moveTo(115, 6.5);
  ctx.lineTo(117, 6.5);

  ctx.moveTo(119, 6.5);
  ctx.lineTo(122, 6.5);

  ctx.moveTo(123, 6.5);
  ctx.lineTo(126, 6.5);

  ctx.moveTo(107.5, 39);
  ctx.lineTo(107.5, 44);

  ctx.moveTo(107, 43.5);
  ctx.lineTo(110, 43.5);

  ctx.moveTo(111, 39.5);
  ctx.lineTo(113, 39.5);

  ctx.moveTo(111.5, 39);
  ctx.lineTo(111.5, 44);

  ctx.moveTo(113.5, 40);
  ctx.lineTo(113.5, 43);

  ctx.moveTo(115.5, 40);
  ctx.lineTo(115.5, 43);

  ctx.moveTo(116, 39.5);
  ctx.lineTo(117, 39.5);

  ctx.moveTo(114.5, 42);
  ctx.lineTo(114.5, 44);

  ctx.moveTo(116, 39.5);
  ctx.lineTo(120, 39.5);

  ctx.moveTo(117.5, 40);
  ctx.lineTo(117.5, 44);

  ctx.moveTo(117, 41.5);
  ctx.lineTo(120, 41.5);

  ctx.moveTo(117, 43.5);
  ctx.lineTo(120, 43.5);

  ctx.moveTo(102, 83.5);
  ctx.lineTo(109, 83.5);

  ctx.moveTo(102, 83.5);
  ctx.lineTo(109, 83.5);

  ctx.moveTo(102, 84.5);
  ctx.lineTo(103, 84.5);

  ctx.moveTo(103, 85.5);
  ctx.lineTo(109, 85.5);

  ctx.moveTo(105, 86.5);
  ctx.lineTo(107, 86.5);

  ctx.moveTo(102, 87.5);
  ctx.lineTo(107, 87.5);

  ctx.moveTo(106, 84.5);
  ctx.lineTo(107, 84.5);

  ctx.moveTo(108, 84.5);
  ctx.lineTo(109, 84.5);

  ctx.moveTo(110.5, 83);
  ctx.lineTo(110.5, 88);

  ctx.moveTo(110, 83.5);
  ctx.lineTo(113, 83.5);

  ctx.moveTo(110, 85.5);
  ctx.lineTo(113, 85.5);

  ctx.moveTo(110, 87.5);
  ctx.lineTo(113, 87.5);

  ctx.moveTo(114.5, 83);
  ctx.lineTo(114.5, 88);

  ctx.moveTo(114, 83.5);
  ctx.lineTo(117, 83.5);

  ctx.moveTo(114, 85.5);
  ctx.lineTo(117, 85.5);

  ctx.moveTo(114, 87.5);
  ctx.lineTo(117, 87.5);

  ctx.moveTo(118.5, 83);
  ctx.lineTo(118.5, 88);

  ctx.moveTo(118, 83.5);
  ctx.lineTo(121, 83.5);

  ctx.moveTo(118, 87.5);
  ctx.lineTo(121, 87.5);

  ctx.moveTo(121.5, 84);
  ctx.lineTo(121.5, 87);

  ctx.moveTo(99.5, 123);
  ctx.lineTo(99.5, 128);

  ctx.moveTo(100, 127.5);
  ctx.lineTo(102, 127.5);

  ctx.moveTo(103, 123.5);
  ctx.lineTo(106, 123.5);

  ctx.moveTo(103.5, 123);
  ctx.lineTo(103.5, 128);

  ctx.moveTo(103, 125.5);
  ctx.lineTo(106, 125.5);

  ctx.moveTo(103, 127.5);
  ctx.lineTo(106, 127.5);

  ctx.moveTo(112, 123.5);
  ctx.lineTo(115, 123.5);

  ctx.moveTo(112.5, 123);
  ctx.lineTo(112.5, 128);

  ctx.moveTo(112, 125.5);
  ctx.lineTo(115, 125.5);

  ctx.moveTo(112, 127.5);
  ctx.lineTo(115, 127.5);

  ctx.moveTo(116.5, 123);
  ctx.lineTo(116.5, 128);

  ctx.moveTo(117, 127.5);
  ctx.lineTo(119, 127.5);

  ctx.moveTo(106, 123.5);
  ctx.lineTo(107, 123.5);

  ctx.moveTo(110, 123.5);
  ctx.lineTo(111, 123.5);

  ctx.moveTo(107.5, 124);
  ctx.lineTo(107.5, 127);

  ctx.moveTo(108.5, 126);
  ctx.lineTo(108.5, 128);

  ctx.moveTo(109.5, 124);
  ctx.lineTo(109.5, 127);
  ctx.stroke();

  //draw number
  draw_score();
  draw_live();
  draw_speed();
  draw_level();
}

function snake_step()
{
  var head_x = snake.head.x;
  var head_y = snake.head.y;

  snake.head.x += snake.move.x;
  snake.head.y += snake.move.y;

  if (snake.head.x == blink.x && snake.head.y == blink.y)
    {
      blink_random();
      snake.tail.push(add_tail());
      score += 250 - snake_speed;
      if (score >= score_for_live)
        {
          live++;
          score_for_live *= 2;
        }
      print_score = number_to_print(score, 6);
      if (snake.tail.length > 20)
        level_next = true;
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
    {
      dead = true;
      return;
    }

  if (snake.head.y >= camera.height || snake.head.y < 0)
    {
      dead = true;
      return;
    }

  for (var i = 0; i < snake.tail.length; i++)
    {
      if (snake.tail[i].x == snake.head.x && snake.tail[i].y == snake.head.y && step > 3)
        {
          dead = true;
          return;
        }
    }

  if (map[snake.head.y][snake.head.x] == 1)
    {
      dead = true;
      return;
    }

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
    {
      if (snake.tail[i].x == x && snake.tail[i].y == y)
        return true;
    }

  return map[y][x] !== 0;
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
  blink.visible = true;
}

snake.tail.push(add_tail());
snake.tail.push(add_tail());

blink_random();

var old_time = (new Date()).getTime();
var time = old_time;
var dt = time - old_time;
var tmp_dt;

var live = 3;

function getDt()
{
  time = (new Date()).getTime();
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
var level_next = false;
var dead = false;
var score_for_live = 5000;

snake.move.x = 0;
snake.move.y = 1;

function again()
{
  old_time = (new Date()).getTime();
  snake.head.x = 0;
  snake.head.y = 0;
  snake.tail = [];
  snake.tail.push(add_tail());
  snake.tail.push(add_tail());
  snake.move.x = 0;
  snake.move.y = 1;
  blink.visible = true;
  step = 0;
  blink_random();
}
function next_level()
{
  again();
  level++;
  if (level < maps.length)
    map = maps[level];
  else
    map = maps[0];
  blink_random();
}

function reset()
{
  run_time = 0;
  snake_speed = 250 - Number(speed_select) * 20;
  blink_speed = 200;
  blink_run = 0;
  score = 0;
  print_score = ['0','0','0','0','0','0'];
  score_for_live = 5000;
  level = 0;
  live = 3;
  next_level();
}

var need_draw = true;
function draw_all()
{
  if (level_next || dead)
    {
      getDt();
      level_next = false;
      dead = false;
      snake.move.x = 0;
      snake.move.y = 1;
    }

  tmp_dt = getDt();
  run_time += tmp_dt;
  blink_run += tmp_dt;

  while (run_time > snake_speed)
    {
      run_time -= snake_speed;
      snake_step();
      need_draw = true;
      key_press = false;
      touch_press = false;
    }
  while (blink_run > blink_speed)
    {
      blink_run -= blink_speed;
      blink_step();
      need_draw = true;
    }

  if (level_next)
    {
      next_level();
      setTimeout(draw_all, 1500);
    }

  if (dead)
    {
      live = live - 1;
      if (live <= 0)
        {
          level = maps.length;
          map = maps[0];
        }
      else
        again();

      setTimeout(draw_all, 1500);
    }

  if (level >= maps.length)
    {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      draw_border();
      draw_map(map);
      draw_hud();
      return;
    }

  if (need_draw)
  {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw_border();
    if (!level_next)
      {
        snake_render();
        blink_render();
      }
    draw_map(map);
    draw_hud();

    need_draw = false;
  }


  tmp_dt = getDt();
  run_time += tmp_dt;
  blink_run += tmp_dt;

  if (!level_next && !dead)
    setTimeout(draw_all, Math.max(0, Math.min(blink_speed - blink_run, snake_speed - run_time)));
}

draw_border();
draw_map(map);
