function comprobar(palabra){
    for(let i=0;i< palabra.length ; i++){
      if(palabra[i]!==palabra[palabra.length-i-1]){
        return false
      }
      return true
    }
  
  }
  function comprobar_2(palabra){
    palabra=palabra.toLowerCase();
    let palabra_invertida=""; 
    for(i=0;i<palabra.length;i++){
      palabra_invertida+=palabra[palabra.length-i-1]
    }
    console.log(palabra_invertida)
    console.log(palabra_invertida)
    if(palabra_invertida===palabra){
      return true;
    }
    return false;
  }
  
  console.log(comprobar_2("sexo"));

  $imagen_n=$_FILES['imagen']['name'];
$imagen=$_FILES['imagen']['tmp_name'];
$cadena     = explode (".",$imagen_n);
$pos     =count ($cadena)-1;
$ext        =$cadena[$pos];
$dir        ="files/";
$file_enc   =md5_file($imagen);
if($imagen_n!=''){//CREAR CARPETA LLAMADA ARCHIVOS
        $imagen_1 ="$file_enc.$ext";
        copy($imagen, $dir.$imagen_1);
    }