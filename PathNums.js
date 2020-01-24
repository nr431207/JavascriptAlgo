// Calculating how many paths a binary tree has to a given target number

const pathNums = (root, target) => {
  if(!root) return 0;
  const hasPath = (node, sum) => {
    let res = 0;
    if(!ndoe) return res;
    if(node.val === sum) res ++;
    return hasPath(node.left, sum - node.val) + hasPath(node.right, sum - node.val);
  }

  return hasPath(root, target) + pathNums(root.left, target) + pathNums(root.right, target);
}