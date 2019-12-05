# Ejercicio comisaría Angular

## sumaObjetos

    This function adds all the numbers inside an object and posible objects inside the main object

	const objSum = {a:1, b: {c:2, d:5, e: {f:9, g:6}}}	// result: 23

## Pyramid

    /**  
     * Pyramid  
     *  
     * Write a function that accepts a positive number N.  
     * The function should print a pyramid shape  
     * with N levels using the # character.  
     *  
     * Examples:  
     * pyramid(1) = '#'  
     *  
     * pyramid(2) = ' # '  
     *              '###'  
     *  
     * pyramid(3) = '  #  '  
     *              ' ### '  
     *              '#####'  
     */function pyramid(n) {}

## mapFilterReduce

    Varias transformaciones mediante map, filter y reduce

	Realiza las siguientes transformaciones utilizando map

	-   [8, 12, 20] -> [4, 6, 10]

	-   [1, 7, 50] -> [“1”, “7”, “50”]

	-   [-2, 5, 15, -7, -8] -> [“-”, “+”, “+”, “-”, “-”]

	-   [{name: “Alberto”}, {name: “Fran”}]  -> [“Alberto”, ”Fran”]

	-   [“lorem ipsum dolor”, “hello world”]  -> [“lid”, “hw”]

	-   [[1, 2], [34, 20, 5], [11], [2, 4]]  -> [3, 59, 11, 6]


	Realiza las siguientes transformaciones utilizando filter

	Dado un array de números

	-   Conserva los números impares

	Dado un array de objetos
	-   Conserva los objetos que tengan una propiedad important:true



	Utiliza reduce para

	-   Calcular la resta de todos los números de un array

	-   Concatenar todas las strings de un array

	-   Calcular la suma de todos los números de un array (excepto los negativos)

	-   Encontrar el máximo de un array de números


## ejerciciosRegexp

    /**
    
    * This exercise is a compilation of several RegExp
    
    */
    
    // 1) Extract the number from a given string
    // 2) Verify if the given string is an email
    // 3) Extract all the words between "" in a given string

##	Deep Clone

    Crea una función que reciba un objeto y devuelva una copia recursiva de
    ese objeto. Si contiene descendientes de tipo objeto (o array) estos
    deben ser copias también.

##	Chunk

    /**  
     * Array Chunk  
     *  
     * For given array and chunk size, divide the array into many subarrays  
     * where each subarray is of length chunk size.  
     *  
     * Examples:  
     * chunk([1, 2, 3, 4], 2) === [[ 1, 2], [3, 4]]  
     * chunk([1, 2, 3, 4, 5], 2) === [[ 1, 2], [3, 4], [5]]  
     * chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) === [[ 1, 2, 3], [4, 5, 6], [7, 8]]  
     * chunk([1, 2, 3, 4, 5], 4) === [[ 1, 2, 3, 4], [5]]  
     * chunk([1, 2, 3, 4, 5], 10) === [[ 1, 2, 3, 4, 5]]  
     */function chunk(array, size) {}

##	promesasSWAPI

    -   Busca las 5 primeras personas en la API [https://swapi.co/](https://swapi.co/)
        
    -   Imprime un array con los nombres de esas personas y calcula la media de estatura

##	Pokemon API

    -   Crea un text input y un botón con HTML
        
    -   En el input se pueden escribir nombres de Pokemon
        
    -   Al pulsar el botón, busca el Pokemon en la API [https://pokeapi.co/](https://pokeapi.co/)
        
    -   Añade en la página todas las imágenes del Pokemon en cuestión en las que no esté de espaldas

##	Menú interactivo

       Crea una clase Option
    
    -   Option debe recibir un texto y una función
        
    -   Método render(): crea un elemento <li> con el texto. Ejecuta la función al ser pulsado
        
    -   Método remove()
        
    
    Crea una clase Menu que contiene un array de Objetos Option
    
    -   Método Build que crea un ul (tambien lo puedes poner en el constructor)
        
    -   Método addOption(text, func): crea y renderiza una nueva opción
        
    -   Método removeOption(index): quita la opción número index



    Partiendo del ejercicio anterior
    
    Vamos a habilitar el control del menú mediante el teclado
    
    -   Siempre debe haber una opción seleccionada (background-color diferente)
        
    -   Con el teclado podemos cambiar la opción seleccionada
        
    -   Si llegamos al final del menú, la opción seleccionada vuelve a ser la primera
        
    -   Si pulsamos enter, se ejecuta la función de la opción seleccionada

## squareAnimation

replica está animación con animaciones CSS **[https://s3-us-west-2.amazonaws.com/s.cdpn.io/455884/CSSTransitionsAnimations-04.mov.gif](https://s3-us-west-2.amazonaws.com/s.cdpn.io/455884/CSSTransitionsAnimations-04.mov.gif)**


## containersOOP

https://drive.google.com/file/d/1it5LbR3pEE_M6eecKUqdAPbpAMIDwd1i/view?usp=sharing
