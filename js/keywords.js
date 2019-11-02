
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    
  /* TEXTOS */
  var texto = "";
  var texto2 = "";
  var texto_presentacion = "Hola. Bienvenidos al curso de METODOLOGÍA DE ESTUDIO.";
  var texto_objetivoCurso = "Vamos a aprender dos sencillas técnicas de estudio, llamadas: <code>Notacion marginal</code> y <code>palabras-clave</code>";
  var texto_abejas = "Cada enjambre está formado por numerosas abejas. Podemos distinguir tres tipos: la reina, hembra capaz de poner huevos; las obreras, hembras que no ponen huevos, y los zánganos o machos.";
  var texto_abejasCorto = "Cada enjambre está formado por numerosas abejas.";
  var texto_abejasKeywords = "Cada <keyword>enjambre</keyword> está formado por numerosas <keyword>abejas</keyword>.   Podemos distinguir tres tipos: la <keyword>reina</keyword>, <keyword>hembra</keyword> capaz de poner <keyword>huevos</keyword>; las <keyword>obreras</keyword>, hembras que no ponen huevos y los <keyword>zánganos</keyword> o <keyword>machos</keyword>.";  

$("#botonplay").on("click", () => {   
      tl.play(); 
}); 

$("#botonpause").on("click", () => {   tl.pause();  });
$("#botonrestart").on("click", () => {   tl.restart();  });


/* ----------------------------------------    JQuery   ----------------------------------------- */
$(function() { 

  // Configuracion de TTS
  msg.voice = voices[10];
  msg.voiceURI = "native";  
  msg.volume = 1;
  msg.rate = .8;
  msg.pitch = .6;
  msg.lang = 'es-AR'; 

}); 

function decir (mensaje) {
  msg.text = mensaje;
  speechSynthesis.speak(msg);
}

function narrar (mensaje) {
  texto = mensaje;
  $(".dialogo_parrafo").html(texto);  
  decir(texto);
} 

/* ----------------------------------------    ANIME.JS   ----------------------------------------- */
var tl = anime.timeline({
      easing: 'linear',
      autoplay: false,
      loop: false
}); 
 
tl 
.add({
  targets: '.dialogo_parrafo',
  delay: 500,
  duration: 50,
  opacity: 1,   
  begin: function(anim) {
    narrar(texto_presentacion);
  },
  complete: function(anim){
    tl.pause(); 
  } 
}) 
.add({
  targets: '.dialogo_parrafo',
  delay: 500,
  duration: 50,
  opacity: 1,   
  begin: function(anim) {
    narrar(texto_objetivoCurso);
    tl.pause();    
}
}) 
.add({
  targets: '.dialogo_parrafo',
  duration: 50,
  complete: function(anim) {
    texto = "Las <code>palabras clave</code> son las palabras <strong>IMPORTANTES</strong> de un texto.";
    texto += "<br><br>Son palabras que no pueden omitirse sin que pierda sentido el texto. ";
    texto += "<br> Son <u>palabras propias y específicas de la <strong>materia</strong></u> que se está tratando. ";
/*     texto += "<br> También pueden ser palabras importantes debido al <strong>punto de vista</strong> con que estamos analizando el texto."; 
     texto += "<br> Están relacionadas con el <strong>Título</strong> del texto.";  */

    narrar(texto);
    tl.pause(); 
}
})
.add({
  targets: '.dialogo_parrafo',
  duration: 3000, 
  opacity: 1,   
  begin: function(anim) {
    narrar("Leamos juntos el siguiente texto.");
  } 
}) 
.add({
  targets: '.texto',
  duration: 1000,
  scale:  [0, 1],
  begin: function(anim) {
    $(".texto_parrafo").html(texto_abejas);
  },
  complete: function(anim){
    decir("Las abejas.");
    decir(texto_abejas);    
    tl.pause();    
  }
}) 
.add({
  targets: '.nota_marginal',
  duration: 50,
  complete: function(anim) {
    texto = `Resaltemos las <code>palabras clave</code> del texto que acabamos de leer.`;

    narrar(texto);

    tl.pause();
}
})
.add({
  targets: '.texto_parrafo',
  duration: 50,
  begin: function(anim) {

  },
  complete: function(anim) {
    $(".texto_parrafo").html(texto_abejasKeywords);
    texto = `Ahora podemos ver las <code>palabras clave</code> resaltadas en <keyword>color azul</keyword>.`;
    texto2 = `<br><br> No te preocupes si no escribiste exactamente las mismas palabras claves. 
            <br> Tal vez no escribiste alguna de ellas o tal vez escribiste otras palabras que acá no están resaltadas.
            <br> Pero eso NO IMPORTA !!
            <br> El proceso de aprender es un <u>proceso que vas a ir construyendo paso a paso</u>. No es algo que se consigue haciendo una única cosa.
            <br> Es un <strong>proceso repetitivo</strong>:en el que constantemente vas a ir releyendo el mismo texto pero cada vez con distintas técnicas y objetivos, y lo más importante, cada vez vas a tener más entendimiento del tema que estás estudiando.`;
/*             con cada paso que hacés vas a ir aumentando tu conocimiento del tema. 
            <br> Lo que en este momento no te parece importante, puede serlo más adelante, o al revés!.
            <br> Lo que SÍ es IMPORTANTE es que seas PROTAGONISTA de lo que estás estudiando .. NO ESPECTADOR.
            <br> HACE COSAS !!! (no solamente leas).
            <br> Hacete PREGUNTAS sobre el tema de estudio, DIBUJÁ, USA MUCHOS COLORES, hacé RESÚMENES, 
            PREGUNTATE COSAS CON RESPECTO A VOS: ¿estoy verdaderamente ENTENDIENDO? 
            o  solamente estoy MEMORIZANDO, 
            ¿ESTOY CANSADO? etc. etc.`;  */  
 
    narrar(texto);  
    decir(texto2);
    tl.pause();
  }
})
.add({
  targets: '.nota_marginal',
  duration: 50,
  keyframes: [
    {opacity: 1, duration: 250},
    {opacity: 0, duration: 250},
    {opacity: 1, duration: 250},
    {opacity: 0, duration: 250},    
    {opacity: 1, duration: 250},    
  ],
  begin: function(anim) {
    $(".texto_parrafo").html(texto_abejas);
    narrar("Ahora, escribí en el <code>margen</code> del texto un <code>título</code> breve que diga de qué habla el párrafo.");
  },
  complete: function(anim) {
    tl.pause();
  }
})
.add({
  targets: '.nota_marginal',
  duration: 10,
  borderWidth: 0,
  complete: function(anim) {
  }
})
.add({
  targets: '.nota_marginal',
  duration: 10,
  color: '#F00',
  complete: function(anim) {
      $(".dialogo_parrafo").html("");
      tl.pause();
  }
})
.add({
  targets: '.dialogo_parrafo',
  duration: 10,
  complete: function(anim) {
       $(".dialogo_parrafo").html("<u>Técnica</u>: <code>Anotación Marginal</code>"); 
       tl.pause();
  }
})
.add({
  targets: '.dialogo_parrafo',
  duration: 10,
  endDelay: 1000,
  begin: function(anim) {
    narrar(`Agarrá una hoja aparte, y ponele como título: <strong>GLOSARIO</strong>.
    <br> La palabra GLOSARIO significa simplemente: LISTA DE PALABRAS.`);
  }
})
.add({
  targets: '.glosario',
  keyframes: [
     {opacity: 1, duration: 5},
     {scale: [0, 1], duration: 500}
  ],
  complete: function(anim) {
    tl.pause();
}
})
.add({
  targets: '.texto_parrafo',
  duration: 50,
  color: '#DD8',
  keyframes: [
    {opacity: 1, duration: 250},
    {opacity:0, duration: 250},
    {opacity: 1, duration: 250},
    {opacity:0, duration: 250},
    {opacity: 1, duration: 250},
    {opacity:0, duration: 250},  
    {opacity: 1, duration: 250},    
    {opacity:0, duration: 250},
    {opacity: 1, duration: 250},
    {opacity:0, duration: 250},  
    {opacity: 1, duration: 250},             
 ],
  begin: function(anim) {
    narrar("En el GLOSARIO escribí el <code>título marginal</code> y la lista de <code>palabras clave</code> que encontraste.");
  },
  complete: function(anim){
    tl.pause();
  }
})
.add({
  targets: '.texto_parrafo',
  duration: 50,
  color: '#000',
})
.add({
  targets: '.glosario_titulo',
  delay: 500,  
  duration: 50,
  opacity: 1,
  color: '#F00',
})
.add({
  targets: '.glosario_items',
  delay: 500,  
  duration: 50,
  opacity: 1,
  complete: function(anim) {
    $(".dialogo_parrafo").html("");
    tl.pause;
}
})
;

      