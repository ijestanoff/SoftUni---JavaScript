function pipesInPool(input){
    let pool_volume = Number(input[0]);
    let debit_first_pipe = Number(input[1]);
    let debit_second_pipe = Number(input[2]);
    let worker_time = Number(input[3]);
    let pool_level = (debit_first_pipe + debit_second_pipe) * worker_time;
    let percent_first_pipe = (debit_first_pipe / (debit_first_pipe + debit_second_pipe)) * 100;
    let percent_pool = (pool_level / pool_volume) * 100;
    if (pool_volume >= pool_level)
        console.log(`The pool is ${percent_pool.toFixed(2)}% full. Pipe 1: ${percent_first_pipe.toFixed(2)}%. Pipe 2: ${(100 - percent_first_pipe).toFixed(2)}%.`);
    else
        console.log(`For ${worker_time.toFixed(2)} hours the pool overflows with ${(pool_level - pool_volume).toFixed(2)} liters.`);
}