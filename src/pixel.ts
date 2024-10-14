/**
 * # Part 4) Pixel
 * Do this file last. If you haven't started yet, go back to person.ts.
 *
 * 4.1. Create a class named `Pixel` that has three private number fields: `red`, `green`, and `blue`.
 * 4.2. Create a Pixel constructor that takes in three parameters (red, green, blue) and assigns them to the appropriate fields.
 *      If any of the parameters are less than 0, set the field to 0. If any of the parameters are greater than 255, set the field to 255.
 * 4.3. Create a Pixel method named `update` that consumes three number parameters (red, green, blue) and sets the fields to the new values.
 *      If any of the parameters are less than 0, set the field to 0. If any of the parameters are greater than 255, set the field to 255.
 *      **PROTIP**: Define a helper function (or method) that takes in a number and returns the number if it is between 0 and 255, or 0 if it is
 *                  less than 0, or 255 if it is greater than 255. Use this function in the constructor and `update` method.
 *                  It'll all be useful for 4.5 and 4.6!
 * 4.4. Create a Pixel method named `getRGB` that returns the string representation of the pixel in the
 *      format "rgb(R, G, B)", where the letters are replaced with the appropriate numbers. Don't forget to
 *      look at the test cases if you need to get an idea of what this looks like!
 * 4.5. Create a Pixel method named `makeGrayscale` that averages the red, green, and blue values and
 *      sets all three fields to the average. So, for instance, the average of (10, 20, 30) is 20, so all three
 *      fields would be set to 20.
 * 4.6. Create a Pixel method named `invert` that subtracts the red, green, and blue values from 255
 *      and sets the fields to the new values. So, for instance, if the red value is 10, the green value is 20, and
 *      the blue value is 30, then the new values would be 245, 235, and 225.
 * 4.7. Create a function named `invertPixels` that takes in a 2D array of Pixels and inverts each pixel.
 *      This should not return anything, but should modify the original array using the `invert` method.
 */

export class Pixel {
    withinBounds(num: number): number {
        if (num < 0) {
            return 0;
        } else if (num > 255) {
            return 255;
        }
        return num;
    }
    constructor(
        private red: number,
        private green: number,
        private blue: number,
    ) {
        this.red = this.withinBounds(red);
        this.green = this.withinBounds(green);
        this.blue = this.withinBounds(blue);
    }

    /*Create a Pixel method named `update` that consumes three number parameters (red, green, blue) and sets the fields to the new values.
     *      If any of the parameters are less than 0, set the field to 0. If any of the parameters are greater than 255, set the field to 255.
     *      **PROTIP**: Define a helper function (or method) that takes in a number and returns the number if it is between 0 and 255, or 0 if it is
     *                  less than 0, or 255 if it is greater than 255. Use this function in the constructor and `update` method.
     *                  It'll all be useful for 4.5 and 4.6!
     * */

    update(newRed: number, newGreen: number, newBlue: number): void {
        this.red = this.withinBounds(newRed);
        this.green = this.withinBounds(newGreen);
        this.blue = this.withinBounds(newBlue);
    }
    /*
    Create a Pixel method named `getRGB` that returns the string representation of the pixel in the
 *      format "rgb(R, G, B)", where the letters are replaced with the appropriate numbers. Don't forget to
 *      look at the test cases if you need to get an idea of what this looks like!
 * */
    getRGB(): string {
        return "rgb(" + this.red + ", " + this.green + ", " + this.blue + ")";
    }
    /*
     * 4.5. Create a Pixel method named `makeGrayscale` that averages the red, green, and blue values and
     *      sets all three fields to the average. So, for instance, the average of (10, 20, 30) is 20, so all three
     *      fields would be set to 20.
     * */
    makeGrayscale(): void {
        let average: number = (this.red + this.green + this.blue) / 3;
        this.red = average;
        this.green = average;
        this.blue = average;
    }
    /*
    Create a Pixel method named `invert` that subtracts the red, green, and blue values from 255
 *      and sets the fields to the new values. So, for instance, if the red value is 10, the green value is 20, and
 *      the blue value is 30, then the new values would be 245, 235, and 225.
 * */
    invert(): void {
        this.red = 255 - this.red;
        this.green = 255 - this.green;
        this.blue = 255 - this.blue;
    }

    /*
    Create a function named `invertPixels` that takes in a 2D array of Pixels and inverts each pixel.
 *      This should not return anything, but should modify the original array using the `invert` method.
    */
}

/**
 * Invert all the pixels of a 2D array of Pixels.
 * @param pixels 2D array of Pixels
 * @modifies pixels
 */
export function invertPixels(pixels: Pixel[][]): void {
    for (let i = 0; i < pixels.length; i++) {
        for (let j = 0; j < pixels[0].length; j++) {
            pixels[i][j].invert();
        }
    }
}
