alert("Si funciona");
var usuario = prompt("Cual es tu peso?");
var planeta = parseInt(prompt("Eligen un planeta. 1 marte, 2 jupiter"));
var g_tierra = 9.8;
var g_marte  = 3.7;
var g_jupiter = 24.8;
var peso      = parseFloat(usuario);
var g_total   = 0;
var n_planeta = "";
var todo_ok   = 0;
if (planeta == 1)
    { g_total   = g_marte;
      n_planeta = "Marte";
    }
else if (planeta == 2)
          { g_total  = g_jupiter;
          n_planeta = "Jupiter";
          }
     else {
             alert("Debe seleccionar uno 1 o dos 2");
             todo_ok = 1;
           }

if (todo_ok == 0)
{
    var peso_final = parseFloat ( (g_total * peso) / g_tierra);
    document.write ("Mi peso en " + n_planeta + "  es <strong>" + peso_final + "  kilos </strong>");
}
