// Sample IEC 61131-3 Instruction List (IL) code
// This demonstrates basic ladder logic patterns

// Rung 1: Simple AND gate (Y1 = X1 AND X2)
LD X1        // Load X1 (start first branch)
AND X2       // AND with X2 (add to current branch)
ST Y1        // Store result in Y1

// Rung 2: OR with AND branch (Y2 = X2 OR (X3 AND NOT X4))
LD X2        // Load X2 (start first branch)
OR X3        // OR with X3 (start new branch)
ANDN X4      // AND NOT with X4 (add to current branch)
ST Y2        // Store result in Y2

// Rung 3: Complex OR logic (Y3 = X1 OR NOT X5 OR (X6 AND X7))
LD X1        // Load X1 (start first branch)
ORN X5       // OR NOT with X5 (start new branch)
OR X6        // OR with X6 (start new branch)
AND X7       // AND with X7 (add to current branch)
ST Y3        // Store result in Y3

// Rung 4: Multiple AND conditions (Y4 = X1 AND X2 AND X3 AND NOT X4)
LD X1        // Load X1
AND X2       // AND with X2
AND X3       // AND with X3
ANDN X4      // AND NOT with X4
ST Y4        // Store result in Y4
