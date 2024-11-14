(() => {
    // Contenido Detallado para Principiantes en PHP
    const pages = {
        sintaxis: {
            title: "Sintaxis Básica de PHP",
            content: `
                <p>Bienvenido a la guía completa de sintaxis básica de PHP. Este capítulo te introducirá a los fundamentos de la escritura de código en PHP, incluyendo cómo estructurar tu código, utilizar comentarios y entender la importancia de la indentación.</p>
                
                <h2>Introducción a PHP</h2>
                <p>PHP es un lenguaje de programación interpretado, de alto nivel y de propósito general. Su filosofía de diseño enfatiza la legibilidad del código con el uso de una indentación significativa. PHP es conocido por su sintaxis simple y fácil de aprender, lo que lo hace ideal para principiantes y permite desarrollar proyectos rápidamente.</p>

                <h2>Sintaxis Básica</h2>
                <p>La sintaxis de PHP está diseñada para ser sencilla y clara. A continuación, se presentan algunos elementos clave de la sintaxis de PHP que debes conocer:</p>
                
                <h3>1. Impresión en Consola</h3>
                <pre><code>&lt;?php echo "Hola, mundo!"; ?&gt;</code></pre>
                <p>La función <code>echo</code> se utiliza para mostrar información en la consola. Es uno de los primeros comandos que los principiantes suelen aprender.</p>
                
                <h3>2. Comentarios</h3>
                <pre><code>&lt;?php
    // Esto es un comentario en PHP
    echo "Esto se mostrará en la consola";  // Este es otro comentario
?&gt;</code></pre>
                <p>Los comentarios comienzan con el símbolo <code>//</code> y se utilizan para explicar el código o dejar notas. PHP ignora todo lo que esté después de un <code>//</code> en esa línea.</p>

                <h3>3. Variables e Identación</h3>
                <p>PHP no requiere que declares el tipo de una variable, simplemente asignas un valor:</p>
                <pre><code>&lt;?php
    $x = 5;
    $y = "Hola";
?&gt;</code></pre>
                <p>La indentación es crucial en PHP. Define los bloques de código, como los que se utilizan en funciones o bucles:</p>
                <pre><code>&lt;?php
    if ($x > 0) {
        echo "x es un número positivo";
    }
?&gt;</code></pre>
                <p>Nota cómo el bloque de código dentro del <code>if</code> está indentado.</p>

                <h3>4. Espacios y Tabulaciones</h3>
                <p>PHP usa la indentación para definir el nivel de anidación. Es importante no mezclar espacios y tabulaciones. Lo mejor es elegir uno y usarlo consistentemente. A continuación, se muestra un ejemplo:</p>
                <pre><code>&lt;?php
    for ($i = 0; $i &lt; 5; $i++) {
        echo $i;  // Correcto
    }
?&gt;</code></pre>
                <p>El código dentro del bucle <code>for</code> está indentado.</p>
            `
        },
        variables: {
            title: "Variables en PHP",
            content: `
                <p>En este capítulo, exploraremos en profundidad las variables en PHP, cómo funcionan y cómo utilizarlas eficazmente en tus programas.</p>
                
                <h2>¿Qué es una Variable?</h2>
                <p>Una variable es un nombre que se utiliza para referirse a un valor almacenado en la memoria. Puedes pensar en una variable como una caja donde se guarda información. En PHP, no necesitas especificar el tipo de dato que almacenará la variable; simplemente le asignas un valor.</p>
                
                <h3>1. Asignación de Variables</h3>
                <p>Asignar un valor a una variable en PHP es muy simple. Utilizas el operador igual <code>=</code> para asignar un valor:</p>
                <pre><code>&lt;?php
    $x = 10;
    $y = "Hola, mundo!";
    $z = 3.14;
?&gt;</code></pre>
                <p>En este ejemplo, <code>$x</code> es un número entero, <code>$y</code> es una cadena de texto, y <code>$z</code> es un número decimal.</p>
                
                <h3>2. Reasignación de Variables</h3>
                <p>Las variables en PHP son dinámicas, lo que significa que puedes reasignarles un nuevo valor en cualquier momento, incluso un valor de un tipo diferente:</p>
                <pre><code>&lt;?php
    $x = 5;
    $x = "Ahora soy una cadena de texto";
?&gt;</code></pre>
                <p>En el ejemplo anterior, <code>$x</code> primero tiene un valor entero y luego se reasigna a una cadena de texto. PHP permite esta flexibilidad sin necesidad de declarar un tipo específico.</p>
                
                <h3>3. Reglas de Nomenclatura</h3>
                <p>Al crear variables en PHP, debes seguir ciertas reglas:</p>
                <ul>
                    <li>Los nombres de las variables deben comenzar con una letra o un guion bajo (<code>_</code>).</li>
                    <li>No pueden comenzar con un número.</li>
                    <li>Solo pueden contener caracteres alfanuméricos y guiones bajos (<code>a-z</code>, <code>A-Z</code>, <code>0-9</code>, <code>_</code>).</li>
                    <li>PHP distingue entre mayúsculas y minúsculas, por lo que <code>$miVariable</code> y <code>$mivariable</code> son diferentes.</li>
                </ul>
                
                <h3>4. Buenas Prácticas para Nombres de Variables</h3>
                <p>Es importante elegir nombres descriptivos para tus variables para que el código sea más fácil de entender:</p>
                <pre><code>&lt;?php
    $nombre = "Juan";
    $edad = 25;
?&gt;</code></pre>
                <p>En lugar de usar nombres genéricos como <code>$x</code> o <code>$y</code>, es mejor usar nombres que describan el propósito de la variable.</p>
                
                <h3>5. Variables Múltiples</h3>
                <p>PHP permite asignar múltiples variables en una sola línea:</p>
                <pre><code>&lt;?php
    list($a, $b, $c) = array(1, 2, 3);
?&gt;</code></pre>
                <p>En este ejemplo, <code>$a</code> se asigna a <code>1</code>, <code>$b</code> se asigna a <code>2</code>, y <code>$c</code> se asigna a <code>3</code>.</p>
                
                <h3>6. Intercambio de Valores</h3>
                <p>Intercambiar valores entre dos variables es sencillo en PHP gracias a su sintaxis concisa:</p>
                <pre><code>&lt;?php
    list($a, $b) = array($b, $a);
?&gt;</code></pre>
                <p>Esta línea intercambia los valores de <code>$a</code> y <code>$b</code> sin necesidad de una variable temporal.</p>
            `
        },

        tipos_datos: {
            title: "Tipos de Datos en PHP",
            content: `
                <p>En este capítulo, profundizaremos en los tipos de datos incorporados en PHP y cómo utilizarlos en tus programas. Los tipos de datos determinan qué tipo de valores puede almacenar una variable y qué operaciones puedes realizar con ellos.</p>
                
                <h2>Tipos Numéricos</h2>
                <h3>Enteros (<code>int</code>)</h3>
                <p>Los enteros son números sin parte decimal, positivos o negativos, de longitud ilimitada en PHP.</p>
                <pre><code class="language-php">&lt;?php
    $numero = 42;
    $negativo = -10;
?&gt;</code></pre>
                
                <h3>Flotantes (<code>float</code>)</h3>
                <p>Los flotantes son números con parte decimal. Se pueden representar utilizando un punto decimal o notación científica.</p>
                <pre><code class="language-php">&lt;?php
    $pi = 3.1416;
    $avogadro = 6.022e23;  // Notación científica
?&gt;</code></pre>
                
                <h3>Números Complejos (<code>complex</code>)</h3>
                <p>Los números complejos tienen una parte real y una parte imaginaria, y se representan con una 'j' o 'J' para la parte imaginaria.</p>
                <pre><code class="language-php">&lt;?php
    $numero_complejo = 2 + 3j;
    echo $numero_complejo->real;  // 2.0
    echo $numero_complejo->imag;  // 3.0
?&gt;</code></pre>
                
                <h2>Tipo de Texto</h2>
                <h3>Cadenas (<code>str</code>)</h3>
                <p>Las cadenas son secuencias de caracteres utilizadas para representar texto. Puedes definir cadenas utilizando comillas simples, dobles o triples.</p>
                <pre><code class="language-php">&lt;?php
    $mensaje = 'Hola, Mundo!';
    $mensaje_doble = "PHP es genial";
    $mensaje_multilinea = <<<EOT
    Este es un mensaje
    que abarca varias
    líneas.
    EOT;
?&gt;</code></pre>
                
                <h3>Manipulación de Cadenas</h3>
                <p>Puedes acceder a caracteres individuales, realizar cortes (slicing) y utilizar diversos métodos para manipular cadenas.</p>
                <pre><code class="language-php">&lt;?php
    $texto = "PHP";
    echo $texto[0];      // 'P'
    echo $texto[-1];     // 'P'
    echo substr($texto, 1, 2);    // 'HP'
    echo strtoupper($texto); // 'PHP'
    echo strtolower($texto); // 'php'
?&gt;</code></pre>
                
                <h2>Tipos de Secuencia</h2>
                <h3>Listas (<code>list</code>)</h3>
                <p>Las listas son colecciones ordenadas y mutables que pueden contener elementos de diferentes tipos.</p>
                <pre><code class="language-php">&lt;?php
    $mi_lista = array(1, "dos", 3.0, array(4, 5));
    array_push($mi_lista, 6);
    print_r($mi_lista);
?&gt;</code></pre>
                
                <h3>Tuplas (<code>tuple</code>)</h3>
                <p>Las tuplas son similares a las listas, pero son inmutables. Una vez creadas, no puedes modificar sus elementos.</p>
                <pre><code class="language-php">&lt;?php
    $mi_tupla = array(1, 2, 3);
    // $mi_tupla[0] = 10;  // Esto causará un error
?&gt;</code></pre>
                
                <h3>Conjuntos (<code>set</code>)</h3>
                <p>Los conjuntos son colecciones desordenadas de elementos únicos. Son útiles para operaciones de conjuntos matemáticos.</p>
                <pre><code class="language-php">&lt;?php
    $mi_conjunto = array(1, 2, 3, 2);
    $mi_conjunto = array_unique($mi_conjunto);
    print_r($mi_conjunto);  // Output: {1, 2, 3}
?&gt;</code></pre>
                
                <h2>Tipos de Mapeo</h2>
                <h3>Diccionarios (<code>dict</code>)</h3>
                <p>Los diccionarios son colecciones desordenadas de pares clave-valor. Son mutables y permiten un acceso rápido a los valores mediante claves.</p>
                <pre><code class="language-php">&lt;?php
    $mi_diccionario = array("nombre" => "Ana", "edad" => 25);
    echo $mi_diccionario["nombre"];  // 'Ana'
    $mi_diccionario["edad"] = 26;
    print_r($mi_diccionario);
?&gt;</code></pre>
                
                <h2>Tipo Booleano</h2>
                <p>Los booleanos representan valores de verdad: <code>true</code> o <code>false</code>.</p>
                <pre><code class="language-php">&lt;?php
    $es_mayor = true;
    echo gettype($es_mayor);  // 'boolean'
?&gt;</code></pre>
                
                <h2>Conversión de Tipos</h2>
                <p>Puedes convertir valores entre diferentes tipos utilizando funciones integradas:</p>
                <pre><code class="language-php">&lt;?php
    // De entero a cadena
    $numero = 10;
    $cadena = strval($numero);  // '10'

    // De cadena a entero
    $texto = "20";
    $numero = intval($texto);  // 20

    // De cadena a flotante
    $texto = "3.14";
    $numero = floatval($texto);  // 3.14
?&gt;</code></pre>
                
                <h2>Verificación de Tipos</h2>
                <p>Para verificar si un objeto es de un tipo específico, puedes usar la función <code>is_type()</code>:</p>
                <pre><code class="language-php">&lt;?php
    $x = 10;
    echo is_int($x);       // true
    echo is_float($x);     // false
    echo is_numeric($x);  // true
?&gt;</code></pre>
                
                <h2>Conclusión</h2>
                <p>Comprender los tipos de datos en PHP es esencial para escribir programas eficientes y libres de errores. A medida que avances, te encontrarás utilizando estos tipos de datos y sus métodos asociados para manipular y procesar información.</p>
            `
        },

    
        if_else: {
            title: "Sentencias If-Else en PHP",
            content: `
                <p>Las sentencias condicionales en PHP permiten que tu programa tome decisiones y ejecute ciertas partes del código solo cuando se cumplan condiciones específicas. Esto es fundamental para controlar el flujo de ejecución y crear programas dinámicos e interactivos.</p>
                
                <h2>La Sentencia <code>if</code></h2>
                <p>La sentencia <code>if</code> se utiliza para ejecutar un bloque de código si una condición es verdadera.</p>
                <h3>Sintaxis Básica</h3>
                <pre><code class="language-php">&lt;?php
    if (condición) {
        // código a ejecutar si la condición es verdadera
    }
?&gt;</code></pre>
                <p><strong>Nota:</strong> Observa que se utiliza una indentación (espacios o tabulaciones) para definir el bloque de código que pertenece al <code>if</code>. PHP recomienda usar 4 espacios para la indentación.</p>
                
                <h3>Ejemplo Simple</h3>
                <pre><code class="language-php">&lt;?php
    $edad = 18;
    
    if ($edad >= 18) {
        echo "Eres mayor de edad.";
    }
?&gt;</code></pre>
                <p>En este ejemplo, la condición <code>$edad >= 18</code> evalúa si la variable <code>$edad</code> es mayor o igual a 18. Si es verdadera, se ejecuta el <code>echo</code>.</p>
                
                <h2>La Sentencia <code>else</code></h2>
                <p>La sentencia <code>else</code> se utiliza junto con <code>if</code> para ejecutar un bloque de código cuando la condición es falsa.</p>
                <h3>Sintaxis</h3>
                <pre><code class="language-php">&lt;?php
    if (condición) {
        // código si la condición es verdadera
    } else {
        // código si la condición es falsa
    }
?&gt;</code></pre>
                <h3>Ejemplo con <code>else</code></h3>
                <pre><code class="language-php">&lt;?php
    $edad = 16;
    
    if ($edad >= 18) {
        echo "Eres mayor de edad.";
    } else {
        echo "Eres menor de edad.";
    }
?&gt;</code></pre>
                <p>En este caso, si la condición <code>$edad >= 18</code> es falsa, se ejecuta el bloque dentro de <code>else</code>.</p>
                
                <h2>La Sentencia <code>elseif</code></h2>
                <p>La sentencia <code>elseif</code> permite verificar múltiples condiciones. Se utiliza después de un <code>if</code> inicial y antes de un posible <code>else</code> final.</p>
                <h3>Sintaxis</h3>
                <pre><code class="language-php">&lt;?php
    if (condición1) {
        // código si condición1 es verdadera
    } elseif (condición2) {
        // código si condición2 es verdadera
    } elseif (condición3) {
        // código si condición3 es verdadera
    } else {
        // código si ninguna condición anterior es verdadera
    }
?&gt;</code></pre>
                <h3>Ejemplo con <code>elseif</code></h3>
                <pre><code class="language-php">&lt;?php
    $calificacion = 85;
    
    if ($calificacion >= 90) {
        echo "Obtuviste una A.";
    } elseif ($calificacion >= 80) {
        echo "Obtuviste una B.";
    } elseif ($calificacion >= 70) {
        echo "Obtuviste una C.";
    } else {
        echo "Necesitas mejorar.";
    }
?&gt;</code></pre>
                <p>En este ejemplo, el programa evalúa la calificación y ejecuta el bloque correspondiente a la primera condición verdadera.</p>
                
                <h2>Operadores de Comparación</h2>
                <p>Para construir condiciones, se utilizan operadores de comparación que evalúan expresiones y devuelven un valor booleano (<code>true</code> o <code>false</code>).</p>
                <ul>
                    <li><code>==</code>: Igual a</li>
                    <li><code>!=</code>: No igual a</li>
                    <li><code>&gt;</code>: Mayor que</li>
                    <li><code>&lt;</code>: Menor que</li>
                    <li><code>&gt;=</code>: Mayor o igual a</li>
                    <li><code>&lt;=</code>: Menor o igual a</li>
                </ul>
                <h3>Ejemplos de Operadores de Comparación</h3>
                <pre><code class="language-php">&lt;?php
    $a = 10;
    $b = 20;
    
    if ($a == $b) {
        echo "a y b son iguales.";
    }
    if ($a != $b) {
        echo "a y b son diferentes.";
    }
    if ($a &lt; $b) {
        echo "a es menor que b.";
    }
?&gt;</code></pre>
                
                <h2>Operadores Lógicos</h2>
                <p>Los operadores lógicos permiten combinar múltiples condiciones:</p>
                <ul>
                    <li><code>&&</code>: Devuelve <code>true</code> si ambas condiciones son verdaderas.</li>
                    <li><code>||</code>: Devuelve <code>true</code> si al menos una condición es verdadera.</li>
                    <li><code>!</code>: Invierte el valor de verdad de la condición.</li>
                </ul>
                <h3>Ejemplos de Operadores Lógicos</h3>
                <pre><code class="language-php">&lt;?php
    $edad = 25;
    $ingresos = 35000;
    
    if ($edad &gt;= 18 && $ingresos &gt;= 30000) {
        echo "Eres elegible para el préstamo.";
    } else {
        echo "No cumples los requisitos.";
    }
    
    // Utilizando '||'
    $dia = "sábado";
    
    if ($dia == "sábado" || $dia == "domingo") {
        echo "Es fin de semana.";
    } else {
        echo "Es día laborable.";
    }
    
    // Utilizando '!'
    $llueve = false;
    
    if (!$llueve) {
        echo "Puedes salir sin paraguas.";
    }
?&gt;</code></pre>
                
                <h2>Condiciones Anidadas</h2>
                <p>Es posible anidar sentencias <code>if</code> dentro de otras para evaluar condiciones más complejas.</p>
                <h3>Ejemplo de Condición Anidada</h3>
                <pre><code class="language-php">&lt;?php
    $edad = 30;
    $es_estudiante = false;
    
    if ($edad &gt;= 18) {
        if ($es_estudiante) {
            echo "Eres un adulto estudiante.";
        } else {
            echo "Eres un adulto que no es estudiante.";
        }
    } else {
        echo "Eres menor de edad.";
    }
?&gt;</code></pre>
                <p>En este ejemplo, primero se verifica si la persona es mayor de edad. Dentro de ese bloque, se evalúa si es estudiante o no.</p>
                
                <h2>Expresiones Condicionales (Operador Ternario)</h2>
                <p>PHP permite escribir expresiones condicionales en una sola línea utilizando el operador ternario.</p>
                <h3>Sintaxis</h3>
                <pre><code class="language-php">&lt;?php
    $valor_si_verdadero = (condición) ? valor_si_verdadero : valor_si_falso;
?&gt;</code></pre>
                <h3>Ejemplo de Operador Ternario</h3>
                <pre><code class="language-php">&lt;?php
    $edad = 20;
    $mensaje = ($edad >= 18) ? "Mayor de edad" : "Menor de edad";
    echo $mensaje;
?&gt;</code></pre>
                <p>Este código asigna a la variable <code>$mensaje</code> el valor correspondiente según la condición.</p>
                
                <h2>Buenas Prácticas</h2>
                <ul>
                    <li><strong>Indentación Consistente:</strong> Utiliza siempre el mismo número de espacios para la indentación (recomendado 4 espacios).</li>
                    <li><strong>Condiciones Claras:</strong> Escribe condiciones que sean fáciles de entender y evita complicarlas en exceso.</li>
                    <li><strong>Comentarios:</strong> Añade comentarios si la lógica es compleja para que otros (o tú mismo en el futuro) puedan entender el código.</li>
                </ul>
                
                <h2>Ejercicios Prácticos</h2>
                <ol>
                    <li>Crea un programa que solicite al usuario ingresar un número y determine si es positivo, negativo o cero.</li>
                    <li>Escribe un programa que verifique si un año es bisiesto. Un año es bisiesto si es divisible por 4 pero no por 100, a menos que sea divisible por 400.</li>
                    <li>Desarrolla un programa que pida al usuario tres números y los imprima en orden ascendente.</li>
                </ol>
                <p>Intenta resolver estos ejercicios por tu cuenta para afianzar los conceptos aprendidos.</p>
                
                <h2>Conclusión</h2>
                <p>Las sentencias <code>if</code>, <code>elseif</code> y <code>else</code> son herramientas fundamentales en PHP que te permiten controlar el flujo de tu programa basándote en condiciones. Comprender cómo utilizarlas te permitirá crear programas más dinámicos y funcionales.</p>
            `
        },

        loops: {
            title: "Bucles en PHP",
            content: `
            <p>Los bucles se utilizan para ejecutar un bloque de código repetidamente. PHP proporciona dos tipos principales de bucles: <strong>for</strong> y <strong>while</strong>. Entender cómo funcionan los bucles es esencial para automatizar tareas repetitivas y procesar datos en colecciones.</p>
            
            <h2>El Bucle <code>for</code></h2>
            <p>El bucle <code>for</code> se utiliza para iterar sobre una secuencia (como una lista, tupla, diccionario, conjunto o cadena). Con cada iteración, puedes realizar una acción con el elemento actual de la secuencia.</p>
            <h3>Sintaxis Básica</h3>
            <pre><code class="language-php">&lt;?php
    for ($i = 0; $i &lt; 10; $i++) {
        // código a ejecutar en cada iteración
    }
?&gt;</code></pre>
            <h3>Ejemplo Simple</h3>
            <pre><code class="language-php">&lt;?php
    $frutas = array("manzana", "banana", "cereza");
    
    foreach ($frutas as $fruta) {
        echo $fruta;
    }
?&gt;</code></pre>
            <p><strong>Salida:</strong></p>
            <pre><code>manzana
    banana
    cereza
    </code></pre>
            
            <h3>Iterando Sobre una Cadena</h3>
            <p>Puedes iterar sobre cada carácter en una cadena:</p>
            <pre><code class="language-php">&lt;?php
    $palabra = "PHP";
    
    for ($i = 0; $i &lt; strlen($palabra); $i++) {
        echo $palabra[$i];
    }
?&gt;</code></pre>
            <p><strong>Salida:</strong></p>
            <pre><code>
    P
    H
    P
    </code></pre>
            
            <h3>Uso de la Función <code>range()</code></h3>
            <p>La función <code>range()</code> genera una secuencia de números, lo cual es útil para iterar un número específico de veces.</p>
            <pre><code class="language-php">&lt;?php
    foreach (range(0, 4) as $i) {
        echo "Iteración $i";
    }
?&gt;</code></pre>
            <p><strong>Salida:</strong></p>
            <pre><code>
    Iteración 0
    Iteración 1
    Iteración 2
    Iteración 3
    Iteración 4
    </code></pre>
            <h4>Parámetros de <code>range()</code></h4>
            <ul>
                <li><code>range(fin)</code>: Genera números desde 0 hasta <code>fin - 1</code>.</li>
                <li><code>range(inicio, fin)</code>: Genera números desde <code>inicio</code> hasta <code>fin - 1</code>.</li>
                <li><code>range(inicio, fin, paso)</code>: Genera números desde <code>inicio</code> hasta <code>fin - 1</code>, incrementando en <code>paso</code>.</li>
            </ul>
            <h4>Ejemplo con Parámetros</h4>
            <pre><code class="language-php">&lt;?php
    foreach (range(2, 10, 2) as $num) {
        echo $num;
    }
?&gt;</code></pre>
            <p><strong>Salida:</strong></p>
            <pre><code>
    2
    4
    6
    8
    </code></pre>
            
            <h2>El Bucle <code>while</code></h2>
            <p>El bucle <code>while</code> repite un bloque de código siempre que una condición sea verdadera. Se utiliza cuando no se sabe de antemano cuántas veces se debe iterar.</p>
            <h3>Sintaxis Básica</h3>
            <pre><code class="language-php">&lt;?php
    while (condición) {
        // código a ejecutar mientras la condición sea verdadera
    }
?&gt;</code></pre>
            <h3>Ejemplo Simple</h3>
            <pre><code class="language-php">&lt;?php
    $contador = 0;
    
    while ($contador &lt; 5) {
        echo "Contador: $contador";
        $contador++;
    }
?&gt;</code></pre>
            <p><strong>Salida:</strong></p>
            <pre><code>
    Contador: 0
    Contador: 1
    Contador: 2
    Contador: 3
    Contador: 4
    </code></pre>
            
            <h3>Cuidado con los Bucles Infinitos</h3>
            <p>Asegúrate de que la condición eventualmente será falsa; de lo contrario, crearás un bucle infinito que podría bloquear tu programa.</p>
            <pre><code class="language-php">&lt;?php
    // Ejemplo de bucle infinito (¡No ejecutar!)
    $i = 1;
    while ($i > 0) {
        echo $i;
        $i++;
    }
?&gt;</code></pre>
            
            <h2>Sentencias <code>break</code> y <code>continue</code></h2>
            <p>Estas sentencias controlan el flujo de los bucles.</p>
            <h3><code>break</code></h3>
            <p>Termina el bucle inmediatamente, independientemente de la condición.</p>
            <h4>Ejemplo de <code>break</h4>
            <pre><code class="language-php">&lt;?php
    for ($num = 0; $num &lt; 10; $num++) {
        if ($num == 5) {
            break;
        }
        echo $num;
    }
?&gt;</code></pre>
            <p><strong>Salida:</strong></p>
            <pre><code>
    0
    1
    2
    3
    4
    </code></pre>
            
            <h3><code>continue</code></h3>
            <p>Omite la iteración actual y continúa con la siguiente.</p>
            <h4>Ejemplo de <code>continue</h4>
            <pre><code class="language-php">&lt;?php
    for ($num = 0; $num &lt; 5; $num++) {
        if ($num == 2) {
            continue;
        }
        echo $num;
    }
?&gt;</code></pre>
            <p><strong>Salida:</strong></p>
            <pre><code>
    0
    1
    3
    4
    </code></pre>
            
            <h2>Bucles Anidados</h2>
            <p>Puedes colocar un bucle dentro de otro para iterar sobre estructuras de datos más complejas.</p>
            <h3>Ejemplo de Bucles Anidados</h3>
            <pre><code class="language-php">&lt;?php
    $matriz = array(
        array(1, 2, 3),
        array(4, 5, 6),
        array(7, 8, 9)
    );
    
    foreach ($matriz as $fila) {
        foreach ($fila as $elemento) {
            echo $elemento . " ";
        }
        echo "\n";  // Nueva línea después de cada fila
    }
?&gt;</code></pre>
            <p><strong>Salida:</strong></p>
            <pre><code>
    1 2 3 
    4 5 6 
    7 8 9 
    </code></pre>
            
            <h2>La Sentencia <code>else</code> en Bucles</h2>
            <p>En PHP, los bucles pueden tener una cláusula <code>else</code> que se ejecuta cuando el bucle finaliza normalmente (no por un <code>break</code>).</p>
            <h3>Ejemplo con <code>for</code></h3>
            <pre><code class="language-php">&lt;?php
    for ($num = 0; $num &lt; 5; $num++) {
        echo $num;
    }
    echo "El bucle ha finalizado.";
?&gt;</code></pre>
            <p><strong>Salida:</strong></p>
            <pre><code>
    0
    1
    2
    3
    4
    El bucle ha finalizado.
    </code></pre>
            <h3>Ejemplo con <code>while</code></h3>
            <pre><code class="language-php">&lt;?php
    $contador = 0;
    
    while ($contador &lt; 5) {
        echo $contador;
        $contador++;
    }
    echo "El bucle ha terminado.";
?&gt;</code></pre>
            <p><strong>Salida:</strong></p>
            <pre><code>
    0
    1
    2
    3
    4
    El bucle ha terminado.
    </code></pre>
            <p>Si el bucle se interrumpe con <code>break</code>, la cláusula <code>else</code> no se ejecuta.</p>
            
            <h2>Iterando con <code>foreach()</code></h2>
            <p>La función <code>foreach()</code> permite iterar sobre arrays y objetos de manera sencilla.</p>
            <h3>Ejemplo</h3>
            <pre><code class="language-php">&lt;?php
    $frutas = array("manzana", "banana", "cereza");
    
    foreach ($frutas as $indice => $fruta) {
        echo "$indice: $fruta";
    }
?&gt;</code></pre>
            <p><strong>Salida:</strong></p>
            <pre><code>0: manzana
    1: banana
    2: cereza
    </code></pre>
            
            <h2>Iterando sobre Diccionarios</h2>
            <p>Puedes iterar sobre las claves, valores o ambos en un diccionario.</p>
            <h3>Iterar sobre Claves</h3>
            <pre><code class="language-php">&lt;?php
    $persona = array("nombre" => "Ana", "edad" => 30, "ciudad" => "Madrid");
    
    foreach (array_keys($persona) as $clave) {
        echo $clave;
    }
?&gt;</code></pre>
            <p><strong>Salida:</strong></p>
            <pre><code>nombre
    edad
    ciudad
    </code></pre>
            <h3>Iterar sobre Valores</h3>
            <pre><code class="language-php">&lt;?php
    foreach (array_values($persona) as $valor) {
        echo $valor;
    }
?&gt;</code></pre>
            <p><strong>Salida:</strong></p>
            <pre><code>Ana
    30
    Madrid
    </code></pre>
            <h3>Iterar sobre Claves y Valores</h3>
            <pre><code class="language-php">&lt;?php
    foreach ($persona as $clave => $valor) {
        echo "$clave: $valor";
    }
?&gt;</code></pre>
            <p><strong>Salida:</strong></p>
            <pre><code>nombre: Ana
    edad: 30
    ciudad: Madrid
    </code></pre>
            
            <h2>Comprensión de Listas (List Comprehensions)</h2>
            <p>Las comprensiones de listas ofrecen una forma concisa de crear listas a partir de iterables existentes.</p>
            <h3>Ejemplo</h3>
            <pre><code class="language-php">&lt;?php
    // Lista de cuadrados de números del 0 al 9
    $cuadrados = array_map(function($x) { return $x * $x; }, range(0, 9));
    print_r($cuadrados);
?&gt;</code></pre>
            <p><strong>Salida:</strong></p>
            <pre><code>Array
    (
        [0] => 0
        [1] => 1
        [2] => 4
        [3] => 9
        [4] => 16
        [5] => 25
        [6] => 36
        [7] => 49
        [8] => 64
        [9] => 81
    )
    </code></pre>
            <p>Puedes agregar condiciones:</p>
            <pre><code class="language-php">&lt;?php
    // Números pares entre 0 y 20
    $pares = array_filter(range(0, 20), function($x) { return $x % 2 == 0; });
    print_r($pares);
?&gt;</code></pre>
            <p><strong>Salida:</strong></p>
            <pre><code>Array
    (
        [0] => 0
        [1] => 2
        [2] => 4
        [3] => 6
        [4] => 8
        [5] => 10
        [6] => 12
        [7] => 14
        [8] => 16
        [9] => 18
        [10] => 20
    )
    </code></pre>
            
            <h2>Ejercicios Prácticos</h2>
            <ol>
                <li><strong>FizzBuzz:</strong> Crea un programa que imprima los números del 1 al 100. Para múltiplos de tres, imprime "Fizz" en lugar del número, y para los múltiplos de cinco, imprime "Buzz". Para números que son múltiplos de ambos tres y cinco, imprime "FizzBuzz".</li>
                <li><strong>Números Primos:</strong> Escribe un programa que encuentre y muestre todos los números primos entre 2 y 50.</li>
                <li><strong>Suma de Dígitos:</strong> Desarrolla un programa que calcule la suma de los dígitos de un número entero positivo ingresado por el usuario.</li>
                <li><strong>Patrón de Asteriscos:</strong> Escribe un programa que genere el siguiente patrón:
                    <pre><code>*
    **
    ***
    ****
    *****
    </code></pre>
                </li>
                <li><strong>Tablas de Multiplicar:</strong> Crea un programa que muestre las tablas de multiplicar del 1 al 10.</li>
            </ol>
            <p>¡Intenta resolver estos ejercicios para poner en práctica lo aprendido sobre bucles en PHP!</p>
            
            <h2>Conclusión</h2>
            <p>Los bucles son una herramienta esencial en PHP que te permiten automatizar tareas repetitivas y procesar colecciones de datos de manera eficiente. Comprender cómo utilizar los bucles <code>for</code> y <code>while</code>, así como las sentencias <code>break</code> y <code>continue</code>, es fundamental para convertirte en un programador competente.</p>

                <h2>Ejemplos Prácticos</h2>
                <p>A continuación, presentamos algunos ejemplos prácticos que utilizan bucles para resolver problemas comunes. Estos ejemplos te ayudarán a comprender cómo aplicar bucles en diferentes situaciones.</p>

                <h3>1. Conversión de CamelCase a snake_case</h3>
                <p>En este ejemplo, implementaremos un programa que convierte un nombre de variable en formato <em>CamelCase</em> a <em>snake_case</em>. Esto es útil para estandarizar nombres de variables según convenciones de estilo.</p>
                <p><strong>Descripción del Problema:</strong></p>
                <ul>
                    <li>Solicitar al usuario el nombre de una variable en <code>CamelCase</code>.</li>
                    <li>Convertir y mostrar el nombre en <code>snake_case</code>.</li>
                    <li>Asumir que la entrada del usuario estará en <code>CamelCase</code>.</li>
                </ul>

                <h4>Ejemplos de Ejecución:</h4>
                <pre><code>
    php camel.php
    camelCase: name
    snake_case: name

    php camel.php
    camelCase: firstName
    snake_case: first_name

    php camel.php
    camelCase: preferredFirstName
    snake_case: preferred_first_name
    </code></pre>

                <h4>Solución Implementada:</h4>

                <!-- Example 1: Using a while loop -->
                <pre><code class="language-php">&lt;?php
    // camel-a.php
    function main() {
        $s = readline("camelCase: ");
        echo "snake_case: ";
        $r = "";
        $i = 0;
        while ($i < strlen($s)) {  // Recorremos cada posición en la cadena
            if (ctype_upper($s[$i])) {  // Si el carácter es una letra mayúscula
                $r .= "_" . strtolower($s[$i]);
            } else {
                $r .= $s[$i];
            }
            $i++;
        }
        echo $r . "\n";
    }

    main();
?&gt;
    </code></pre>

                <!-- Example 2: Using a for loop with range -->
                <pre><code class="language-php">&lt;?php
    // camel-b.php
    function main() {
        $s = readline("camelCase: ");
        echo "snake_case: ";
        $r = "";
        for ($i = 0; $i < strlen($s); $i++) {
            if (ctype_upper($s[$i])) {
                $r .= "_" . strtolower($s[$i]);
            } else {
                $r .= $s[$i];
            }
        }
        echo $r . "\n";
    }

    main();
?&gt;
    </code></pre>

                <!-- Example 3: Using a for-each loop -->
                <pre><code class="language-php">&lt;?php
    // camel-c.php
    function main() {
        $s = readline("camelCase: ");
        echo "snake_case: ";
        $r = "";
        foreach (str_split($s) as $c) {
            if (ctype_upper($c)) {
                $r .= "_" . strtolower($c);
            } else {
                $r .= $c;
            }
        }
        echo $r . "\n";
    }

    main();
?&gt;
    </code></pre>

                <!-- Example 4: Printing directly without building a result string -->
                <pre><code class="language-php">&lt;?php
    // camel-d.php
    function main() {
        $s = readline("camelCase: ");
        echo "snake_case: ";
        foreach (str_split($s) as $c) {
            if (ctype_upper($c)) {
                echo "_" . strtolower($c);
            } else {
                echo $c;
            }
        }
        echo "\n";  // Imprimir nueva línea al final

    main();
?&gt;
    </code></pre>

                <h4>Ejercicio para Practicar:</h4>
                <p>Implementa una versión del programa que maneje múltiples mayúsculas consecutivas y evita agregar múltiples guiones bajos. Por ejemplo:</p>
                <pre><code>
    php camel.php
    camelCase: parseHTTPResponse
    snake_case: parse_http_response
    </code></pre>

                <h3>2. Máquina Expendedora de Coca-Cola</h3>
                <p>En este ejemplo, crearemos un programa que simula una máquina expendedora que vende botellas de Coca-Cola por 50 centavos y solo acepta monedas de 25, 10 y 5 centavos.</p>
                <p><strong>Descripción del Problema:</strong></p>
                <ul>
                    <li>Solicitar al usuario que inserte monedas hasta acumular al menos 50 centavos.</li>
                    <li>Informar al usuario la cantidad restante después de cada inserción válida.</li>
                    <li>Al completar el pago, mostrar el cambio si corresponde.</li>
                    <li>Ignorar monedas que no sean de 25, 10 o 5 centavos.</li>
                </ul>

                <h4>Ejemplos de Ejecución:</h4>
                <pre><code>
    php coke.php
    Amount Due: 50
    Insert Coin: 25
    Amount Due: 25
    Insert Coin: 25
    Change Owed: 0

    php coke.php
    Amount Due: 50
    Insert Coin: 25
    Amount Due: 25
    Insert Coin: 10
    Amount Due: 15
    Insert Coin: 25
    Change Owed: 10

    php coke.php
    Amount Due: 50
    Insert Coin: 5
    Amount Due: 45
    Insert Coin: 30
    Amount Due: 45
    Insert Coin: 25
    Amount Due: 20
    Insert Coin: 25
    Change Owed: 5

    php coke.php
    Amount Due: 50
    Insert Coin: 50
    Amount Due: 50
    Insert Coin: 49
    Amount Due: 50
    Insert Coin: 25
    Amount Due: 25
    Insert Coin: 10
    Amount Due: 15
    Insert Coin: 10
    Amount Due: 5
    Insert Coin: 5
    Change Owed: 0
    </code></pre>

                <h4>Solución Implementada:</h4>

                <!-- Example 1: Using a while loop with pre-check -->
                <pre><code class="language-php">&lt;?php
    // coke-a.php
    function main() {
        $due = 50;
        $accepted_coins = array(25, 10, 5);
        while ($due > 0) {
            echo "Amount Due: $due\n";
            $coin = intval(readline("Insert Coin: "));
            if (in_array($coin, $accepted_coins)) {
                $due -= $coin;
            }
        }
        echo "Change Owed: " . abs($due) . "\n";
    }

    main();
?&gt;
    </code></pre>

                <!-- Example 2: Using an infinite loop and breaking when condition is met -->
                <pre><code class="language-php">&lt;?php
    // coke-b.php
    function main() {
        $due = 50;
        $accepted_coins = array(25, 10, 5);
        while (true) {
            echo "Amount Due: $due\n";
            $coin = intval(readline("Insert Coin: "));
            if (in_array($coin, $accepted_coins)) {
                $due -= $coin;
                if ($due <= 0) {
                    break;
                }
            }
        }
        echo "Change Owed: " . abs($due) . "\n";
    }

    main();
?&gt;
    </code></pre>

                <h4>Ejercicio para Practicar:</h4>
                <p>Modifica el programa para que también acepte billetes de 20 y 50 centavos y actualiza las denominaciones aceptadas.</p>

                <h3>3. Ejemplo Adicional: Generar Patrón de Asteriscos</h3>
                <p>Escribe un programa que genere el siguiente patrón utilizando bucles anidados:</p>
                <pre><code>
    *
    **
    ***
    ****
    *****
    </code></pre>

                <h4>Solución Implementada:</h4>
                <pre><code class="language-php">&lt;?php
    // pattern.php
    function main() {
        for ($i = 1; $i <= 5; $i++) {
            for ($j = 0; $j < $i; $j++) {
                echo "*";
            }
            echo "\n";  // Nueva línea después de cada fila
        }
    }

    main();
?&gt;
    </code></pre>

                <h4>Explicación:</h4>
                <p>El bucle externo controla el número de filas, mientras que el bucle interno imprime el número de asteriscos correspondiente a la fila actual.</p>

                <h2>Conclusión</h2>
                <p>Estos ejemplos prácticos demuestran cómo utilizar bucles en diferentes contextos para resolver problemas comunes. Practicar con estos y otros ejemplos te ayudará a consolidar tu comprensión de los bucles en PHP.</p>
            `
        },
        comprehensions: {
            title: "Comprensiones de Listas",
            content: `
                <p>Las comprensiones de listas proporcionan una forma concisa de crear listas.</p>
                <h2>Ejemplo Básico</h2>
                <pre><code class="language-php">&lt;?php
    // Forma tradicional
    $cuadrados = array();
    for ($x = 0; $x < 10; $x++) {
        $cuadrados[] = $x * $x;
    }
    
    // Usando comprensión de listas
    $cuadrados = array_map(function($x) { return $x * $x; }, range(0, 9));
?&gt;</code></pre>
                <h2>Con Condiciones</h2>
                <pre><code class="language-php">&lt;?php
    // Números pares entre 0 y 20
    $numeros_pares = array_filter(range(0, 20), function($x) { return $x % 2 == 0; });
?&gt;</code></pre>
            `
        },
        functions: {
            title: "Funciones en PHP",
            content: `
                <p>Las funciones son bloques de código que realizan una tarea específica y pueden ser reutilizadas.</p>
                <h2>Definiendo una Función</h2>
                <pre><code class="language-php">&lt;?php
    function saludar() {
        echo "¡Hola, Mundo!";
    }
    
    saludar();  // Llamando a la función
?&gt;</code></pre>
                <h2>Funciones con Parámetros</h2>
                <pre><code class="language-php">&lt;?php
    function saludar($nombre) {
        echo "¡Hola, $nombre!";
    }
    
    saludar("Alicia");
?&gt;</code></pre>
                <h2>Devolviendo Valores</h2>
                <pre><code class="language-php">&lt;?php
    function sumar($a, $b) {
        return $a + $b;
    }
    
    $resultado = sumar(5, 3);
    echo $resultado;  // Salida: 8
?&gt;</code></pre>
                <h2>Parámetros por Defecto</h2>
                <pre><code class="language-php">&lt;?php
    function saludar($nombre = "Invitado") {
        echo "¡Hola, $nombre!";
    }
    
    saludar();           // Salida: ¡Hola, Invitado!
    saludar("Bob");      // Salida: ¡Hola, Bob!
?&gt;</code></pre>
            `
        },
        modules: {
            title: "Usando Módulos",
            content: `
                <p>Los módulos son archivos que contienen definiciones y declaraciones de PHP. Pueden ser importados para proporcionar funcionalidad a tu programa.</p>
                <h2>Importando un Módulo</h2>
                <pre><code class="language-php">&lt;?php
    include 'math.php';
    
    echo $pi;           // Salida: 3.141592653589793
    echo sqrt(16);     // Salida: 4.0
?&gt;</code></pre>
                <h2>Importando Funciones Específicas</h2>
                <pre><code class="language-php">&lt;?php
    include 'math.php';
    
    echo $pi;          // Salida: 3.141592653589793
    echo sqrt(25);    // Salida: 5.0
?&gt;</code></pre>
                <h2>Alias para Módulos</h2>
                <pre><code class="language-php">&lt;?php
    include 'math.php';
    
    $array = array(1, 2, 3);
    print_r($array);
?&gt;</code></pre>
            `
        },
        imports: {
            title: "Importando Módulos",
            content: `
                <p>Puedes importar tus propios módulos o módulos de la Biblioteca Estándar de PHP.</p>
                <h2>Creando un Módulo</h2>
                <p>Crea un archivo llamado <code>mimodulo.php</code> con el siguiente contenido:</p>
                <pre><code class="language-php">&lt;?php
    function saludo($nombre) {
        echo "Hola, $nombre";
    }
?&gt;</code></pre>
                <h2>Importando Tu Módulo</h2>
                <pre><code class="language-php">&lt;?php
    include 'mimodulo.php';
    
    saludo("Alicia");
?&gt;</code></pre>
            `
        },
        methodes: {
            title: "Métodos de Cadenas en PHP",
            content: `
                <p>PHP proporciona una variedad de métodos de cadena integrados que te permiten manipular y verificar el contenido de las cadenas. Estos métodos se pueden usar para analizar cadenas, modificarlas y controlar el flujo del programa según las características de las cadenas.</p>
        
                <h2>1. <code>ctype_upper()</code></h2>
                <p><strong>Descripción:</strong> Devuelve <code>true</code> si todos los caracteres de la cadena son letras mayúsculas y hay al menos un carácter en la cadena. De lo contrario, devuelve <code>false</code>.</p>
                <h3>Ejemplos:</h3>
                <pre><code class="language-php">&lt;?php
    echo ctype_upper("HOLA");  // true
    echo ctype_upper("Hola");  // false
    echo ctype_upper("123");    // false
?&gt;</code></pre>
        
                <p><strong>Casos Especiales:</strong> Las cadenas vacías o las cadenas sin caracteres alfabéticos (como números o símbolos) devolverán <code>false</code> porque no hay letras mayúsculas.</p>
        
                <h3>Casos de Uso:</h3>
                <p>Puedes usar <code>ctype_upper()</code> para validar si una cadena cumple con requisitos de formato específicos, como verificar si un nombre de usuario o una contraseña están en mayúsculas.</p>
        
                <h2>2. <code>ctype_lower()</code></h2>
                <p><strong>Descripción:</strong> Devuelve <code>true</code> si todos los caracteres de la cadena son letras minúsculas y hay al menos un carácter en la cadena. De lo contrario, devuelve <code>false</code>.</p>
                <h3>Ejemplos:</h3>
                <pre><code class="language-php">&lt;?php
    echo ctype_lower("hola");  // true
    echo ctype_lower("Hola");  // false
?&gt;</code></pre>
        
                <p><strong>Casos Especiales:</strong> Las cadenas que solo contienen caracteres no alfabéticos como números o símbolos devolverán <code>false</code>, ya que no hay letras minúsculas.</p>
        
                <h3>Casos de Uso:</h3>
                <p>Usa <code>ctype_lower()</code> cuando necesites asegurarte de que todos los caracteres de una cadena estén en minúsculas, como para comparación insensible a mayúsculas o normalización de texto.</p>
        
                <h2>3. <code>ucwords()</code></h2>
                <p><strong>Descripción:</strong> Devuelve <code>true</code> si la cadena está en formato de título, lo que significa que el primer carácter de cada palabra es una letra mayúscula y todos los demás caracteres son minúsculas.</p>
                <h3>Ejemplos:</h3>
                <pre><code class="language-php">&lt;?php
    echo ucwords("hola mundo");  // Hola Mundo
    echo ucwords("hola mundo");    // Hola Mundo
?&gt;</code></pre>
        
                <p><strong>Casos Especiales:</strong> Las cadenas con números, símbolos o acrónimos (como "NASA" o "123") no se consideran en formato de título y devolverán <code>false</code>.</p>
        
                <h3>Casos de Uso:</h3>
                <p>Usa <code>ucwords()</code> cuando trabajes con títulos, encabezados o nombres que deban seguir un formato de título (por ejemplo, nombres propios en documentos).</p>
        
                <h2>4. <code>is_numeric()</code></h2>
                <p><strong>Descripción:</strong> Devuelve <code>true</code> si todos los caracteres de la cadena son dígitos (0-9). Si hay algún carácter que no sea un dígito, devuelve <code>false</code>.</p>
                <h3>Ejemplos:</h3>
                <pre><code class="language-php">&lt;?php
    echo is_numeric("123");      // true
    echo is_numeric("123abc");   // false
?&gt;</code></pre>
        
                <p><strong>Casos Especiales:</strong> Las cadenas que contienen puntos decimales, signos negativos o espacios devolverán <code>false</code>, ya que no se consideran dígitos.</p>
        
                <h3>Casos de Uso:</h3>
                <p>Usa <code>is_numeric()</code> para la validación de entradas cuando esperes valores numéricos, como verificar si un usuario ingresó solo números.</p>
        
                <h2>5. <code>ctype_alpha()</code></h2>
                <p><strong>Descripción:</strong> Devuelve <code>true</code> si todos los caracteres de la cadena son alfabéticos (A-Z o a-z). Devuelve <code>false</code> si la cadena contiene números o caracteres especiales.</p>
                <h3>Ejemplos:</h3>
                <pre><code class="language-php">&lt;?php
    echo ctype_alpha("Hola");    // true
    echo ctype_alpha("Hola123");  // false
?&gt;</code></pre>
        
                <p><strong>Casos Especiales:</strong> Las cadenas vacías o las cadenas con espacios o signos de puntuación (como "¡Hola!") devolverán <code>false</code> porque contienen caracteres no alfabéticos.</p>
        
                <h3>Casos de Uso:</h3>
                <p><code>ctype_alpha()</code> se puede usar para la validación de entradas en campos donde solo se permiten letras, como el nombre de una persona.</p>
        
                <h2>6. <code>ctype_alnum()</code></h2>
                <p><strong>Descripción:</strong> Devuelve <code>true</code> si todos los caracteres de la cadena son alfanuméricos (letras o números), y <code>false</code> de lo contrario.</p>
                <h3>Ejemplos:</h3>
                <pre><code class="language-php">&lt;?php
    echo ctype_alnum("Hola123");   // true
    echo ctype_alnum("Hola 123!");  // false
?&gt;</code></pre>
        
                <p><strong>Casos Especiales:</strong> Las cadenas con espacios o caracteres especiales (incluso signos de puntuación) devolverán <code>false</code>.</p>
        
                <h3>Casos de Uso:</h3>
                <p>Usa <code>ctype_alnum()</code> cuando necesites validar nombres de usuario, contraseñas u otros identificadores que deben consistir solo en letras y dígitos.</p>
        
                <h2>7. <code>ctype_space()</code></h2>
                <p><strong>Descripción:</strong> Devuelve <code>true</code> si todos los caracteres de la cadena son caracteres de espacio en blanco (espacios, tabulaciones, saltos de línea), y <code>false</code> de lo contrario.</p>
                <h3>Ejemplos:</h3>
                <pre><code class="language-php">&lt;?php
    echo ctype_space("   ");     // true
    echo ctype_space("Hola Mundo");  // false
?&gt;</code></pre>
        
                <p><strong>Casos Especiales:</strong> Las cadenas con caracteres no espaciales (como letras o símbolos) devolverán <code>false</code>, incluso si contienen espacios entre los caracteres.</p>
        
                <h3>Casos de Uso:</h3>
                <p><code>ctype_space()</code> es útil para limpiar la entrada del usuario al detectar si un campo se dejó en blanco o solo se llenó con espacios.</p>
        
                <h2>8. <code>str_starts_with()</code></h2>
                <p><strong>Descripción:</strong> Devuelve <code>true</code> si la cadena comienza con el prefijo especificado, y <code>false</code> de lo contrario.</p>
                <h3>Ejemplos:</h3>
                <pre><code class="language-php">&lt;?php
    echo str_starts_with("Hola", "Ho");  // true
    echo str_starts_with("Hola", "ho");  // false
?&gt;</code></pre>
        
                <p><strong>Casos Especiales:</strong> Este método distingue entre mayúsculas y minúsculas, por lo que <code>str_starts_with("Ho")</code> devolverá <code>false</code> si la cadena comienza con una "h" minúscula.</p>
        
                <h3>Casos de Uso:</h3>
                <p>Usa <code>str_starts_with()</code> para validar o filtrar cadenas según sus caracteres iniciales, como filtrar una lista de nombres de archivos o URL.</p>
        
                <h2>9. <code>str_ends_with()</code></h2>
                <p><strong>Descripción:</strong> Devuelve <code>true</code> si la cadena termina con el sufijo especificado, y <code>false</code> de lo contrario.</p>
                <h3>Ejemplos:</h3>
                <pre><code class="language-php">&lt;?php
    echo str_ends_with("Hola", "la");  // true
    echo str_ends_with("Hola", "L");   // false
?&gt;</code></pre>
        
                <p><strong>Casos Especiales:</strong> Al igual que con <code>str_starts_with()</code>, este método distingue entre mayúsculas y minúsculas. Asegúrate de usar el caso correcto al verificar sufijos.</p>
        
                <h3>Casos de Uso:</h3>
                <p>Usa <code>str_ends_with()</code> al verificar extensiones de archivos (como <code>.txt</code> o <code>.csv</code>) o al validar URL.</p>
        
                <h2>10. <code>is_numeric()</code></h2>
                <p><strong>Descripción:</strong> Devuelve <code>true</code> si todos los caracteres de la cadena son numéricos, y <code>false</code> de lo contrario. Este método es similar a <code>is_numeric()</code>, pero también puede manejar caracteres como fracciones y números romanos.</p>
                <h3>Ejemplos:</h3>
                <pre><code class="language-php">&lt;?php
    echo is_numeric("123");      // true
    echo is_numeric("½");         // true
    echo is_numeric("Hola123");  // false
?&gt;</code></pre>
        
                <p><strong>Casos Especiales:</strong> Aunque <code>is_numeric()</code> puede manejar caracteres especiales como fracciones, las cadenas con letras o símbolos devolverán <code>false</code>.</p>
        
                <h3>Casos de Uso:</h3>
                <p><code>is_numeric()</code> se puede usar en casos donde esperas entradas numéricas complejas, como fracciones o valores monetarios. Es útil para validar formularios o asegurar la entrada de datos correcta.</p>
        
                <h2>Combinando Métodos de Cadenas en Lógica Condicional</h2>
                <p>Puedes combinar múltiples métodos de cadena para realizar validaciones y manipulaciones complejas de cadenas en tu programa. Por ejemplo, es posible que desees verificar si una cadena contiene solo letras, dígitos o caracteres especiales y actuar en consecuencia.</p>
                <h3>Ejemplo Usando Múltiples Métodos:</h3>
                <pre><code class="language-php">&lt;?php
    $s = "Hola123";
    
    if (ctype_alpha($s)) {
        echo "$s contiene solo letras.";
    } elseif (is_numeric($s)) {
        echo "$s contiene solo dígitos.";
    } elseif (ctype_alnum($s)) {
        echo "$s contiene solo letras y/o dígitos.";
    } else {
        echo "$s contiene una mezcla de letras, dígitos y otros caracteres.";
    }
?&gt;</code></pre>
        
                <h3>Casos de Uso en Sentencias Condicionales:</h3>
                <p>Estos métodos se utilizan a menudo en sentencias <code>if</code> para la validación y el control del flujo. Por ejemplo, puedes usarlos para verificar la entrada del usuario o controlar cómo se procesa el texto.</p>
        
                <h3>Ejemplo en un Programa Real:</h3>
                <pre><code class="language-php">&lt;?php
    $entrada_usuario = readline("Ingresa una cadena: ");
    
    if (ctype_lower($entrada_usuario)) {
        echo "La cadena está en minúsculas.";
    } elseif (ctype_upper($entrada_usuario)) {
        echo "La cadena está en mayúsculas.";
    } else {
        echo "La cadena tiene mayúsculas y minúsculas.";
    }
?&gt;</code></pre>
        
                <h2>Conclusión</h2>
                <p>Comprender y usar los métodos de cadena integrados de PHP te permite realizar manipulaciones y validaciones de cadenas poderosas. Ya sea que estés formateando la entrada del usuario, verificando ciertas condiciones en las cadenas o transformando datos, estos métodos proporcionan un conjunto robusto de herramientas para trabajar con texto en PHP.</p>
            `
        },
        
        
        lists: {
            title: "Listas en PHP",
            content: `
                <p>Las listas en PHP son colecciones ordenadas y mutables de elementos, lo que te permite almacenar múltiples valores en una sola variable. Las listas pueden contener elementos de cualquier tipo de datos y son una de las estructuras de datos más versátiles y comúnmente utilizadas en PHP.</p>
                
                <h2>Creando una Lista</h2>
                <p>Para crear una lista, puedes colocar una secuencia de valores separados por comas dentro de corchetes.</p>
                <pre><code class="language-php">&lt;?php
    $frutas = array("manzana", "banana", "cereza");
    print_r($frutas);    // Salida: Array ( [0] => manzana [1] => banana [2] => cereza )
?&gt;</code></pre>
                
                <h3>Lista con Tipos de Datos Mixtos</h3>
                <p>Una lista puede contener elementos de diferentes tipos de datos, incluyendo otras listas:</p>
                <pre><code class="language-php">&lt;?php
    $lista_mixta = array(1, "hola", 3.14, array(1, 2, 3));
    print_r($lista_mixta);    // Salida: Array ( [0] => 1 [1] => hola [2] => 3.14 [3] => Array ( [0] => 1 [1] => 2 [2] => 3 ) )
?&gt;</code></pre>
                
                <h2>Accediendo a Elementos de la Lista</h2>
                <p>Puedes acceder a los elementos de una lista utilizando índices, donde el primer elemento tiene un índice de <code>0</code>. También puedes usar índices negativos para acceder a elementos desde el final de la lista.</p>
                <pre><code class="language-php">&lt;?php
    // Accediendo a elementos con índice positivo
    echo $frutas[0];    // Salida: manzana
    
    // Accediendo a elementos con índice negativo
    echo $frutas[count($frutas) - 1];   // Salida: cereza
?&gt;</code></pre>
    
                <h3>Rebanando una Lista</h3>
                <p>PHP te permite acceder a un rango de elementos en una lista utilizando rebanado. La sintaxis de rebanado es <code>array_slice(lista, inicio, longitud)</code>, donde <code>inicio</code> es inclusivo y <code>longitud</code> es el número de elementos a incluir.</p>
                <pre><code class="language-php">&lt;?php
    // Obtener los dos primeros elementos
    print_r(array_slice($frutas, 0, 2));   // Salida: Array ( [0] => manzana [1] => banana )
    
    // Obtener todos los elementos desde el segundo elemento en adelante
    print_r(array_slice($frutas, 1));    // Salida: Array ( [0] => banana [1] => cereza )
?&gt;</code></pre>
    
                <h2>Modificando Elementos de la Lista</h2>
                <p>Debido a que las listas son mutables, puedes cambiar su contenido asignando un nuevo valor a un índice o a un rango de índices.</p>
                <pre><code class="language-php">&lt;?php
    $frutas[1] = "arándano";
    print_r($frutas);    // Salida: Array ( [0] => manzana [1] => arándano [2] => cereza )
?&gt;</code></pre>
                
                <h3>Modificando un Rango de Elementos</h3>
                <p>También puedes modificar múltiples elementos a la vez asignando nuevos valores a una rebanada:</p>
                <pre><code class="language-php">&lt;?php
    $frutas = array("manzana", "banana", "cereza");
    array_splice($frutas, 0, 2, array("kiwi", "mango"));
    print_r($frutas);    // Salida: Array ( [0] => kiwi [1] => mango [2] => cereza )
?&gt;</code></pre>
                
                <h2>Agregando Elementos a una Lista</h2>
                <p>Puedes agregar nuevos elementos a una lista utilizando los métodos <code>array_push()</code> o <code>array_unshift()</code>.</p>
                <h3>Método <code>array_push()</code></h3>
                <p>Este método agrega un elemento al final de la lista.</p>
                <pre><code class="language-php">&lt;?php
    array_push($frutas, "naranja");
    print_r($frutas);    // Salida: Array ( [0] => kiwi [1] => mango [2] => cereza [3] => naranja )
?&gt;</code></pre>
    
                <h3>Método <code>array_unshift()</code></h3>
                <p>Este método inserta un elemento al principio de la lista.</p>
                <pre><code class="language-php">&lt;?php
    array_unshift($frutas, "banana");
    print_r($frutas);    // Salida: Array ( [0] => banana [1] => kiwi [2] => mango [3] => cereza [4] => naranja )
?&gt;</code></pre>
                
                <h2>Eliminando Elementos de una Lista</h2>
                <h3>Método <code>array_splice()</code></h3>
                <p>Este método elimina un rango de elementos de la lista.</p>
                <pre><code class="language-php">&lt;?php
    array_splice($frutas, 0, 1);
    print_r($frutas);    // Salida: Array ( [0] => kiwi [1] => mango [2] => cereza [3] => naranja )
?&gt;</code></pre>
                
                <h3>Método <code>array_pop()</code></h3>
                <p>Este método elimina y devuelve el último elemento de la lista.</p>
                <pre><code class="language-php">&lt;?php
    $ultimo_elemento = array_pop($frutas);
    echo $ultimo_elemento;    // Salida: naranja
    print_r($frutas);       // Salida: Array ( [0] => kiwi [1] => mango [2] => cereza )
?&gt;</code></pre>
                
                <h2>Métodos Comunes de Listas</h2>
                <ul>
                    <li><code>array_push()</code>: Agrega un elemento al final de la lista.</li>
                    <li><code>array_unshift()</code>: Inserta un elemento al principio de la lista.</li>
                    <li><code>array_splice()</code>: Elimina un rango de elementos de la lista.</li>
                    <li><code>array_pop()</code>: Elimina el último elemento de la lista y lo devuelve.</li>
                    <li><code>array_merge()</code>: Agrega todos los elementos de otra lista a la lista actual.</li>
                    <li><code>array_search()</code>: Devuelve el índice del primer elemento con el valor especificado.</li>
                    <li><code>array_count_values()</code>: Devuelve el número de apariciones de un valor en la lista.</li>
                    <li><code>sort()</code>: Ordena la lista en orden ascendente.</li>
                    <li><code>array_reverse()</code>: Invierte el orden de la lista.</li>
                    <li><code>array_fill()</code>: Elimina todos los elementos de la lista.</li>
                </ul>
                <pre><code class="language-php">&lt;?php
    // Ejemplo de múltiples métodos de lista
    $frutas = array("manzana", "banana", "cereza");
    $frutas = array_merge($frutas, array("uva", "sandía"));
    print_r($frutas);    // Salida: Array ( [0] => manzana [1] => banana [2] => cereza [3] => uva [4] => sandía )
    
    // Ordenando e invirtiendo la lista
    sort($frutas);
    print_r($frutas);    // Salida: Array ( [0] => banana [1] => cereza [2] => manzana [3] => sandía [4] => uva )
    
    $frutas = array_reverse($frutas);
    print_r($frutas);    // Salida: Array ( [0] => uva [1] => sandía [2] => manzana [3] => cereza [4] => banana )
?&gt;</code></pre>
                
                <h2>Iterando Sobre Listas</h2>
                <p>Puedes usar bucles para iterar a través de los elementos de una lista. El bucle más comúnmente utilizado para esto es el bucle <code>foreach</code>.</p>
                <h3>Ejemplo de Iteración Sobre una Lista</h3>
                <pre><code class="language-php">&lt;?php
    foreach ($frutas as $fruta) {
        echo $fruta;
    }
?&gt;</code></pre>
                <p><strong>Salida:</strong></p>
                <pre><code>uva
    sandía
    manzana
    cereza
    banana</code></pre>
                
                <h2>Comprensiones de Listas</h2>
                <p>Las comprensiones de listas proporcionan una forma concisa de crear listas utilizando un bucle <code>foreach</code> dentro de corchetes. También puedes agregar condiciones para filtrar los elementos.</p>
                <h3>Ejemplo de Comprensión de Listas</h3>
                <pre><code class="language-php">&lt;?php
    // Crear una lista de cuadrados del 1 al 5
    $cuadrados = array_map(function($x) { return $x * $x; }, range(1, 5));
    print_r($cuadrados);    // Salida: Array ( [0] => 1 [1] => 4 [2] => 9 [3] => 16 [4] => 25 )
?&gt;</code></pre>
    
                <h2>Características Avanzadas de Listas</h2>
                <h3>Listas Anidadas</h3>
                <p>Puedes crear listas dentro de listas, que se conocen como listas anidadas. Estas son útiles para representar estructuras de datos complejas como matrices.</p>
                <pre><code class="language-php">&lt;?php
    $matriz = array(
        array(1, 2, 3),
        array(4, 5, 6),
        array(7, 8, 9)
    );
    
    // Accediendo a elementos en una lista anidada
    echo $matriz[1][1];    // Salida: 5
?&gt;</code></pre>
                
                <h3>Copiando Listas</h3>
                <p>Cuando asignas una lista a una nueva variable, ambas variables se refieren a la misma lista en la memoria. Para crear una copia de una lista, puedes usar el método <code>array_slice()</code> o el rebanado.</p>
                <pre><code class="language-php">&lt;?php
    // Creando una copia de una lista
    $nueva_lista = array_slice($frutas, 0);
    // o
    $nueva_lista = $frutas;
?&gt;</code></pre>
                
                <h2>Ejercicios</h2>
                <ol>
                    <li>Crea una lista de tus películas favoritas e imprime la lista en orden inverso.</li>
                    <li>Escribe un programa que encuentre los números más grandes y más pequeños en una lista de enteros.</li>
                    <li>Crea una lista anidada para representar un tablero de tres en raya 3x3 e imprímelo fila por fila.</li>
                    <li>Usa una comprensión de listas para generar una lista de números pares entre 1 y 20.</li>
                </ol>
                
                <h2>Conclusión</h2>
                <p>Las listas son una de las estructuras de datos más poderosas en PHP, proporcionando flexibilidad y eficiencia. Comprender cómo crear, modificar y usar listas es fundamental para trabajar con datos en PHP.</p>
            `
        }
        ,
        tuples: {
            title: "Tuplas en PHP",
            content: `
                <p>Las tuplas son colecciones ordenadas e inmutables de elementos.</p>
                <h2>Creando una Tupla</h2>
                <pre><code class="language-php">&lt;?php
    $mi_tupla = array("manzana", "banana", "cereza");
    print_r($mi_tupla);
?&gt;</code></pre>
                <h2>Accediendo a Elementos de la Tupla</h2>
                <pre><code class="language-php">&lt;?php
    echo $mi_tupla[0];    // Salida: manzana
    echo $mi_tupla[count($mi_tupla) - 1];   // Salida: cereza
?&gt;</code></pre>
                <h2>Inmutabilidad</h2>
                <p>Las tuplas no se pueden cambiar después de ser creadas:</p>
                <pre><code class="language-php">&lt;?php
    // Esto generará un error
    // $mi_tupla[1] = "arándano";
?&gt;</code></pre>
            `
        },
        Diccionarios: {
            title: "Diccionarios en PHP",
            content: `
                <p>En PHP, los diccionarios son estructuras de datos que permiten almacenar colecciones de elementos en formato de pares clave-valor. Esto significa que cada elemento en el diccionario tiene una clave única, y a cada clave se le asigna un valor. Los diccionarios son desordenados, lo que significa que no mantienen un orden específico de los elementos, y son mutables, lo que significa que puedes agregar, eliminar o modificar sus elementos después de crearlos.</p>
                
                <h2>Creando un Diccionario</h2>
                <p>Para crear un diccionario en PHP, se utiliza un par de llaves <code>{}</code> donde se incluyen los pares clave-valor separados por comas. Cada clave debe ser única y puede ser de cualquier tipo inmutable, como cadenas, números o tuplas. Los valores pueden ser de cualquier tipo de datos, incluyendo listas, otros diccionarios o cualquier tipo de objeto.</p>
                <pre><code class="language-php">&lt;?php
    $persona = array(
        "nombre" => "Alicia",
        "edad" => 25,
        "ciudad" => "Nueva York"
    );
    print_r($persona);
?&gt;</code></pre>
                <p>En este ejemplo, hemos creado un diccionario llamado <code>persona</code> con tres pares clave-valor. Las claves son "nombre", "edad" y "ciudad", y sus respectivos valores son "Alicia", 25, y "Nueva York". Puedes imprimir el diccionario completo usando la función <code>print_r()</code>.</p>
                
                <h2>Accediendo a Elementos</h2>
                <p>Para acceder a los elementos de un diccionario, puedes usar las claves dentro de corchetes <code>[]</code> o el método <code>get()</code>. Si utilizas corchetes y la clave no existe, PHP lanzará un error <code>KeyError</code>. En cambio, el método <code>get()</code> no dará error si la clave no se encuentra; en su lugar, devolverá <code>None</code> o un valor por defecto que puedes especificar.</p>
                <pre><code class="language-php">&lt;?php
    echo $persona["nombre"];     // Salida: Alicia
    echo $persona["edad"];   // Salida: 25
    echo isset($persona["email"]) ? $persona["email"] : "No disponible";  // Salida: No disponible
?&gt;</code></pre>
                <p>En el primer ejemplo, estamos accediendo al valor asociado con la clave "nombre", que es "Alicia". En el segundo ejemplo, utilizamos el método <code>get()</code> para acceder al valor de la clave "edad". En el tercer ejemplo, intentamos obtener el valor de la clave "email", que no existe en el diccionario, por lo que <code>get()</code> devuelve "No disponible".</p>
                
                <h2>Modificando Elementos</h2>
                <p>Los diccionarios son mutables, lo que significa que puedes cambiar sus valores una vez que los has creado. Para modificar un valor existente, simplemente asigna un nuevo valor a la clave correspondiente. También puedes agregar nuevas claves al diccionario de la misma manera.</p>
                <pre><code class="language-php">&lt;?php
    $persona["edad"] = 26;  // Modificar el valor de "edad"
    $persona["email"] = "alicia@ejemplo.com";  // Agregar una nueva clave "email"
    print_r($persona);
?&gt;</code></pre>
                <p>En este ejemplo, cambiamos el valor de la clave "edad" a 26 y agregamos una nueva clave "email" con el valor "alicia@ejemplo.com". Cuando imprimimos el diccionario nuevamente, vemos que se ha actualizado con los nuevos valores.</p>
                
                <h2>Métodos de Diccionarios</h2>
                <p>PHP ofrece varios métodos útiles para trabajar con diccionarios. A continuación, describimos algunos de los más comunes:</p>
                <ul>
                    <li><code>array_keys()</code>: Devuelve una lista de todas las claves del diccionario.</li>
                    <li><code>array_values()</code>: Devuelve una lista de todos los valores del diccionario.</li>
                    <li><code>array_map()</code>: Devuelve una lista de pares clave-valor, donde cada elemento es una tupla que contiene una clave y su valor correspondiente.</li>
                </ul>
                <pre><code class="language-php">&lt;?php
    print_r(array_keys($persona));   // Salida: Array ( [0] => nombre [1] => edad [2] => ciudad [3] => email )
    print_r(array_values($persona)); // Salida: Array ( [0] => Alicia [1] => 26 [2] => Nueva York [3] => alicia@ejemplo.com )
    print_r($persona);  // Salida: Array ( [nombre] => Alicia [edad] => 26 [ciudad] => Nueva York [email] => alicia@ejemplo.com )
?&gt;</code></pre>
                <p>En este ejemplo, <code>array_keys()</code> devuelve una vista de todas las claves del diccionario, <code>array_values()</code> devuelve una vista de todos los valores, y <code>array_map()</code> devuelve una lista de tuplas que contienen cada par clave-valor del diccionario.</p>

                <h2>Conclusión</h2>
                <p>Los diccionarios en PHP son una estructura de datos poderosa que te permite organizar y gestionar información de forma eficiente mediante pares clave-valor. Son útiles para muchos casos en los que necesitas asociar valores con identificadores únicos. Con las técnicas descritas, puedes crear, acceder y modificar diccionarios fácilmente, además de utilizar métodos útiles para obtener claves, valores y pares clave-valor.</p>
            `
        }
,
        sets: {
            title: "Conjuntos en PHP",
            content: `
                <p>Los conjuntos son colecciones desordenadas de elementos únicos.</p>
                <h2>Creando un Conjunto</h2>
                <pre><code class="language-php">&lt;?php
    $mi_conjunto = array(1, 2, 3, 4, 5);
    print_r($mi_conjunto);
?&gt;</code></pre>
                <h2>Agregando y Eliminando Elementos</h2>
                <pre><code class="language-php">&lt;?php
    array_push($mi_conjunto, 6);
    unset($mi_conjunto[array_search(2, $mi_conjunto)]);
    print_r($mi_conjunto);
?&gt;</code></pre>
                <h2>Operaciones de Conjuntos</h2>
                <ul>
                    <li><code>array_merge()</code>: Devuelve un conjunto que contiene todos los elementos de ambos conjuntos.</li>
                    <li><code>array_intersect()</code>: Devuelve un conjunto que contiene solo los elementos presentes en ambos conjuntos.</li>
                    <li><code>array_diff()</code>: Devuelve un conjunto que contiene los elementos del primer conjunto pero no del segundo.</li>
                </ul>
                <pre><code class="language-php">&lt;?php
    $conjunto_a = array(1, 2, 3);
    $conjunto_b = array(3, 4, 5);
    
    print_r(array_merge($conjunto_a, $conjunto_b));          // Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 4 [4] => 5 )
    print_r(array_intersect($conjunto_a, $conjunto_b));   // Array ( [2] => 3 )
    print_r(array_diff($conjunto_a, $conjunto_b));     // Array ( [0] => 1 [1] => 2 )
?&gt;</code></pre>
            `
        },
        oop: {
            title: "Introducción a la Programación Orientada a Objetos",
            content: `
                <p>La Programación Orientada a Objetos (POO) es un paradigma de programación basado en el concepto de "objetos" que contienen datos y métodos.</p>
                <h2>Conceptos Clave</h2>
                <ul>
                    <li><b>Clase</b>: Un plano para crear objetos.</li>
                    <li><b>Objeto</b>: Una instancia de una clase.</li>
                    <li><b>Método</b>: Una función definida en una clase.</li>
                    <li><b>Atributo</b>: Una variable vinculada a un objeto o clase.</li>
                </ul>
            `
        },
        classes: {
            title: "Clases y Objetos",
            content: `
                <p>En PHP, las clases se definen utilizando la palabra clave <code>class</code>.</p>
                <h2>Definiendo una Clase</h2>
                <pre><code class="language-php">&lt;?php
    class Persona {
        public $nombre;
        public $edad;
    
        public function __construct($nombre, $edad) {
            $this->nombre = $nombre;  // Atributo
            $this->edad = $edad;    // Atributo
        }
    
        public function saludar() {
            echo "Hola, mi nombre es $this->nombre.";
        }
    }
    
    // Creando un objeto
    $persona1 = new Persona("Alicia", 25);
    $persona1->saludar();  // Salida: Hola, mi nombre es Alicia.
?&gt;</code></pre>
                <h2>El Método <code>__construct</code></h2>
                <p>El método <code>__construct</code> es el constructor que inicializa los atributos del objeto.</p>
            `
        },
        inheritance: {
            title: "Herencia",
            content: `
                <p>La herencia nos permite definir una clase que hereda todos los métodos y propiedades de otra clase.</p>
                <h2>Clases Base y Derivadas</h2>
                <pre><code class="language-php">&lt;?php
    class Animal {
        public $nombre;
    
        public function __construct($nombre) {
            $this->nombre = $nombre;
        }
    
        public function hablar() {
            // Para ser implementado por las subclases
        }
    }
    
    class Perro extends Animal {
        public function hablar() {
            return "¡Guau!";
        }
    }
    
    class Gato extends Animal {
        public function hablar() {
            return "¡Miau!";
        }
    }
    
    $perro = new Perro("Buddy");
    echo $perro->hablar();  // Salida: ¡Guau!
?&gt;</code></pre>
                <h2>Sobrescritura de Métodos</h2>
                <p>Las clases derivadas pueden sobrescribir métodos de la clase base.</p>
            `
        },
        polymorphism: {
            title: "Polimorfismo",
            content: `
                <p>El polimorfismo nos permite usar una sola interfaz para representar diferentes tipos de datos.</p>
                <h2>Ejemplo de Polimorfismo</h2>
                <pre><code class="language-php">&lt;?php
    class Forma {
        public function area() {
            // Para ser implementado por las subclases
        }
    }
    
    class Rectangulo extends Forma {
        public $ancho;
        public $alto;
    
        public function __construct($ancho, $alto) {
            $this->ancho = $ancho;
            $this->alto = $alto;
        }
    
        public function area() {
            return $this->ancho * $this->alto;
        }
    }
    
    class Circulo extends Forma {
        public $radio;
    
        public function __construct($radio) {
            $this->radio = $radio;
        }
    
        public function area() {
            return pi() * $this->radio ** 2;
        }
    }
    
    $formas = array(new Rectangulo(3, 4), new Circulo(5));
    foreach ($formas as $forma) {
        echo $forma->area();
    }
?&gt;</code></pre>
                <p>Esto imprimirá el área de cada forma, aunque sean de diferentes tipos.</p>
            `
        },
        decorators: {
            title: "Decoradores",
            content: `
                <p>Los decoradores son una forma de modificar el comportamiento de una función o método.</p>
                <h2>Ejemplo de Decorador</h2>
                <pre><code class="language-php">&lt;?php
    function mi_decorador($func) {
        return function() use ($func) {
            echo "Algo antes de la función";
            $func();
            echo "Algo después de la función";
        };
    }
    
    $di_hola = mi_decorador(function() {
        echo "¡Hola!";
    });
    
    $di_hola();
?&gt;</code></pre>
                <p>Esto imprimirá:</p>
                <pre><code>
    Algo antes de la función
    ¡Hola!
    Algo después de la función
                </code></pre>
            `
        },
        generators: {
            title: "Generadores",
            content: `
                <p>Los generadores son una forma de crear iteradores de manera más eficiente.</p>
                <h2>Ejemplo de Generador</h2>
                <pre><code class="language-php">&lt;?php
    function mi_generador() {
        yield 1;
        yield 2;
        yield 3;
    }
    
    foreach (mi_generador() as $valor) {
        echo $valor;
    }
?&gt;</code></pre>
                <p>Esto imprimirá:</p>
                <pre><code>
    1
    2
    3
                </code></pre>
            `
        },
        context_managers: {
            title: "Administradores de Contexto",
            content: `
                <p>Los administradores de contexto permiten la gestión de recursos de manera eficiente.</p>
                <h2>Ejemplo de Administrador de Contexto</h2>
                <pre><code class="language-php">&lt;?php
    $archivo = fopen('archivo.txt', 'r');
    $contenido = fread($archivo, filesize('archivo.txt'));
    fclose($archivo);
    echo $contenido;
?&gt;</code></pre>
                <p>Esto abrirá el archivo, leerá su contenido y luego lo cerrará automáticamente.</p>
            `
        },
        metaclasses: {
            title: "Metaclases",
            content: `
                <p>Las metaclases son clases de clases que definen cómo se comportan las clases.</p>
                <h2>Ejemplo de Metaclase</h2>
                <pre><code class="language-php">&lt;?php
    class MiMeta {
        public static function __callStatic($nombre, $argumentos) {
            echo "Creando clase $nombre";
            return new self;
        }
    }
    
    class MiClase extends MiMeta {
    }
    
    $instancia = MiClase::crear();
?&gt;</code></pre>
                <p>Esto imprimirá:</p>
                <pre><code>
    Creando clase crear
                </code></pre>
            `
        },
        advanced_topics: {
            title: "Advanced Topics in PHP",
            content: `
                <p>Welcome to the Advanced Topics section. Here, we will cover some of the more complex and powerful features of PHP.</p>
                
                <h2>Decorators</h2>
                <p>Decorators are a powerful tool in PHP that allows you to modify the behavior of a function or class. They are often used for logging, access control, memoization, and more.</p>
                <pre><code class="language-php">&lt;?php
    function my_decorator($func) {
        return function() use ($func) {
            echo "Something is happening before the function is called.";
            $func();
            echo "Something is happening after the function is called.";
        };
    }
    
    $say_hello = my_decorator(function() {
        echo "Hello!";
    });
    
    $say_hello();
?&gt;</code></pre>
                <p>This will output:</p>
                <pre><code>Something is happening before the function is called.
Hello!
Something is happening after the function is called.</code></pre>
                
                <h2>Generators</h2>
                <p>Generators are a simple way of creating iterators. They allow you to declare a function that behaves like an iterator, i.e., it can be used in a for loop.</p>
                <pre><code class="language-php">&lt;?php
    function my_generator() {
        yield 1;
        yield 2;
        yield 3;
    }
    
    foreach (my_generator() as $value) {
        echo $value;
    }
?&gt;</code></pre>
                <p>This will output:</p>
                <pre><code>1
2
3</code></pre>
                
                <h2>Context Managers</h2>
                <p>Context managers allow you to allocate and release resources precisely when you want to. The most widely used example of context managers is the <code>with</code> statement.</p>
                <pre><code class="language-php">&lt;?php
    $archivo = fopen('file.txt', 'r');
    $contenido = fread($archivo, filesize('file.txt'));
    fclose($archivo);
    echo $contenido;
?&gt;</code></pre>
                <p>This will open the file, read its content, and then close the file automatically.</p>
                
                <h2>Metaclasses</h2>
                <p>Metaclasses are a way to create classes in PHP. They are a more advanced and complex feature of PHP, and are typically used in frameworks and libraries.</p>
                <pre><code class="language-php">&lt;?php
    class MyMeta {
        public static function __callStatic($name, $arguments) {
            echo "Creating class $name";
            return new self;
        }
    }
    
    class MyClass extends MyMeta {
    }
    
    $instance = MyClass::create();
?&gt;</code></pre>
                <p>This will output:</p>
                <pre><code>Creating class create</code></pre>
            `
        }
    };

    // Elementos DOM en caché
    const contentDiv = document.getElementById('content');
    const loadingSpinner = document.getElementById('loading-spinner');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const suggestionBox = document.getElementById('suggestion-box');
    const themeToggle = document.getElementById('theme-toggle');
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');

    /**
     * Muestra el spinner de carga.
     */
    const showLoading = () => {
        loadingSpinner.style.display = 'block';
    };

    /**
     * Oculta el spinner de carga.
     */
    const hideLoading = () => {
        loadingSpinner.style.display = 'none';
    };

    /**
     * Carga el contenido de la página especificada.
     * @param {string} page - El identificador de la página.
     */
    const loadContent = (page) => {
        showLoading();
        contentDiv.classList.remove('show'); // Restablecer animación
    
        // Simular retraso en la carga de contenido
        setTimeout(() => {
            if (pages[page]) {
                contentDiv.innerHTML = `
                    <h1>${pages[page].title}</h1>
                    ${pages[page].content}
                `;
    
                // Inicializar resaltado de sintaxis
                hljs.highlightAll();
    
            } else {
                contentDiv.innerHTML = '<h1>Página No Encontrada</h1><p>La página que buscas no existe.</p>';
            }
    
            // Activar reflujo para reiniciar la animación CSS
            void contentDiv.offsetWidth;
            contentDiv.classList.add('show'); // Efecto de desvanecimiento
            hideLoading();
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplazamiento suave hacia arriba
        }, 500); // Ajustar el retraso según sea necesario
    };
    

    /**
     * Busca el contenido basado en la consulta y muestra los resultados.
     * @param {string} query - La consulta de búsqueda.
     */
    const searchContent = (query) => {
        if (!query) return;
    
        showLoading();
        contentDiv.classList.remove('show'); // Restablecer animación
    
        setTimeout(() => {
            const lowerCaseQuery = query.toLowerCase();
            const searchResults = Object.values(pages).filter(page => {
                return page.title.toLowerCase().includes(lowerCaseQuery) ||
                       page.content.toLowerCase().includes(lowerCaseQuery);
            }).map(page => {
                const highlightedContent = page.content.replace(
                    new RegExp(`(${escapeRegExp(query)})`, 'gi'),
                    '<span class="highlight">$1</span>'
                );
                return `
                    <h2>${page.title}</h2>
                    <div>${highlightedContent}</div>
                `;
            });
    
            if (searchResults.length > 0) {
                contentDiv.innerHTML = `
                    <h1>Resultados de Búsqueda para "${escapeHtml(query)}"</h1>
                    ${searchResults.join('<hr>')}
                `;
            } else {
                contentDiv.innerHTML = `<h1>Resultados de Búsqueda</h1><p>No se encontró contenido que coincida con "${escapeHtml(query)}".</p>`;
            }
    
            // Inicializar resaltado de sintaxis
            hljs.highlightAll();
    
            // Activar reflujo para reiniciar la animación CSS
            void contentDiv.offsetWidth;
            contentDiv.classList.add('show'); // Efecto de desvanecimiento
            hideLoading();
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplazamiento suave hacia arriba
        }, 300); // Retraso reducido para mejor capacidad de respuesta
    };
    

    /**
     * Escapa HTML para prevenir ataques XSS.
     * @param {string} unsafe - La cadena insegura.
     * @returns {string} - La cadena escapada.
     */
    const escapeHtml = (unsafe) => {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    };

    /**
     * Escapa caracteres especiales en una cadena para su uso en una expresión regular.
     * @param {string} string - La cadena de entrada.
     * @returns {string} - La cadena escapada.
     */
    const escapeRegExp = (string) => {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    };

    /**
     * Maneja las sugerencias de búsqueda basadas en la consulta actual.
     * @param {string} query - La consulta de entrada actual.
     */
    const handleSearchSuggestions = (query) => {
        if (!query) {
            closeSuggestionBox();
            return;
        }

        const suggestions = Object.values(pages).filter(page => 
            page.title.toLowerCase().includes(query.toLowerCase())
        );

        if (suggestions.length > 0) {
            suggestionBox.innerHTML = suggestions.map(page => `<li data-page="${getPageKey(page.title)}">${escapeHtml(page.title)}</li>`).join('');
            suggestionBox.classList.add('active');
        } else {
            closeSuggestionBox();
        }
    };

    /**
     * Recupera la clave de la página basada en el título de la página.
     * @param {string} title - El título de la página.
     * @returns {string|null} - La clave de la página correspondiente o null si no se encuentra.
     */
    const getPageKey = (title) => {
        return Object.keys(pages).find(key => pages[key].title === title) || null;
    };

    /**
     * Alterna el tema de modo oscuro.
     */
    const toggleDarkMode = () => {
        const isDarkMode = document.body.classList.toggle('dark-mode');

        // Cambiar icono basado en el modo
        const themeToggleIcon = themeToggle.querySelector('i');
        if (themeToggleIcon) {
            themeToggleIcon.classList.toggle('fa-moon', !isDarkMode);
            themeToggleIcon.classList.toggle('fa-sun', isDarkMode);
        }

        // Persistir la preferencia del usuario
        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    };

    /**
     * Inicializa el tema basado en la preferencia del usuario almacenada en localStorage.
     */
    const initializeTheme = () => {
        const darkModeEnabled = localStorage.getItem('darkMode') === 'enabled';
        if (darkModeEnabled) {
            document.body.classList.add('dark-mode');
            const themeToggleIcon = themeToggle.querySelector('i');
            if (themeToggleIcon) {
                themeToggleIcon.classList.remove('fa-moon');
                themeToggleIcon.classList.add('fa-sun');
            }
        }
    };

    /**
     * Cierra el cuadro de sugerencias.
     */
    const closeSuggestionBox = () => {
        suggestionBox.innerHTML = '';
        suggestionBox.classList.remove('active');
    };

    /**
     * Maneja los clics en los enlaces de navegación utilizando la delegación de eventos.
     * @param {Event} event - El evento de clic.
     */
    const handleNavLinkClick = (event) => {
        const target = event.target.closest('a');
        if (target && target.dataset.target) {
            event.preventDefault();
            const page = target.dataset.target;
            loadContent(page);
            closeSuggestionBox();
            searchInput.value = '';
            // Cerrar nav-links en móvil después de la selección
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    };

    /**
     * Maneja los clics en los elementos de sugerencia utilizando la delegación de eventos.
     * @param {Event} event - El evento de clic.
     */
    const handleSuggestionClick = (event) => {
        const target = event.target.closest('li');
        if (target && target.dataset.page) {
            const selectedPage = target.dataset.page;
            if (selectedPage && pages[selectedPage]) {
                loadContent(selectedPage);
                closeSuggestionBox();
                searchInput.value = '';
            }
        }
    };

    /**
     * Debounce una función por el retraso especificado.
     * @param {Function} func - La función a debounce.
     * @param {number} delay - El retraso de debounce en milisegundos.
     * @returns {Function} - La función debounce.
     */
    const debounce = (func, delay) => {
        let debounceTimer;
        return function(...args) {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(this, args), delay);
        };
    };

    /**
     * Inicializa todos los event listeners.
     */
    const initializeEventListeners = () => {
        // Clics en enlaces de navegación
        navLinks.addEventListener('click', handleNavLinkClick);

        // Clic en el botón de búsqueda
        searchButton.addEventListener('click', () => {
            const query = searchInput.value.trim();
            if (query) {
                searchContent(query);
            }
        });

        // Tecla Enter en el campo de búsqueda
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                searchButton.click();
            }
        });

        // Evento de entrada para sugerencias de búsqueda con debounce
        searchInput.addEventListener('input', debounce((e) => {
            const query = e.target.value.trim().toLowerCase();
            handleSearchSuggestions(query);
        }, 300));

        // Clic en el cuadro de sugerencias (Delegación de eventos)
        suggestionBox.addEventListener('click', handleSuggestionClick);

        // Clic en el botón de alternar tema
        themeToggle.addEventListener('click', toggleDarkMode);

        // Clic fuera para cerrar el cuadro de sugerencias
        document.addEventListener('click', (e) => {
            if (!document.querySelector('.search-bar').contains(e.target)) {
                closeSuggestionBox();
            }
        });

        // Clics en botones de dropdown
        const dropdownButtons = document.querySelectorAll('.dropdown-btn');
        const dropdownContainers = document.querySelectorAll('.dropdown-container');
    
        dropdownButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevenir que el evento se propague al documento
                // Alternar clase activa
                button.classList.toggle('active');
    
                // Alternar la visualización del contenedor de dropdown
                const dropdown = button.nextElementSibling;
                if (dropdown.style.display === "block") {
                    dropdown.style.display = "none";
                } else {
                    dropdown.style.display = "block";
                }
            });
        });
    
        // Cerrar dropdowns al hacer clic fuera
        document.addEventListener('click', (e) => {
            dropdownButtons.forEach(button => {
                const dropdown = button.nextElementSibling;
                if (dropdown.style.display === "block" && !button.contains(e.target) && !dropdown.contains(e.target)) {
                    dropdown.style.display = "none";
                    button.classList.remove('active');
                }
            });
        });
    };
        // Alternar todos los dropdowns
        const toggleDropdownsButton = document.getElementById('toggle-dropdowns');
        if (toggleDropdownsButton) {
            toggleDropdownsButton.addEventListener('click', () => {
                const allDropdowns = document.querySelectorAll('.dropdown-container');
                const allButtons = document.querySelectorAll('.dropdown-btn');

                const allOpen = Array.from(allDropdowns).every(dropdown => dropdown.style.display === "block");

                allDropdowns.forEach(dropdown => {
                    dropdown.style.display = allOpen ? "none" : "block";
                });

                allButtons.forEach(button => {
                    if (allOpen) {
                        button.classList.remove('active');
                    } else {
                        button.classList.add('active');
                    }
                });
            });
        

        // Alternar menú de hamburguesa
        if (hamburger) {
            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                hamburger.classList.toggle('active');
            });
        }
    };

    /**
     * Inicializa la aplicación.
     */
    const initializeApp = () => {
        // Inicializar tema basado en la preferencia del usuario
        initializeTheme();

        // Configurar event listeners
        initializeEventListeners();

        // Cargar contenido predeterminado después de asegurar que el tema esté aplicado
        loadContent('home');
    };

    // Inicializar la aplicación cuando el DOM esté completamente cargado
    document.addEventListener('DOMContentLoaded', initializeApp);

    /**
     * Agrega desplazamiento suave para enlaces de navegación.
     */
    const addSmoothScrolling = () => {
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    };

    /**
     * Implementa efectos de hover para botones, enlaces y otros elementos interactivos.
     */
    const addHoverEffects = () => {
        const interactiveElements = document.querySelectorAll('button, a, .dropdown-btn');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseover', () => {
                element.classList.add('hover');
            });
            element.addEventListener('mouseout', () => {
                element.classList.remove('hover');
            });
        });
    };

    /**
     * Mejora la barra de búsqueda con sugerencias de autocompletado.
     */
    const enhanceSearchBar = () => {
        const searchInput = document.getElementById('search-input');
        const suggestionBox = document.getElementById('suggestion-box');

        searchInput.addEventListener('input', () => {
            const query = searchInput.value.trim().toLowerCase();
            if (query.length > 0) {
                const suggestions = Object.keys(pages).filter(page => page.toLowerCase().includes(query));
                suggestionBox.innerHTML = suggestions.map(suggestion => `<li>${suggestion}</li>`).join('');
                suggestionBox.style.display = 'block';
            } else {
                suggestionBox.style.display = 'none';
            }
        });

        suggestionBox.addEventListener('click', (event) => {
            if (event.target.tagName === 'LI') {
                searchInput.value = event.target.textContent;
                suggestionBox.style.display = 'none';
                searchContent(searchInput.value);
            }
        });

        document.addEventListener('click', (event) => {
            if (!suggestionBox.contains(event.target) && event.target !== searchInput) {
                suggestionBox.style.display = 'none';
            }
        });
    };

    /**
     * Agrega funcionalidad al botón de volver arriba.
     */
    const addBackToTopButton = () => {
        const backToTopButton = document.getElementById('back-to-top');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    };

    /**
     * Implementa la funcionalidad de la barra de navegación fija.
     */
    const implementStickyNavbar = () => {
        const navbar = document.querySelector('.navbar');
        const sticky = navbar.offsetTop;

        window.addEventListener('scroll', () => {
            if (window.scrollY >= sticky) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
        });
    };

    // Llamar a las funciones adicionales
    addSmoothScrolling();
    addHoverEffects();
    enhanceSearchBar();
    addBackToTopButton();
    implementStickyNavbar();
})();
