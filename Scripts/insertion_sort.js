/* 
Name:         Roger Silva Santos Aguiar
Function:     Insertion Sort algorithm implementation.
Initial date: January 19, 2021
Last update:  January 20, 2021 
*/

var size_of_the_array = parseInt(prompt("Enter the size of the array"), 10);
var lowest_number = parseInt(prompt("Enter the lowest number"), 10);
var highest_number = parseInt(prompt("Enter the highest number"), 10);
var new_array = generate_array(size_of_the_array, lowest_number, highest_number);

document.write("Initial array: " );
display_array(new_array);
//new_array.sort(function(a, b){return a - b});
run_insertion_sort_asc(new_array);
document.write("<br />Sorted array in ascending order:" );
display_array(new_array);
run_insertion_sort_desc(new_array);
document.write("<br />Sorted array in descending order: " );
display_array(new_array);

function generate_array(size_of_the_array, lowest_number, highest_number)
{
    var new_array = [];

    for(var i = 0; i < size_of_the_array; i++)
    {
        new_array[i] = Math.floor(Math.random() * highest_number) + lowest_number;
    }

    return new_array;
}

function run_insertion_sort_asc(my_array)
{   
    for(var i = 1; i < my_array.length; i++)
    {
        var aux;
        var key = my_array[i];

        for(var j = i - 1; j >= 0; j--)
        {
            if(my_array[j] > key)
            {
                aux = my_array[j];
                my_array[j] = key;
                my_array[j + 1] = aux;
            }           
        }        
    }
}

function run_insertion_sort_desc(my_array)
{   
    for(var i = 1; i < my_array.length; i++)
    {
        var aux;
        var key = my_array[i];

        for(var j = i - 1; j >= 0; j--)
        {
            if(my_array[j] < key)
            {
                aux = my_array[j];
                my_array[j] = key;
                my_array[j + 1] = aux;
            }           
        }        
    }
}

function display_array(my_array)
{    
    for (var number in my_array)
    {
        document.write(my_array[number] + "\t");
    }
    document.write("<br />")
}