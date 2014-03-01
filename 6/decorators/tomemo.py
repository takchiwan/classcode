
def rlcslength(s1,s2,i,j):
    if i>=len(s1)or j>=len(s2):
        return 0
    elif s1[i]==s2[j]:
        return 1+ rlcslength(s1,s2,i+1,j+1)
    else:
        return max(rlcslength(s1,s2,i+1,j),rlcslength(s1,s2,i,j+1)  )

