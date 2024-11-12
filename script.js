(() => {
// Contenido Detallado para Principiantes en Python
const pages = {
    sintaxis: {
        title: "Sintaxis Básica de Python",
        content: `
            <p>Bienvenido a la guía completa de sintaxis básica de Python. Este capítulo te introducirá a los fundamentos de la escritura de código en Python, incluyendo cómo estructurar tu código, utilizar comentarios y entender la importancia de la indentación.</p>
            
            <h2>Introducción a Python</h2>
            <p>Python es un lenguaje de programación interpretado, de alto nivel y de propósito general. Su filosofía de diseño enfatiza la legibilidad del código con el uso de una indentación significativa. Python es conocido por su sintaxis simple y fácil de aprender, lo que lo hace ideal para principiantes y permite desarrollar proyectos rápidamente.</p>

            <h2>Sintaxis Básica</h2>
            <p>La sintaxis de Python está diseñada para ser sencilla y clara. A continuación, se presentan algunos elementos clave de la sintaxis de Python que debes conocer:</p>
            
            <h3>1. Impresión en Consola</h3>
            <pre><code>print("Hola, mundo!")</code></pre>
            <p>La función <code>print()</code> se utiliza para mostrar información en la consola. Es uno de los primeros comandos que los principiantes suelen aprender.</p>
            
            <h3>2. Comentarios</h3>
            <pre><code># Esto es un comentario en Python
print("Esto se mostrará en la consola")  # Este es otro comentario</code></pre>
            <p>Los comentarios comienzan con el símbolo <code>#</code> y se utilizan para explicar el código o dejar notas. Python ignora todo lo que esté después de un <code>#</code> en esa línea.</p>

            <h3>3. Variables e Identación</h3>
            <p>Python no requiere que declares el tipo de una variable, simplemente asignas un valor:</p>
            <pre><code>x = 5
y = "Hola"</code></pre>
            <p>La indentación es crucial en Python. Define los bloques de código, como los que se utilizan en funciones o bucles:</p>
            <pre><code>if x > 0:
    print("x es un número positivo")</code></pre>
            <p>Nota cómo el bloque de código dentro del <code>if</code> está indentado.</p>

            <h3>4. Espacios y Tabulaciones</h3>
            <p>Python usa la indentación para definir el nivel de anidación. Es importante no mezclar espacios y tabulaciones. Lo mejor es elegir uno y usarlo consistentemente. A continuación, se muestra un ejemplo:</p>
            <pre><code>for i in range(5):
    print(i)  # Correcto</code></pre>
            <p>El código dentro del bucle <code>for</code> está indentado.</p>
        `

        },
        variables: {
            title: "Variables en Python",
            content: `
                <p>En este capítulo, exploraremos en profundidad las variables en Python, cómo funcionan y cómo utilizarlas eficazmente en tus programas.</p>
                
                <h2>¿Qué es una Variable?</h2>
                <p>Una variable es un nombre que se utiliza para referirse a un valor almacenado en la memoria. Puedes pensar en una variable como una caja donde se guarda información. En Python, no necesitas especificar el tipo de dato que almacenará la variable; simplemente le asignas un valor.</p>
                
                <h3>1. Asignación de Variables</h3>
                <p>Asignar un valor a una variable en Python es muy simple. Utilizas el operador igual <code>=</code> para asignar un valor:</p>
                <pre><code>x = 10
    y = "Hola, mundo!"
    z = 3.14</code></pre>
                <p>En este ejemplo, <code>x</code> es un número entero, <code>y</code> es una cadena de texto, y <code>z</code> es un número decimal.</p>
                
                <h3>2. Reasignación de Variables</h3>
                <p>Las variables en Python son dinámicas, lo que significa que puedes reasignarles un nuevo valor en cualquier momento, incluso un valor de un tipo diferente:</p>
                <pre><code>x = 5
    x = "Ahora soy una cadena de texto"</code></pre>
                <p>En el ejemplo anterior, <code>x</code> primero tiene un valor entero y luego se reasigna a una cadena de texto. Python permite esta flexibilidad sin necesidad de declarar un tipo específico.</p>
                
                <h3>3. Reglas de Nomenclatura</h3>
                <p>Al crear variables en Python, debes seguir ciertas reglas:</p>
                <ul>
                    <li>Los nombres de las variables deben comenzar con una letra o un guion bajo (<code>_</code>).</li>
                    <li>No pueden comenzar con un número.</li>
                    <li>Solo pueden contener caracteres alfanuméricos y guiones bajos (<code>a-z</code>, <code>A-Z</code>, <code>0-9</code>, <code>_</code>).</li>
                    <li>Python distingue entre mayúsculas y minúsculas, por lo que <code>miVariable</code> y <code>mivariable</code> son diferentes.</li>
                </ul>
                
                <h3>4. Buenas Prácticas para Nombres de Variables</h3>
                <p>Es importante elegir nombres descriptivos para tus variables para que el código sea más fácil de entender:</p>
                <pre><code>nombre = "Juan"
    edad = 25</code></pre>
                <p>En lugar de usar nombres genéricos como <code>x</code> o <code>y</code>, es mejor usar nombres que describan el propósito de la variable.</p>
                
                <h3>5. Variables Múltiples</h3>
                <p>Python permite asignar múltiples variables en una sola línea:</p>
                <pre><code>a, b, c = 1, 2, 3</code></pre>
                <p>En este ejemplo, <code>a</code> se asigna a <code>1</code>, <code>b</code> se asigna a <code>2</code>, y <code>c</code> se asigna a <code>3</code>.</p>
                
                <h3>6. Intercambio de Valores</h3>
                <p>Intercambiar valores entre dos variables es sencillo en Python gracias a su sintaxis concisa:</p>
                <pre><code>a, b = b, a</code></pre>
                <p>Esta línea intercambia los valores de <code>a</code> y <code>b</code> sin necesidad de una variable temporal.</p>
                
                
            `
        },

        tipos_datos: {
            title: "Tipos de Datos en Python",
            content: `
                <p>En este capítulo, profundizaremos en los tipos de datos incorporados en Python y cómo utilizarlos en tus programas. Los tipos de datos determinan qué tipo de valores puede almacenar una variable y qué operaciones puedes realizar con ellos.</p>
                
                <h2>Tipos Numéricos</h2>
                <h3>Enteros (<code>int</code>)</h3>
                <p>Los enteros son números sin parte decimal, positivos o negativos, de longitud ilimitada en Python.</p>
                <pre><code class="language-python">numero = 42
negativo = -10</code></pre>
                
                <h3>Flotantes (<code>float</code>)</h3>
                <p>Los flotantes son números con parte decimal. Se pueden representar utilizando un punto decimal o notación científica.</p>
                <pre><code class="language-python">pi = 3.1416
avogadro = 6.022e23  # Notación científica</code></pre>
                
                <h3>Números Complejos (<code>complex</code>)</h3>
                <p>Los números complejos tienen una parte real y una parte imaginaria, y se representan con una 'j' o 'J' para la parte imaginaria.</p>
                <pre><code class="language-python">numero_complejo = 2 + 3j
print(numero_complejo.real)  # 2.0
print(numero_complejo.imag)  # 3.0</code></pre>
                
                <h2>Tipo de Texto</h2>
                <h3>Cadenas (<code>str</code>)</h3>
                <p>Las cadenas son secuencias de caracteres utilizadas para representar texto. Puedes definir cadenas utilizando comillas simples, dobles o triples.</p>
                <pre><code class="language-python">mensaje = 'Hola, Mundo!'
mensaje_doble = "Python es genial"
mensaje_multilinea = """Este es un mensaje
que abarca varias
líneas."""</code></pre>
                
                <h3>Manipulación de Cadenas</h3>
                <p>Puedes acceder a caracteres individuales, realizar cortes (slicing) y utilizar diversos métodos para manipular cadenas.</p>
                <pre><code class="language-python">texto = "Python"
print(texto[0])      # 'P'
print(texto[-1])     # 'n'
print(texto[1:4])    # 'yth'
print(texto.upper()) # 'PYTHON'
print(texto.lower()) # 'python'</code></pre>
                
                <h2>Tipos de Secuencia</h2>
                <h3>Listas (<code>list</code>)</h3>
                <p>Las listas son colecciones ordenadas y mutables que pueden contener elementos de diferentes tipos.</p>
                <pre><code class="language-python">mi_lista = [1, "dos", 3.0, [4, 5]]
mi_lista.append(6)
print(mi_lista)</code></pre>
                
                <h3>Tuplas (<code>tuple</code>)</h3>
                <p>Las tuplas son similares a las listas, pero son inmutables. Una vez creadas, no puedes modificar sus elementos.</p>
                <pre><code class="language-python">mi_tupla = (1, 2, 3)
# mi_tupla[0] = 10  # Esto causará un error</code></pre>
                
                <h3>Conjuntos (<code>set</code>)</h3>
                <p>Los conjuntos son colecciones desordenadas de elementos únicos. Son útiles para operaciones de conjuntos matemáticos.</p>
                <pre><code class="language-python">mi_conjunto = {1, 2, 3, 2}
print(mi_conjunto)  # Output: {1, 2, 3}</code></pre>
                
                <h2>Tipos de Mapeo</h2>
                <h3>Diccionarios (<code>dict</code>)</h3>
                <p>Los diccionarios son colecciones desordenadas de pares clave-valor. Son mutables y permiten un acceso rápido a los valores mediante claves.</p>
                <pre><code class="language-python">mi_diccionario = {"nombre": "Ana", "edad": 25}
print(mi_diccionario["nombre"])  # 'Ana'
mi_diccionario["edad"] = 26
print(mi_diccionario)</code></pre>
                
                <h2>Tipo Booleano</h2>
                <p>Los booleanos representan valores de verdad: <code>True</code> o <code>False</code>.</p>
                <pre><code class="language-python">es_mayor = True
print(type(es_mayor))  # &lt;class 'bool'&gt;</code></pre>
                
                <h2>Conversión de Tipos</h2>
                <p>Puedes convertir valores entre diferentes tipos utilizando funciones integradas:</p>
                <pre><code class="language-python"># De entero a cadena
numero = 10
cadena = str(numero)  # '10'

# De cadena a entero    <title>Python Beginner Guide</title>
texto = "20"
numero = int(texto)  # 20

# De cadena a flotante
texto = "3.14"
numero = float(texto)  # 3.14</code></pre>
                
                <h2>Verificación de Tipos</h2>
                <p>Para verificar si un objeto es de un tipo específico, puedes usar la función <code>isinstance()</code>:</p>
                <pre><code class="language-python">x = 10
print(isinstance(x, int))       # True
print(isinstance(x, float))     # False
print(isinstance(x, (int, float)))  # True</code></pre>
                
                <h2>Conclusión</h2>
                <p>Comprender los tipos de datos en Python es esencial para escribir programas eficientes y libres de errores. A medida que avances, te encontrarás utilizando estos tipos de datos y sus métodos asociados para manipular y procesar información.</p>
                <h3>7. Tipos de Variables</h3>
<p>Las variables en Python pueden contener diferentes tipos de datos:</p>

<ul>
    <li>
        <strong>Enteros</strong> (<code>int</code>): 
        Números enteros, como <code>10</code> o <code>-5</code>.
    </li>
    <li>
        <strong>Flotantes</strong> (<code>float</code>): 
        Números con decimales, como <code>3.14</code> o <code>-0.01</code>.
    </li>
    <li>
        <strong>Números Complejos</strong> (<code>complex</code>): 
        Números con parte real e imaginaria, como <code>2 + 3j</code>.
    </li>
    <li>
        <strong>Cadenas de texto</strong> (<code>str</code>): 
        Secuencias de caracteres, como <code>"Hola"</code> o <code>"Python"</code>.
    </li>
    <li>
        <strong>Booleanos</strong> (<code>bool</code>): 
        Valores de <code>True</code> o <code>False</code>.
    </li>
    <li>
        <strong>Listas</strong> (<code>list</code>): 
        Colecciones ordenadas y mutables, como <code>[1, 2, 3]</code> o <code>["a", "b", "c"]</code>.
    </li>
    <li>
        <strong>Tuplas</strong> (<code>tuple</code>): 
        Colecciones ordenadas e inmutables, como <code>(1, 2, 3)</code> o <code>("a", "b", "c")</code>.
    </li>
    <li>
        <strong>Conjuntos</strong> (<code>set</code>): 
        Colecciones desordenadas de elementos únicos, como <code>{1, 2, 3}</code>.
    </li>
    <li>
        <strong>Diccionarios</strong> (<code>dict</code>): 
        Colecciones de pares clave-valor, como <code>{"nombre": "Juan", "edad": 30}</code>.
    </li>
    <li>
        <strong>Tipos None</strong> (<code>NoneType</code>): 
        Representa la ausencia de valor, como <code>None</code>.
    </li>
    <li>
        <strong>Bytes</strong> (<code>bytes</code>): 
        Secuencias de enteros en el rango de 0 a 255, como <code>b"Hola"</code>.
    </li>
    <li>
        <strong>Bytearray</strong> (<code>bytearray</code>): 
        Similar a <code>bytes</code>, pero mutable.
    </li>
    <li>
        <strong>Memoria Vista</strong> (<code>memoryview</code>): 
        Permite el acceso a los datos internos de un objeto sin copiarlos.
    </li>
    <li>
        <strong>Funciones</strong> (<code>function</code>): 
        Objetos de función definidos por el usuario o integrados.
    </li>
    <li>
        <strong>Clases y Objetos</strong> (<code>class</code>): 
        Plantillas para crear objetos personalizados.
    </li>
</ul>

<p>Estos tipos de variables son fundamentales en Python y permiten manejar una amplia variedad de datos y estructuras. Comprender cada uno de ellos es esencial para desarrollar programas efectivos y eficientes.</p>

            `
        },

    
        if_else: {
            title: "Sentencias If-Else en Python",
            content: `
                <p>Las sentencias condicionales en Python permiten que tu programa tome decisiones y ejecute ciertas partes del código solo cuando se cumplan condiciones específicas. Esto es fundamental para controlar el flujo de ejecución y crear programas dinámicos e interactivos.</p>
                
                <h2>La Sentencia <code>if</code></h2>
                <p>La sentencia <code>if</code> se utiliza para ejecutar un bloque de código si una condición es verdadera.</p>
                <h3>Sintaxis Básica</h3>
                <pre><code class="language-python">if condición:
        # código a ejecutar si la condición es verdadera
    </code></pre>
                <p><strong>Nota:</strong> Observa que se utiliza una indentación (espacios o tabulaciones) para definir el bloque de código que pertenece al <code>if</code>. Python recomienda usar 4 espacios para la indentación.</p>
                
                <h3>Ejemplo Simple</h3>
                <pre><code class="language-python">edad = 18
    
    if edad >= 18:
        print("Eres mayor de edad.")
    </code></pre>
                <p>En este ejemplo, la condición <code>edad >= 18</code> evalúa si la variable <code>edad</code> es mayor o igual a 18. Si es verdadera, se ejecuta el <code>print()</code>.</p>
                
                <h2>La Sentencia <code>else</code></h2>
                <p>La sentencia <code>else</code> se utiliza junto con <code>if</code> para ejecutar un bloque de código cuando la condición es falsa.</p>
                <h3>Sintaxis</h3>
                <pre><code class="language-python">if condición:
        # código si la condición es verdadera
    else:
        # código si la condición es falsa
    </code></pre>
                <h3>Ejemplo con <code>else</code></h3>
                <pre><code class="language-python">edad = 16
    
    if edad >= 18:
        print("Eres mayor de edad.")
    else:
        print("Eres menor de edad.")
    </code></pre>
                <p>En este caso, si la condición <code>edad >= 18</code> es falsa, se ejecuta el bloque dentro de <code>else</code>.</p>
                
                <h2>La Sentencia <code>elif</code></h2>
                <p>La sentencia <code>elif</code> (abreviatura de "else if") permite verificar múltiples condiciones. Se utiliza después de un <code>if</code> inicial y antes de un posible <code>else</code> final.</p>
                <h3>Sintaxis</h3>
                <pre><code class="language-python">if condición1:
        # código si condición1 es verdadera
    elif condición2:
        # código si condición2 es verdadera
    elif condición3:
        # código si condición3 es verdadera
    else:
        # código si ninguna condición anterior es verdadera
    </code></pre>
                <h3>Ejemplo con <code>elif</code></h3>
                <pre><code class="language-python">calificacion = 85
    
    if calificacion >= 90:
        print("Obtuviste una A.")
    elif calificacion >= 80:
        print("Obtuviste una B.")
    elif calificacion >= 70:
        print("Obtuviste una C.")
    else:
        print("Necesitas mejorar.")
    </code></pre>
                <p>En este ejemplo, el programa evalúa la calificación y ejecuta el bloque correspondiente a la primera condición verdadera.</p>
                
                <h2>Operadores de Comparación</h2>
                <p>Para construir condiciones, se utilizan operadores de comparación que evalúan expresiones y devuelven un valor booleano (<code>True</code> o <code>False</code>).</p>
                <ul>
                    <li><code>==</code>: Igual a</li>
                    <li><code>!=</code>: No igual a</li>
                    <li><code>&gt;</code>: Mayor que</li>
                    <li><code>&lt;</code>: Menor que</li>
                    <li><code>&gt;=</code>: Mayor o igual a</li>
                    <li><code>&lt;=</code>: Menor o igual a</li>
                </ul>
                <h3>Ejemplos de Operadores de Comparación</h3>
                <pre><code class="language-python">a = 10
    b = 20
    
    if a == b:
        print("a y b son iguales.")
    if a != b:
        print("a y b son diferentes.")
    if a &lt; b:
        print("a es menor que b.")
    </code></pre>
                
                <h2>Operadores Lógicos</h2>
                <p>Los operadores lógicos permiten combinar múltiples condiciones:</p>
                <ul>
                    <li><code>and</code>: Devuelve <code>True</code> si ambas condiciones son verdaderas.</li>
                    <li><code>or</code>: Devuelve <code>True</code> si al menos una condición es verdadera.</li>
                    <li><code>not</code>: Invierte el valor de verdad de la condición.</li>
                </ul>
                <h3>Ejemplos de Operadores Lógicos</h3>
                <pre><code class="language-python">edad = 25
    ingresos = 35000
    
    if edad &gt;= 18 and ingresos &gt;= 30000:
        print("Eres elegible para el préstamo.")
    else:
        print("No cumples los requisitos.")
    
    # Utilizando 'or'
    dia = "sábado"
    
    if dia == "sábado" or dia == "domingo":
        print("Es fin de semana.")
    else:
        print("Es día laborable.")
    
    # Utilizando 'not'
    llueve = False
    
    if not llueve:
        print("Puedes salir sin paraguas.")
    </code></pre>
                
                <h2>Condiciones Anidadas</h2>
                <p>Es posible anidar sentencias <code>if</code> dentro de otras para evaluar condiciones más complejas.</p>
                <h3>Ejemplo de Condición Anidada</h3>
                <pre><code class="language-python">edad = 30
    es_estudiante = False
    
    if edad &gt;= 18:
        if es_estudiante:
            print("Eres un adulto estudiante.")
        else:
            print("Eres un adulto que no es estudiante.")
    else:
        print("Eres menor de edad.")
    </code></pre>
                <p>En este ejemplo, primero se verifica si la persona es mayor de edad. Dentro de ese bloque, se evalúa si es estudiante o no.</p>
                
                <h2>Expresiones Condicionales (Operador Ternario)</h2>
                <p>Python permite escribir expresiones condicionales en una sola línea utilizando el operador ternario.</p>
                <h3>Sintaxis</h3>
                <pre><code class="language-python">valor_si_verdadero if condición else valor_si_falso
    </code></pre>
                <h3>Ejemplo de Operador Ternario</h3>
                <pre><code class="language-python">edad = 20
    mensaje = "Mayor de edad" if edad >= 18 else "Menor de edad"
    print(mensaje)
    </code></pre>
                <p>Este código asigna a la variable <code>mensaje</code> el valor correspondiente según la condición.</p>
                
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
                <p>Las sentencias <code>if</code>, <code>elif</code> y <code>else</code> son herramientas fundamentales en Python que te permiten controlar el flujo de tu programa basándote en condiciones. Comprender cómo utilizarlas te permitirá crear programas más dinámicos y funcionales.</p>
            `
        },

            loops: {
                title: "Bucles en Python",
                content: `
                <p>Los bucles se utilizan para ejecutar un bloque de código repetidamente. Python proporciona dos tipos principales de bucles: <strong>for</strong> y <strong>while</strong>. Entender cómo funcionan los bucles es esencial para automatizar tareas repetitivas y procesar datos en colecciones.</p>
                
                <h2>El Bucle <code>for</code></h2>
                <p>El bucle <code>for</code> se utiliza para iterar sobre una secuencia (como una lista, tupla, diccionario, conjunto o cadena). Con cada iteración, puedes realizar una acción con el elemento actual de la secuencia.</p>
                <h3>Sintaxis Básica</h3>
                <pre><code class="language-python">for elemento in secuencia:
        # código a ejecutar en cada iteración
    </code></pre>
                <h3>Ejemplo Simple</h3>
                <pre><code class="language-python">
    frutas = ["manzana", "banana", "cereza"]
    
    for fruta in frutas:
        print(fruta)
    </code></pre>
                <p><strong>Salida:</strong></p>
                <pre><code>manzana
    banana
    cereza
    </code></pre>
                
                <h3>Iterando Sobre una Cadena</h3>
                <p>Puedes iterar sobre cada carácter en una cadena:</p>
                <pre><code class="language-python">palabra = "Python"
    
    for letra in palabra:
        print(letra)
    </code></pre>
                <p><strong>Salida:</strong></p>
                <pre><code>
    P
    y
    t
    h
    o
    n
    </code></pre>
                
                <h3>Uso de la Función <code>range()</code></h3>
                <p>La función <code>range()</code> genera una secuencia de números, lo cual es útil para iterar un número específico de veces.</p>
                <pre><code class="language-python">for i in range(5):
        print("Iteración", i)
    </code></pre>
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
                <pre><code class="language-python">for num in range(2, 10, 2):
        print(num)
    </code></pre>
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
                <pre><code class="language-python">while condición:
        # código a ejecutar mientras la condición sea verdadera
    </code></pre>
                <h3>Ejemplo Simple</h3>
                <pre><code class="language-python">contador = 0
    
    while contador < 5:
        print("Contador:", contador)
        contador += 1
    </code></pre>
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
                <pre><code class="language-python"># Ejemplo de bucle infinito (¡No ejecutar!)
    i = 1
    while i > 0:
        print(i)
        i += 1
    </code></pre>
                
                <h2>Sentencias <code>break</code> y <code>continue</code></h2>
                <p>Estas sentencias controlan el flujo de los bucles.</p>
                <h3><code>break</code></h3>
                <p>Termina el bucle inmediatamente, independientemente de la condición.</p>
                <h4>Ejemplo de <code>break</code></h4>
                <pre><code class="language-python">
        for num in range(10):
        if num == 5:
            break
        print(num)
    </code></pre>
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
                <h4>Ejemplo de <code>continue</code></h4>
                <pre><code class="language-python">for num in range(5):
        if num == 2:
            continue
        print(num)
    </code></pre>
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
                <pre><code class="language-python">
    matriz = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
    
    for fila in matriz:
        for elemento in fila:
            print(elemento, end=" ")
        print()  # Nueva línea después de cada fila
    </code></pre>
                <p><strong>Salida:</strong></p>
                <pre><code>
    1 2 3 
    4 5 6 
    7 8 9 
    </code></pre>
                
                <h2>La Sentencia <code>else</code> en Bucles</h2>
                <p>En Python, los bucles pueden tener una cláusula <code>else</code> que se ejecuta cuando el bucle finaliza normalmente (no por un <code>break</code>).</p>
                <h3>Ejemplo con <code>for</code></h3>
                <pre><code class="language-python">for num in range(5):
        print(num)
    else:
        print("El bucle ha finalizado.")
    </code></pre>
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
                <pre><code class="language-python">contador = 0
    
    while contador < 5:
        print(contador)
        contador += 1
    else:
        print("El bucle ha terminado.")
    </code></pre>
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
                
                <h2>Iterando con <code>enumerate()</code></h2>
                <p>La función <code>enumerate()</code> permite obtener el índice y el valor al iterar sobre una secuencia.</p>
                <h3>Ejemplo</h3>
                <pre><code class="language-python">frutas = ["manzana", "banana", "cereza"]
    
    for indice, fruta in enumerate(frutas):
        print(indice, fruta)
    </code></pre>
                <p><strong>Salida:</strong></p>
                <pre><code>0 manzana
    1 banana
    2 cereza
    </code></pre>
                
                <h2>Iterando sobre Diccionarios</h2>
                <p>Puedes iterar sobre las claves, valores o ambos en un diccionario.</p>
                <h3>Iterar sobre Claves</h3>
                <pre><code class="language-python">persona = {"nombre": "Ana", "edad": 30, "ciudad": "Madrid"}
    
    for clave in persona:
        print(clave)
    </code></pre>
                <p><strong>Salida:</strong></p>
                <pre><code>nombre
    edad
    ciudad
    </code></pre>
                <h3>Iterar sobre Valores</h3>
                <pre><code class="language-python">for valor in persona.values():
        print(valor)
    </code></pre>
                <p><strong>Salida:</strong></p>
                <pre><code>Ana
    30
    Madrid
    </code></pre>
                <h3>Iterar sobre Claves y Valores</h3>
                <pre><code class="language-python">for clave, valor in persona.items():
        print(f"{clave}: {valor}")
    </code></pre>
                <p><strong>Salida:</strong></p>
                <pre><code>nombre: Ana
    edad: 30
    ciudad: Madrid
    </code></pre>
                
                <h2>Comprensión de Listas (List Comprehensions)</h2>
                <p>Las comprensiones de listas ofrecen una forma concisa de crear listas a partir de iterables existentes.</p>
                <h3>Ejemplo</h3>
                <pre><code class="language-python"># Lista de cuadrados de números del 0 al 9
    cuadrados = [x**2 for x in range(10)]
    print(cuadrados)
    </code></pre>
                <p><strong>Salida:</strong></p>
                <pre><code>[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
    </code></pre>
                <p>Puedes agregar condiciones:</p>
                <pre><code class="language-python"># Números pares entre 0 y 20
    pares = [x for x in range(21) if x % 2 == 0]
    print(pares)
    </code></pre>
                <p><strong>Salida:</strong></p>
                <pre><code>[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
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
                <p>¡Intenta resolver estos ejercicios para poner en práctica lo aprendido sobre bucles en Python!</p>
                
                <h2>Conclusión</h2>
                <p>Los bucles son una herramienta esencial en Python que te permiten automatizar tareas repetitivas y procesar colecciones de datos de manera eficiente. Comprender cómo utilizar los bucles <code>for</code> y <code>while</code>, así como las sentencias <code>break</code> y <code>continue</code>, es fundamental para convertirte en un programador competente.</p>
        
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
            python3 camel.py
            camelCase: name
            snake_case: name
        
            python3 camel.py
            camelCase: firstName
            snake_case: first_name
        
            python3 camel.py
            camelCase: preferredFirstName
            snake_case: preferred_first_name
            </code></pre>
        
                    <h4>Solución Implementada:</h4>
        
                    <!-- Example 1: Using a while loop -->
                    <pre><code class="language-python"># camel-a.py
        def main():
            s = input("camelCase: ")
            print("snake_case: ", end="")
            r = ""
            i = 0
            while i < len(s):  # Recorremos cada posición en la cadena
                if s[i].isupper():  # Si el carácter es una letra mayúscula
                    r += "_" + s[i].lower()
                else:
                    r += s[i]
                i += 1
            print(r)
        
        main()
            </code></pre>
        
                    <!-- Example 2: Using a for loop with range -->
                    <pre><code class="language-python"># camel-b.py
        def main():
            s = input("camelCase: ")
            print("snake_case: ", end="")
            r = ""
            for i in range(len(s)):
                if s[i].isupper():
                    r += "_" + s[i].lower()
                else:
                    r += s[i]
            print(r)
        
        main()
            </code></pre>
        
                    <!-- Example 3: Using a for-each loop -->
                    <pre><code class="language-python"># camel-c.py
        def main():
            s = input("camelCase: ")
            print("snake_case: ", end="")
            r = ""
            for c in s:
                if c.isupper():
                    r += "_" + c.lower()
                else:
                    r += c
            print(r)
        
        main()
            </code></pre>
        
                    <!-- Example 4: Printing directly without building a result string -->
                    <pre><code class="language-python"># camel-d.py
        def main():
            s = input("camelCase: ")
            print("snake_case: ", end="")
            for c in s:
                if c.isupper():
                    print("_" + c.lower(), end="")
                else:
                    print(c, end="")
            print()  # Imprimir nueva línea al final
        
        main()
            </code></pre>
        
                    <h4>Ejercicio para Practicar:</h4>
                    <p>Implementa una versión del programa que maneje múltiples mayúsculas consecutivas y evita agregar múltiples guiones bajos. Por ejemplo:</p>
                    <pre><code>
            python3 camel.py
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
            python3 coke.py
            Amount Due: 50
            Insert Coin: 25
            Amount Due: 25
            Insert Coin: 25
            Change Owed: 0
        
            python3 coke.py
            Amount Due: 50
            Insert Coin: 25
            Amount Due: 25
            Insert Coin: 10
            Amount Due: 15
            Insert Coin: 25
            Change Owed: 10
        
            python3 coke.py
            Amount Due: 50
            Insert Coin: 5
            Amount Due: 45
            Insert Coin: 30
            Amount Due: 45
            Insert Coin: 25
            Amount Due: 20
            Insert Coin: 25
            Change Owed: 5
        
            python3 coke.py
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
                    <pre><code class="language-python"># coke-a.py
        def main():
            due = 50
            accepted_coins = [25, 10, 5]
            while due > 0:
                print(f"Amount Due: {due}")
                coin = int(input("Insert Coin: "))
                if coin in accepted_coins:
                    due -= coin
            print(f"Change Owed: {abs(due)}")
        
        main()
            </code></pre>
        
                    <!-- Example 2: Using an infinite loop and breaking when condition is met -->
                    <pre><code class="language-python"># coke-b.py
        def main():
            due = 50
            accepted_coins = [25, 10, 5]
            while True:
                print(f"Amount Due: {due}")
                coin = int(input("Insert Coin: "))
                if coin in accepted_coins:
                    due -= coin
                    if due <= 0:
                        break
            print(f"Change Owed: {abs(due)}")
        
        main()
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
                    <pre><code class="language-python"># pattern.py
        def main():
            for i in range(1, 6):
                for j in range(i):
                    print("*", end="")
                print()  # Nueva línea después de cada fila
        
        main()
            </code></pre>
        
                    <h4>Explicación:</h4>
                    <p>El bucle externo controla el número de filas, mientras que el bucle interno imprime el número de asteriscos correspondiente a la fila actual.</p>
        
                    <h2>Conclusión</h2>
                    <p>Estos ejemplos prácticos demuestran cómo utilizar bucles en diferentes contextos para resolver problemas comunes. Practicar con estos y otros ejemplos te ayudará a consolidar tu comprensión de los bucles en Python.</p>
                `
            },
            // ... other pages ...


            comprehensions: {
                title: "List Comprehensions",
                content: `
                    <p>List comprehensions provide a concise way to create lists.</p>
                    <h2>Basic Example</h2>
                    <pre><code class="language-python">
    # Traditional way
    squares = []
    for x in range(10):
        squares.append(x**2)
    
    # Using list comprehension
    squares = [x**2 for x in range(10)]
                    </code></pre>
                    <h2>With Conditions</h2>
                    <pre><code class="language-python">
    # Even numbers between 0 and 20
    even_numbers = [x for x in range(21) if x % 2 == 0]
                    </code></pre>
                `
            },
            functions: {
                title: "Functions in Python",
                content: `
                    <p>Functions are blocks of code that perform a specific task and can be reused.</p>
                    <h2>Defining a Function</h2>
                    <pre><code class="language-python">
    def greet():
        print("Hello, World!")
    
    greet()  # Calling the function
                    </code></pre>
                    <h2>Functions with Parameters</h2>
                    <pre><code class="language-python">
    def greet(name):
        print(f"Hello, {name}!")
    
    greet("Alice")
                    </code></pre>
                    <h2>Returning Values</h2>
                    <pre><code class="language-python">
    def add(a, b):
        return a + b
    
    result = add(5, 3)
    print(result)  # Output: 8
                    </code></pre>
                    <h2>Default Parameters</h2>
                    <pre><code class="language-python">
    def greet(name="Guest"):
        print(f"Hello, {name}!")
    
    greet()           # Output: Hello, Guest!
    greet("Bob")      # Output: Hello, Bob!
                    </code></pre>
                `
            },
            modules: {
                title: "Using Modules",
                content: `
                    <p>Modules are files containing Python definitions and statements. They can be imported to provide functionality to your program.</p>
                    <h2>Importing a Module</h2>
                    <pre><code class="language-python">
    import math
    
    print(math.pi)           # Output: 3.141592653589793
    print(math.sqrt(16))     # Output: 4.0
                    </code></pre>
                    <h2>Importing Specific Functions</h2>
                    <pre><code class="language-python">
    from math import sqrt, pi
    
    print(pi)          # Output: 3.141592653589793
    print(sqrt(25))    # Output: 5.0
                    </code></pre>
                    <h2>Aliasing Modules</h2>
                    <pre><code class="language-python">
    import numpy as np
    
    array = np.array([1, 2, 3])
    print(array)
                    </code></pre>
                `
            },
            imports: {
                title: "Importing Modules",
                content: `
                    <p>You can import your own modules or modules from the Python Standard Library.</p>
                    <h2>Creating a Module</h2>
                    <p>Create a file named <code>mymodule.py</code> with the following content:</p>
                    <pre><code class="language-python">
    def greeting(name):
        print(f"Hello, {name}")
                    </code></pre>
                    <h2>Importing Your Module</h2>
                    <pre><code class="language-python">
    import mymodule
    
    mymodule.greeting("Alice")
                    </code></pre>
                `
            },
            methodes: {
                title: "String Methods in Python",
                content: `
                    <p>Python provides a variety of built-in string methods that allow you to manipulate and check the contents of strings. These methods can be used to analyze strings, modify them, and control program flow based on string characteristics.</p>
            
                    <h2>1. <code>isupper()</code></h2>
                    <p><strong>Description:</strong> Returns <code>True</code> if all characters in the string are uppercase letters and there is at least one character in the string. Otherwise, it returns <code>False</code>.</p>
                    <h3>Examples:</h3>
                    <pre><code class="language-python">print("HELLO".isupper())  # True
            print("Hello".isupper())  # False
            print("123".isupper())    # False</code></pre>
            
                    <p><strong>Edge Case:</strong> Empty strings or strings without alphabetic characters (like numbers or symbols) will return <code>False</code> because there are no uppercase letters.</p>
            
                    <h3>Use Case:</h3>
                    <p>You can use <code>isupper()</code> to validate if a string meets specific format requirements, like checking if a username or password is in uppercase.</p>
            
                    <h2>2. <code>islower()</code></h2>
                    <p><strong>Description:</strong> Returns <code>True</code> if all characters in the string are lowercase letters and there is at least one character in the string. Otherwise, it returns <code>False</code>.</p>
                    <h3>Examples:</h3>
                    <pre><code class="language-python">print("hello".islower())  # True
            print("Hello".islower())  # False</code></pre>
            
                    <p><strong>Edge Case:</strong> Strings that only contain non-alphabetic characters like numbers or symbols will return <code>False</code>, as there are no lowercase letters.</p>
            
                    <h3>Use Case:</h3>
                    <p>Use <code>islower()</code> when you need to ensure all characters in a string are lowercase, like for case-insensitive comparison or text normalization.</p>
            
                    <h2>3. <code>istitle()</code></h2>
                    <p><strong>Description:</strong> Returns <code>True</code> if the string is title-cased, meaning that the first character of each word is an uppercase letter and all other characters are lowercase.</p>
                    <h3>Examples:</h3>
                    <pre><code class="language-python">print("Hello World".istitle())  # True
            print("hello world".istitle())    # False</code></pre>
            
                    <p><strong>Edge Case:</strong> Strings with numbers, symbols, or acronyms (like "NASA" or "123") are not considered title-cased and will return <code>False</code>.</p>
            
                    <h3>Use Case:</h3>
                    <p>Use <code>istitle()</code> when working with titles, headlines, or names that need to follow a title-case format (e.g., proper names in documents).</p>
            
                    <h2>4. <code>isdigit()</code></h2>
                    <p><strong>Description:</strong> Returns <code>True</code> if all characters in the string are digits (0-9). If there is any non-digit character, it returns <code>False</code>.</p>
                    <h3>Examples:</h3>
                    <pre><code class="language-python">print("123".isdigit())      # True
            print("123abc".isdigit())   # False</code></pre>
            
                    <p><strong>Edge Case:</strong> Strings containing decimal points, negative signs, or spaces will return <code>False</code>, as they are not considered digits.</p>
            
                    <h3>Use Case:</h3>
                    <p>Use <code>isdigit()</code> for input validation when expecting numeric values, such as checking if a user inputted only numbers.</p>
            
                    <h2>5. <code>isalpha()</code></h2>
                    <p><strong>Description:</strong> Returns <code>True</code> if all characters in the string are alphabetic (A-Z or a-z). It returns <code>False</code> if the string contains any numbers or special characters.</p>
                    <h3>Examples:</h3>
                    <pre><code class="language-python">print("Hello".isalpha())    # True
            print("Hello123".isalpha())  # False</code></pre>
            
                    <p><strong>Edge Case:</strong> Empty strings or strings with spaces or punctuation (like "Hello!") return <code>False</code> because they contain non-alphabetic characters.</p>
            
                    <h3>Use Case:</h3>
                    <p><code>isalpha()</code> can be used for input validation in fields where only letters are allowed, such as a person's name.</p>
            
                    <h2>6. <code>isalnum()</code></h2>
                    <p><strong>Description:</strong> Returns <code>True</code> if all characters in the string are alphanumeric (letters or numbers), and <code>False</code> otherwise.</p>
                    <h3>Examples:</h3>
                    <pre><code class="language-python">print("Hello123".isalnum())   # True
            print("Hello 123!".isalnum())  # False</code></pre>
            
                    <p><strong>Edge Case:</strong> Strings with spaces or special characters (even punctuation) will return <code>False</code>.</p>
            
                    <h3>Use Case:</h3>
                    <p>Use <code>isalnum()</code> when you need to validate usernames, passwords, or other identifiers that must consist of only letters and digits.</p>
            
                    <h2>7. <code>isspace()</code></h2>
                    <p><strong>Description:</strong> Returns <code>True</code> if all characters in the string are whitespace characters (spaces, tabs, newlines), and <code>False</code> otherwise.</p>
                    <h3>Examples:</h3>
                    <pre><code class="language-python">print("   ".isspace())     # True
            print("Hello World".isspace())  # False</code></pre>
            
                    <p><strong>Edge Case:</strong> Strings with non-whitespace characters (like letters or symbols) will return <code>False</code>, even if they contain spaces between the characters.</p>
            
                    <h3>Use Case:</h3>
                    <p><code>isspace()</code> is useful for cleaning up user input by detecting if a field was left blank or only filled with spaces.</p>
            
                    <h2>8. <code>startswith()</code></h2>
                    <p><strong>Description:</strong> Returns <code>True</code> if the string starts with the specified prefix, and <code>False</code> otherwise.</p>
                    <h3>Examples:</h3>
                    <pre><code class="language-python">print("Hello".startswith("He"))  # True
            print("Hello".startswith("he"))  # False</code></pre>
            
                    <p><strong>Edge Case:</strong> This method is case-sensitive, so <code>startswith("He")</code> will return <code>False</code> if the string starts with a lowercase "h".</p>
            
                    <h3>Use Case:</h3>
                    <p>Use <code>startswith()</code> to validate or filter strings based on their starting characters, such as filtering a list of filenames or URLs.</p>
            
                    <h2>9. <code>endswith()</code></h2>
                    <p><strong>Description:</strong> Returns <code>True</code> if the string ends with the specified suffix, and <code>False</code> otherwise.</p>
                    <h3>Examples:</h3>
                    <pre><code class="language-python">print("Hello".endswith("lo"))  # True
            print("Hello".endswith("L"))   # False</code></pre>
            
                    <p><strong>Edge Case:</strong> As with <code>startswith()</code>, this method is case-sensitive. Ensure the correct case is used when checking suffixes.</p>
            
                    <h3>Use Case:</h3>
                    <p>Use <code>endswith()</code> when checking file extensions (like <code>.txt</code> or <code>.csv</code>) or validating URLs.</p>
            
                    <h2>10. <code>isnumeric()</code></h2>
                    <p><strong>Description:</strong> Returns <code>True</code> if all characters in the string are numeric, and <code>False</code> otherwise. This method is similar to <code>isdigit()</code>, but it can also handle characters like fractions and Roman numerals.</p>
                    <h3>Examples:</h3>
                    <pre><code class="language-python">print("123".isnumeric())      # True
            print("½".isnumeric())         # True
            print("Hello123".isnumeric())  # False</code></pre>
            
                    <p><strong>Edge Case:</strong> While <code>isnumeric()</code> can handle special characters like fractions, strings with letters or symbols will return <code>False</code>.</p>
            
                    <h3>Use Case:</h3>
                    <p><code>isnumeric()</code> can be used in cases where you expect complex numeric inputs, like fractions or currency values. It is useful for validating forms or ensuring correct data input.</p>
            
                    <h2>Combining String Methods in Conditional Logic</h2>
                    <p>You can combine multiple string methods to perform complex string validations and manipulations in your program. For example, you might want to check if a string contains only letters, digits, or special characters and act accordingly.</p>
                    <h3>Example Using Multiple Methods:</h3>
                    <pre><code class="language-python">s = "Hello123"
            
            if s.isalpha():
                print(f"{s} contains only letters.")
            elif s.isdigit():
                print(f"{s} contains only digits.")
            elif s.isalnum():
                print(f"{s} contains only letters and/or digits.")
            else:
                print(f"{s} contains a mix of letters, digits, and other characters.")</code></pre>
            
                    <h3>Use Case in Conditional Statements:</h3>
                    <p>These methods are often used in <code>if</code> statements for validation and control flow. For example, you might use them to check user input or control how text is processed.</p>
            
                    <h3>Example in a Real Program:</h3>
                    <pre><code class="language-python">user_input = input("Enter a string: ")
            
            if user_input.islower():
                print("The string is in lowercase.")
            elif user_input.isupper():
                print("The string is in uppercase.")
            else:
                print("The string has mixed case.")</code></pre>
            
                    <h2>Conclusion</h2>
                    <p>Understanding and using Python's built-in string methods allows you to perform powerful string manipulation and validation. Whether you're formatting user input, checking for certain conditions in strings, or transforming data, these methods provide a robust set of tools for working with text in Python.</p>
                `
            },
            
            
            lists: {
                title: "Lists in Python",
                content: `
                    <p>Lists in Python are ordered, mutable collections of items, allowing you to store multiple values in a single variable. Lists can hold items of any data type, and they are one of the most versatile and commonly used data structures in Python.</p>
                    
                    <h2>Creating a List</h2>
                    <p>To create a list, you can place a comma-separated sequence of values inside square brackets.</p>
                    <pre><code class="language-python">fruits = ["apple", "banana", "cherry"]
            print(fruits)    # Output: ['apple', 'banana', 'cherry']</code></pre>
                    
                    <h3>List with Mixed Data Types</h3>
                    <p>A list can contain elements of different data types, including other lists:</p>
                    <pre><code class="language-python">mixed_list = [1, "hello", 3.14, [1, 2, 3]]
            print(mixed_list)    # Output: [1, 'hello', 3.14, [1, 2, 3]]</code></pre>
                    
                    <h2>Accessing List Items</h2>
                    <p>You can access list items using indexing, where the first item has an index of <code>0</code>. You can also use negative indexing to access elements from the end of the list.</p>
                    <pre><code class="language-python"># Accessing items with positive index
            print(fruits[0])    # Output: apple
            
            # Accessing items with negative index
            print(fruits[-1])   # Output: cherry</code></pre>
            
                    <h3>Slicing a List</h3>
                    <p>Python allows you to access a range of items in a list using slicing. The slicing syntax is <code>list[start:stop]</code>, where <code>start</code> is inclusive and <code>stop</code> is exclusive.</p>
                    <pre><code class="language-python"># Get the first two elements
            print(fruits[0:2])   # Output: ['apple', 'banana']
            
            # Get all elements from the second element onwards
            print(fruits[1:])    # Output: ['banana', 'cherry']</code></pre>
            
                    <h2>Modifying List Items</h2>
                    <p>Because lists are mutable, you can change their contents by assigning a new value to an index or a range of indices.</p>
                    <pre><code class="language-python">fruits[1] = "blueberry"
            print(fruits)    # Output: ['apple', 'blueberry', 'cherry']</code></pre>
                    
                    <h3>Modifying a Range of Items</h3>
                    <p>You can also modify multiple items at once by assigning new values to a slice:</p>
                    <pre><code class="language-python">fruits[0:2] = ["kiwi", "mango"]
            print(fruits)    # Output: ['kiwi', 'mango', 'cherry']</code></pre>
                    
                    <h2>Adding Items to a List</h2>
                    <p>You can add new items to a list using the <code>append()</code> or <code>insert()</code> methods.</p>
                    <h3><code>append()</code> Method</h3>
                    <p>This method adds an item to the end of the list.</p>
                    <pre><code class="language-python">fruits.append("orange")
            print(fruits)    # Output: ['kiwi', 'mango', 'cherry', 'orange']</code></pre>
            
                    <h3><code>insert()</code> Method</h3>
                    <p>This method inserts an item at a specified position.</p>
                    <pre><code class="language-python">fruits.insert(1, "banana")
            print(fruits)    # Output: ['kiwi', 'banana', 'mango', 'cherry', 'orange']</code></pre>
                    
                    <h2>Removing Items from a List</h2>
                    <h3><code>remove()</code> Method</h3>
                    <p>This method removes the first occurrence of the specified item from the list.</p>
                    <pre><code class="language-python">fruits.remove("kiwi")
            print(fruits)    # Output: ['banana', 'mango', 'cherry', 'orange']</code></pre>
                    
                    <h3><code>pop()</code> Method</h3>
                    <p>This method removes and returns the item at the specified position. If no index is provided, it removes the last item by default.</p>
                    <pre><code class="language-python">last_item = fruits.pop()
            print(last_item)    # Output: orange
            print(fruits)       # Output: ['banana', 'mango', 'cherry']</code></pre>
                    
                    <h2>Common List Methods</h2>
                    <ul>
                        <li><code>append()</code>: Adds an item to the end of the list.</li>
                        <li><code>insert()</code>: Inserts an item at a given position.</li>
                        <li><code>remove()</code>: Removes the first item with the specified value.</li>
                        <li><code>pop()</code>: Removes the item at the specified position and returns it.</li>
                        <li><code>extend()</code>: Adds all items from another list to the current list.</li>
                        <li><code>index()</code>: Returns the index of the first item with the specified value.</li>
                        <li><code>count()</code>: Returns the number of occurrences of a value in the list.</li>
                        <li><code>sort()</code>: Sorts the list in ascending order.</li>
                        <li><code>reverse()</code>: Reverses the order of the list.</li>
                        <li><code>clear()</code>: Removes all items from the list.</li>
                    </ul>
                    <pre><code class="language-python"># Example of multiple list methods
            fruits.extend(["grape", "watermelon"])
            print(fruits)    # Output: ['banana', 'mango', 'cherry', 'grape', 'watermelon']
            
            # Sorting and reversing the list
            fruits.sort()
            print(fruits)    # Output: ['banana', 'cherry', 'grape', 'mango', 'watermelon']
            
            fruits.reverse()
            print(fruits)    # Output: ['watermelon', 'mango', 'grape', 'cherry', 'banana']</code></pre>
                    
                    <h2>Iterating Over Lists</h2>
                    <p>You can use loops to iterate through the items of a list. The most common loop used for this is the <code>for</code> loop.</p>
                    <h3>Example of Iterating Over a List</h3>
                    <pre><code class="language-python">for fruit in fruits:
                print(fruit)</code></pre>
                    <p><strong>Output:</strong></p>
                    <pre><code>watermelon
            mango
            grape
            cherry
            banana</code></pre>
                    
                    <h2>List Comprehensions</h2>
                    <p>List comprehensions provide a concise way to create lists by using a <code>for</code> loop inside square brackets. You can also add conditions to filter the items.</p>
                    <h3>Example of List Comprehension</h3>
                    <pre><code class="language-python"># Create a list of squares from 1 to 5
            squares = [x**2 for x in range(1, 6)]
            print(squares)    # Output: [1, 4, 9, 16, 25]</code></pre>
            
                    <h2>Advanced List Features</h2>
                    <h3>Nested Lists</h3>
                    <p>You can create lists within lists, which are known as nested lists. These are useful for representing complex data structures such as matrices.</p>
                    <pre><code class="language-python">matrix = [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
            ]
            
            # Accessing elements in a nested list
            print(matrix[1][1])    # Output: 5</code></pre>
                    
                    <h3>Copying Lists</h3>
                    <p>When you assign a list to a new variable, both variables refer to the same list in memory. To create a copy of a list, you can use the <code>copy()</code> method or slicing.</p>
                    <pre><code class="language-python"># Creating a copy of a list
            new_list = fruits.copy()
            # or
            new_list = fruits[:]</code></pre>
                    
                    <h2>Exercises</h2>
                    <ol>
                        <li>Create a list of your favorite movies and print the list in reverse order.</li>
                        <li>Write a program that finds the largest and smallest numbers in a list of integers.</li>
                        <li>Create a nested list to represent a 3x3 tic-tac-toe board and print it row by row.</li>
                        <li>Use a list comprehension to generate a list of even numbers between 1 and 20.</li>
                    </ol>
                    
                    <h2>Conclusion</h2>
                    <p>Lists are one of the most powerful data structures in Python, providing flexibility and efficiency. Understanding how to create, modify, and use lists is fundamental for working with data in Python.</p>
                `
            }
            ,
            tuples: {
                title: "Tuples in Python",
                content: `
                    <p>Tuples are ordered, immutable collections of items.</p>
                    <h2>Creating a Tuple</h2>
                    <pre><code class="language-python">
    my_tuple = ("apple", "banana", "cherry")
    print(my_tuple)
                    </code></pre>
                    <h2>Accessing Tuple Items</h2>
                    <pre><code class="language-python">
    print(my_tuple[0])    # Output: apple
    print(my_tuple[-1])   # Output: cherry
                    </code></pre>
                    <h2>Immutability</h2>
                    <p>Tuples cannot be changed after they are created:</p>
                    <pre><code class="language-python">
    # This will raise an error
    my_tuple[1] = "blueberry"
                    </code></pre>
                `
            },
            Diccionarios: {
                title: "Diccionarios en Python",
                content: `
                    <p>En Python, los diccionarios son estructuras de datos que permiten almacenar colecciones de elementos en formato de pares clave-valor. Esto significa que cada elemento en el diccionario tiene una clave única, y a cada clave se le asigna un valor. Los diccionarios son desordenados, lo que significa que no mantienen un orden específico de los elementos, y son mutables, lo que significa que puedes agregar, eliminar o modificar sus elementos después de crearlos.</p>
                    
                    <h2>Creando un Diccionario</h2>
                    <p>Para crear un diccionario en Python, se utiliza un par de llaves <code>{}</code> donde se incluyen los pares clave-valor separados por comas. Cada clave debe ser única y puede ser de cualquier tipo inmutable, como cadenas, números o tuplas. Los valores pueden ser de cualquier tipo de datos, incluyendo listas, otros diccionarios o cualquier tipo de objeto.</p>
                    <pre><code class="language-python">
    persona = {
        "nombre": "Alicia",
        "edad": 25,
        "ciudad": "Nueva York"
    }
    print(persona)
                    </code></pre>
                    <p>En este ejemplo, hemos creado un diccionario llamado <code>persona</code> con tres pares clave-valor. Las claves son "nombre", "edad" y "ciudad", y sus respectivos valores son "Alicia", 25, y "Nueva York". Puedes imprimir el diccionario completo usando la función <code>print()</code>.</p>
                    
                    <h2>Accediendo a Elementos</h2>
                    <p>Para acceder a los elementos de un diccionario, puedes usar las claves dentro de corchetes <code>[]</code> o el método <code>get()</code>. Si utilizas corchetes y la clave no existe, Python lanzará un error <code>KeyError</code>. En cambio, el método <code>get()</code> no dará error si la clave no se encuentra; en su lugar, devolverá <code>None</code> o un valor por defecto que puedes especificar.</p>
                    <pre><code class="language-python">
    print(persona["nombre"])     # Salida: Alicia
    print(persona.get("edad"))   # Salida: 25
    print(persona.get("email", "No disponible"))  # Salida: No disponible
                    </code></pre>
                    <p>En el primer ejemplo, estamos accediendo al valor asociado con la clave "nombre", que es "Alicia". En el segundo ejemplo, utilizamos el método <code>get()</code> para acceder al valor de la clave "edad". En el tercer ejemplo, intentamos obtener el valor de la clave "email", que no existe en el diccionario, por lo que <code>get()</code> devuelve "No disponible".</p>
                    
                    <h2>Modificando Elementos</h2>
                    <p>Los diccionarios son mutables, lo que significa que puedes cambiar sus valores una vez que los has creado. Para modificar un valor existente, simplemente asigna un nuevo valor a la clave correspondiente. También puedes agregar nuevas claves al diccionario de la misma manera.</p>
                    <pre><code class="language-python">
    persona["edad"] = 26  # Modificar el valor de "edad"
    persona["email"] = "alicia@ejemplo.com"  # Agregar una nueva clave "email"
    print(persona)
                    </code></pre>
                    <p>En este ejemplo, cambiamos el valor de la clave "edad" a 26 y agregamos una nueva clave "email" con el valor "alicia@ejemplo.com". Cuando imprimimos el diccionario nuevamente, vemos que se ha actualizado con los nuevos valores.</p>
                    
                    <h2>Métodos de Diccionarios</h2>
                    <p>Python ofrece varios métodos útiles para trabajar con diccionarios. A continuación, describimos algunos de los más comunes:</p>
                    <ul>
                        <li><code>keys()</code>: Devuelve una lista de todas las claves del diccionario.</li>
                        <li><code>values()</code>: Devuelve una lista de todos los valores del diccionario.</li>
                        <li><code>items()</code>: Devuelve una lista de pares clave-valor, donde cada elemento es una tupla que contiene una clave y su valor correspondiente.</li>
                    </ul>
                    <pre><code class="language-python">
    print(persona.keys())   # Salida: dict_keys(['nombre', 'edad', 'ciudad', 'email'])
    print(persona.values()) # Salida: dict_values(['Alicia', 26, 'Nueva York', 'alicia@ejemplo.com'])
    print(persona.items())  # Salida: dict_items([('nombre', 'Alicia'), ('edad', 26), ('ciudad', 'Nueva York'), ('email', 'alicia@ejemplo.com')])
                    </code></pre>
                    <p>En este ejemplo, <code>keys()</code> devuelve una vista de todas las claves del diccionario, <code>values()</code> devuelve una vista de todos los valores, y <code>items()</code> devuelve una lista de tuplas que contienen cada par clave-valor del diccionario.</p>

                    <h2>Conclusión</h2>
                    <p>Los diccionarios en Python son una estructura de datos poderosa que te permite organizar y gestionar información de forma eficiente mediante pares clave-valor. Son útiles para muchos casos en los que necesitas asociar valores con identificadores únicos. Con las técnicas descritas, puedes crear, acceder y modificar diccionarios fácilmente, además de utilizar métodos útiles para obtener claves, valores y pares clave-valor.</p>
                `
            }
,
            sets: {
                title: "Sets in Python",
                content: `
                    <p>Sets are unordered collections of unique elements.</p>
                    <h2>Creating a Set</h2>
                    <pre><code class="language-python">
    my_set = {1, 2, 3, 4, 5}
    print(my_set)
                    </code></pre>
                    <h2>Adding and Removing Items</h2>
                    <pre><code class="language-python">
    my_set.add(6)
    my_set.discard(2)
    print(my_set)
                    </code></pre>
                    <h2>Set Operations</h2>
                    <ul>
                        <li><code>union()</code>: Returns a set containing all items from both sets.</li>
                        <li><code>intersection()</code>: Returns a set containing only items present in both sets.</li>
                        <li><code>difference()</code>: Returns a set containing items in the first set but not in the second.</li>
                    </ul>
                    <pre><code class="language-python">
    set_a = {1, 2, 3}
    set_b = {3, 4, 5}
    
    print(set_a.union(set_b))          # {1, 2, 3, 4, 5}
    print(set_a.intersection(set_b))   # {3}
    print(set_a.difference(set_b))     # {1, 2}
                    </code></pre>
                `
            },
            oop: {
                title: "Introduction to Object-Oriented Programming",
                content: `
                    <p>Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects" that contain data and methods.</p>
                    <h2>Key Concepts</h2>
                    <ul>
                        <li><b>Class</b>: A blueprint for creating objects.</li>
                        <li><b>Object</b>: An instance of a class.</li>
                        <li><b>Method</b>: A function defined in a class.</li>
                        <li><b>Attribute</b>: A variable bound to an object or class.</li>
                    </ul>
                `
            },
            classes: {
                title: "Classes and Objects",
                content: `
                    <p>In Python, classes are defined using the <code>class</code> keyword.</p>
                    <h2>Defining a Class</h2>
                    <pre><code class="language-python">
    class Person:
        def __init__(self, name, age):
            self.name = name  # Attribute
            self.age = age    # Attribute
    
        def greet(self):
            print(f"Hello, my name is {self.name}.")
    
    # Creating an object
    person1 = Person("Alice", 25)
    person1.greet()  # Output: Hello, my name is Alice.
                    </code></pre>
                    <h2>The <code>__init__</code> Method</h2>
                    <p>The <code>__init__</code> method is the constructor that initializes the object's attributes.</p>
                `
            },
            inheritance: {
                title: "Inheritance",
                content: `
                    <p>Inheritance allows us to define a class that inherits all the methods and properties from another class.</p>
                    <h2>Base and Derived Classes</h2>
                    <pre><code class="language-python">
    class Animal:
        def __init__(self, name):
            self.name = name
    
        def speak(self):
            pass  # To be implemented by subclasses
    
    class Dog(Animal):
        def speak(self):
            return "Woof!"
    
    class Cat(Animal):
        def speak(self):
            return "Meow!"
    
    dog = Dog("Buddy")
    print(dog.speak())  # Output: Woof!
                    </code></pre>
                    <h2>Method Overriding</h2>
                    <p>Derived classes can override methods from the base class.</p>
                `
            },
            polymorphism: {
                title: "Polymorphism",
                content: `
                    <p>Polymorphism allows us to use a single interface to represent different data types.</p>
                    <h2>Example of Polymorphism</h2>
                    <pre><code class="language-python">
    class Shape:
        def area(self):
            pass
    
    class Rectangle(Shape):
        def __init__(self, width, height):
            self.width = width
            self.height = height
    
        def area(self):
            return self.width * self.height
    
    class Circle(Shape):
        def __init__(self, radius):
            self.radius = radius
    
        def area(self):
            import math
            return math.pi * self.radius ** 2
    
    shapes = [Rectangle(3, 4), Circle(5)]
    for shape in shapes:
        print(shape.area())
                    </code></pre>
                    <p>This will output the area of each shape, even though they are different types.</p>
                `
            },
        };
    

    // Cached DOM Elements
    const contentDiv = document.getElementById('content');
    const loadingSpinner = document.getElementById('loading-spinner');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const suggestionBox = document.getElementById('suggestion-box');
    const themeToggle = document.getElementById('theme-toggle');
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');

    /**
     * Displays the loading spinner.
     */
    const showLoading = () => {
        loadingSpinner.style.display = 'block';
    };

    /**
     * Hides the loading spinner.
     */
    const hideLoading = () => {
        loadingSpinner.style.display = 'none';
    };

    /**
     * Loads the specified page content.
     * @param {string} page - The page identifier.
     */
    const loadContent = (page) => {
        showLoading();
        contentDiv.classList.remove('show'); // Reset animation
    
        // Simulate content loading delay
        setTimeout(() => {
            if (pages[page]) {
                contentDiv.innerHTML = `
                    <h1>${pages[page].title}</h1>
                    ${pages[page].content}
                `;
    
                // Initialize syntax highlighting
                hljs.highlightAll();
    
            } else {
                contentDiv.innerHTML = '<h1>Page Not Found</h1><p>The page you are looking for does not exist.</p>';
            }
    
            // Trigger reflow to restart CSS animation
            void contentDiv.offsetWidth;
            contentDiv.classList.add('show'); // Fade-in effect
            hideLoading();
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
        }, 500); // Adjust the delay as needed
    };
    

    /**
     * Searches the content based on the query and displays the results.
     * @param {string} query - The search query.
     */
    const searchContent = (query) => {
        if (!query) return;
    
        showLoading();
        contentDiv.classList.remove('show'); // Reset animation
    
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
                    <h1>Search Results for "${escapeHtml(query)}"</h1>
                    ${searchResults.join('<hr>')}
                `;
            } else {
                contentDiv.innerHTML = `<h1>Search Results</h1><p>No matching content found for "${escapeHtml(query)}".</p>`;
            }
    
            // Initialize syntax highlighting
            hljs.highlightAll();
    
            // Trigger reflow to restart CSS animation
            void contentDiv.offsetWidth;
            contentDiv.classList.add('show'); // Fade-in effect
            hideLoading();
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
        }, 300); // Reduced delay for better responsiveness
    };
    

    /**
     * Escapes HTML to prevent XSS attacks.
     * @param {string} unsafe - The unsafe string.
     * @returns {string} - The escaped string.
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
     * Escapes special characters in a string for use in a regular expression.
     * @param {string} string - The input string.
     * @returns {string} - The escaped string.
     */
    const escapeRegExp = (string) => {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    };

    /**
     * Handles search suggestions based on the current query.
     * @param {string} query - The current input query.
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
     * Retrieves the page key based on the page title.
     * @param {string} title - The title of the page.
     * @returns {string|null} - The corresponding page key or null if not found.
     */
    const getPageKey = (title) => {
        return Object.keys(pages).find(key => pages[key].title === title) || null;
    };

    /**
     * Toggles the dark mode theme.
     */
    const toggleDarkMode = () => {
        const isDarkMode = document.body.classList.toggle('dark-mode');

        // Change icon based on mode
        const themeToggleIcon = themeToggle.querySelector('i');
        if (themeToggleIcon) {
            themeToggleIcon.classList.toggle('fa-moon', !isDarkMode);
            themeToggleIcon.classList.toggle('fa-sun', isDarkMode);
        }

        // Persist user preference
        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    };

    /**
     * Initializes the theme based on user preference stored in localStorage.
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
     * Closes the suggestion box.
     */
    const closeSuggestionBox = () => {
        suggestionBox.innerHTML = '';
        suggestionBox.classList.remove('active');
    };

    /**
     * Handles navigation link clicks using event delegation.
     * @param {Event} event - The click event.
     */
    const handleNavLinkClick = (event) => {
        const target = event.target.closest('a');
        if (target && target.dataset.target) {
            event.preventDefault();
            const page = target.dataset.target;
            loadContent(page);
            closeSuggestionBox();
            searchInput.value = '';
            // Close nav-links on mobile after selection
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    };

    /**
     * Handles suggestion item clicks using event delegation.
     * @param {Event} event - The click event.
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
     * Debounces a function by the specified delay.
     * @param {Function} func - The function to debounce.
     * @param {number} delay - The debounce delay in milliseconds.
     * @returns {Function} - The debounced function.
     */
    const debounce = (func, delay) => {
        let debounceTimer;
        return function(...args) {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(this, args), delay);
        };
    };

    /**
     * Initializes all event listeners.
     */
    const initializeEventListeners = () => {
        // Navigation Links Click
        navLinks.addEventListener('click', handleNavLinkClick);

        // Search Button Click
        searchButton.addEventListener('click', () => {
            const query = searchInput.value.trim();
            if (query) {
                searchContent(query);
            }
        });

        // Enter Key in Search Input
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                searchButton.click();
            }
        });

        // Input Event for Search Suggestions with Debounce
        searchInput.addEventListener('input', debounce((e) => {
            const query = e.target.value.trim().toLowerCase();
            handleSearchSuggestions(query);
        }, 300));

        // Suggestion Box Click (Event Delegation)
        suggestionBox.addEventListener('click', handleSuggestionClick);

        // Theme Toggle Button Click
        themeToggle.addEventListener('click', toggleDarkMode);

        // Click Outside to Close Suggestion Box
        document.addEventListener('click', (e) => {
            if (!document.querySelector('.search-bar').contains(e.target)) {
                closeSuggestionBox();
            }
        });

        // Dropdown Button Clicks
        const dropdownButtons = document.querySelectorAll('.dropdown-btn');
        const dropdownContainers = document.querySelectorAll('.dropdown-container');
    
        dropdownButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent event from bubbling up to the document
                // Toggle active class
                button.classList.toggle('active');
    
                // Toggle the display of the dropdown container
                const dropdown = button.nextElementSibling;
                if (dropdown.style.display === "block") {
                    dropdown.style.display = "none";
                } else {
                    dropdown.style.display = "block";
                }
            });
        });
    
        // Close dropdowns when clicking outside
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
        // Toggle All Dropdowns
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
        

        // Hamburger Menu Toggle
        if (hamburger) {
            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                hamburger.classList.toggle('active');
            });
        }
    };

    /**
     * Initializes the application.
     */
    const initializeApp = () => {
        // Initialize theme based on user preference
        initializeTheme();

        // Set up event listeners
        initializeEventListeners();

        // Load default content after ensuring theme is applied
        loadContent('home');
    };

    // Initialize the application when DOM is fully loaded
    document.addEventListener('DOMContentLoaded', initializeApp);
})();
