function solution(S) {
    let patches = 0;
    let i = 0;
    
    while (i < S.length) {
        if (S[i] === 'X') {
            
            patches++;
            i += 3; 
        } else {
            i++;
        }
    }
    
    return patches;
}
