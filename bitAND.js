function getMaxLessThanK(n,k){
    return ((k | k -1) > n ? k-2 : k-1)
 /*   let max = 0;
    // a [1,n-1]
    for (let a =1 ; a<n;a++){
        //b[a+1,n]
        for(let b=a+1; b<=n ; b++){
            var bitAnd = a & b;
            if(bitAnd < k && max < bitAnd){
                max = bitAnd;
            }
        }
    }
   return max;
*/
}

function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(n, k));
    }
}
