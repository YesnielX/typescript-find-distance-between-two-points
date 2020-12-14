/*
 * find the distance between two points
 */

export class find_distance {
  private p1: Array<number>;
  private p2: Array<number>;
  constructor(p1: Array<number>, p2: Array<number>) {
    this.p1 = p1;
    this.p2 = p2;
  }

  distance() {
    // Form √ ( x2 - x1 ) + (y2 - y1)

    console.log("Points ", this.p1, this.p2);
    console.log();

    // Step 1 - Calc ( x2 - x1 ) + (y2 - y1)

    // ( p2[0] - p1[0] ) + (p2[1] - p1[1])
    let p1 = this.p2[0] - this.p1[0];
    let p2 = this.p2[1] - this.p1[1];
    console.log(`Result of subtraction from point 1: ${p1}`);
    console.log(`Result of subtraction from point 2: ${p2}`);
    console.log();

    // Step 2 - Get the result of the number raised to 2

    let point_result_pow_1 = Math.pow(p1, 2);
    let point_result_pow_2 = Math.pow(p2, 2);
    console.log(`Point 1 Pow Result: ${point_result_pow_1}`);
    console.log(`Point 2 Pow Result: ${point_result_pow_2}`);
    console.log("Sum Pow Result:", point_result_pow_1 + point_result_pow_2);
    console.log();

    // Step 3 - Get Square Root

    return Math.sqrt(point_result_pow_1 + point_result_pow_2);
  }
}
