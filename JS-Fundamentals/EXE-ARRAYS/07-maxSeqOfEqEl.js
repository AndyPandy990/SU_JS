function maxSeqOfEqEl(arr) {

        let seq = 1;
        let maxSeq = 0;
        let maxSeqNum = 0;

        for (let i = 0; i < arr.length; i++) {
            
            if (i !== 0) {
                let currNum = Number(arr[i]);
                let prevNum = Number(arr[i - 1]);

                if (currNum === prevNum) {
                    seq++;

                    if (seq > maxSeq) {
                        maxSeq = seq;
                        maxSeqNum = currNum;
                    }
                } else {
                    seq = 1;
                }
            }
        }
        console.log(`${(maxSeqNum+" ").repeat(maxSeq)}`);
}
maxSeqOfEqEl([2, 1, 1, 2, 3, 3, 2, 2, 2, 1] );