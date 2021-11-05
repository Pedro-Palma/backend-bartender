import { Request, Response } from "express"
import { arraySchema } from "../schemas/arrays";
import Arrays from "../models/arrays"

export const getVassels = async (req: Request, res: Response) => {
    try {
        //Validate parameters
        const { error, value } = arraySchema.validate(req.body);
      if (
        error
      )
        return res
          .status(400)
          .json(error['details'][0]['message']);


        const { id, it } = req.body;
        // Find array with id
        const arrays = await Arrays.query().findById(id)
        // Validate if the array with that id exists
        if (!arrays) return res.status(500).json({ message: "No existing arrays with that Id" })
        //Estract vassels
        let a0: number[] = []
        let arr = arrays.input_array.split(',');
        arr.forEach(element => {
            a0.push(parseFloat(element));
        });
        // Sort the array descending 
        a0 = a0.sort(function (a, b) { return b - a })
        // Generate prime number
        const primes = generatePrimes(arr.length ** 2) || []
        let aq: number[] = []
        let bq: number[] = []
        let answer: number[] = []
        // Divide and add to answer
        for (let i = 0; i <= it - 1; i++) {
            a0.forEach(el => {
                if (el % primes[i] > 0) {
                    if (!aq.includes(el)) {
                        aq.push(el)
                    }
                }
                if (el % primes[i] == 0) {
                    if (!bq.includes(el)) {
                        let del = a0.indexOf(el)
                        bq = []
                        bq.push(el)
                        answer.push(el)
                        if (del !== -1) {
                            aq.splice(del, 1)
                        }
                        let del1 = a0.indexOf(el)

                        if (del1 !== -1) {
                            bq.splice(del1, 1)
                        }
                    }
                }

            })
            a0 = aq


        }
        // Add the A to answer
        answer = answer.concat(aq)

        return res.status(200).json({ answer})
    } catch (err) {
        return res.status(500).json(err)
    }
}





//function for generate prime numbers

function generatePrimes(n: number) {
    if (n >= 2) {
        let primes = [];
        let testP = [];

        for (let i = 1; i <= n + 1; ++i) {
            testP.push(true);
        }

        for (let i = 2; i <= n; ++i) {
            if (testP[i]) {
                primes.push(i);

                for (let j = 1; j * i <= n; ++j) {
                    testP[i * j] = false;
                }
            }
        }

        return primes;
    }
}
