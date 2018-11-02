/*
@autor: Jefferson Rivera
@email: riverajefer@gmail.com
*/

$(document).ready(function() {

    //creamos un objeto de firebase, y le pasamos la URL como parametro
    var ref = new Firebase("https://proyecto-cdom.firebaseio.com/luces/");
  
    /*****************************************************************
     Obtenemos el valor del último estado 
    ******************************************************************/
    ref.once("value", function(res) {
  
      var luzSala = res.child("sala").val();
      if(luzSala=="on")
      $('#switch').attr('checked', luzSala); // 
      console.log("Estado actual: " +luzSala)

  
    });
  
    /*****************************************************************
     Obtenemos el valor del estado de la luz en tiempo real, 
     cada vez que haya cambio
    ******************************************************************/
    ref.on("child_changed", function(res) {
  
      var luz_sala = res.val();
/*       $('#switch').prop('checked', luz_sala);
 */      $('#switch').addClass('fas fa-lightbulb apagada')
      console.log("Cambio de estado: " +luz_sala)
  
    });        
  
   /*****************************************************************
     Actualizamos el valor, cambiado el estado del Switch 
    ******************************************************************/
    $('#switch').on('click', function(){ 
       if(this.checked) 
        {
            console.log("On")
            ref.update({ sala: true });
        }
        else{
            console.log("Off")
            ref.update({ sala: false });
        }
      });
  
  });