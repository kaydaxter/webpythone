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
            <h4>Ejemplo de <code>break</h4>
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
            <h4>Ejemplo de <code>continue</h4>
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
        comprehensions: {
            title: "Comprensiones de Listas",
            content: `
                <p>Las comprensiones de listas proporcionan una forma concisa de crear listas.</p>
                <h2>Ejemplo Básico</h2>
                <pre><code class="language-python">
        # Forma tradicional
        cuadrados = []
        for x in range(10):
            cuadrados.append(x**2)
        
        # Usando comprensión de listas
        cuadrados = [x**2 for x in range(10)]
                </code></pre>
                <h2>Con Condiciones</h2>
                <pre><code class="language-python">
        # Números pares entre 0 y 20
        numeros_pares = [x for x in range(21) if x % 2 == 0]
                </code></pre>
            `
        },
        functions: {
            title: "Funciones en Python",
            content: `
                <p>Las funciones son bloques de código que realizan una tarea específica y pueden ser reutilizadas.</p>
                <h2>Definiendo una Función</h2>
                <pre><code class="language-python">
        def saludar():
            print("¡Hola, Mundo!")
        
        saludar()  # Llamando a la función
                </code></pre>
                <h2>Funciones con Parámetros</h2>
                <pre><code class="language-python">
        def saludar(nombre):
            print(f"¡Hola, {nombre}!")
        
        saludar("Alicia")
                </code></pre>
                <h2>Devolviendo Valores</h2>
                <pre><code class="language-python">
        def sumar(a, b):
            return a + b
        
        resultado = sumar(5, 3)
        print(resultado)  # Salida: 8
                </code></pre>
                <h2>Parámetros por Defecto</h2>
                <pre><code class="language-python">
        def saludar(nombre="Invitado"):
            print(f"¡Hola, {nombre}!")
        
        saludar()           # Salida: ¡Hola, Invitado!
        saludar("Bob")      # Salida: ¡Hola, Bob!
                </code></pre>
            `
        },
        modules: {
            title: "Usando Módulos",
            content: `
                <p>Los módulos son archivos que contienen definiciones y declaraciones de Python. Pueden ser importados para proporcionar funcionalidad a tu programa.</p>
                <h2>Importando un Módulo</h2>
                <pre><code class="language-python">
        import math
        
        print(math.pi)           # Salida: 3.141592653589793
        print(math.sqrt(16))     # Salida: 4.0
                </code></pre>
                <h2>Importando Funciones Específicas</h2>
                <pre><code class="language-python">
        from math import sqrt, pi
        
        print(pi)          # Salida: 3.141592653589793
        print(sqrt(25))    # Salida: 5.0
                </code></pre>
                <h2>Alias para Módulos</h2>
                <pre><code class="language-python">
        import numpy as np
        
        array = np.array([1, 2, 3])
        print(array)
                </code></pre>
            `
        },
        imports: {
            title: "Importando Módulos",
            content: `
                <p>Puedes importar tus propios módulos o módulos de la Biblioteca Estándar de Python.</p>
                <h2>Creando un Módulo</h2>
                <p>Crea un archivo llamado <code>mimodulo.py</code> con el siguiente contenido:</p>
                <pre><code class="language-python">
        def saludo(nombre):
            print(f"Hola, {nombre}")
                </code></pre>
                <h2>Importando Tu Módulo</h2>
                <pre><code class="language-python">
        import mimodulo
        
        mimodulo.saludo("Alicia")
                </code></pre>
            `
        },
        methodes: {
            title: "Métodos de Cadenas en Python",
            content: `
                <p>Python proporciona una variedad de métodos de cadena integrados que te permiten manipular y verificar el contenido de las cadenas. Estos métodos se pueden usar para analizar cadenas, modificarlas y controlar el flujo del programa según las características de las cadenas.</p>
        
                <h2>1. <code>isupper()</code></h2>
                <p><strong>Descripción:</strong> Devuelve <code>True</code> si todos los caracteres de la cadena son letras mayúsculas y hay al menos un carácter en la cadena. De lo contrario, devuelve <code>False</code>.</p>
                <h3>Ejemplos:</h3>
                <pre><code class="language-python">print("HOLA".isupper())  # True
        print("Hola".isupper())  # False
        print("123".isupper())    # False</code></pre>
        
                <p><strong>Casos Especiales:</strong> Las cadenas vacías o las cadenas sin caracteres alfabéticos (como números o símbolos) devolverán <code>False</code> porque no hay letras mayúsculas.</p>
        
                <h3>Casos de Uso:</h3>
                <p>Puedes usar <code>isupper()</code> para validar si una cadena cumple con requisitos de formato específicos, como verificar si un nombre de usuario o una contraseña están en mayúsculas.</p>
        
                <h2>2. <code>islower()</code></h2>
                <p><strong>Descripción:</strong> Devuelve <code>True</code> si todos los caracteres de la cadena son letras minúsculas y hay al menos un carácter en la cadena. De lo contrario, devuelve <code>False</code>.</p>
                <h3>Ejemplos:</h3>
                <pre><code class="language-python">print("hola".islower())  # True
        print("Hola".islower())  # False</code></pre>
        
                <p><strong>Casos Especiales:</strong> Las cadenas que solo contienen caracteres no alfabéticos como números o símbolos devolverán <code>False</code>, ya que no hay letras minúsculas.</p>
        
                <h3>Casos de Uso:</h3>
                <p>Usa <code>islower()</code> cuando necesites asegurarte de que todos los caracteres de una cadena estén en minúsculas, como para comparación insensible a mayúsculas o normalización de texto.</p>
        
                <h2>3. <code>istitle()</code></h2>
                <p><strong>Descripción:</strong> Devuelve <code>True</code> si la cadena está en formato de título, lo que significa que el primer carácter de cada palabra es una letra mayúscula y todos los demás caracteres son minúsculas.</p>
                <h3>Ejemplos:</h3>
                <pre><code class="language-python">print("Hola Mundo".istitle())  # True
        print("hola mundo".istitle())    # False</code></pre>
        
                <p><strong>Casos Especiales:</strong> Las cadenas con números, símbolos o acrónimos (como "NASA" o "123") no se consideran en formato de título y devolverán <code>False</code>.</p>
        
                <h3>Casos de Uso:</h3>
                <p>Usa <code>istitle()</code> cuando trabajes con títulos, encabezados o nombres que deban seguir un formato de título (por ejemplo, nombres propios en documentos).</p>
        
                <h2>4. <code>isdigit()</code></h2>
                <p><strong>Descripción:</strong> Devuelve <code>True</code> si todos los caracteres de la cadena son dígitos (0-9). Si hay algún carácter que no sea un dígito, devuelve <code>False</code>.</p>
                <h3>Ejemplos:</h3>
                <pre><code class="language-python">print("123".isdigit())      # True
        print("123abc".isdigit())   # False</code></pre>
        
                <p><strong>Casos Especiales:</strong> Las cadenas que contienen puntos decimales, signos negativos o espacios devolverán <code>False</code>, ya que no se consideran dígitos.</p>
        
                <h3>Casos de Uso:</h3>
                <p>Usa <code>isdigit()</code> para la validación de entradas cuando esperes valores numéricos, como verificar si un usuario ingresó solo números.</p>
        
                <h2>5. <code>isalpha()</code></h2>
                <p><strong>Descripción:</strong> Devuelve <code>True</code> si todos los caracteres de la cadena son alfabéticos (A-Z o a-z). Devuelve <code>False</code> si la cadena contiene números o caracteres especiales.</p>
                <h3>Ejemplos:</h3>
                <pre><code class="language-python">print("Hola".isalpha())    # True
        print("Hola123".isalpha())  # False</code></pre>
        
                <p><strong>Casos Especiales:</strong> Las cadenas vacías o las cadenas con espacios o signos de puntuación (como "¡Hola!") devolverán <code>False</code> porque contienen caracteres no alfabéticos.</p>
        
                <h3>Casos de Uso:</h3>
                <p><code>isalpha()</code> se puede usar para la validación de entradas en campos donde solo se permiten letras, como el nombre de una persona.</p>
        
                <h2>6. <code>isalnum()</code></h2>
                <p><strong>Descripción:</strong> Devuelve <code>True</code> si todos los caracteres de la cadena son alfanuméricos (letras o números), y <code>False</code> de lo contrario.</p>
                <h3>Ejemplos:</h3>
                <pre><code class="language-python">print("Hola123".isalnum())   # True
        print("Hola 123!".isalnum())  # False</code></pre>
        
                <p><strong>Casos Especiales:</strong> Las cadenas con espacios o caracteres especiales (incluso signos de puntuación) devolverán <code>False</code>.</p>
        
                <h3>Casos de Uso:</h3>
                <p>Usa <code>isalnum()</code> cuando necesites validar nombres de usuario, contraseñas u otros identificadores que deben consistir solo en letras y dígitos.</p>
        
                <h2>7. <code>isspace()</code></h2>
                <p><strong>Descripción:</strong> Devuelve <code>True</code> si todos los caracteres de la cadena son caracteres de espacio en blanco (espacios, tabulaciones, saltos de línea), y <code>False</code> de lo contrario.</p>
                <h3>Ejemplos:</h3>
                <pre><code class="language-python">print("   ".isspace())     # True
        print("Hola Mundo".isspace())  # False</code></pre>
        
                <p><strong>Casos Especiales:</strong> Las cadenas con caracteres no espaciales (como letras o símbolos) devolverán <code>False</code>, incluso si contienen espacios entre los caracteres.</p>
        
                <h3>Casos de Uso:</h3>
                <p><code>isspace()</code> es útil para limpiar la entrada del usuario al detectar si un campo se dejó en blanco o solo se llenó con espacios.</p>
        
                <h2>8. <code>startswith()</code></h2>
                <p><strong>Descripción:</strong> Devuelve <code>True</code> si la cadena comienza con el prefijo especificado, y <code>False</code> de lo contrario.</p>
                <h3>Ejemplos:</h3>
                <pre><code class="language-python">print("Hola".startswith("Ho"))  # True
        print("Hola".startswith("ho"))  # False</code></pre>
        
                <p><strong>Casos Especiales:</strong> Este método distingue entre mayúsculas y minúsculas, por lo que <code>startswith("Ho")</code> devolverá <code>False</code> si la cadena comienza con una "h" minúscula.</p>
        
                <h3>Casos de Uso:</h3>
                <p>Usa <code>startswith()</code> para validar o filtrar cadenas según sus caracteres iniciales, como filtrar una lista de nombres de archivos o URL.</p>
        
                <h2>9. <code>endswith()</code></h2>
                <p><strong>Descripción:</strong> Devuelve <code>True</code> si la cadena termina con el sufijo especificado, y <code>False</code> de lo contrario.</p>
                <h3>Ejemplos:</h3>
                <pre><code class="language-python">print("Hola".endswith("la"))  # True
        print("Hola".endswith("L"))   # False</code></pre>
        
                <p><strong>Casos Especiales:</strong> Al igual que con <code>startswith()</code>, este método distingue entre mayúsculas y minúsculas. Asegúrate de usar el caso correcto al verificar sufijos.</p>
        
                <h3>Casos de Uso:</h3>
                <p>Usa <code>endswith()</code> al verificar extensiones de archivos (como <code>.txt</code> o <code>.csv</code>) o al validar URL.</p>
        
                <h2>10. <code>isnumeric()</code></h2>
                <p><strong>Descripción:</strong> Devuelve <code>True</code> si todos los caracteres de la cadena son numéricos, y <code>False</code> de lo contrario. Este método es similar a <code>isdigit()</code>, pero también puede manejar caracteres como fracciones y números romanos.</p>
                <h3>Ejemplos:</h3>
                <pre><code class="language-python">print("123".isnumeric())      # True
        print("½".isnumeric())         # True
        print("Hola123".isnumeric())  # False</code></pre>
        
                <p><strong>Casos Especiales:</strong> Aunque <code>isnumeric()</code> puede manejar caracteres especiales como fracciones, las cadenas con letras o símbolos devolverán <code>False</code>.</p>
        
                <h3>Casos de Uso:</h3>
                <p><code>isnumeric()</code> se puede usar en casos donde esperas entradas numéricas complejas, como fracciones o valores monetarios. Es útil para validar formularios o asegurar la entrada de datos correcta.</p>
        
                <h2>Combinando Métodos de Cadenas en Lógica Condicional</h2>
                <p>Puedes combinar múltiples métodos de cadena para realizar validaciones y manipulaciones complejas de cadenas en tu programa. Por ejemplo, es posible que desees verificar si una cadena contiene solo letras, dígitos o caracteres especiales y actuar en consecuencia.</p>
                <h3>Ejemplo Usando Múltiples Métodos:</h3>
                <pre><code class="language-python">s = "Hola123"
        
        if s.isalpha():
            print(f"{s} contiene solo letras.")
        elif s.isdigit():
            print(f"{s} contiene solo dígitos.")
        elif s.isalnum():
            print(f"{s} contiene solo letras y/o dígitos.")
        else:
            print(f"{s} contiene una mezcla de letras, dígitos y otros caracteres.")</code></pre>
        
                <h3>Casos de Uso en Sentencias Condicionales:</h3>
                <p>Estos métodos se utilizan a menudo en sentencias <code>if</code> para la validación y el control del flujo. Por ejemplo, puedes usarlos para verificar la entrada del usuario o controlar cómo se procesa el texto.</p>
        
                <h3>Ejemplo en un Programa Real:</h3>
                <pre><code class="language-python">entrada_usuario = input("Ingresa una cadena: ")
        
        if entrada_usuario.islower():
            print("La cadena está en minúsculas.")
        elif entrada_usuario.isupper():
            print("La cadena está en mayúsculas.")
        else:
            print("La cadena tiene mayúsculas y minúsculas.")</code></pre>
        
                <h2>Conclusión</h2>
                <p>Comprender y usar los métodos de cadena integrados de Python te permite realizar manipulaciones y validaciones de cadenas poderosas. Ya sea que estés formateando la entrada del usuario, verificando ciertas condiciones en las cadenas o transformando datos, estos métodos proporcionan un conjunto robusto de herramientas para trabajar con texto en Python.</p>
            `
        },
        
        
        lists: {
            title: "Listas en Python",
            content: `
                <p>Las listas en Python son colecciones ordenadas y mutables de elementos, lo que te permite almacenar múltiples valores en una sola variable. Las listas pueden contener elementos de cualquier tipo de datos y son una de las estructuras de datos más versátiles y comúnmente utilizadas en Python.</p>
                
                <h2>Creando una Lista</h2>
                <p>Para crear una lista, puedes colocar una secuencia de valores separados por comas dentro de corchetes.</p>
                <pre><code class="language-python">frutas = ["manzana", "banana", "cereza"]
        print(frutas)    # Salida: ['manzana', 'banana', 'cereza']</code></pre>
                
                <h3>Lista con Tipos de Datos Mixtos</h3>
                <p>Una lista puede contener elementos de diferentes tipos de datos, incluyendo otras listas:</p>
                <pre><code class="language-python">lista_mixta = [1, "hola", 3.14, [1, 2, 3]]
        print(lista_mixta)    # Salida: [1, 'hola', 3.14, [1, 2, 3]]</code></pre>
                
                <h2>Accediendo a Elementos de la Lista</h2>
                <p>Puedes acceder a los elementos de una lista utilizando índices, donde el primer elemento tiene un índice de <code>0</code>. También puedes usar índices negativos para acceder a elementos desde el final de la lista.</p>
                <pre><code class="language-python"># Accediendo a elementos con índice positivo
        print(frutas[0])    # Salida: manzana
        
        # Accediendo a elementos con índice negativo
        print(frutas[-1])   # Salida: cereza</code></pre>
    
                <h3>Rebanando una Lista</h3>
                <p>Python te permite acceder a un rango de elementos en una lista utilizando rebanado. La sintaxis de rebanado es <code>lista[inicio:fin]</code>, donde <code>inicio</code> es inclusivo y <code>fin</code> es exclusivo.</p>
                <pre><code class="language-python"># Obtener los dos primeros elementos
        print(frutas[0:2])   # Salida: ['manzana', 'banana']
        
        # Obtener todos los elementos desde el segundo elemento en adelante
        print(frutas[1:])    # Salida: ['banana', 'cereza']</code></pre>
    
                <h2>Modificando Elementos de la Lista</h2>
                <p>Debido a que las listas son mutables, puedes cambiar su contenido asignando un nuevo valor a un índice o a un rango de índices.</p>
                <pre><code class="language-python">frutas[1] = "arándano"
        print(frutas)    # Salida: ['manzana', 'arándano', 'cereza']</code></pre>
                
                <h3>Modificando un Rango de Elementos</h3>
                <p>También puedes modificar múltiples elementos a la vez asignando nuevos valores a una rebanada:</p>
                <pre><code class="language-python">frutas[0:2] = ["kiwi", "mango"]
        print(frutas)    # Salida: ['kiwi', 'mango', 'cereza']</code></pre>
                
                <h2>Agregando Elementos a una Lista</h2>
                <p>Puedes agregar nuevos elementos a una lista utilizando los métodos <code>append()</code> o <code>insert()</code>.</p>
                <h3>Método <code>append()</code></h3>
                <p>Este método agrega un elemento al final de la lista.</p>
                <pre><code class="language-python">frutas.append("naranja")
        print(frutas)    # Salida: ['kiwi', 'mango', 'cereza', 'naranja']</code></pre>
    
                <h3>Método <code>insert()</code></h3>
                <p>Este método inserta un elemento en una posición especificada.</p>
                <pre><code class="language-python">frutas.insert(1, "banana")
        print(frutas)    # Salida: ['kiwi', 'banana', 'mango', 'cereza', 'naranja']</code></pre>
                
                <h2>Eliminando Elementos de una Lista</h2>
                <h3>Método <code>remove()</code></h3>
                <p>Este método elimina la primera aparición del elemento especificado de la lista.</p>
                <pre><code class="language-python">frutas.remove("kiwi")
        print(frutas)    # Salida: ['banana', 'mango', 'cereza', 'naranja']</code></pre>
                
                <h3>Método <code>pop()</code></h3>
                <p>Este método elimina y devuelve el elemento en la posición especificada. Si no se proporciona un índice, elimina el último elemento por defecto.</p>
                <pre><code class="language-python">ultimo_elemento = frutas.pop()
        print(ultimo_elemento)    # Salida: naranja
        print(frutas)       # Salida: ['banana', 'mango', 'cereza']</code></pre>
                
                <h2>Métodos Comunes de Listas</h2>
                <ul>
                    <li><code>append()</code>: Agrega un elemento al final de la lista.</li>
                    <li><code>insert()</code>: Inserta un elemento en una posición dada.</li>
                    <li><code>remove()</code>: Elimina el primer elemento con el valor especificado.</li>
                    <li><code>pop()</code>: Elimina el elemento en la posición especificada y lo devuelve.</li>
                    <li><code>extend()</code>: Agrega todos los elementos de otra lista a la lista actual.</li>
                    <li><code>index()</code>: Devuelve el índice del primer elemento con el valor especificado.</li>
                    <li><code>count()</code>: Devuelve el número de apariciones de un valor en la lista.</li>
                    <li><code>sort()</code>: Ordena la lista en orden ascendente.</li>
                    <li><code>reverse()</code>: Invierte el orden de la lista.</li>
                    <li><code>clear()</code>: Elimina todos los elementos de la lista.</li>
                </ul>
                <pre><code class="language-python"># Ejemplo de múltiples métodos de lista
        frutas.extend(["uva", "sandía"])
        print(frutas)    # Salida: ['banana', 'mango', 'cereza', 'uva', 'sandía']
        
        # Ordenando e invirtiendo la lista
        frutas.sort()
        print(frutas)    # Salida: ['banana', 'cereza', 'mango', 'sandía', 'uva']
        
        frutas.reverse()
        print(frutas)    # Salida: ['uva', 'sandía', 'mango', 'cereza', 'banana']</code></pre>
                
                <h2>Iterando Sobre Listas</h2>
                <p>Puedes usar bucles para iterar a través de los elementos de una lista. El bucle más comúnmente utilizado para esto es el bucle <code>for</code>.</p>
                <h3>Ejemplo de Iteración Sobre una Lista</h3>
                <pre><code class="language-python">for fruta in frutas:
            print(fruta)</code></pre>
                <p><strong>Salida:</strong></p>
                <pre><code>uva
        sandía
        mango
        cereza
        banana</code></pre>
                
                <h2>Comprensiones de Listas</h2>
                <p>Las comprensiones de listas proporcionan una forma concisa de crear listas utilizando un bucle <code>for</code> dentro de corchetes. También puedes agregar condiciones para filtrar los elementos.</p>
                <h3>Ejemplo de Comprensión de Listas</h3>
                <pre><code class="language-python"># Crear una lista de cuadrados del 1 al 5
        cuadrados = [x**2 for x in range(1, 6)]
        print(cuadrados)    # Salida: [1, 4, 9, 16, 25]</code></pre>
    
                <h2>Características Avanzadas de Listas</h2>
                <h3>Listas Anidadas</h3>
                <p>Puedes crear listas dentro de listas, que se conocen como listas anidadas. Estas son útiles para representar estructuras de datos complejas como matrices.</p>
                <pre><code class="language-python">matriz = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ]
        
        # Accediendo a elementos en una lista anidada
        print(matriz[1][1])    # Salida: 5</code></pre>
                
                <h3>Copiando Listas</h3>
                <p>Cuando asignas una lista a una nueva variable, ambas variables se refieren a la misma lista en la memoria. Para crear una copia de una lista, puedes usar el método <code>copy()</code> o el rebanado.</p>
                <pre><code class="language-python"># Creando una copia de una lista
        nueva_lista = frutas.copy()
        # o
        nueva_lista = frutas[:]</code></pre>
                
                <h2>Ejercicios</h2>
                <ol>
                    <li>Crea una lista de tus películas favoritas e imprime la lista en orden inverso.</li>
                    <li>Escribe un programa que encuentre los números más grandes y más pequeños en una lista de enteros.</li>
                    <li>Crea una lista anidada para representar un tablero de tres en raya 3x3 e imprímelo fila por fila.</li>
                    <li>Usa una comprensión de listas para generar una lista de números pares entre 1 y 20.</li>
                </ol>
                
                <h2>Conclusión</h2>
                <p>Las listas son una de las estructuras de datos más poderosas en Python, proporcionando flexibilidad y eficiencia. Comprender cómo crear, modificar y usar listas es fundamental para trabajar con datos en Python.</p>
            `
        }
        ,
        tuples: {
            title: "Tuplas en Python",
            content: `
                <p>Las tuplas son colecciones ordenadas e inmutables de elementos.</p>
                <h2>Creando una Tupla</h2>
                <pre><code class="language-python">
        mi_tupla = ("manzana", "banana", "cereza")
        print(mi_tupla)
                </code></pre>
                <h2>Accediendo a Elementos de la Tupla</h2>
                <pre><code class="language-python">
        print(mi_tupla[0])    # Salida: manzana
        print(mi_tupla[-1])   # Salida: cereza
                </code></pre>
                <h2>Inmutabilidad</h2>
                <p>Las tuplas no se pueden cambiar después de ser creadas:</p>
                <pre><code class="language-python">
        # Esto generará un error
        mi_tupla[1] = "arándano"
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
            title: "Conjuntos en Python",
            content: `
                <p>Los conjuntos son colecciones desordenadas de elementos únicos.</p>
                <h2>Creando un Conjunto</h2>
                <pre><code class="language-python">
        mi_conjunto = {1, 2, 3, 4, 5}
        print(mi_conjunto)
                </code></pre>
                <h2>Agregando y Eliminando Elementos</h2>
                <pre><code class="language-python">
        mi_conjunto.add(6)
        mi_conjunto.discard(2)
        print(mi_conjunto)
                </code></pre>
                <h2>Operaciones de Conjuntos</h2>
                <ul>
                    <li><code>union()</code>: Devuelve un conjunto que contiene todos los elementos de ambos conjuntos.</li>
                    <li><code>intersection()</code>: Devuelve un conjunto que contiene solo los elementos presentes en ambos conjuntos.</li>
                    <li><code>difference()</code>: Devuelve un conjunto que contiene los elementos del primer conjunto pero no del segundo.</li>
                </ul>
                <pre><code class="language-python">
        conjunto_a = {1, 2, 3}
        conjunto_b = {3, 4, 5}
        
        print(conjunto_a.union(conjunto_b))          # {1, 2, 3, 4, 5}
        print(conjunto_a.intersection(conjunto_b))   # {3}
        print(conjunto_a.difference(conjunto_b))     # {1, 2}
                </code></pre>
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
                <p>En Python, las clases se definen utilizando la palabra clave <code>class</code>.</p>
                <h2>Definiendo una Clase</h2>
                <pre><code class="language-python">
        class Persona:
            def __init__(self, nombre, edad):
                self.nombre = nombre  # Atributo
                self.edad = edad    # Atributo
        
            def saludar(self):
                print(f"Hola, mi nombre es {self.nombre}.")
        
        # Creando un objeto
        persona1 = Persona("Alicia", 25)
        persona1.saludar()  # Salida: Hola, mi nombre es Alicia.
                </code></pre>
                <h2>El Método <code>__init__</code></h2>
                <p>El método <code>__init__</code> es el constructor que inicializa los atributos del objeto.</p>
            `
        },
        inheritance: {
            title: "Herencia",
            content: `
                <p>La herencia nos permite definir una clase que hereda todos los métodos y propiedades de otra clase.</p>
                <h2>Clases Base y Derivadas</h2>
                <pre><code class="language-python">
        class Animal:
            def __init__(self, nombre):
                self.nombre = nombre
        
            def hablar(self):
                pass  # Para ser implementado por las subclases
        
        class Perro(Animal):
            def hablar(self):
                return "¡Guau!"
        
        class Gato(Animal):
            def hablar(self):
                return "¡Miau!"
        
        perro = Perro("Buddy")
        print(perro.hablar())  # Salida: ¡Guau!
                </code></pre>
                <h2>Sobrescritura de Métodos</h2>
                <p>Las clases derivadas pueden sobrescribir métodos de la clase base.</p>
            `
        },
        polymorphism: {
            title: "Polimorfismo",
            content: `
                <p>El polimorfismo nos permite usar una sola interfaz para representar diferentes tipos de datos.</p>
                <h2>Ejemplo de Polimorfismo</h2>
                <pre><code class="language-python">
        class Forma:
            def area(self):
                pass
        
        class Rectangulo(Forma):
            def __init__(self, ancho, alto):
                self.ancho = ancho
                self.alto = alto
        
            def area(self):
                return self.ancho * self.alto
        
        class Circulo(Forma):
            def __init__(self, radio):
                self.radio = radio
        
            def area(self):
                import math
                return math.pi * self.radio ** 2
        
        formas = [Rectangulo(3, 4), Circulo(5)]
        for forma in formas:
            print(forma.area())
                </code></pre>
                <p>Esto imprimirá el área de cada forma, aunque sean de diferentes tipos.</p>
            `
        },
        decorators: {
            title: "Decoradores",
            content: `
                <p>Los decoradores son una forma de modificar el comportamiento de una función o método.</p>
                <h2>Ejemplo de Decorador</h2>
                <pre><code class="language-python">
        def mi_decorador(func):
            def envoltura():
                print("Algo antes de la función")
                func()
                print("Algo después de la función")
            return envoltura
        
        @mi_decorador
        def di_hola():
            print("¡Hola!")
        
        di_hola()
                </code></pre>
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
                <pre><code class="language-python">
        def mi_generador():
            yield 1
            yield 2
            yield 3
        
        for valor in mi_generador():
            print(valor)
                </code></pre>
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
                <pre><code class="language-python">
        with open('archivo.txt', 'r') as archivo:
            contenido = archivo.read()
            print(contenido)
                </code></pre>
                <p>Esto abrirá el archivo, leerá su contenido y luego lo cerrará automáticamente.</p>
            `
        },
        metaclasses: {
            title: "Metaclases",
            content: `
                <p>Las metaclases son clases de clases que definen cómo se comportan las clases.</p>
                <h2>Ejemplo de Metaclase</h2>
                <pre><code class="language-python">
        class MiMeta(type):
            def __new__(cls, nombre, bases, diccionario):
                print(f"Creando clase {nombre}")
                return super().__new__(cls, nombre, bases, diccionario)
        
        class MiClase(metaclass=MiMeta):
            pass
        
        instancia = MiClase()
                </code></pre>
                <p>Esto imprimirá:</p>
                <pre><code>
        Creando clase MiClase
                </code></pre>
            `
        },
        advanced_topics: {
            title: "Advanced Topics in Python",
            content: `
                <p>Welcome to the Advanced Topics section. Here, we will cover some of the more complex and powerful features of Python.</p>
                
                <h2>Decorators</h2>
                <p>Decorators are a powerful tool in Python that allows you to modify the behavior of a function or class. They are often used for logging, access control, memoization, and more.</p>
                <pre><code class="language-python">def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()</code></pre>
                <p>This will output:</p>
                <pre><code>Something is happening before the function is called.
Hello!
Something is happening after the function is called.</code></pre>
                
                <h2>Generators</h2>
                <p>Generators are a simple way of creating iterators. They allow you to declare a function that behaves like an iterator, i.e., it can be used in a for loop.</p>
                <pre><code class="language-python">def my_generator():
    yield 1
    yield 2
    yield 3

for value in my_generator():
    print(value)</code></pre>
                <p>This will output:</p>
                <pre><code>1
2
3</code></pre>
                
                <h2>Context Managers</h2>
                <p>Context managers allow you to allocate and release resources precisely when you want to. The most widely used example of context managers is the <code>with</code> statement.</p>
                <pre><code class="language-python">with open('file.txt', 'r') as file:
    content = file.read()
    print(content)</code></pre>
                <p>This will open the file, read its content, and then close the file automatically.</p>
                
                <h2>Metaclasses</h2>
                <p>Metaclasses are a way to create classes in Python. They are a more advanced and complex feature of Python, and are typically used in frameworks and libraries.</p>
                <pre><code class="language-python">class MyMeta(type):
    def __new__(cls, name, bases, dct):
        print(f"Creating class {name}")
        return super().__new__(cls, name, bases, dct)

class MyClass(metaclass=MyMeta):
    pass

instance = MyClass()</code></pre>
                <p>This will output:</p>
                <pre><code>Creating class MyClass</code></pre>
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
