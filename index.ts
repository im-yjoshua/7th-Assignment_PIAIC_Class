{
  console.log("Assignment No. 7");

  {
      console.log('Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.');

      function ValueAdder(array:any[], index: number, value: any): any[] {
          array.splice(index, 0, value)
          return array
      }

      let numbers: number[] = [1,2,4]
      console.log(ValueAdder(numbers, 2, 3));
      }

  // ======================================================================================================

    {
      console.log(
        "Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation"
      );

      function ShoppingCart(array: string[], task: number, value?: any, updatevalue?: any): any {
          if (task === 1) {
              // // User will have to enter 1 in orfer to add items from the array
              array.splice(array.length, 0, value)

          } else if (task === 2) {
              // // User will have to enter 2 in orfer to remove items from the array
              array.splice(array.indexOf(value), 1)

          } else if (task === 3) {
              // // User will have to enter 3 in orfer to update items from the array
              array.splice(array.indexOf(value), 1, updatevalue)

          } else {
              // // error handling here.
              return 'Something went wrong. Please provide correct task (1-3)'
          }
          return array

      }

      let shoppingList: string[] = ['shirt', 'pant'];
      console.log(ShoppingCart(shoppingList, 1, 'joggers', 'shoes'));

    }

  // ======================================================================================================

    {
      console.log('Write a program that uses a while loop to print the first 25 integers.');

      let index: number = 0;

       while (index <= 25) {
          console.log(index);
          index++;
       }
    }

  // ======================================================================================================

    {
      console.log("Write a program that uses a while loop to print the first 10 even numbers.");

      let index: number = 0;
      while (index < 20) {
          if (index % 2 === 0) {
              console.log(index);
          }
          index++
      }
    }

  // ======================================================================================================
    {
      console.log(
        "Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number."
      );

      function Factorial(number: number): any {
        if (number > 0) {
          let factorial = 1;
          let index = 1;

          while (index <= number) {
            factorial *= index;
            index++;
          }
          return factorial;
        } else {
          return "Please enter a positive integer.";
        }
      }

      console.log(Factorial(10));
    }

  // ======================================================================================================
    {
      console.log(
        "Write a program having an array of numbers if the number is negative it should remove the negative number from the array."
      );

      function NegativeIntegerRemover(array: number[]): any {
        // let index = 0;
        //  while (index <= array.length) {
        // if (array[index] < 0) {
        // array.splice(index, 1)
        let neww = array.filter((num) => num >= 0);
        return neww;
        // }
        // index++
        // }
      }

      let numbers: number[] = [2, -4, 32, -3, -3, -32];
      console.log(NegativeIntegerRemover(numbers));
    }

  // ======================================================================================================
    {
      console.log(
        "Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array."
      );

      function ArrayAccumulator(array:number[]): number {
          let index: number = 0;
          let summation: number = 0;

          while (index < array.length) {
              summation += array[index]
              index++
          }
          return summation
      }

      let array: number[] = [2, 4, 4]

      console.log(`Sum of [${array}] is => ${ArrayAccumulator(array)}`)
    }

  // ======================================================================================================
  {
    console.log(
      "Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature."
    );

    function TemperatureConverter(listOfTemps:number[]): any {
        let index = 0;
        let temperatureConverter = 0
        let array: number[] = [];
        while (index < listOfTemps.length) {
            temperatureConverter = (listOfTemps[index] * 9/5) + 32
            index++
            array.push(temperatureConverter)
        }
        return array
    }

    let temperatureList: number[] = [37, 40] //// in Celsius
    console.log(TemperatureConverter(temperatureList));
  }

  // ======================================================================================================
{
  console.log('Write a program to remove all the odd numbers from an array.');

  function OddNumberRemover(array:number[]): any {
    let index = 0

    while (index < array.length) {
        if (array[index] % 2 !== 0) {
            array.splice(index, 1)
        }
        index++
    }
    return array
  }

  let array = [1,2,3,4,5,6]
  console.log(OddNumberRemover(array))
  
  }
}
